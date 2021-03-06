import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExhibitsRoutingModule} from './exhibits-routing.module';
import {ExhibitEditComponent} from './components/exhibit-edit/exhibit-edit.component';
import {ExhibitViewComponent} from './components/exhibit-view/exhibit-view.component';
import {ExhibitsPresentationComponent} from './components/exhibits-presentation/exhibits-presentation.component';
import {ExhibitsService} from './services/exhibits.service';
import {SharedModule} from '../../shared/shared/shared.module';
import {ExhibitComponent} from './containers/exhibit/exhibit.component';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {VisitorGuard} from '../../shell/guards/visitor.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExhibitsRoutingModule
  ],
  declarations: [
    ExhibitComponent,
    ExhibitEditComponent,
    ExhibitViewComponent,
    ExhibitsPresentationComponent
  ],
  providers: [
    ExhibitsService,
    GuideGuard,
    VisitorGuard
  ],
  exports: [
    ExhibitComponent
  ]
})
export class ExhibitsModule {
}
