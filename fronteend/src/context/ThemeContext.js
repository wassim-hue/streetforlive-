import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// ================== 1. Theme Definitions ================== //
const baseTheme = {
  primary: '#0095f6',
  error: '#ed4956',
  success: '#4caf50',
  warning: '#ff9800',
};

const lightTheme = {
  ...baseTheme,
  background: '#fafafa',
  surface: '#ffffff',
  text: '#262626',
  textSecondary: '#8e8e8e',
  border: '#dbdbdb',
  isDark: false,
};

const darkTheme = {
  ...baseTheme,
  background: '#121212',
  surface: '#1e1e1e',
  text: '#f5f5f5',
  textSecondary: '#a8a8a8',
  border: '#333333',
  isDark: true,
};

// ================== 2. Context Setup ================== //
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ================== 3. State Management ================== //
  const [theme, setTheme] = useState(() => {
    // First check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return JSON.parse(savedTheme);
    
    // Fallback to system preference (with default to light if undefined)
    const isSystemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    return isSystemDark ? darkTheme : lightTheme;
  });

  // ================== 4. System Preference Listener ================== //
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only change if user hasn't set a manual preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? darkTheme : lightTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // ================== 5. Theme Persistence & Application ================== //
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', JSON.stringify(theme));
    
    // Apply to document body
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    
    // Set CSS variables for wider usage
    const root = document.documentElement;
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--text', theme.text);
    // Add more variables as needed
  }, [theme]);

  // ================== 6. Toggle Function ================== //
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev.isDark ? lightTheme : darkTheme);
  }, []);

  // ================== 7. Context Value ================== //
  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  // ================== 8. Provider Return ================== //
  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// ================== 9. Custom Hook ================== //
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};