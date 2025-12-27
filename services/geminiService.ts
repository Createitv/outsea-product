
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateSyllabus(focus: string) {
    const prompt = `你是一位顶尖的网站出海与SEO专家。请为我设计一个名为「${focus}」的实战小课大纲。
    要求：
    1. 结构清晰，包含4-5个核心模块。
    2. 侧重“实战方法论”，拒绝空洞理论。
    3. 每个模块包含具体的操作流程、推荐工具和常见坑点。
    4. 输出格式为JSON。`;

    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              items: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["title", "description", "items"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  }
}
