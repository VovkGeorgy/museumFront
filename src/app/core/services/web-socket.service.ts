import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Message} from '@stomp/stompjs';
import {StompConfig, StompService, StompState} from '@stomp/ng2-stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private messages$: Observable<Message>;
  private stompService: StompService;

  constructor(socketUrl: string, streamUrl: string) {
    const stompConfig: StompConfig = {
      url: socketUrl,
      headers: {
        login: "",
        passcode: ""
      },
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    };

    this.stompService = new StompService(stompConfig);
    this.messages$ = this.stompService.subscribe(streamUrl);
  }

  public stream(): Observable<Message> {
    return this.messages$;
  }

  public send(url: string, message: any) {
    return this.stompService.publish(url, JSON.stringify(message));
  }

  public state(): BehaviorSubject<StompState> {
    return this.stompService.state;
  }

}
