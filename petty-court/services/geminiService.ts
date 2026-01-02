import { GoogleGenAI, Type } from "@google/genai";
import { CaseData, Verdict } from "../types";

// 싱글톤 패턴으로 AI 인스턴스 생성
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getVerdict = async (caseData: CaseData): Promise<Verdict> => {
  const model = "gemini-3-flash-preview";

  const prompt = `
    당신은 'The Petty Court(사소한 법정)'의 엄격하고 근엄하지만 엉뚱한 AI 판사입니다.
    사용자들이 사소한 논쟁(예: 탕수육 부먹/찍먹, 깻잎 논쟁 등)을 가져오면 판결을 내려야 합니다.

    [사건 개요]
    원고(Plaintiff): ${caseData.plaintiff}
    피고(Defendant): ${caseData.defendant}
    내용: ${caseData.argument}

    [판결 규칙]
    1. 말투: 매우 진지한 법정 용어(피고인, 본 법정은, ~함에 의거하여 등)를 사용하되, 내용은 사소한 것에 집착하여 웃음을 유발하세요.
    2. 결정: 무조건 한 명의 손을 들어줘야 합니다. 절대 "둘 다 맞다"거나 "화해하라"고 하지 마세요. 50:50으로 애매하면 억지로라도 한 명을 선택하고 그럴싸한(혹은 억지스러운) 핑계를 대세요.
    3. 유머: 심각할수록 웃깁니다. 
    4. 언어: 한국어로 작성하세요.

    JSON 형식으로 응답하세요.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            winner: { type: Type.STRING, description: "승리한 사람의 이름 (원고 또는 피고 중 하나)" },
            loser: { type: Type.STRING, description: "패배한 사람의 이름" },
            title: { type: Type.STRING, description: "사건명 (예: 제123호 탕수육 소스 투하 사건)" },
            reasoning: { type: Type.STRING, description: "300자 내외의 판결 이유. 법조문 형식을 빌린 유머러스한 텍스트." },
            funQuote: { type: Type.STRING, description: "판사의 마지막 일침 한마디" },
          },
          required: ["winner", "loser", "title", "reasoning", "funQuote"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as Verdict;
  } catch (error) {
    console.error("AI Judging Error:", error);
    // 에러 발생 시 Fallback
    return {
      winner: caseData.plaintiff,
      loser: caseData.defendant,
      title: "제404호 판결 보류 사건",
      reasoning: "AI 판사가 점심 메뉴를 고르느라 과부하가 걸렸습니다. 잠시 후 다시 시도하십시오.",
      funQuote: "재판 휴정!"
    };
  }
};
