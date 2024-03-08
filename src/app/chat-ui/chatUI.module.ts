import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations:[
    ChatHomeComponent
  ],
	imports: [CommonModule, ChatBarComponent],
	exports: [ChatHomeComponent]
})
export class ChatUIModule {}