import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { Subscription } from 'rxjs';
import * as CanvasJS from './canvasjs.min';
import { WebsocketService } from '../websocket.service';
import { ChatService } from '../chat.service';
import { WorldModel, Packet, FieldConfig } from '../../../proto/generated/WorldModel_pb';
import { Referee } from '../../../proto/generated/Referee_pb';
import * as config from '../../../../configs/field.json';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [WebsocketService, ChatService],
})

export class FieldComponent implements OnInit {
  @ViewChild('field', { static: true }) field;
  fieldContext: CanvasRenderingContext2D;
  canvas: any;
  width: any;
  height: any;
  w: number = window.innerWidth;
  h: number = window.innerHeight;
  currentTransform: any;
  subscription: Subscription;
  globalX: number;
  globalY: number;
  globalK: number;
  model: WorldModel.AsObject;
  fieldConfig: FieldConfig.AsObject;
  refereeCommand: Referee.AsObject;
  times: number[] = [];
  framerate: number;
  scale: number = 70;
  FW: number = 9;
  FH: number = 12;
  padding: number = 35;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.canvas = d3.select('canvas').call(
      d3
        .zoom()
        .scaleExtent([-2, 8])
        .on('zoom', () => this.zoom())
    );
    this.canvas = d3.select('canvas').on('click', () => this.clicked(event));
    this.fieldContext = this.field.nativeElement.getContext('2d');
    this.width = this.canvas.property('width');
    this.height = this.canvas.property('height');

    // Read json config
    this.alignment();

