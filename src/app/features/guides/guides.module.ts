import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuidesRoutingModule} from './guides-routing.module';
import {GuidesComponent} from './components/guides/guides.component';
import {SharedModule} from '../../shared/shared/shared.module';
import {GuidesService} from './services/guides.service';
import {AdminGuard} from '../../shell/guards/admin.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GuidesRoutingModule
  ],
  declarations: [
    GuidesComponent
  ],
  providers: [
    GuidesService,
    AdminGuard
  ]
})
export class GuidesModule { }
