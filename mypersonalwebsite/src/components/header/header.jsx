import React, { useState, useEffect } from 'react';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header({ resumeData, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'resume', 'portfolio', 'skills', 'achievements', 'contact'];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      <header id="home" className="hero-gradient">
        <nav id="nav-wrap" className={scrolled ? 'nav-glass scrolled' : 'nav-glass'}>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className={activeSection === 'home' ? 'current' : ''}><a className="smoothscroll" href="#home" onClick={scrollTo('home')}>Home</a></li>
            <li className={activeSection === 'about' ? 'current' : ''}><a className="smoothscroll" href="#about" onClick={scrollTo('about')}>About</a></li>
            <li className={activeSection === 'resume' ? 'current' : ''}><a className="smoothscroll" href="#resume" onClick={scrollTo('resume')}>Resume</a></li>
            <li className={activeSection === 'portfolio' ? 'current' : ''}><a className="smoothscroll" href="#portfolio" onClick={scrollTo('portfolio')}>Projects</a></li>
            <li className={activeSection === 'contact' ? 'current' : ''}><a className="smoothscroll" href="#contact" onClick={scrollTo('contact')}>Contact</a></li>
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o'} />
          </button>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <img
              className="hero-profile-pic"
              src={`${resumeData.imagebaseurl}images/profilepic.jpeg`}
              alt={resumeData.name}
            />
            <h1 className="responsive-headline">{resumeData.name}</h1>
            <h3 className="hero-role">{resumeData.role}</h3>
            <hr/>
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/shjang956/?locale=en_US"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/sj43"><i className="fa fa-github" /></a></li>
              <li><a href="https://devpost.com/sj43?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"><i className="fa fa-book"></i></a></li>
            </ul>
            <div className="hero-cta">
              <a className="smoothscroll button hero-btn-primary" href="#resume" onClick={scrollTo('resume')}>View My Work</a>
              <a href={resumeData.resumeLink} target="_blank" rel="noopener noreferrer" className="button hero-btn-secondary">Download Resume</a>
            </div>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about" onClick={scrollTo('about')}><i className="icon-down-circle" /></a>
        </p>
      </header>
    </React.Fragment>
  );
}