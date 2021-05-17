// package: 
// file: WorldModel.proto

import * as jspb from "google-protobuf";
import * as Common_pb from "./Common_pb";
import * as Referee_pb from "./Referee_pb";

export class BallObservationMeta extends jspb.Message {
  hasOccludingoffset(): boolean;
  clearOccludingoffset(): void;
  getOccludingoffset(): Common_pb.VectorF2D | undefined;
  setOccludingoffset(value?: Common_pb.VectorF2D): void;

  hasOccluded(): boolean;
  clearOccluded(): void;
  getOccluded(): OccludeTypeMap[keyof OccludeTypeMap] | undefined;
  setOccluded(value: OccludeTypeMap[keyof OccludeTypeMap]): void;

  hasOccludingteam(): boolean;
  clearOccludingteam(): void;
  getOccludingteam(): number | undefined;
  setOccludingteam(value: number): void;

  hasOccludingid(): boolean;
  clearOccludingid(): void;
  getOccludingid(): number | undefined;
  setOccludingid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BallObservationMeta.AsObject;
  static toObject(includeInstance: boolean, msg: BallObservationMeta): BallObservationMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BallObservationMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BallObservationMeta;
  static deserializeBinaryFromReader(message: BallObservationMeta, reader: jspb.BinaryReader): BallObservationMeta;
}

export namespace BallObservationMeta {
  export type AsObject = {
    occludingoffset?: Common_pb.VectorF2D.AsObject,
    occluded?: OccludeTypeMap[keyof OccludeTypeMap],
    occludingteam?: number,
    occludingid?: number,
  }
}

export class RobotObservationMeta extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotObservationMeta.AsObject;
  static toObject(includeInstance: boolean, msg: RobotObservationMeta): RobotObservationMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotObservationMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotObservationMeta;
  static deserializeBinaryFromReader(message: RobotObservationMeta, reader: jspb.BinaryReader): RobotObservationMeta;
}

export namespace RobotObservationMeta {
  export type AsObject = {
  }
}

export class Observation extends jspb.Message {
  hasCamera(): boolean;
  clearCamera(): void;
  getCamera(): number | undefined;
  setCamera(value: number): void;

  hasConfidence(): boolean;
  clearConfidence(): void;
  getConfidence(): number | undefined;
  setConfidence(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Common_pb.VectorF2D | undefined;
  setLocation(value?: Common_pb.VectorF2D): void;

  hasAngle(): boolean;
  clearAngle(): void;
  getAngle(): number | undefined;
  setAngle(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Observation.AsObject;
  static toObject(includeInstance: boolean, msg: Observation): Observation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Observation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Observation;
  static deserializeBinaryFromReader(message: Observation, reader: jspb.BinaryReader): Observation;
}

export namespace Observation {
  export type AsObject = {
    camera?: number,
    confidence?: number,
    location?: Common_pb.VectorF2D.AsObject,
    angle?: number,
  }
}

export class ObservationMeta extends jspb.Message {
  hasVision(): boolean;
  clearVision(): void;
  getVision(): Observation | undefined;
  setVision(value?: Observation): void;

  hasNotseen(): boolean;
  clearNotseen(): void;
  getNotseen(): number | undefined;
  setNotseen(value: number): void;

  hasViewstate(): boolean;
  clearViewstate(): void;
  getViewstate(): SingleObjectState | undefined;
  setViewstate(value?: SingleObjectState): void;

  hasBallmeta(): boolean;
  clearBallmeta(): void;
  getBallmeta(): BallObservationMeta | undefined;
  setBallmeta(value?: BallObservationMeta): void;

  hasRobotmeta(): boolean;
  clearRobotmeta(): void;
  getRobotmeta(): RobotObservationMeta | undefined;
  setRobotmeta(value?: RobotObservationMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationMeta): ObservationMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationMeta;
  static deserializeBinaryFromReader(message: ObservationMeta, reader: jspb.BinaryReader): ObservationMeta;
}

export namespace ObservationMeta {
  export type AsObject = {
    vision?: Observation.AsObject,
    notseen?: number,
    viewstate?: SingleObjectState.AsObject,
    ballmeta?: BallObservationMeta.AsObject,
    robotmeta?: RobotObservationMeta.AsObject,
  }
}

export class ObservationModel extends jspb.Message {
  getOurrobotsMap(): jspb.Map<number, ObservationMeta>;
  clearOurrobotsMap(): void;
  getOpponentsMap(): jspb.Map<number, ObservationMeta>;
  clearOpponentsMap(): void;
  hasBall(): boolean;
  clearBall(): void;
  getBall(): ObservationMeta | undefined;
  setBall(value?: ObservationMeta): void;

  clearOtherballsList(): void;
  getOtherballsList(): Array<Observation>;
  setOtherballsList(value: Array<Observation>): void;
  addOtherballs(value?: Observation, index?: number): Observation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationModel.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationModel): ObservationModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationModel;
  static deserializeBinaryFromReader(message: ObservationModel, reader: jspb.BinaryReader): ObservationModel;
}

export namespace ObservationModel {
  export type AsObject = {
    ourrobotsMap: Array<[number, ObservationMeta.AsObject]>,
    opponentsMap: Array<[number, ObservationMeta.AsObject]>,
    ball?: ObservationMeta.AsObject,
    otherballsList: Array<Observation.AsObject>,
  }
}

export class SingleObjectState extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Common_pb.VectorF2D | undefined;
  setLocation(value?: Common_pb.VectorF2D): void;

