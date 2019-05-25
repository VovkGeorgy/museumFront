import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {AboutComponent} from './components/about/about.component';
import {SharedModule} from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
