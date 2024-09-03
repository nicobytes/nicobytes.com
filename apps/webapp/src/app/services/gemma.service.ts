import { Injectable } from '@angular/core';
import { FilesetResolver, LlmInference } from '@mediapipe/tasks-genai';

@Injectable({
  providedIn: 'root'
})
export class GemmaService {

  private llmInference!: LlmInference;

  async loadGemmaModel() {
    const genai = await FilesetResolver.forGenAiTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm"
    );
    this.llmInference = await LlmInference.createFromOptions(genai, {
      baseOptions: {
          modelAssetPath: '/assets/models/gemma-2b-it-gpu-int4.bin'
      },
      maxTokens: 1000,
      topK: 40,
      temperature: 1,
      randomSeed: 101
  });
  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.llmInference.generateResponse(prompt);
    return response;
  }
}
