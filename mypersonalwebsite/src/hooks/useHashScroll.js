import { useEffect } from 'react';

function getHashId(hash) {
  if (!hash) return '';
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
}

export default function useHashScroll(location) {
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(getHashId(location.hash));
      if (target) {
        target.scrollIntoView();
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
}