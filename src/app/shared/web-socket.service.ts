import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws: WebSocket;

  constructor() {
  }

  createObservableSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url); //连接websocket服务器
    return new Observable(   //返回一个流
      observer => {
        // websocket接收到消息时，发射下一个元素
        this.ws.onmessage = (event) => observer.next(event.data);
        // websocket出问题时，流抛出异常
        this.ws.onerror = (event) => observer.error(event);
        // websocket关闭时，流发出结束的信号
        this.ws.onclose = (event) => observer.complete();
      }
    );
  }

  sendMessage(message: string) {
    this.ws.send(message);
  }

}
