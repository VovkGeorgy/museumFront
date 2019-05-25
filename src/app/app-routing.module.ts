import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ToursPresentationComponent} from "./features/tours/components/tours-presentation/tours-presentation.component";
import {NotFoundComponent} from "./features/not-found/components/not-found/not-found.component";
import {VisitorsComponent} from "./features/visitors/components/visitors/visitors.component";
import {VisitorGuard} from "./shell/guards/visitor.guard";
import {TourEditComponent} from "./features/tours/components/tour-edit/tour-edit.component";
import {TourViewComponent} from "./features/tours/components/tour-view/tour-view.component";
import {GuideGuard} from "./shell/guards/guide.guard";
import {GuideProfileComponent} from "./features/profile/components/guide-profile/guide-profile.component";
import {VisitorProfileComponent} from "./features/profile/components/visitor-profile/visitor-profile.component";
import {HomeComponent} from './features/home/components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
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
    path: "visitors",
    component: VisitorsComponent,
    canActivate: [GuideGuard]
  },
  // {
  //   path: "**",
  //   redirectTo: "/404"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
