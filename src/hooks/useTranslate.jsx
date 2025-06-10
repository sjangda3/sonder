import { useEffect, useState } from "react";
import OpenAI from "openai";

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        console.log('API Key exists:', !!apiKey);
        
        if (!apiKey) {
          setError("OpenAI API key is not configured. Check .env.local file.");
          return;
        }

        const openai = new OpenAI({
          apiKey: apiKey,
          dangerouslyAllowBrowser: true,
        });

        console.log('Attempting translation...');
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a professional translator. Provide direct translations without any additional text or explanations."
            },
            {
              role: "user",
              content: `Translate this text to ${selectedLanguage}: ${sourceText}`
            },
          ],
        });

        const data = response.choices[0].message.content;
        setTargetText(data);
        setError(null);
      } catch (error) {
        console.error("Error details:", {
          message: error.message,
          type: error.type,
          stack: error.stack
        });
        setError(`Translation failed: ${error.message}`);
        setTargetText("");
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500); 

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return { targetText, error };
};

export default useTranslate;