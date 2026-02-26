import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EXPERIENCE_CASE_STUDIES = {
  'Microsoft': 'microsoft',
  'Expedia Group': 'expedia',
};

// Parse "[C# | .NET | Azure]" or "[Go | JS] & [AWS | Jenkins]" into an array of skill strings
function parseTechLine(line) {
  const matches = line.match(/\[([^\]]+)\]/g);
  if (!matches) return null;
  return matches
    .flatMap(m => m.slice(1, -1).split(/[|,]/).map(s => s.trim()))
    .filter(Boolean);
}

export default function Resume({ resumeData }) {
  const navigate = useNavigate();
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    revealEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
      <React.Fragment>
        <section id="resume">
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Experience</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="timeline-wrapper">
                {resumeData.experience && resumeData.experience.map((item, i) => {
                  // Separate description bullets from the tech line
                  const bullets = [];
                  let techSkills = null;
                  if (item.description) {
                    item.description.forEach(desc => {
                      const parsed = parseTechLine(desc);
                      if (parsed) {
                        techSkills = parsed;
                      } else {
                        bullets.push(desc);
                      }
                    });
                  }

                  return (
                    <div key={i} className="timeline-item reveal">
                      <div className="timeline-dot" />
                      <div className="timeline-card">
                        <div className="timeline-header">
                          <h3 className="timeline-org">{item.organization}</h3>
                          <span className="timeline-years">{item.date}</span>
                        </div>
                        <h4 className="timeline-title">{item.position}</h4>
                        {bullets.length > 0 && (
                          <ul className="timeline-bullets">
                            {bullets.map((desc, j) => (
                              <li key={j}>{desc}</li>
                            ))}
                          </ul>
                        )}
                        {techSkills && (
                          <div className="timeline-tech">
                            {techSkills.map((skill, j) => (
                              <span key={j} className="skill-badge">{skill}</span>
                            ))}
                          </div>
                        )}
                        {EXPERIENCE_CASE_STUDIES[item.organization] && (
                          <div className="portfolio-card-casestudy" style={{ marginTop: '14px' }}>
                            <button
                              className="cs-card-btn"
                              onClick={() => navigate(`/project/${EXPERIENCE_CASE_STUDIES[item.organization]}`)}
                            >
                              Case Study →
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}
