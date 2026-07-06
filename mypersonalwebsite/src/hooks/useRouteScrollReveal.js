import { useEffect } from 'react';

export default function useRouteScrollReveal(location) {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return undefined;

    const revealIfAlreadyPassed = el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('reveal-visible');
        return true;
      }
      return false;
    };

    if (!window.IntersectionObserver) {
      revealEls.forEach(el => el.classList.add('reveal-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.15 }
    );

    revealEls.forEach(el => {
      if (!revealIfAlreadyPassed(el)) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [location.pathname, location.hash]);
}
