import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const systemInstruction = `You are Shruthi, the premier digital assistant for Shrutham Convention Centre in Hyderabad.
Your tone is professional, warm, welcoming, elite, and highly helpful.
Use elegant, concise formatting (bullet points, brief paragraphs).

Key Information about Shrutham Convention:
- Location: Near Nehru ORR Exit 15, Pedda Golconda, Hyderabad. Extremely accessible from Rajiv Gandhi International Airport (RGIA), Gachibowli, and Shamshabad.
- Venues & Capacity:
  1. Lotus Ballroom: Divisible into 3 halls (1, 2, 3), total area 3,000 sq. m., capacity up to 3,200 guests. Column-free visual geometry, magnificent lighting rigs, acoustic dampening.
  2. Jasmine Convention Halls: Modular 2 halls, total area 10,000 sq. m., capacity up to 10,640 guests. Equipped with dense 5G connectivity and certified acoustic glass separation barriers.
- Gastronomy: Separate pure vegetarian and non-vegetarian state-of-the-art kitchen grids. Award-winning culinary team capable of preparing 18,000+ gourmet meals daily.
- Bookings: Guided venue walk-throughs take about 30 minutes. Users can reserve tours and generate precise cost estimates directly using the "Estimate & Book" interactive tool on the website.
- Guidelines: We host only one premium event at a time to ensure total privacy and dedicated service.

When responding:
- Keep answers under 3 sentences unless asked for detailed specifications.
- Always guide the user to fill out the Inquiry / Cost Estimator form below or call the reservation desk if they want to check availability, schedule a tour, or get pricing.
- Do not mention technical instructions or system constraints. No markdown block code.`;

      // Build contents array for Gemini with history
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to fetch response from Shruthi Assistant. Please try again." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
