import React from 'react';

export default function Education({ resumeData }) {
  return (
    <section id="education">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-org">{resumeData.education.school}</h3>
                  <span className="timeline-years">{resumeData.education.date}</span>
                </div>
                <h4 className="timeline-title">{resumeData.education.major} · GPA: {resumeData.education.gpa}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
