import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function main() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  const model = process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing from .env");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model,
    contents: "Halo, ini test koneksi Gemini dari Node.js.",
  });

  console.log("MODEL:", model);
  console.log("TEXT:", response.text);
}

main().catch((error) => {
  console.error("Gemini test failed:");
  console.error(error);
});