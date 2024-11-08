import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(toggleTheme)
  console.log(theme);
  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      Toggle Theme
    </button>
  );
};
export default ThemedButton;
