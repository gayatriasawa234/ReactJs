import React, { createContext, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
const ThemedComponent = () => {
    
  const {theme} = useContext(ThemeContext);
  console.log(theme);
  return <p>Current theme: {theme}</p>;
}
export default ThemedComponent;
