import React, { createContext, useState, useContext } from 'react';

const translations = {
    en: { welcome: 'Welcome' },
    es: { welcome: 'Bienvenido' },
};
export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const switchLanguage = (lang) => {
        setLanguage(lang)
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};
export default LanguageProvider;