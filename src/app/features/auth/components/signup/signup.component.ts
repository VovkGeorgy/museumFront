import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {VisitorService} from "../../../visitors/services/visitor.service";
import {ValidatorsService} from '../../../../core/services/validators.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {

  visitorForm: FormGroup = new FormGroup({
    visitorId: new FormControl(""),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    fio: new FormControl(""),
    age: new FormControl("", [this.validatorService.numbers]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });
  tempVisitor: any;

  constructor(private visitorService: VisitorService,
              private authService: AuthService,
              private cookieService: CookieService,
              private validatorService: ValidatorsService) {
  }

  ngOnInit() {
  }

  signupUser() {
    this.visitorService.addVisitor(this.visitorForm.getRawValue()).subscribe(visitor => {
      this.tempVisitor = visitor;
      this.authService.getToken(this.tempVisitor.username, this.tempVisitor.password).subscribe(() => {
        this.authService.getRole().subscribe(() => {
        });
      });
    });
  }
}
