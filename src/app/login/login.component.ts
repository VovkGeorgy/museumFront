import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {CookieService} from "ngx-cookie-service";
import {NgxSpinnerService} from "ngx-spinner";
import {HttpErrorResponse} from "@angular/common/http";

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
  wrongData: boolean = false;

  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }

  login() {
    this.spinner.show();
    const userDetail = this.logForm.value;
    this.authService.getToken(userDetail.username, userDetail.password).subscribe(
      data => {
        this.cookieService.set("username", userDetail.username, 1);
        this.authService.getRole().subscribe(data => {
        });
      },
      (error: HttpErrorResponse) => {
        this.wrongData = true;
      }
    );
    setTimeout(() => {
        this.spinner.hide();
      },
      3000);
  }
}
