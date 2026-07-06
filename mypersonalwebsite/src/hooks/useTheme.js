import { useCallback, useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme';
const DARK = 'dark';
const LIGHT = 'light';

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === DARK || saved === LIGHT) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(current => current === DARK ? LIGHT : DARK);
  }, []);

  return { theme, toggleTheme };
}