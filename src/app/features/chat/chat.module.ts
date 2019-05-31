import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';
import {ChatBarComponent} from './components/chat-bar/chat-bar.component';
import {SharedModule} from '../../shared/shared/shared.module';

@NgModule({
  declarations: [
    ChatBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule,
  ],
  exports: [
    ChatBarComponent
  ]
})
export class ChatModule {
}
