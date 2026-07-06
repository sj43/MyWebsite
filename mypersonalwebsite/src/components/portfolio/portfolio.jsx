import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import caseStudies from '../casestudy/caseStudyData';

// Derive slug map from caseStudyData — maps project name variants to slugs
const SLUG_MAP = Object.fromEntries(
  caseStudies.flatMap(cs => {
    const entries = [[cs.name, cs.slug]];
    // Add short name variants for matching against projectData names
    const shortName = cs.name.split(' — ')[0].split(' · ')[0].trim();
    if (shortName !== cs.name) entries.push([shortName, cs.slug]);
    return entries;
  })
);

// Look up slug by exact name or by checking if the slug appears in the project name
function getSlug(projectName) {
  if (SLUG_MAP[projectName]) return SLUG_MAP[projectName];
  const match = caseStudies.find(cs =>
    projectName.toLowerCase().includes(cs.slug)
  );
  return match ? match.slug : null;
}

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
          <h2>Featured Projects</h2>

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
              <div key={i} className={`portfolio-card cat-${project.category || 'all'}`}>
                <div className="portfolio-card-header">
                  <h3 className="portfolio-card-name">{project.name}</h3>
                  <div className="portfolio-card-links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-link" aria-label={`Live demo of ${project.name}`}>
                        <i className="fa fa-external-link" aria-hidden="true" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" aria-label={`GitHub repository for ${project.name}`}>
                        <i className="fa fa-github" aria-hidden="true" />
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

                {getSlug(project.name) && (
                  <div className="portfolio-card-casestudy">
                    <button
                      className="cs-card-btn"
                      onClick={() => navigate(`/project/${getSlug(project.name)}`)}
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