import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {CookieService} from "ngx-cookie-service";
import {VisitorService} from "../service/entity/visitor.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {

  visitorForm: FormGroup = new FormGroup({
    visitorId: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    fio: new FormControl(""),
    age: new FormControl(""),
    email: new FormControl(""),
  });
  tempVisitor: any;

  constructor(private visitorService: VisitorService,
              private authService: AuthService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
  }

  signupUser() {
    this.visitorService.addVisitor(this.visitorForm.getRawValue()).subscribe(visitor => {
      this.tempVisitor = visitor;
      this.authService.getToken(this.tempVisitor.username, this.tempVisitor.password).subscribe(data => {
        this.cookieService.set("username", this.tempVisitor.username, 1);
        this.authService.getRole().subscribe(some => {
        });
      });
    });
  }
}
