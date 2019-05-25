import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ToursPresentationComponent} from './components/tours-presentation/tours-presentation.component';
import {VisitorGuard} from '../../shell/guards/visitor.guard';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {TourViewComponent} from './components/tour-view/tour-view.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule {
}
