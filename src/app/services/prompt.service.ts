import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { environment } from "../../environments/environment"



@Injectable({
  providedIn: 'root'
})
export class PromptService {
    genAI = new GoogleGenerativeAI("AIzaSyDG8nnWA8iqI44zas9uVbhZqz1WwW-SbcU");
    model = this.genAI.getGenerativeModel({ model: "gemini-pro"})

  constructor() { }
    async run(pr:string) {
      const prompt = pr
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);

}

}
