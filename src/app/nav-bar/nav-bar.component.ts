import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private cookieService: CookieService,
              private translate: TranslateService,
              private authService: AuthService,) {
  }

  user: any;
  logButtonName: any;

  ngOnInit() {
    this.logButtonName = this.translate.get('button.login');
  }

  logout() {
    this.authService.logout();
  }

  hasSignedIn() {
    if (this.cookieService.get('username')) {
      this.logButtonName = this.cookieService.get('username');
      return true;
    } else {
      return false;
    }
  }

  hasRoleAdmin() {
    return this.authService.isAdmin();
  }

  hasRoleUser() {
    return this.authService.isUser();
  }


  userName() {
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
