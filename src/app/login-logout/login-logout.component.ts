import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css']
})
export class LoginLogoutComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit() {
  }

  logIn() {
  }
}
