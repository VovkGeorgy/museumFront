import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {ValidatorsService} from './services/validators.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CookieService,
    DataService,
    AuthService,
    ValidatorsService
  ]
})
export class CoreModule { }
