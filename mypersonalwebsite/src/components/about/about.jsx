import React from 'react';
export default function About({ resumeData }) {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>About</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="timeline-wrapper">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-about-text">
                    {resumeData.bio}
                  </p>
                  <p className="timeline-about-text">
                    Based in {resumeData.address}. Feel free to reach out at{' '}
                    <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>.
                  </p>
                  {resumeData.resumeLink && (
                    <a href={resumeData.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-inline" style={{marginTop: '12px'}}>
                      Download Resume <i className="fa fa-download" style={{marginLeft: '6px'}} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}