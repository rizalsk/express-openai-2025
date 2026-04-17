import env from '../../config/env.js';
import { generateOpenAIResponse } from './providers/openai.provider.js';
import { generateGeminiResponse } from './providers/gemini.provider.js';

export async function generateAIResponse(payload) {
  const provider = String(env.AI_PROVIDER || 'openai').toLowerCase();

  if (provider === 'gemini') {
    return generateGeminiResponse(payload);
  }

  return generateOpenAIResponse(payload);
}