import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavBarRoutingModule} from './nav-bar-routing.module';
import {NavBarComponent} from './containers/nav-bar/nav-bar.component';
import {SharedModule} from '../../shared/shared/shared.module';
import { TabSetComponent } from './components/tab-set/tab-set.component';
import { LoginBarComponent } from './components/login-bar/login-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NavBarRoutingModule
  ],
  declarations: [
    NavBarComponent,
    TabSetComponent,
    LoginBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [

  ]
})
export class NavBarModule {
}
