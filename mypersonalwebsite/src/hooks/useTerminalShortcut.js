import { useEffect } from 'react';

function isTypingTarget(element) {
  if (!element) return false;
  return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.isContentEditable;
}

export default function useTerminalShortcut(openTerminal) {
  useEffect(() => {
    const handler = event => {
      if ((event.key === '/' || event.key === '`') && !isTypingTarget(document.activeElement)) {
        event.preventDefault();
        openTerminal();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [openTerminal]);
}