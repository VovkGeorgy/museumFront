import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VisitorsRoutingModule} from './visitors-routing.module';
import {VisitorsComponent} from './containers/visitors/visitors.component';
import {VisitorService} from './services/visitor.service';
import {GuideGuard} from '../../shell/guards/guide.guard';
import {SharedModule} from '../../shared/shared/shared.module';
import { VisitorDetailComponent } from './components/visitor-detail/visitor-detail.component';
import { VisitorCommonComponent } from './containers/visitor-common/visitor-common.component';
import { VisitorUpdateComponent } from './containers/visitor-update/visitor-update.component';
import { VisitorCreateComponent } from './containers/visitor-create/visitor-create.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisitorsRoutingModule
  ],
  declarations: [
    VisitorsComponent,
    VisitorDetailComponent,
    VisitorCommonComponent,
    VisitorUpdateComponent,
    VisitorCreateComponent
  ],
  providers: [
    VisitorService,
    GuideGuard
  ]
})
export class VisitorsModule {
}
