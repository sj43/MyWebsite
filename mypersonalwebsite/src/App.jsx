import React, { useCallback, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Resume from './components/resume/resume';
import Achievements from './components/achievements/achievements';
import Education from './components/education/education';
import ContactUs from './components/contactus/contactus';
import Portfolio from './components/portfolio/portfolio';
import Terminal from './components/terminal/terminal';
import CaseStudy from './components/casestudy/CaseStudy';
import Footer from './components/footer/footer';
import resumeData from './components/resume/resumeData';
import projectData from './components/resume/projectData';
import useHashScroll from './hooks/useHashScroll';
import useRouteScrollReveal from './hooks/useRouteScrollReveal';
import useSpotlightCursor from './hooks/useSpotlightCursor';
import useTerminalShortcut from './hooks/useTerminalShortcut';
import useTheme from './hooks/useTheme';

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
          <Footer />
        </main>
      </div>
      <button
        className="terminal-fab"
        onClick={() => setTerminalOpen(true)}
        title="Open terminal (press / or `)"
        aria-label="Open interactive terminal"
      >
        <i className="fa fa-terminal" aria-hidden="true" />
      </button>
      {terminalOpen && <Terminal resumeData={resumeData} projectData={projectData} onClose={() => setTerminalOpen(false)} />}
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [terminalOpen, setTerminalOpen] = useState(false);
  const openTerminal = useCallback(() => setTerminalOpen(true), []);

  useSpotlightCursor();
  useTerminalShortcut(openTerminal);
  useRouteScrollReveal(location);
  useHashScroll(location);

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
