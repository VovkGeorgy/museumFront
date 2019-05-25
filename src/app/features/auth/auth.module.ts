import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {SharedModule} from '../../shared/shared/shared.module';
import {AnonymGuard} from '../../shell/guards/anonym.guard';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  providers: [
    AnonymGuard
  ]
})
export class AuthModule {
}
