import { Injectable } from '@angular/core';
import { FilesetResolver, LlmInference } from '@mediapipe/tasks-genai';

@Injectable({
  providedIn: 'root'
})
export class GemmaService {

  llmInference!: LlmInference;

  constructor() { }

  async loadGemmaModel() {
    const genai = await FilesetResolver.forGenAiTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm");
    this.llmInference = await LlmInference.createFromOptions(genai, {
      baseOptions: {
        modelAssetPath: '/assets/models/gemma-2b-it-gpu-int4.bin'
      },
      maxTokens: 1000,
      topK: 40,
      temperature: 0.8,
      randomSeed: 101
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
