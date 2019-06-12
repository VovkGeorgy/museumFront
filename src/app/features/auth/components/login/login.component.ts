import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {NgxSpinnerService} from "ngx-spinner";
import {Store} from "@ngrx/store";
import {AuthActionTypes, AuthLogin} from "../../../../core/store/actions/auth.actions";
import * as authReducer from "../../../../core/store/reducers/auth.reducer";
import {Actions, ofType} from "@ngrx/effects";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  logForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  wrongData = false;

  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private store: Store<authReducer.State>,
              private storeActions: Actions,
              private router: Router,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }

  login() {
    this.spinner.show();
    const userDetail = {
      username: this.logForm.value.username,
      password: this.logForm.value.password
    };
    this.store.dispatch(new AuthLogin(userDetail));

    this.storeActions.pipe(ofType(AuthActionTypes.authLoginSuccess), first()).subscribe(() => {
      this.router.navigate(["/"]);
    });

    this.storeActions.pipe(ofType(AuthActionTypes.authError), first()).subscribe(() => {
      this.wrongData = true;
      this.spinner.hide();
    });
  }
}
