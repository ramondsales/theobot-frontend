/**
 * Sends a question to the TheoBot API and returns the response
 */
export const sendQuestion = async (question: string): Promise<string> => {
  try {
    // Replace with your actual API endpoint
   const API_URL = 'https://55a8ae56-4c6d-4997-9503-374a81a986f1-00-8w4ai36gr5qr.janeway.replit.dev/ask';

    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.answer || 'Sorry, I couldn\'t process your question at this time.';
  } catch (error) {
    console.error('Error sending question:', error);
    return 'Sorry, there was an error connecting to the server. Please try again later.';
  }
};
