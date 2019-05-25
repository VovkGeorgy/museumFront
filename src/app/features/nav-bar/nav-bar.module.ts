import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarRoutingModule } from './nav-bar-routing.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SharedModule} from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NavBarRoutingModule
  ],
  declarations: [
    NavBarComponent
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
