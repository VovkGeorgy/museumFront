import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./features/home/components/home/home.component";
import {LoginComponent} from "./features/login/components/login/login.component";
import {ToursPresentationComponent} from "./features/tours/components/tours-presentation/tours-presentation.component";
import {NotFoundComponent} from "./features/not-found/components/not-found/not-found.component";
import {GuidesComponent} from "./features/guides/components/guides/guides.component";
import {ExhibitsPresentationComponent} from "./features/exhibits/components/exhibits-presentation/exhibits-presentation.component";
import {VisitorsComponent} from "./features/visitors/components/visitors/visitors.component";
import {VisitorGuard} from "./shell/guards/visitor.guard";
import {AdminGuard} from "./shell/guards/admin.guard";
import {AboutComponent} from "./features/about/components/about/about.component";
import {AnonymGuard} from "./shell/guards/anonym.guard";
import {ForbiddenComponent} from "./features/forbiden/components/forbidden/forbidden.component";
import {SignupComponent} from "./features/sing-up/components/signup/signup.component";
import {TourEditComponent} from "./features/tours/components/tour-edit/tour-edit.component";
import {TourViewComponent} from "./features/tours/components/tour-view/tour-view.component";
import {ExhibitEditComponent} from "./features/exhibits/components/exhibit-edit/exhibit-edit.component";
import {ExhibitViewComponent} from "./features/exhibits/components/exhibit-view/exhibit-view.component";
import {GuideGuard} from "./shell/guards/guide.guard";
import {GuideProfileComponent} from "./features/profile/components/guide-profile/guide-profile.component";
import {VisitorProfileComponent} from "./features/profile/components/visitor-profile/visitor-profile.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
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
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "tours",
    component: ToursPresentationComponent,
    canActivate: [VisitorGuard]
  },
  {
    path: "tours/edit",
    component: TourEditComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "tours/view",
    component: TourViewComponent,
    canActivate: [VisitorGuard]
  },
  {
    path: "guides",
    component: GuidesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "exhibits",
    component: ExhibitsPresentationComponent,
  },
  {
    path: "exhibits/edit",
    component: ExhibitEditComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "exhibits/view",
    component: ExhibitViewComponent,
    canActivate: [VisitorGuard]
  },
  {
    path: "visitors",
    component: VisitorsComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "guide-profile",
    component: GuideProfileComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "visitor-profile",
    component: VisitorProfileComponent,
    canActivate: [VisitorGuard]
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "403",
    component: ForbiddenComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
