import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AnonymGuard} from '../../shell/guards/anonym.guard';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AnonymGuard]
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [AnonymGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