  hasSpeed(): boolean;
  clearSpeed(): void;
  getSpeed(): Common_pb.VectorF2D | undefined;
  setSpeed(value?: Common_pb.VectorF2D): void;

  hasAngle(): boolean;
  clearAngle(): void;
  getAngle(): number | undefined;
  setAngle(value: number): void;

  hasAngularspeed(): boolean;
  clearAngularspeed(): void;
  getAngularspeed(): number | undefined;
  setAngularspeed(value: number): void;

  hasStuck(): boolean;
  clearStuck(): void;
  getStuck(): number | undefined;
  setStuck(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleObjectState.AsObject;
  static toObject(includeInstance: boolean, msg: SingleObjectState): SingleObjectState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleObjectState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleObjectState;
  static deserializeBinaryFromReader(message: SingleObjectState, reader: jspb.BinaryReader): SingleObjectState;
}

export namespace SingleObjectState {
  export type AsObject = {
    location?: Common_pb.VectorF2D.AsObject,
    speed?: Common_pb.VectorF2D.AsObject,
    angle?: number,
    angularspeed?: number,
    stuck?: number,
  }
}

export class SingleWirelessCommand extends jspb.Message {
  hasVx(): boolean;
  clearVx(): void;
  getVx(): number | undefined;
  setVx(value: number): void;

  hasVy(): boolean;
  clearVy(): void;
  getVy(): number | undefined;
  setVy(value: number): void;

  hasW(): boolean;
  clearW(): void;
  getW(): number | undefined;
  setW(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleWirelessCommand.AsObject;
  static toObject(includeInstance: boolean, msg: SingleWirelessCommand): SingleWirelessCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleWirelessCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleWirelessCommand;
  static deserializeBinaryFromReader(message: SingleWirelessCommand, reader: jspb.BinaryReader): SingleWirelessCommand;
}

export namespace SingleWirelessCommand {
  export type AsObject = {
    vx?: number,
    vy?: number,
    w?: number,
  }
}

export class RobotCommands extends jspb.Message {
  getCommandsMap(): jspb.Map<number, SingleWirelessCommand>;
  clearCommandsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotCommands.AsObject;
  static toObject(includeInstance: boolean, msg: RobotCommands): RobotCommands.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotCommands, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotCommands;
  static deserializeBinaryFromReader(message: RobotCommands, reader: jspb.BinaryReader): RobotCommands;
}

export namespace RobotCommands {
  export type AsObject = {
    commandsMap: Array<[number, SingleWirelessCommand.AsObject]>,
  }
}

export class WorldModel extends jspb.Message {
  hasOurmarkerisyellow(): boolean;
  clearOurmarkerisyellow(): void;
  getOurmarkerisyellow(): boolean | undefined;
  setOurmarkerisyellow(value: boolean): void;

  hasFieldisinverted(): boolean;
  clearFieldisinverted(): void;
  getFieldisinverted(): boolean | undefined;
  setFieldisinverted(value: boolean): void;

  hasGoalieid(): boolean;
  clearGoalieid(): void;
  getGoalieid(): number | undefined;
  setGoalieid(value: number): void;

