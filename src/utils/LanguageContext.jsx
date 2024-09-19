// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use the Language Context
export const useLanguage = () => useContext(LanguageContext);

// Language Provider to wrap the app
export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    // Function to change the language
    const changeLanguage = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
