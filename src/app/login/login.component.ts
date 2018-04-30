import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {HttpParams} from "@angular/common/http";
import {DataService} from "../service/data.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService,
              private cookieService: CookieService
  ) {
  }

  ngOnInit() {

  }

  login() {
    const userDetail = this.logForm.value;
    this.authService.getToken(userDetail.username, userDetail.password).subscribe(data => {
      this.cookieService.set('username', userDetail.username, 1);
      this.authService.getRole().subscribe(data => {
        console.log('get role finish');
      })
    });

    // this.currentUserRoles = this.authService.getRole(this.act);
    // if (this.currentUserRoles) {
    //   console.log(this.currentUserRoles);
    // }
    // console.log(response);
    // console.log(this.accessToken);
    //
    // });

    // const val = this.logForm.value;
    // if (val.email && val.password) {
    //   this.authService.getToken(val.email, val.password)
    //     .subscribe(
    //       () => {
    //         console.log("User is logged in");
    //         this.router.navigateByUrl('/');
    //       }
    //     );
    // }
  }

}