  getOurrobotsMap(): jspb.Map<number, SingleObjectState>;
  clearOurrobotsMap(): void;
  getOpponentsMap(): jspb.Map<number, SingleObjectState>;
  clearOpponentsMap(): void;
  hasBallstate(): boolean;
  clearBallstate(): void;
  getBallstate(): SingleObjectState | undefined;
  setBallstate(value?: SingleObjectState): void;

  hasObservations(): boolean;
  clearObservations(): void;
  getObservations(): ObservationModel | undefined;
  setObservations(value?: ObservationModel): void;

  hasCommands(): boolean;
  clearCommands(): void;
  getCommands(): RobotCommands | undefined;
  setCommands(value?: RobotCommands): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): GameStatusMap[keyof GameStatusMap] | undefined;
  setStatus(value: GameStatusMap[keyof GameStatusMap]): void;

  hasOppgoalieid(): boolean;
  clearOppgoalieid(): void;
  getOppgoalieid(): number | undefined;
  setOppgoalieid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldModel.AsObject;
  static toObject(includeInstance: boolean, msg: WorldModel): WorldModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldModel;
  static deserializeBinaryFromReader(message: WorldModel, reader: jspb.BinaryReader): WorldModel;
}

export namespace WorldModel {
  export type AsObject = {
    ourmarkerisyellow?: boolean,
    fieldisinverted?: boolean,
    goalieid?: number,
    ourrobotsMap: Array<[number, SingleObjectState.AsObject]>,
    opponentsMap: Array<[number, SingleObjectState.AsObject]>,
    ballstate?: SingleObjectState.AsObject,
    observations?: ObservationModel.AsObject,
    commands?: RobotCommands.AsObject,
    status?: GameStatusMap[keyof GameStatusMap],
    oppgoalieid?: number,
  }
}

export class FieldConfig extends jspb.Message {
  hasBoundarywidth(): boolean;
  clearBoundarywidth(): void;
  getBoundarywidth(): number | undefined;
  setBoundarywidth(value: number): void;

  hasThickness(): boolean;
  clearThickness(): void;
  getThickness(): number | undefined;
  setThickness(value: number): void;

  hasCentercircleradius(): boolean;
  clearCentercircleradius(): void;
  getCentercircleradius(): number | undefined;
  setCentercircleradius(value: number): void;

  hasOurleftcorner(): boolean;
  clearOurleftcorner(): void;
  getOurleftcorner(): Common_pb.VectorF2D | undefined;
  setOurleftcorner(value?: Common_pb.VectorF2D): void;

  hasOurrightcorner(): boolean;
  clearOurrightcorner(): void;
  getOurrightcorner(): Common_pb.VectorF2D | undefined;
  setOurrightcorner(value?: Common_pb.VectorF2D): void;

  hasOppleftcorner(): boolean;
  clearOppleftcorner(): void;
  getOppleftcorner(): Common_pb.VectorF2D | undefined;
  setOppleftcorner(value?: Common_pb.VectorF2D): void;

  hasOpprightcorner(): boolean;
  clearOpprightcorner(): void;
  getOpprightcorner(): Common_pb.VectorF2D | undefined;
  setOpprightcorner(value?: Common_pb.VectorF2D): void;

  hasOurgoalcenter(): boolean;
  clearOurgoalcenter(): void;
  getOurgoalcenter(): Common_pb.VectorF2D | undefined;
  setOurgoalcenter(value?: Common_pb.VectorF2D): void;

  hasOurgoalright(): boolean;
  clearOurgoalright(): void;
  getOurgoalright(): Common_pb.VectorF2D | undefined;
  setOurgoalright(value?: Common_pb.VectorF2D): void;

  hasOurgoalleft(): boolean;
  clearOurgoalleft(): void;
  getOurgoalleft(): Common_pb.VectorF2D | undefined;
  setOurgoalleft(value?: Common_pb.VectorF2D): void;

  hasOurgoaldepthright(): boolean;
  clearOurgoaldepthright(): void;
  getOurgoaldepthright(): Common_pb.VectorF2D | undefined;
  setOurgoaldepthright(value?: Common_pb.VectorF2D): void;