    this.chatService.messages.subscribe((msg) => {
      var m = Packet.deserializeBinary(msg).toObject();
      this.model = m.worldmodel;

      if (m.fieldconfig) {
        this.fieldConfig = m.fieldconfig;
        // console.log("Field Configs UPDATED");
      }
      if (m.refereecommandList.length > 0) {
        this.refereeCommand = m.refereecommandList[m.refereecommandList.length-1].referee;
      }
      this.drawField();
      requestAnimationFrame(() => this.fps());
    });
  }

  clicked(event) {
    const rect = this.field.nativeElement.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    let scaleX = this.width / rect.width; // relationship bitmap vs. element for X
    let scaleY = this.height / rect.height;

    const xP = x * scaleX;
    const yP = y * scaleY;

    console.log('x: ' + xP + ' y: ' + yP);
    this.findObject(xP, yP);
  }

  zoom() {
    this.currentTransform = d3.event.transform;
    this.globalX = this.currentTransform.x;
    this.globalY = this.currentTransform.y;
    this.globalK = this.currentTransform.k;
  }

  clear() {
    this.fieldContext.clearRect(0, 0, this.width, this.height);
  }

  fps() {
    const now = performance.now();
    while (this.times.length > 0 && this.times[0] < now - 1000) {
      this.times.shift();
    }
    this.times.push(now);
    this.framerate = this.times.length;

  }

  findObject(x, y) {
    // Our Robots
    for (var _i = 0; _i < this.model.ourrobotsMap.length; _i++) {
        let XR = this.model.ourrobotsMap[_i][1].location.x/1000;
        let YR = this.model.ourrobotsMap[_i][1].location.y/1000;
        XR = this.scale_x(XR) + this.padding;
        YR = this.scale_y(YR) + this.padding;
        let dist = Math.sqrt(Math.pow(y-XR, 2) + Math.pow(x-YR, 2));
        if (dist < 0.13*this.scale) {
          console.log("our : " + this.model.ourrobotsMap[_i][0]);
          break;
        }
    }
    
    // Opponents Robots
    for (var _i = 0; _i < this.model.opponentsMap.length; _i++) {
        let XR = this.model.opponentsMap[_i][1].location.x/1000;
        let YR = this.model.opponentsMap[_i][1].location.y/1000;
        XR = this.scale_x(XR) + this.padding;
        YR = this.scale_y(YR) + this.padding;
        let dist = Math.sqrt(Math.pow(y-XR, 2) + Math.pow(x-YR, 2));
        if (dist < 0.13*this.scale) {
          console.log("opp : " + this.model.opponentsMap[_i][0]);
          break;
        }
    }
    
    // Draw Ball
    if (this.model.ballstate.location.x != undefined || this.model.ballstate.location.y != undefined) {
      let XR = this.model.ballstate.location.x/1000;
      let YR = this.model.ballstate.location.y/1000;
      XR = this.scale_x(XR) + this.padding;
      YR = this.scale_y(YR) + this.padding;
      let dist = Math.sqrt(Math.pow(y-XR, 2) + Math.pow(x-YR, 2));
      if (dist < 0.03*this.scale) {
        console.log("ball");
        return;
      }
    }
  }

  drawField() {
    this.clear();

    // Green Background
    this.fieldContext.beginPath();
    this.fieldContext.fillStyle = '#008000';
    this.fieldContext.fillRect(
      0,
      0,
      this.w,
      this.h
    );

    // Write FPS
    this.fieldContext.font = "20px Arial";
    this.fieldContext.fillStyle = '#000000';
    this.fieldContext.fillText("FPS : " + this.framerate, 35, 20);
    // Write Model Status
    this.fieldContext.fillText(this.calculate_model_status(this.model.status), 225, 20);
    // Write Referee Status
    if (this.refereeCommand)
      this.fieldContext.fillText(this.calculate_referee_command(this.refereeCommand.command), 475, 20);

    this.fieldContext.save();
    this.fieldContext.translate(this.globalX, this.globalY);
    this.fieldContext.scale(this.globalK, this.globalK);
    
    // Field Boundary
    let x1 = this.scale_x(this.fieldConfig.ourleftcorner.x);
    let y1 = this.scale_y(this.fieldConfig.ourleftcorner.y);
    let x2 = this.scale_x(this.fieldConfig.ourrightcorner.x);
    let y2 = this.scale_y(this.fieldConfig.ourrightcorner.y);
    let x3 = this.scale_x(this.fieldConfig.oppleftcorner.x);
    let y3 = this.scale_y(this.fieldConfig.oppleftcorner.y);
    let x4 = this.scale_x(this.fieldConfig.opprightcorner.x);
    let y4 = this.scale_y(this.fieldConfig.opprightcorner.y);
    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    this.fieldContext.strokeStyle = 'white';
    this.fieldContext.moveTo(y1 + this.padding, x1 + this.padding);
    this.fieldContext.lineTo(y2 + this.padding, x2 + this.padding);
    this.fieldContext.lineTo(y3 + this.padding, x3 + this.padding);
    this.fieldContext.lineTo(y4 + this.padding, x4 + this.padding);
    this.fieldContext.lineTo(y1 + this.padding, x1 + this.padding);
    this.fieldContext.stroke();
    
    // Middle Line
    let mid_x_1 = (x1+x4)/2;
    let mid_y_1 = (y1+y4)/2;
    let mid_x_2 = (x2+x3)/2;
    let mid_y_2 = (y2+y3)/2;
    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    this.fieldContext.strokeStyle = 'white';
    this.fieldContext.moveTo(mid_y_1 + this.padding, mid_x_1 + this.padding);
    this.fieldContext.lineTo(mid_y_2 + this.padding, mid_x_2 + this.padding);
    this.fieldContext.stroke();

    // Middle Circle
    let center_x = (mid_x_1 + mid_x_2)/2;
    let center_y = (mid_y_1 + mid_y_2)/2;
    let circle_radius = this.fieldConfig.centercircleradius;
    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    this.fieldContext.strokeStyle = 'white';
    this.fieldContext.arc(
      center_y + this.padding,
      center_x + this.padding,
      circle_radius * this.scale,
      0,
      2 * Math.PI
    );
    this.fieldContext.stroke();

    // Our Penalty
    let OP_x_1 = this.scale_x(this.fieldConfig.ourpenaltybackleft.x);
    let OP_y_1 = this.scale_y(this.fieldConfig.ourpenaltybackleft.y);
    let OP_x_2 = this.scale_x(this.fieldConfig.ourpenaltybackright.x);
    let OP_y_2 = this.scale_y(this.fieldConfig.ourpenaltybackright.y);
    let OP_x_3 = this.scale_x(this.fieldConfig.ourpenaltyrearright.x);
    let OP_y_3 = this.scale_y(this.fieldConfig.ourpenaltyrearright.y);
    let OP_x_4 = this.scale_x(this.fieldConfig.ourpenaltyrearleft.x);
    let OP_y_4 = this.scale_y(this.fieldConfig.ourpenaltyrearleft.y);
    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    this.fieldContext.strokeStyle = 'white';
    this.fieldContext.moveTo(OP_y_1 + this.padding, OP_x_1 + this.padding);
    this.fieldContext.lineTo(OP_y_2 + this.padding, OP_x_2 + this.padding);
    this.fieldContext.lineTo(OP_y_3 + this.padding, OP_x_3 + this.padding);
    this.fieldContext.lineTo(OP_y_4 + this.padding, OP_x_4 + this.padding);
    this.fieldContext.lineTo(OP_y_1 + this.padding, OP_x_1 + this.padding);
    this.fieldContext.stroke();

    // OpP Penalty
    let OpP_x_1 = this.scale_x(this.fieldConfig.opppenaltybackleft.x);
    let OpP_y_1 = this.scale_y(this.fieldConfig.opppenaltybackleft.y);
    let OpP_x_2 = this.scale_x(this.fieldConfig.opppenaltybackright.x);
    let OpP_y_2 = this.scale_y(this.fieldConfig.opppenaltybackright.y);
    let OpP_x_3 = this.scale_x(this.fieldConfig.opppenaltyrearright.x);
    let OpP_y_3 = this.scale_y(this.fieldConfig.opppenaltyrearright.y);
    let OpP_x_4 = this.scale_x(this.fieldConfig.opppenaltyrearleft.x);
    let OpP_y_4 = this.scale_y(this.fieldConfig.opppenaltyrearleft.y);
    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    this.fieldContext.strokeStyle = 'white';
    this.fieldContext.moveTo(OpP_y_1 + this.padding, OpP_x_1 + this.padding);
    this.fieldContext.lineTo(OpP_y_2 + this.padding, OpP_x_2 + this.padding);
    this.fieldContext.lineTo(OpP_y_3 + this.padding, OpP_x_3 + this.padding);
    this.fieldContext.lineTo(OpP_y_4 + this.padding, OpP_x_4 + this.padding);
    this.fieldContext.lineTo(OpP_y_1 + this.padding, OpP_x_1 + this.padding);
    this.fieldContext.stroke();

    // Our Goal
    let OG_x_1 = this.scale_x(this.fieldConfig.ourgoalleft.x);
    let OG_y_1 = this.scale_y(this.fieldConfig.ourgoalleft.y);
    let OG_x_2 = this.scale_x(this.fieldConfig.ourgoaldepthleft.x);
    let OG_y_2 = this.scale_y(this.fieldConfig.ourgoaldepthleft.y);
    let OG_x_3 = this.scale_x(this.fieldConfig.ourgoaldepthright.x);
    let OG_y_3 = this.scale_y(this.fieldConfig.ourgoaldepthright.y);
    let OG_x_4 = this.scale_x(this.fieldConfig.ourgoalright.x);
    let OG_y_4 = this.scale_y(this.fieldConfig.ourgoalright.y);
    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    this.fieldContext.strokeStyle = 'white';
    this.fieldContext.moveTo(OG_y_1 + this.padding, OG_x_1 + this.padding);
    this.fieldContext.lineTo(OG_y_2 + this.padding, OG_x_2 + this.padding);
    this.fieldContext.lineTo(OG_y_3 + this.padding, OG_x_3 + this.padding);
    this.fieldContext.lineTo(OG_y_4 + this.padding, OG_x_4 + this.padding);
    this.fieldContext.lineTo(OG_y_1 + this.padding, OG_x_1 + this.padding);
    this.fieldContext.stroke();

    // Our Goal
    let OpG_x_1 = this.scale_x(this.fieldConfig.oppgoalleft.x);
    let OpG_y_1 = this.scale_y(this.fieldConfig.oppgoalleft.y);
    let OpG_x_2 = this.scale_x(this.fieldConfig.oppgoaldepthleft.x);
    let OpG_y_2 = this.scale_y(this.fieldConfig.oppgoaldepthleft.y);
    let OpG_x_3 = this.scale_x(this.fieldConfig.oppgoaldepthright.x);
    let OpG_y_3 = this.scale_y(this.fieldConfig.oppgoaldepthright.y);
    let OpG_x_4 = this.scale_x(this.fieldConfig.oppgoalright.x);
    let OpG_y_4 = this.scale_y(this.fieldConfig.oppgoalright.y);
    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    this.fieldContext.strokeStyle = 'white';
    this.fieldContext.moveTo(OpG_y_1 + this.padding, OpG_x_1 + this.padding);
    this.fieldContext.lineTo(OpG_y_2 + this.padding, OpG_x_2 + this.padding);
    this.fieldContext.lineTo(OpG_y_3 + this.padding, OpG_x_3 + this.padding);
    this.fieldContext.lineTo(OpG_y_4 + this.padding, OpG_x_4 + this.padding);
    this.fieldContext.lineTo(OpG_y_1 + this.padding, OpG_x_1 + this.padding);
    this.fieldContext.stroke();

    // Our Robots
    for (var _i = 0; _i < this.model.ourrobotsMap.length; _i++) {
      var color = 'blue';
      if (this.model.ourmarkerisyellow) color = 'yellow';
      this.drawRobot(
        this.model.ourrobotsMap[_i][0],
        color,
        this.model.ourrobotsMap[_i][1].angle,
        this.model.ourrobotsMap[_i][1].location.x,
        this.model.ourrobotsMap[_i][1].location.y
      );
    }

    // Opponents Robots
    for (var _i = 0; _i < this.model.opponentsMap.length; _i++) {
      var color = 'yellow';
      if (this.model.ourmarkerisyellow) color = 'blue';
      this.drawRobot(
        this.model.ourrobotsMap[_i][0],
        color,
        this.model.opponentsMap[_i][1].angle,
        this.model.opponentsMap[_i][1].location.x,
        this.model.opponentsMap[_i][1].location.y
      );
    }

    // Draw Ball
    if (this.model.ballstate.location.x != undefined || this.model.ballstate.location.y != undefined)
      this.drawBall(this.model.ballstate.location.x, this.model.ballstate.location.y);

    this.fieldContext.closePath();
    this.fieldContext.restore();
  }

  drawBall(x, y) {
      let newX = this.scale_x(x/1000)
      let newY = this.scale_y(y/1000)
      this.fieldContext.beginPath();
      this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
      this.fieldContext.strokeStyle = 'red';
      this.fieldContext.arc(
        newY + this.padding,
        newX + this.padding,
        0.03 * this.scale,
        0,
        2 * Math.PI
      );
      this.fieldContext.fillStyle = '#ffa500';
      this.fieldContext.fill();
      this.fieldContext.stroke();
  }

  drawRobot(id, color, rotateAngle, x, y) {
    var angle = rotateAngle - Math.PI / 2;
    x = this.scale_x(x/1000)
    y = this.scale_y(y/1000)

    this.fieldContext.beginPath();
    this.fieldContext.lineWidth = this.fieldConfig.thickness * this.scale;
    if (color == 'blue') {
      this.fieldContext.strokeStyle = 'darkblue';
      this.fieldContext.fillStyle = 'blue';
    } else if (color == 'yellow') {
      this.fieldContext.strokeStyle = 'GoldenRod ';
      this.fieldContext.fillStyle = 'yellow';
    }
    this.fieldContext.arc(
      y + this.padding,
      x + this.padding,
      0.13*this.scale,
      -angle - (Math.PI / 4.0),
      Math.PI - angle + (Math.PI / 4.0),
      false
    );

    this.fieldContext.fill();
    this.fieldContext.stroke();
    this.fieldContext.beginPath();
    this.fieldContext.font = '9px Arial Black';
    this.fieldContext.fillStyle = 'black';
    if (id > 9) {
      this.fieldContext.fillText(
        id,
        this.padding + y - 5,
        this.padding + x + 2
      );
    } else {
      this.fieldContext.fillText(
        id,
        this.padding + y - 2,
        this.padding + x + 2.5
      );
    }
    this.fieldContext.stroke();

    let y1 = y + this.padding + (0.13*this.scale) * Math.cos(-angle - Math.PI / 4);
    let x1 = x + this.padding + (0.13*this.scale) * Math.sin(-angle - Math.PI / 4);
    let y2 = y + this.padding + (0.13*this.scale) * Math.cos(Math.PI - angle + Math.PI / 4);
    let x2 = x + this.padding + (0.13*this.scale) * Math.sin(Math.PI - angle + Math.PI / 4);
    this.fieldContext.beginPath();
    this.fieldContext.lineCap = 'butt';
    this.fieldContext.moveTo(y1, x1);
    this.fieldContext.lineTo(y2, x2);
    this.fieldContext.stroke();
  }

  scale_x(x) {
    return ((this.FH * this.scale) * ((x - (-6)) / (6 - (-6))))
  }

  scale_y(y) {
    return ((this.FW * this.scale) * ((y - (-4.5)) / (4.5 - (-4.5))))
  }

  calculate_model_status(st) {
    if (st == 0)
      return "Halt";
    else if (st == 1)
      return "Stop";
    else if (st == 2)
      return "Normal";
    else if (st == 3)
      return "KickOffOurTeamWaiting";
    else if (st == 4)
      return "KickOffOurTeamGo";
    else if (st == 5)
      return "KickOffOpponentWaiting";
    else if (st == 6)
      return "KickOffOpponentGo";
    else if (st == 7)
      return "PenaltyOurTeamWaiting";
    else if (st == 8)
      return "PenaltyOurTeamGo";
    else if (st == 9)
      return "PenaltyOpponentWaiting";    
    else if (st == 10)
      return "PenaltyOpponentGo";
    else if (st == 11)
      return "DirectFreeKickOurTeam";
    else if (st == 12)
      return "DirectFreeKickOpponent";
    else if (st == 13)
      return "IndirectFreeKickOurTeam";
    else if (st == 14)
      return "IndirectFreeKickOpponent";
    else if (st == 15)
      return "TimeoutOurTeam";
    else if (st == 16)
      return "TimeoutOpponent";
    else if (st == 17)
      return "BallPlaceOurTeam";
    else if (st == 18)
      return "BallPlaceOpponent";
    else
      return 'Error';
  }

  calculate_referee_command(st) {
    if (st == 0)
      return "HALT";
    else if (st == 1)
      return "STOP";
    else if (st == 2)
      return "NORMAL_START";
    else if (st == 3)
      return "FORCE_START";
    else if (st == 4)
      return "PREPARE_KICKOFF_YELLOW";
    else if (st == 5)
      return "PREPARE_KICKOFF_BLUE";
    else if (st == 6)
      return "PREPARE_PENALTY_YELLOW";
    else if (st == 7)
      return "PREPARE_PENALTY_BLUE";
    else if (st == 8)
      return "DIRECT_FREE_YELLOW";
    else if (st == 9)
      return "DIRECT_FREE_BLUE";    
    else if (st == 10)
      return "INDIRECT_FREE_YELLOW";
    else if (st == 11)
      return "INDIRECT_FREE_BLUE";
    else if (st == 12)
      return "TIMEOUT_YELLOW";
    else if (st == 13)
      return "TIMEOUT_BLUE";
    else if (st == 14)
      return "GOAL_YELLOW";
    else if (st == 15)
      return "GOAL_BLUE";
    else if (st == 16)
      return "BALL_PLACEMENT_YELLOW";
    else if (st == 17)
      return "BALL_PLACEMENT_BLUE";
    else
      return 'Error';
  }
  alignment() {
    this.fieldConfig = {
      boundarywidth: config.boundaryWidth,
      centercircleradius: config.centerCircleRadius,
      oppgoalcenter: config.oppGoalCenter,
      oppgoaldepthleft: config.oppGoalDepthLeft,
      oppgoaldepthright: config.oppGoalDepthRight,
      oppgoalleft: config.oppGoalLeft,
      oppgoalright: config.oppGoalRight,
      oppleftcorner: config.oppLeftCorner,
      opppenaltybackleft: config.oppPenaltyBackLeft,
      opppenaltybackright: config.oppPenaltyBackRight,
      opppenaltyrearleft: config.oppPenaltyRearLeft,
      opppenaltyrearright: config.oppPenaltyRearRight,
      opprightcorner: config.oppRightCorner,
      ourgoalcenter: config.ourGoalCenter,
      ourgoaldepthleft: config.ourGoalDepthLeft,
      ourgoaldepthright: config.ourGoalDepthRight,
      ourgoalleft: config.ourGoalLeft,
      ourgoalright: config.ourGoalRight,
      ourleftcorner: config.ourLeftCorner,
      ourpenaltybackleft: config.ourPenaltyBackLeft,
      ourpenaltybackright: config.ourPenaltyBackRight,
      ourpenaltyrearleft: config.ourPenaltyRearLeft,
      ourpenaltyrearright: config.ourPenaltyRearRight,
      ourrightcorner: config.ourRightCorner,
      thickness: config.thickness
    };
  }
}
