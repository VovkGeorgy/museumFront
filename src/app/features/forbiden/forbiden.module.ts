import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbidenRoutingModule } from './forbiden-routing.module';
import {ForbiddenComponent} from './components/forbidden/forbidden.component';

@NgModule({
  imports: [
    CommonModule,
    ForbidenRoutingModule
  ],
  declarations: [
    ForbiddenComponent
  ]
})
export class ForbidenModule { }
