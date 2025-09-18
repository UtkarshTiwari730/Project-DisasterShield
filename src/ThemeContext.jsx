import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? '#121212' : '#e6f0ff',
      text: isDarkMode ? '#e0e0e0' : '#1a1a1a',
      navBackground: isDarkMode ? '#1a1a2e' : '#3366cc',
      navText: isDarkMode ? '#a0a0ff' : '#ffffff',
      cardBackground: isDarkMode ? '#222244' : '#ffffff',
      cardText: isDarkMode ? '#c0c0ff' : '#222222',
      buttonPrimary: isDarkMode ? '#7f5af0' : '#0056b3',
      buttonSecondary: isDarkMode ? '#50fa7b' : '#17a2b8',
      inputBorder: isDarkMode ? '#7f5af0' : '#004085',
      inputBackground: isDarkMode ? '#2c2c44' : '#f0f8ff',
      inputText: isDarkMode ? '#e0e0ff' : '#222222',
      border: isDarkMode ? '#444466' : '#ccc',
      shadow: isDarkMode ? '0 4px 8px rgba(127,90,240,0.4)' : '0 4px 8px rgba(0,86,179,0.4)',
      hoverShadow: isDarkMode ? '0 8px 16px rgba(127,90,240,0.6)' : '0 8px 16px rgba(0,86,179,0.6)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
