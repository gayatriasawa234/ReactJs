import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
const Greeting = () => {
  const { language, switchLanguage, translations } = useContext(LanguageContext);
  
  return (
    <div>
      <h1>{translations[language].welcome}</h1>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('es')}>Spanish</button>
    </div>
  );
};
export default Greeting;