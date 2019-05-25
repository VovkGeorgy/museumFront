import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExhibitsPresentationComponent} from './components/exhibits-presentation/exhibits-presentation.component';
import {ExhibitEditComponent} from './components/exhibit-edit/exhibit-edit.component';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {ExhibitViewComponent} from './components/exhibit-view/exhibit-view.component';
import {VisitorGuard} from '../../shell/guards/visitor.guard';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitsRoutingModule { }
