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
        <img
          src={`${import.meta.env.BASE_URL}images/profilepic.jpeg`}
          className="sidebar-profile-pic"
          alt="Seung Hun Jang"
          width="80"
          height="80"
        />
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
          {resumeData.socialLinks && resumeData.socialLinks.map(link => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <i className={link.icon} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle sidebar-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <i className={theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o'} aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}