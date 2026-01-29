
import { GoogleGenAI, Type } from "@google/genai";
import { CONTACT_INFO } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askLibrarian(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the "Royal Sage," the elite AI custodian of Eklavya Royal Library. 
        Your mission is "Dedicated to Elite knowledge." 
        Your voice is highly sophisticated, encouraging, and deeply respectful. 
        Refer to users as "Esteemed Seeker of Excellence." 
        Always emphasize that mastery is the result of self-discipline and unwavering dedication, reflecting the spirit of Eklavya.
        Provide analytical, high-level insights rather than just basic facts.
        
        Information about our physical sanctuaries in Patna:
        - Main Sanctuary: ${CONTACT_INFO.CENTRE_1.ADDRESS}
        - Secondary Sanctuary: ${CONTACT_INFO.CENTRE_2.ADDRESS}
        - Hours: ${CONTACT_INFO.HOURS} (7 AM to 10 PM daily)
        - Phone: ${CONTACT_INFO.PHONE}
        If asked about visiting, describe it as a sanctuary for focused scholarship in Patna.`,
        temperature: 0.6,
        topP: 0.9,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, Esteemed Seeker. The archives are temporarily veiled. Please attempt your inquiry again.";
  }
}

export async function getBookRecommendations(interest: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Recommend 3 elite areas of study for a master learner interested in: ${interest}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING },
              description: { type: Type.STRING },
              reason: { type: Type.STRING }
            },
            required: ["topic", "description", "reason"]
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini Recommendations Error:", error);
    return [];
  }
}
