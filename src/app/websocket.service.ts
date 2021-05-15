import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class WebsocketService {
  constructor() {}

  private subject: Rx.Subject<MessageEvent>;

  public connect(url): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);
    ws.binaryType = 'arraybuffer';
    let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          // var buffer = new Uint8Array(data);
          // ws.send(JSON.stringify(data));
          // console.log({ data });
        }
      },
    };
    return Rx.Subject.create(observer, observable);
  }
}
