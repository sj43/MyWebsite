import React, { useState, useEffect, useRef, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'resume',       label: 'Experience' },
  { id: 'portfolio',    label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education',    label: 'Education' },
  { id: 'contact',      label: 'Get In Touch' },
];

export default function Header({ resumeData, theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('resume');
  const clickLockRef = useRef(null);   // holds the section id during a nav-click scroll

  // Nav-click handler: set the section immediately and suppress scroll
  // detection for 800ms so smooth-scroll doesn't override the choice.
  const scrollTo = useCallback((id) => (e) => {
    e.preventDefault();
    setActiveSection(id);
    clickLockRef.current = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { clickLockRef.current = null; }, 800);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id);

    const detectActive = () => {
      // While a nav-click smooth-scroll is in progress, don't override.
      if (clickLockRef.current) return;

      // A section activates when its top crosses 200px below the viewport top.
      const offset = 200;
      let best = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          best = id;
        }
      }
      setActiveSection(best);
    };

    window.addEventListener('scroll', detectActive, { passive: true });
    detectActive(); // set initial active section
    return () => window.removeEventListener('scroll', detectActive);
  }, []);

  return (
    <aside className="sidebar-col">
      {/* Profile */}
      <div className="sidebar-top">
        <h1 className="sidebar-name">{resumeData.name}</h1>
        <p className="sidebar-bio">{resumeData.bio}</p>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav" aria-label="Page sections">
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={scrollTo(id)}
            className={`sidebar-nav-item${activeSection === id ? ' active' : ''}`}
          >
            <span className="nav-line" aria-hidden="true" />
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom: socials + theme toggle */}
      <div className="sidebar-bottom">
        <ul className="sidebar-social">
          <li>
            <a href="https://www.linkedin.com/in/shjang956/?locale=en_US" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sj43" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa fa-github" />
            </a>
          </li>
          <li>
            <a href="https://devpost.com/sj43?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" aria-label="Devpost">
              <i className="fa fa-book" />
            </a>
          </li>
        </ul>
        <button
          className="theme-toggle sidebar-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <i className={theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o'} />
        </button>
      </div>
    </aside>
  );
}