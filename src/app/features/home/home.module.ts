import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './components/home/home.component';
import {SharedModule} from '../../shared/shared/shared.module';
import {ExhibitsModule} from '../exhibits/exhibits.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ExhibitsModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
