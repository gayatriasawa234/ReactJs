import React, { createContext, useContext } from 'react';
// Create a Context
export const ThemeContext = createContext('light');

const ThemedComponent = () => {
    
  const theme = useContext(ThemeContext);
  console.log(theme);
  return <p>Current theme: {theme}</p>;
};
// Usage
// const App = () => (
//   <ThemeContext.Provider value="dark">
//     <ThemedComponent />
//   </ThemeContext.Provider>
// );
export default ThemedComponent;
