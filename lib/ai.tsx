'use server'

import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export async function AiParagraph({prompt}: {prompt: string}) {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: prompt,
  });

  return <p>{response.text}</p>;
}

export async function mock_generateImage(srcImage: string) {
  return `data:"image/jpeg";base64,${srcImage}`;
}
export async function generateImage(srcImage: string) {
  const petPrompt = [
    {
      text: "以下の要件を満たす画像を生成してください。・動物の感情を読み取って、いかにも考えていそうな内容であること・飲食店や旅行サイトの口コミ風の内容であること・動物の顔が隠れない位置に吹き出しを付け足すこと"
    },
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: srcImage,
      },
    }
  ];

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-image-preview",
    contents: petPrompt,
  });


  if (!response) return null;
  if (!response.candidates) return null;
  if (!response.candidates[0].content) return null;
  if (!response.candidates[0].content.parts) return null;

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      console.log('image');
      const imageData = part.inlineData.data;
      return `data:image/png;base64,${imageData}`;
    }
  }

  return null;
}
 