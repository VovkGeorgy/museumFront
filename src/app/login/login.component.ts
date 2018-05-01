import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from "../service/auth.service";
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
