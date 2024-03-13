import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { environment } from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class PromptService {
    genAI = new GoogleGenerativeAI("AIzaSyDG8nnWA8iqI44zas9uVbhZqz1WwW-SbcU");
    model = this.genAI.getGenerativeModel({ model: "gemini-pro"})
    chat_history = [
            {
              role: "user",
              parts: "Hello, I have 2 dogs in my house.",
            },
            {
              role: "model",
              parts: "Great to meet you. What would you like to know?",
            },
          ]

  constructor() { }
    async converse(pr:string):Promise<string> {
      const prompt = pr
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text
  }

async run(pr: string): Promise<string> {
  try {
    const chat = this.model.startChat({
      history: this.chat_history,
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
    
    const msg = pr;
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = await response.text(); // Await the text promise
    this.appendToHistory([{ role: "user", parts: msg }, { role: "model", parts: text }]);
    return text; // Return the resulting string
  } catch (error) {
    console.error("Error:", error);
    return ""; // Return an empty string in case of an error
  }
}

  private appendToHistory(text:any) {
      this.chat_history = [this.chat_history, ...text]
  }

}
