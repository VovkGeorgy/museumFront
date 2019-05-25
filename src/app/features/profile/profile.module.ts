import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {GuideProfileComponent} from './components/guide-profile/guide-profile.component';
import {VisitorProfileComponent} from './components/visitor-profile/visitor-profile.component';
import {SharedModule} from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    GuideProfileComponent,
    VisitorProfileComponent
  ],
  exports: [
    GuideProfileComponent
  ]
})
export class ProfileModule { }
