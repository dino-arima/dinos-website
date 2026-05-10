'use server';

import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { getHpgSearchLink } from "./hpg";


const ai = new GoogleGenAI({});

export async function generateQuestions() {
  const prompt = 
`飲食店レコメンド用のYes/No質問を5問から10問の間でランダムに生成してください。
条件:
-日本語
-短くシンプル
-食の好みに関する内容`;

  const option = {
    model: "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.LOW,
      },
      responseMimeType: "application/json",
      responseJsonSchema: {
        type: "array",
        items: {
          questions: { type: "string" },
        },
      },
    },
  };


  try {
    const result = await ai.models.generateContent(option);
    const data = JSON.parse(result?.text || '');
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function findRestaurant(area: string, responce: string) {
  const prompt = 
`あなたはちょっとユーモアのあるグルメ案内人です。以下の条件に合う実在の飲食店をおすすめしてください。
【エリア】
${area}
【ユーザー傾向】
${responce}
【条件】
-日本語
-実在する飲食店であること
-100文字程度
-少しだけクスッとする表現を入れる`;

  const option = {
    model: "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.LOW,
      },
      responseMimeType: "application/json",
      responseJsonSchema: {
        type: "object",
        properties: {
          restaurantName: { type: "string" },
          restaurantDescription: { type: "string" },
          restaurantArea: { type: "string", description: "都道府県名（例：東京都、北海道、大阪府）" },
        },
        required: ["restaurantName", "restaurantDescription"]
      },
    },
  };

  try {
    const result = await ai.models.generateContent(option);
    const data = JSON.parse(result?.text || '');

    const url = await getHpgSearchLink(data.restaurantName, data.restaurantArea);
    console.log(url);
    data.url = url;
    return data;
  } catch (error) {
    console.log(error);
    return {restaurantName: null, restaurantDescription: null};
  }
}