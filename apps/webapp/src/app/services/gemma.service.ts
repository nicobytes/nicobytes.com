import { Injectable, signal } from '@angular/core';
import { FilesetResolver, LlmInference } from '@mediapipe/tasks-genai';

@Injectable({
  providedIn: 'root'
})
export class GemmaService {

  llmInference!: LlmInference;

  constructor() { }

  async loadGemmaModel() {
    console.log('loading model');
    const genai = await FilesetResolver.forGenAiTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm");
    console.log('genai');
    this.llmInference = await LlmInference.createFromOptions(genai, {
      baseOptions: {
        modelAssetPath: '/assets/models/gemma.bin'
      },
    });
    console.log('model loaded');
  }

  async generateResponse(prompt: string): Promise<string> {
    if (!this.llmInference) {
      throw new Error('Model not loaded');
    }
    const response = await this.llmInference.generateResponse(prompt);
    return response;
  }
}
