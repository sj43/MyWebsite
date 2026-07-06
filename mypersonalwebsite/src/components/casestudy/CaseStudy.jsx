import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import caseStudies from './caseStudyData';
import Diagram from './Diagram';

export default function CaseStudy({ theme, toggleTheme }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cs = caseStudies.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cs) {
    return (
      <div className="casestudy-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="cs-back-btn">← Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="casestudy-page">
      {/* Nav bar */}
      <nav className="cs-nav">
        <Link to="/#portfolio" className="cs-back-btn">
          ← Back to Projects
        </Link>
        <button
          className="theme-toggle cs-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Hero — using div to avoid global header background-image CSS */}
      <div className="cs-hero">
        <span className="cs-category">{cs.category}</span>
        <h1 className="cs-title">{cs.name}</h1>
        <p className="cs-tagline">{cs.tagline}</p>
        <div className="cs-tech-stack">
          {cs.techStack.map((tech, i) => (
            <span key={i} className="cs-tech-tag">{tech}</span>
          ))}
        </div>
        <div className="cs-hero-links">
          {cs.url && (
            <a href={cs.url} target="_blank" rel="noopener noreferrer" className="cs-link-btn cs-link-primary">
              <i className="fa fa-external-link" aria-hidden="true" /> Live Demo
            </a>
          )}
          {cs.github && (
            <a href={cs.github} target="_blank" rel="noopener noreferrer" className="cs-link-btn cs-link-secondary">
              <i className="fa fa-github" aria-hidden="true" /> GitHub
            </a>
          )}
        </div>
      </div>

      <main className="cs-body">
        {/* Overview */}
        <section className="cs-section cs-overview">
          <h2>Overview</h2>
          <p>{cs.overview}</p>
        </section>

        {/* Sections */}
        {cs.sections.map((section, i) => (
          <section key={i} className="cs-section">
            <h2>{section.heading}</h2>
            {section.diagramKey && <Diagram diagramKey={section.diagramKey} />}
            {Array.isArray(section.body)
              ? section.body.map((para, j) => <p key={j}>{para}</p>)
              : <p>{section.body}</p>
            }
          </section>
        ))}

        {/* Outcomes */}
        <section className="cs-section cs-outcomes">
          <h2>📌 Key Outcomes</h2>
          <ul className="cs-outcomes-list">
            {cs.outcomes.map((outcome, i) => (
              <li key={i}>{outcome}</li>
            ))}
          </ul>
        </section>

        {/* Navigation between case studies */}
        <div className="cs-nav-footer">
          <Link to="/#portfolio" className="cs-back-btn cs-back-btn-large">
            ← View All Projects
          </Link>
          <div className="cs-other-studies">
            {caseStudies
              .filter(c => c.slug !== slug)
              .slice(0, 2)
              .map(c => (
                <Link
                  key={c.slug}
                  className="cs-other-btn"
                  to={`/project/${c.slug}`}
                >
                  {c.name} →
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
