import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CookieService,
    DataService,
    AuthService
  ]
})
export class CoreModule { }
