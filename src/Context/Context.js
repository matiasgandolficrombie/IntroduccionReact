import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

//Prueba


  return (
    <ThemeContext.Provider 
      value={{ 
        darkMode,
        toggleDarkMode 
      }}>
        
      {children}
    </ThemeContext.Provider>
  );
};
