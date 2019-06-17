import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-login-bar",
  templateUrl: "./login-bar.component.html",
  styleUrls: ["./login-bar.component.css"]
})
export class LoginBarComponent implements OnInit {

  @Input()
  isSignedIn: boolean;

  @Input()
  profileButtonName: string;

  @Input()
  profileLink: string;

  @Output()
  goToProfileEditorEvent = new EventEmitter();

  @Output()
  logoutEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  logout() {
    this.logoutEvent.emit();
  }
}
