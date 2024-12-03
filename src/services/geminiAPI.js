const API_KEY = "your_gemini_api_key_here"; // Replace with your API key
const BASE_URL = "https://gemini-api-url.com"; // Replace with actual Gemini API base URL

export const fetchSummary = async (pdfContent) => {
  try {
    const response = await fetch(`${BASE_URL}/summarize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ content: pdfContent }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching summary:", error);
    throw error;
  }
};
