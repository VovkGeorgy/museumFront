import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuidesRoutingModule} from './guides-routing.module';
import {GuidesCommonComponent} from './components/guides-common/guides-common.component';
import {SharedModule} from '../../shared/shared/shared.module';
import {GuidesService} from './services/guides.service';
import {AdminGuard} from '../../shell/guards/admin.guard';
import {GuideComponent} from './containers/guide/guide.component';
import {GuideDetailComponent} from './components/guide-detail/guide-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GuidesRoutingModule
  ],
  declarations: [
    GuidesCommonComponent,
    GuideComponent,
    GuideDetailComponent
  ],
  providers: [
    GuidesService,
    AdminGuard
  ]
})
export class GuidesModule {
}
