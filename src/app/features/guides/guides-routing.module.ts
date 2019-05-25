import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminGuard} from '../../shell/guards/admin.guard';
import {GuidesComponent} from './components/guides/guides.component';

const routes: Routes = [
  {
    path: "guides",
    component: GuidesComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule {
}