  hasOurgoaldepthleft(): boolean;
  clearOurgoaldepthleft(): void;
  getOurgoaldepthleft(): Common_pb.VectorF2D | undefined;
  setOurgoaldepthleft(value?: Common_pb.VectorF2D): void;

  hasOurpenaltybackright(): boolean;
  clearOurpenaltybackright(): void;
  getOurpenaltybackright(): Common_pb.VectorF2D | undefined;
  setOurpenaltybackright(value?: Common_pb.VectorF2D): void;

  hasOurpenaltybackleft(): boolean;
  clearOurpenaltybackleft(): void;
  getOurpenaltybackleft(): Common_pb.VectorF2D | undefined;
  setOurpenaltybackleft(value?: Common_pb.VectorF2D): void;

  hasOurpenaltyrearright(): boolean;
  clearOurpenaltyrearright(): void;
  getOurpenaltyrearright(): Common_pb.VectorF2D | undefined;
  setOurpenaltyrearright(value?: Common_pb.VectorF2D): void;

  hasOurpenaltyrearleft(): boolean;
  clearOurpenaltyrearleft(): void;
  getOurpenaltyrearleft(): Common_pb.VectorF2D | undefined;
  setOurpenaltyrearleft(value?: Common_pb.VectorF2D): void;

  hasOppgoalcenter(): boolean;
  clearOppgoalcenter(): void;
  getOppgoalcenter(): Common_pb.VectorF2D | undefined;
  setOppgoalcenter(value?: Common_pb.VectorF2D): void;

  hasOppgoalright(): boolean;
  clearOppgoalright(): void;
  getOppgoalright(): Common_pb.VectorF2D | undefined;
  setOppgoalright(value?: Common_pb.VectorF2D): void;

  hasOppgoalleft(): boolean;
  clearOppgoalleft(): void;
  getOppgoalleft(): Common_pb.VectorF2D | undefined;
  setOppgoalleft(value?: Common_pb.VectorF2D): void;

  hasOppgoaldepthright(): boolean;
  clearOppgoaldepthright(): void;
  getOppgoaldepthright(): Common_pb.VectorF2D | undefined;
  setOppgoaldepthright(value?: Common_pb.VectorF2D): void;

  hasOppgoaldepthleft(): boolean;
  clearOppgoaldepthleft(): void;
  getOppgoaldepthleft(): Common_pb.VectorF2D | undefined;
  setOppgoaldepthleft(value?: Common_pb.VectorF2D): void;

  hasOpppenaltybackright(): boolean;
  clearOpppenaltybackright(): void;
  getOpppenaltybackright(): Common_pb.VectorF2D | undefined;
  setOpppenaltybackright(value?: Common_pb.VectorF2D): void;

  hasOpppenaltybackleft(): boolean;
  clearOpppenaltybackleft(): void;
  getOpppenaltybackleft(): Common_pb.VectorF2D | undefined;
  setOpppenaltybackleft(value?: Common_pb.VectorF2D): void;

  hasOpppenaltyrearright(): boolean;
  clearOpppenaltyrearright(): void;
  getOpppenaltyrearright(): Common_pb.VectorF2D | undefined;
  setOpppenaltyrearright(value?: Common_pb.VectorF2D): void;

  hasOpppenaltyrearleft(): boolean;
  clearOpppenaltyrearleft(): void;
  getOpppenaltyrearleft(): Common_pb.VectorF2D | undefined;
  setOpppenaltyrearleft(value?: Common_pb.VectorF2D): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FieldConfig): FieldConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldConfig;
  static deserializeBinaryFromReader(message: FieldConfig, reader: jspb.BinaryReader): FieldConfig;
}

