import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToursRoutingModule} from './tours-routing.module';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {TourViewComponent} from './components/tour-view/tour-view.component';
import {ToursPresentationComponent} from './components/tours-presentation/tours-presentation.component';
import {SharedModule} from '../../shared/shared/shared.module';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {VisitorGuard} from '../../shell/guards/visitor.guard';
import {TourService} from './services/tour.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToursRoutingModule
  ],
  declarations: [
    TourEditComponent,
    TourViewComponent,
    ToursPresentationComponent
  ],
  providers: [
    GuideGuard,
    VisitorGuard,
    TourService,
  ]
})
export class ToursModule { }
