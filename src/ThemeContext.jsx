import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('home');
  const [themeColor, setThemeColor] = useState('');

  const changeTheme = (newTheme, newThemeColor) => {
    setTheme(newTheme);
    setThemeColor(newThemeColor);
    document.body.style.background = newThemeColor;
    document.body.style.transition = 'background-color 0.8s ease';
  };

  const value = {
    theme,
    themeColor,
    changeTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
};
