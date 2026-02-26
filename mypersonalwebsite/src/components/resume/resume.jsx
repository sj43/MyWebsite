import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EXPERIENCE_CASE_STUDIES = {
  'Microsoft': 'microsoft',
  'Expedia Group': 'expedia',
};

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
        {/*generated code*/}
        <section id="resume">
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="timeline-wrapper">
                {resumeData.experience && resumeData.experience.map((item, i) => (
                  <div key={i} className="timeline-item reveal">
                    <div className="timeline-dot" />
                    <div className="timeline-card">
                      <div className="timeline-header">
                        <h3 className="timeline-org">{item.organization}</h3>
                        <span className="timeline-years">{item.date}</span>
                      </div>
                      <h4 className="timeline-title">{item.position}</h4>
                      {item.description && (
                        <ul className="timeline-bullets">
                          {item.description.map((desc, j) => (
                            <li key={j}>{desc}</li>
                          ))}
                        </ul>
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
                ))}
              </div>
            </div> {/* main-col end */}
          </div> {/* End Work */}

        </section> {/* Resume Section End*/}
      </React.Fragment>
    );
}
