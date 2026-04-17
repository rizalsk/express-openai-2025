import OpenAI from 'openai';
import env from '../../../config/env.js';

let client = null;

function getClient() {
  if (!env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is missing');
  }

  if (!client) {
    client = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    });
  }

  return client;
}

export async function generateOpenAIResponse({
  message,
  systemPrompt = 'You are a helpful assistant.',
}) {
  const openai = getClient();

  const response = await openai.responses.create({
    model: env.OPENAI_MODEL,
    instructions: systemPrompt,
    input: message,
  });

  return {
    provider: 'openai',
    model: env.OPENAI_MODEL,
    text: response.output_text || 'No response generated.',
    raw: response,
  };
}