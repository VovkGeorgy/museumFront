import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
// import {AdminComponent} from './admin';
// import {LoginGuard} from './guard';
import {ToursComponent} from './tours/tours.component';
// import {AdminGuard} from './guard/admin.guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {GuidesComponent} from "./guides/guides.component";
import {ExhibitsComponent} from "./exhibits/exhibits.component";
import {VisitorComponent} from "./visitor/visitor.component";
// import {ChangePasswordComponent} from './change-password/';
// import {ForbiddenComponent} from './forbidden';
// import {SignupComponent} from './signup';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  //   canActivate: [GuestGuard],
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [GuestGuard]
  },
  {
    path: 'tours',
    component: ToursComponent,
    // canActivate: [GuestGuard]
  },
  {
    path: 'guides',
    component: GuidesComponent,
    // canActivate: [GuestGuard]
  },
  {
    path: 'exhibits',
    component: ExhibitsComponent,
    // canActivate: [GuestGuard]
  },
  {
    path: 'visitors',
    component: VisitorComponent,
    // canActivate: [GuestGuard]
  },
  // {
  //   path: 'change-password',
  //   component: ChangePasswordComponent,
  //   canActivate: [LoginGuard]
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AdminGuard]
  // },
  {
    path: '404',
    component: NotFoundComponent
  },
  // {
  //   path: '403',
  //   component: ForbiddenComponent
  // },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
