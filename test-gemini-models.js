import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function main() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing from .env");
  }

  const ai = new GoogleGenAI({ apiKey });

  const pager = await ai.models.list();

  for await (const model of pager) {
    console.log(model.name, model.supportedActions);
  }
}

main().catch((error) => {
  console.error(error);
});


/* 

node test-gemini-models.js
◇ injected env (8) from .env // tip: ⌘ multiple files { path: ['.env.local
', '.env'] }
models/gemini-2.5-flash [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.5-pro [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.0-flash [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.0-flash-001 [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.0-flash-lite-001 [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.0-flash-lite [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.5-flash-preview-tts [ 'countTokens', 'generateContent' ]  
models/gemini-2.5-pro-preview-tts [ 'countTokens', 'generateContent', 'bat
chGenerateContent' ]
models/gemma-3-1b-it [ 'generateContent', 'countTokens' ]
models/gemma-3-4b-it [ 'generateContent', 'countTokens' ]
models/gemma-3-12b-it [ 'generateContent', 'countTokens' ]
models/gemma-3-27b-it [ 'generateContent', 'countTokens' ]
models/gemma-3n-e4b-it [ 'generateContent', 'countTokens' ]
models/gemma-3n-e2b-it [ 'generateContent', 'countTokens' ]
models/gemma-4-26b-a4b-it [ 'generateContent', 'countTokens' ]
models/gemma-4-31b-it [ 'generateContent', 'countTokens' ]
models/gemini-flash-latest [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-flash-lite-latest [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-pro-latest [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.5-flash-lite [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.5-flash-image [ 'generateContent', 'countTokens', 'batchGe
nerateContent' ]
models/gemini-3-pro-preview [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-3-flash-preview [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-3.1-pro-preview [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-3.1-pro-preview-customtools [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-3.1-flash-lite-preview [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-3-pro-image-preview [ 'generateContent', 'countTokens', 'bat
chGenerateContent' ]
models/nano-banana-pro-preview [ 'generateContent', 'countTokens', 'batchG
enerateContent' ]
models/gemini-3.1-flash-image-preview [ 'generateContent', 'countTokens', 
'batchGenerateContent' ]
models/lyria-3-clip-preview [ 'generateContent', 'countTokens' ]
models/lyria-3-pro-preview [ 'generateContent', 'countTokens' ]
models/gemini-3.1-flash-tts-preview [ 'generateContent', 'countTokens', 'b
atchGenerateContent' ]
models/gemini-robotics-er-1.5-preview [ 'generateContent', 'countTokens' ]
models/gemini-robotics-er-1.6-preview [
  'generateContent',
  'countTokens',
  'createCachedContent',
  'batchGenerateContent'
]
models/gemini-2.5-computer-use-preview-10-2025 [ 'generateContent', 'count
Tokens' ]
models/deep-research-pro-preview-12-2025 [ 'generateContent', 'countTokens
' ]
models/gemini-embedding-001 [
  'embedContent',
  'countTextTokens',
  'countTokens',
  'asyncBatchEmbedContent'
]
models/gemini-embedding-2-preview [
  'embedContent',
  'countTextTokens',
  'countTokens',
  'asyncBatchEmbedContent'
]
models/aqa [ 'generateAnswer' ]
models/imagen-4.0-generate-001 [ 'predict' ]
models/imagen-4.0-ultra-generate-001 [ 'predict' ]
models/imagen-4.0-fast-generate-001 [ 'predict' ]
models/veo-2.0-generate-001 [ 'predictLongRunning' ]
models/veo-3.0-generate-001 [ 'predictLongRunning' ]
models/veo-3.0-fast-generate-001 [ 'predictLongRunning' ]
models/veo-3.1-generate-preview [ 'predictLongRunning' ]
models/veo-3.1-fast-generate-preview [ 'predictLongRunning' ]
models/veo-3.1-lite-generate-preview [ 'predictLongRunning' ]
models/gemini-2.5-flash-native-audio-latest [ 'countTokens', 'bidiGenerate
Content' ]
models/gemini-2.5-flash-native-audio-preview-09-2025 [ 'countTokens', 'bid
iGenerateContent' ]
models/gemini-2.5-flash-native-audio-pr
*/