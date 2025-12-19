import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeName = 'orange' | 'emerald' | 'sky' | 'rose';

interface Theme {
  name: ThemeName;
  label: string;
  color: string;
}

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: Theme[];
}

const themes: Theme[] = [
  { name: 'orange', label: 'Sunset Orange', color: '#f97316' },
  { name: 'emerald', label: 'Forest Green', color: '#10b981' },
  { name: 'sky', label: 'Ocean Blue', color: '#0ea5e9' },
  { name: 'rose', label: 'Cherry Rose', color: '#f43f5e' },
];

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('builttolast-theme');
      return (saved as ThemeName) || 'orange';
    }
    return 'orange';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'orange') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('builttolast-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
