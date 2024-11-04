import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) =>
            (prev === 'light' ? 'light' : 'dark'));
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;
