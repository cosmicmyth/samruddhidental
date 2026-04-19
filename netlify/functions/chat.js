// netlify/functions/chat.js
// This runs on Netlify's server — the API key never reaches the browser.

const SYSTEM_INSTRUCTION = `You are a professional and helpful dental and skin care clinic assistant for Samruddhi Dental Care & Advanced Laser Center.

CLINIC OVERVIEW:
This clinic provides advanced dental care and skin/aesthetic treatments using modern technology and professional expertise. The clinic focuses on comfort, hygiene, and high-quality treatment.

CORE SERVICES:
1. Dental Treatments:
* Root Canal Treatment
* Tooth Extraction
* Teeth Whitening
* Dental Implants
* Braces and Aligners
* Smile Designing
* General Dental Checkups

2. Skin & Aesthetic Treatments:
* Laser Hair Removal
* Acne Treatment
* Skin Rejuvenation
* Chemical Peels
* Facial Treatments
* Pigmentation Treatment

CLINIC FEATURES:
* Modern and clean facility
* Advanced dental and skin care equipment
* Comfortable treatment environment
* Professional and experienced doctors
* Focus on hygiene and patient safety

LOCATION & TIMINGS:
* Location: CIDCO N5, BESIDE NAIK COLLEGE, Town Center, Connaught Place, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431003, India.
* Timings: Monday to Saturday (10:00 AM - 2:00 PM, and 5:00 PM - 9:00 PM). Sunday (Only on Appointment Basis).

CONTACT & BOOKING:
* Phone / WhatsApp: 09765799994
* Appointments available via website or WhatsApp
* Users are encouraged to contact directly for exact pricing and availability

CHATBOT BEHAVIOR RULES:
1. Only provide information based on this data.
2. Do NOT guess or create new treatments or pricing.
3. If information is missing, respond EXACTLY WITH: "For accurate details, please contact us directly on WhatsApp."
4. Encourage booking via WhatsApp.
5. Keep responses short, clear, and professional.

GOAL:
Help users understand services quickly and guide them to contact or book an appointment, especially via WhatsApp.`;

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured on server.' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body.' }) };
  }

  const { history } = body;
  if (!Array.isArray(history) || history.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'history array is required.' }) };
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          contents: history,
          generationConfig: { temperature: 0.1 },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Gemini API error:', err);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Gemini API returned an error.' }),
      };
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'For accurate details, please contact us directly on WhatsApp.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
};
