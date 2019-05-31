import {Component, OnInit} from '@angular/core';
import {WebSocketService} from '../../../../core/services/web-socket.service';
import {Message} from '@stomp/stompjs';
import {StompState} from '@stomp/ng2-stompjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const WEBSOCKET_URL = "ws://localhost:8090/socket";
const LISTEN_URL = "/topic/front-receiver";

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  messages = [];

  chatForm: FormGroup = new FormGroup({
    message: new FormControl("", [Validators.required]),
  });

  private messagingService: WebSocketService;

  messageHistory = [];
  state = "NOT CONNECTED";
  isChatOpened = false;

  constructor() {
    this.messagingService = new WebSocketService(WEBSOCKET_URL, LISTEN_URL);

    this.messagingService.stream().subscribe((message: Message) => {
        this.messageHistory.unshift(message.body);
        this.messages.push(message.body);
      }
    );

    this.messagingService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
    });
  }

  sendMessage() {
    this.messagingService.send("/server-receiver", this.chatForm.getRawValue());
    this.messages.push(this.chatForm.getRawValue().message);
    this.chatForm.reset();
  }

  ngOnInit() {
  }

  openChat() {
    this.isChatOpened = true;
  }

  closeChat() {
    this.isChatOpened = false;
  }
}
