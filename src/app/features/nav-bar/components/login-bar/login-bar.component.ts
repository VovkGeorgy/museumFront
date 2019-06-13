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
  logButtonName: string;

  @Input()
  isAdmin: boolean;

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

  goToProfileEditor() {
    this.goToProfileEditorEvent.emit();
  }

  logout() {
    this.logoutEvent.emit();
  }
}
