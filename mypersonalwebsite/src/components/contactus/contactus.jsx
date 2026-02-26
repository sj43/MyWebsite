import React from 'react';

export default function ContactUs({ resumeData }) {
    return (
      <section id="contact">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>Get In Touch</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="timeline-wrapper">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-about-text">
                    Based in {resumeData.address}. Feel free to reach out at{' '}
                    <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px'}}>
                    <a href={`mailto:${resumeData.email}`} className="btn-inline">
                      <i className="fa fa-envelope" style={{marginRight: '6px'}} /> Email Me
                    </a>
                    {resumeData.resumeLink && (
                      <a href={resumeData.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-inline">
                        Download Resume <i className="fa fa-download" style={{marginLeft: '6px'}} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}