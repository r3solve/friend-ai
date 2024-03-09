import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss']
})
export class ChatBarComponent {
  @Input() src:string = "";
  @Input() who: string = "";
  @Output() query = new EventEmitter();

  emitted() {
    this.query.emit("input")
  }
  onPromptSubmit() {
    this.emitted()
  }
}
