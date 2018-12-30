import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ToursComponent} from './tours/tours.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GuidesComponent} from "./guides/guides.component";
import {ExhibitsComponent} from "./exhibits/exhibits.component";
import {VisitorComponent} from "./visitor/visitor.component";
import {VisitorGuard} from "./guard/visitor.guard";
import {AdminGuard} from "./guard/admin.guard";
import {AboutComponent} from "./about/about.component";
import {AnonymGuard} from "./guard/anonym.guard";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {SignupComponent} from "./signup/signup.component";
import {ToursEditComponent} from "./tours/tours-edit/tours-edit.component";
import {ToursViewComponent} from "./tours/tours-view/tours-view.component";
import {ProfileComponent} from "./profile/profile.component";
import {ExhibitsEditComponent} from "./exhibits/exhibits-edit/exhibits-edit.component";
import {ExhibitsViewComponent} from "./exhibits/exhibits-view/exhibits-view.component";
import {GuideGuard} from "./guard/guide.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
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
    canActivate: [VisitorGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'tours',
    component: ToursComponent,
    canActivate: [VisitorGuard]
  },
  {
    path: 'tours/edit',
    component: ToursEditComponent,
    canActivate: [GuideGuard]
  },
  {
    path: 'tours/view',
    component: ToursViewComponent,
    canActivate: [VisitorGuard]
  },
  {
    path: 'guides',
    component: GuidesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'exhibits',
    component: ExhibitsComponent,
  },
  {
    path: 'exhibits/edit',
    component: ExhibitsEditComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'exhibits/view',
    component: ExhibitsViewComponent,
    canActivate: [VisitorGuard]
  },
  {
    path: 'visitors',
    component: VisitorComponent,
    canActivate: [AdminGuard]
  },
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
