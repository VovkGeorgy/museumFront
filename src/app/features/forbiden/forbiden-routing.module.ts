import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForbiddenComponent} from './components/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: "403",
    component: ForbiddenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForbidenRoutingModule { }
