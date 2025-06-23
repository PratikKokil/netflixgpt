
import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constant";


if (!GEMINI_KEY) {
  throw new Error("GEMINI_KEY is not defined. Please check your .env file.");
}

const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });
export default ai;