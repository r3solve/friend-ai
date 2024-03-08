import { Component, Input } from '@angular/core';
import { PromptService } from "../../services/prompt.service";
@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss']
})
export class ChatHomeComponent {
  @Input() imgUrl = "../../assets/ai.jpg";
  name:string = "James"
  constructor(private prompt: PromptService) {

  }

  getPrompt(pr:string, refcomp:any):void {
    this.prompt.run(pr);
    refcomp.value = "";
  }
}
