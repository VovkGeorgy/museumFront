import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from '../../shell/guards/admin.guard';
import {GuideComponent} from './containers/guide/guide.component';

const routes: Routes = [
  {
    path: "guides",
    component: GuideComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule {
}
