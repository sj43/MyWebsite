import React, { useState } from 'react';
import { getCaseStudySlugForProject } from '../casestudy/caseStudyLinks';
import CaseStudyButton from '../common/CaseStudyButton';
import SkillTags from '../common/SkillTags';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'ml', label: 'ML / Data' },
  { key: 'tool', label: 'Tools' },
  { key: 'competitive', label: 'Competitive' },
];

export default function Portfolio({ projectData }) {
  const [activeFilter, setActiveFilter] = useState('all');

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
            {filtered.map((project, i) => {
              const caseStudySlug = getCaseStudySlugForProject(project);

              return (
              <div key={project.name || i} className={`portfolio-card cat-${project.category || 'all'}`}>
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

                <SkillTags
                  items={project.techStack}
                  limit={6}
                  className="portfolio-card-tech"
                  tagClassName="portfolio-tech-tag"
                />

                {caseStudySlug && (
                  <div className="portfolio-card-casestudy">
                    <CaseStudyButton slug={caseStudySlug} />
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
