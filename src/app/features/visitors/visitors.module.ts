import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VisitorsRoutingModule} from './visitors-routing.module';
import {VisitorsComponent} from './components/visitors/visitors.component';
import {VisitorService} from './services/visitor.service';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {SharedModule} from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisitorsRoutingModule
  ],
  declarations: [
    VisitorsComponent
  ],
  providers: [
    VisitorService,
    GuideGuard
  ]
})
export class VisitorsModule {
}
