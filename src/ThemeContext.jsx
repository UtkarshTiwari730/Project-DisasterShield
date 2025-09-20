import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Removed dark mode functionality - using light theme only
  const theme = {
    colors: {
      background: '#e6f0ff',
      text: '#1a1a1a',
      navBackground: '#3366cc',
      navText: '#ffffff',
      cardBackground: '#ffffff',
      cardText: '#222222',
      buttonPrimary: '#0056b3',
      buttonSecondary: '#17a2b8',
      inputBorder: '#004085',
      inputBackground: '#f0f8ff',
      inputText: '#222222',
      border: '#ccc',
      shadow: '0 4px 8px rgba(0,86,179,0.4)',
      hoverShadow: '0 8px 16px rgba(0,86,179,0.6)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
