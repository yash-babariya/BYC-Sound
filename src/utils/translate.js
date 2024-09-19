// src/utils/translate.js
import translate from 'translate';

// Configure the translation API key and other settings if required
translate.engine = 'google'; // or 'deepl' for DeepL
translate.key = 'YOUR_GOOGLE_API_KEY'; // Replace with your API key if needed

export const translateText = async (text, targetLanguage) => {
    try {
        const translation = await translate(text, { to: targetLanguage });
        return translation;
    } catch (error) {
        console.error('Error translating text:', error);
        return text; // Fallback to original text
    }
};
