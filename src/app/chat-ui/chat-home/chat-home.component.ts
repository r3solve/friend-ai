import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, ViewContainerRef} from '@angular/core';
import { PromptService } from "../../services/prompt.service";
import { ChatBarComponent } from "../chat-bar/chat-bar.component";

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss']
})
export class ChatHomeComponent implements OnInit, AfterViewInit{
  @Input() imgUrl!:string;
  src :string = this.imgUrl ?? "../../assets/ai.jpg";
  name:string = "";
  private answer:string = "";

  @ViewChild('chatRef', { read: ViewContainerRef} ) container!: ViewContainerRef;

  constructor(private prompt: PromptService, private render: Renderer2) {}
  ngOnInit():void {
    
  }
  ngAfterViewInit():void {
    
  }
  async getPrompt(pr:string, refcomp:any) {
    this.createAndAppend(pr, "You");
    const answer = await this.prompt.run(pr);
   
    try {
      refcomp.value = ""; 
      this.createAndAppend(answer, "Bot")
    }
    catch (e) {
      console.log(e)
    }

    


  }
  createAndAppend(searchText:string, person:string):void {
    const widgetRef = this.container.createComponent(ChatBarComponent)
    widgetRef.instance.content = searchText;
    widgetRef.instance.src = this.src;
    widgetRef.instance.who = person;
  }

}
