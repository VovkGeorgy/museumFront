import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  logForm: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private authService: AuthService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
  }

  login() {
    const userDetail = this.logForm.value;
    this.authService.getToken(userDetail.username, userDetail.password).subscribe(data => {
      this.cookieService.set("username", userDetail.username, 1);
      this.authService.getRole().subscribe(data => {
      });
    });
  }
}
