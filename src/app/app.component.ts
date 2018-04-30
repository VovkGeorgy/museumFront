import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private translate: TranslateService,
              private authService: AuthService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.authService.logout();
  }

}
