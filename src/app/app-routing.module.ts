import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ToursComponent} from './tours/tours.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GuidesComponent} from "./guides/guides.component";
import {ExhibitsComponent} from "./exhibits/exhibits.component";
import {VisitorComponent} from "./visitor/visitor.component";
import {UserGuard} from "./guard/user.guard";
import {AdminGuard} from "./guard/admin.guard";
import {AboutComponent} from "./about/about.component";
import {AnonymGuard} from "./guard/anonym.guard";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {SignupComponent} from "./signup/signup.component";
import {ToursEditComponent} from "./tours/tours-edit/tours-edit.component";
import {ToursViewComponent} from "./tours/tours-view/tours-view.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  //   canActivate: [AnonymGuard],
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AnonymGuard]
  },
  {
    path: 'editProfile',
    component: ProfileComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    // canActivate: [UserGuard]
  },
  {
    path: 'tours',
    component: ToursComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'tours/edit',
    component: ToursEditComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'tours/view',
    component: ToursViewComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'guides',
    component: GuidesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'exhibits',
    component: ExhibitsComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'visitors',
    component: VisitorComponent,
    canActivate: [AdminGuard]
  },
  // {
  //   path: 'change-password',
  //   component: ChangePasswordComponent,
  //   canActivate: [AnonymGuard]
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
  {
    path: '403',
    component: ForbiddenComponent
  },
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
