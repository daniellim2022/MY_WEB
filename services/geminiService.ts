import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResult, Category } from "../types";

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

// Initialize client safely
try {
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

export const analyzeLinkWithGemini = async (url: string, userTitle: string): Promise<AIAnalysisResult> => {
  if (!ai) {
    throw new Error("Gemini API Key is missing. Please check your environment configuration.");
  }

  const prompt = `
    Analyze the following website based on its URL and potential name.
    URL: ${url}
    Name Hint: ${userTitle}

    Provide a concise description (in Korean), the most appropriate category, and 3-4 relevant tags.
    If the title is empty or generic, suggest a better title in Korean or English based on the URL.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful web assistant. Respond with valid JSON only.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "Suggested title for the website",
            },
            description: {
              type: Type.STRING,
              description: "A short summary of what this website is for (in Korean)",
            },
            category: {
              type: Type.STRING,
              enum: Object.values(Category),
              description: "The most fitting category",
            },
            tags: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of relevant tags",
            }
          },
          required: ["description", "category", "tags"],
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from Gemini");
    }

    const data = JSON.parse(resultText) as AIAnalysisResult;
    return data;

  } catch (error) {
    console.error("Gemini analysis failed:", error);
    // Fallback defaults if AI fails
    return {
      description: "정보를 가져올 수 없습니다.",
      category: Category.Other,
      tags: [],
      title: userTitle || url
    };
  }
};
