import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import caseStudies from '../casestudy/caseStudyData';

const SLUG_MAP = {
  'ME.NU': 'menu',
  'Hackathons': 'hackathons',
  'ICPC': 'icpc',
  'International Collegiate Programming Competition (ICPC)': 'icpc',
};

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'ml', label: 'ML / Data' },
  { key: 'tool', label: 'Tools' },
  { key: 'competitive', label: 'Competitive' },
];

export default function Portfolio({ projectData }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const allProjects = [
    ...(projectData.projects || []),
    ...(projectData.activities || []),
  ];

  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Featured Projects</h1>

          <div className="portfolio-filter-bar">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filtered.map((project, i) => (
              <div key={i} className="portfolio-card">
                <div className="portfolio-card-header">
                  <h3 className="portfolio-card-name">{project.name}</h3>
                  <div className="portfolio-card-links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-link" title="Live Demo">
                        <i className="fa fa-external-link" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" title="GitHub">
                        <i className="fa fa-github" />
                      </a>
                    )}
                  </div>
                </div>

                {project.description && project.description.length > 0 && (
                  <p className="portfolio-card-desc">
                    {project.description[0]}
                  </p>
                )}

                {project.techStack && project.techStack.length > 0 && (
                  <div className="portfolio-card-tech">
                    {project.techStack.slice(0, 6).map((tech, j) => (
                      <span key={j} className="portfolio-tech-tag">{tech}</span>
                    ))}
                  </div>
                )}

                {SLUG_MAP[project.name] && (
                  <div className="portfolio-card-casestudy">
                    <button
                      className="cs-card-btn"
                      onClick={() => navigate(`/project/${SLUG_MAP[project.name]}`)}
                    >
                      Case Study →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}