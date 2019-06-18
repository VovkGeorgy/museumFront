import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ToursPresentationComponent} from './components/tours-presentation/tours-presentation.component';
import {VisitorGuard} from '../../shell/guards/visitor.guard';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {TourViewComponent} from './components/tour-view/tour-view.component';
import {ToursResourceGuard} from "./guards/tours-resource-guard.service";

const routes: Routes = [
  {
    path: "",
    component: ToursPresentationComponent,
    canActivate: [VisitorGuard, ToursResourceGuard]
  },
  {
    path: "edit",
    component: TourEditComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "view",
    component: TourViewComponent,
    canActivate: [VisitorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule {
}
