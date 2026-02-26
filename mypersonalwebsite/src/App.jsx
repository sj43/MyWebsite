import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Resume from './components/resume/resume';
import Achievements from './components/achievements/achievements';
import Education from './components/education/education';
import ContactUs from './components/contactus/contactus';
import Portfolio from './components/portfolio/portfolio';
import Terminal from './components/terminal/terminal';
import CaseStudy from './components/casestudy/CaseStudy';
// import Testimonials from  './components/testimonials/testimonials';
import Footer from './components/footer/footer';
import resumeData from './components/resume/resumeData';
import projectData from './components/resume/projectData';

function MainPage({ theme, toggleTheme, terminalOpen, setTerminalOpen }) {
  return (
    <div className="App">
      <div className="site-layout">
        <Header resumeData={resumeData} theme={theme} toggleTheme={toggleTheme}/>
        <main className="content-col">
          <Resume resumeData={resumeData} projectData={projectData}/>
          <Portfolio projectData={projectData}/>
          <Achievements resumeData={resumeData}/>
          <Education resumeData={resumeData}/>
          <ContactUs resumeData={resumeData} />
          {/* <Testimonials /> */}
          <Footer />
        </main>
      </div>
      <button
        className="terminal-fab"
        onClick={() => setTerminalOpen(true)}
        title="Open terminal (press / or `)"
        aria-label="Open interactive terminal"
      >
        <i className="fa fa-terminal" />
      </button>
      {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      // Open terminal on '/' or '`' key, but not when typing in an input
      if ((e.key === '/' || e.key === '`') &&
          document.activeElement.tagName !== 'INPUT' &&
          document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setTerminalOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            theme={theme}
            toggleTheme={toggleTheme}
            terminalOpen={terminalOpen}
            setTerminalOpen={setTerminalOpen}
          />
        }
      />
      <Route
        path="/project/:slug"
        element={<CaseStudy theme={theme} toggleTheme={toggleTheme} />}
      />
    </Routes>
  );
}