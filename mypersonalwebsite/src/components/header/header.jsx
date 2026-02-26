import React, { useState, useEffect } from 'react';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const NAV_ITEMS = [
  { id: 'resume',       label: 'Experience' },
  { id: 'portfolio',    label: 'Projects' },
  { id: 'skills',       label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education',    label: 'Education' },
  { id: 'about',        label: 'About' },
  { id: 'contact',      label: 'Contact' },
];

export default function Header({ resumeData, theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('resume');

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id);
    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });
        // Pick the first visible section in DOM order
        const active = ids.find(id => visibleSections.has(id));
        if (active) setActiveSection(active);
      },
      { threshold: [0, 0.15, 0.3], rootMargin: '0px 0px -50% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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