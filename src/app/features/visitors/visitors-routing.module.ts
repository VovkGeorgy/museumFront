import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {VisitorsComponent} from './components/visitors/visitors.component';

const routes: Routes = [
  {
    path: "visitors",
    component: VisitorsComponent,
    canActivate: [GuideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorsRoutingModule {
}
