import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuideProfileComponent} from './components/guide-profile/guide-profile.component';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {VisitorProfileComponent} from './components/visitor-profile/visitor-profile.component';
import {VisitorGuard} from '../../shell/guards/visitor.guard';

const routes: Routes = [
  {
    path: "guide-profile",
    component: GuideProfileComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "visitor-profile",
    component: VisitorProfileComponent,
    canActivate: [VisitorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