export namespace FieldConfig {
  export type AsObject = {
    boundarywidth?: number,
    thickness?: number,
    centercircleradius?: number,
    ourleftcorner?: Common_pb.VectorF2D.AsObject,
    ourrightcorner?: Common_pb.VectorF2D.AsObject,
    oppleftcorner?: Common_pb.VectorF2D.AsObject,
    opprightcorner?: Common_pb.VectorF2D.AsObject,
    ourgoalcenter?: Common_pb.VectorF2D.AsObject,
    ourgoalright?: Common_pb.VectorF2D.AsObject,
    ourgoalleft?: Common_pb.VectorF2D.AsObject,
    ourgoaldepthright?: Common_pb.VectorF2D.AsObject,
    ourgoaldepthleft?: Common_pb.VectorF2D.AsObject,
    ourpenaltybackright?: Common_pb.VectorF2D.AsObject,
    ourpenaltybackleft?: Common_pb.VectorF2D.AsObject,
    ourpenaltyrearright?: Common_pb.VectorF2D.AsObject,
    ourpenaltyrearleft?: Common_pb.VectorF2D.AsObject,
    oppgoalcenter?: Common_pb.VectorF2D.AsObject,
    oppgoalright?: Common_pb.VectorF2D.AsObject,
    oppgoalleft?: Common_pb.VectorF2D.AsObject,
    oppgoaldepthright?: Common_pb.VectorF2D.AsObject,
    oppgoaldepthleft?: Common_pb.VectorF2D.AsObject,
    opppenaltybackright?: Common_pb.VectorF2D.AsObject,
    opppenaltybackleft?: Common_pb.VectorF2D.AsObject,
    opppenaltyrearright?: Common_pb.VectorF2D.AsObject,
    opppenaltyrearleft?: Common_pb.VectorF2D.AsObject,
  }
}

export class RefereeCommand extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): RefereeSourceTypeMap[keyof RefereeSourceTypeMap] | undefined;
  setSource(value: RefereeSourceTypeMap[keyof RefereeSourceTypeMap]): void;

  hasReferee(): boolean;
  clearReferee(): void;
  getReferee(): Referee_pb.Referee | undefined;
  setReferee(value?: Referee_pb.Referee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefereeCommand.AsObject;
  static toObject(includeInstance: boolean, msg: RefereeCommand): RefereeCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefereeCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefereeCommand;
  static deserializeBinaryFromReader(message: RefereeCommand, reader: jspb.BinaryReader): RefereeCommand;
}

export namespace RefereeCommand {
  export type AsObject = {
    source?: RefereeSourceTypeMap[keyof RefereeSourceTypeMap],
    referee?: Referee_pb.Referee.AsObject,
  }
}

export class Packet extends jspb.Message {
  hasWorldmodel(): boolean;
  clearWorldmodel(): void;
  getWorldmodel(): WorldModel | undefined;
  setWorldmodel(value?: WorldModel): void;

  hasFieldconfig(): boolean;
  clearFieldconfig(): void;
  getFieldconfig(): FieldConfig | undefined;
  setFieldconfig(value?: FieldConfig): void;

  clearRefereecommandList(): void;
  getRefereecommandList(): Array<RefereeCommand>;
  setRefereecommandList(value: Array<RefereeCommand>): void;
  addRefereecommand(value?: RefereeCommand, index?: number): RefereeCommand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    worldmodel?: WorldModel.AsObject,
    fieldconfig?: FieldConfig.AsObject,
    refereecommandList: Array<RefereeCommand.AsObject>,
  }
}

export interface OccludeTypeMap {
  VISIBLE: 0;
  MAYBEOCCLUDED: 1;
  OCCLUDED: 2;
}

export const OccludeType: OccludeTypeMap;

export interface GameStatusMap {
  HALT: 0;
  STOP: 1;
  NORMAL: 2;
  KICKOFFOURTEAMWAITING: 3;
  KICKOFFOURTEAMGO: 4;
  KICKOFFOPPONENTWAITING: 5;
  KICKOFFOPPONENTGO: 6;
  PENALTYOURTEAMWAITING: 7;
  PENALTYOURTEAMGO: 8;
  PENALTYOPPONENTWAITING: 9;
  PENALTYOPPONENTGO: 10;
  DIRECTFREEKICKOURTEAM: 11;
  DIRECTFREEKICKOPPONENT: 12;
  INDIRECTFREEKICKOURTEAM: 13;
  INDIRECTFREEKICKOPPONENT: 14;
  TIMEOUTOURTEAM: 15;
  TIMEOUTOPPONENT: 16;
  BALLPLACEOURTEAM: 17;
  BALLPLACEOPPONENT: 18;
}

export const GameStatus: GameStatusMap;

export interface RefereeSourceTypeMap {
  UNKNOWN: 0;
  REFBOX: 1;
  COMMANDLINE: 2;
  VISUALIZER: 3;
}

export const RefereeSourceType: RefereeSourceTypeMap;

