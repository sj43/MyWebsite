import React from 'react';
export default function About({ resumeData }) {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>About</span></h1>
          </div>
          <div className="nine columns main-col reveal">
            <div className="about-details">
              <p className="about-contact">
                <span className="about-detail-label">Email</span>
                <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
              </p>
              <p className="about-contact">
                <span className="about-detail-label">Location</span>
                <span>{resumeData.address}</span>
              </p>
            </div>
            {resumeData.resumeLink && (
              <a href={resumeData.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-inline">
                Download Resume <i className="fa fa-download" style={{marginLeft: '6px'}} />
              </a>
            )}
          </div>
        </div>
      </section>
    );
}