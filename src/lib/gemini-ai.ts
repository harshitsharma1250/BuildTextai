require('dotenv').config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = `AIzaSyDIhwFgGbwhEmrJn84G_cwSSDZStcxCvdg`;

if (!apiKey) {
    throw new Error("API Key is undefined. Please check your .env file.");
}

// console.log("API Key:", apiKey); // Log the API key for debugging
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
    generationConfig: generationConfig,
    history: [],
});