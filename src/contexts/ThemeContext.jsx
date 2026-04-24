import { createContext, useState, useContext } from 'react';

// 1. Création du contexte
const ThemeContext = createContext();

// 2. Création du Provider (le composant qui va entourer l'appli)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook personnalisé pour faciliter l'utilisation
export const useTheme = () => useContext(ThemeContext);