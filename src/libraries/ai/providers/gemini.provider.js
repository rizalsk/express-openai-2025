import { GoogleGenAI } from '@google/genai';
import env from '../../../config/env.js';

let client = null;

function getClient() {
  if (!env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is missing');
  }

  if (!client) {
    client = new GoogleGenAI({
      apiKey: env.GEMINI_API_KEY,
    });
  }

  return client;
}

export async function generateGeminiResponse({
  message,
  systemPrompt = 'You are a helpful assistant.',
}) {
  const gemini = getClient();

  const response = await gemini.models.generateContent({
    model: env.GEMINI_MODEL,
    contents: `${systemPrompt}\n\nUser: ${message}`,
  });

  return {
    provider: 'gemini',
    model: env.GEMINI_MODEL,
    text: response.text || 'No response generated.',
    raw: response,
  };
}