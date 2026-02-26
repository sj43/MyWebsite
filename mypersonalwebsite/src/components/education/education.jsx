import React from 'react';

export default function Education({ resumeData }) {
  return (
    <section id="education">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>{resumeData.education.school}</h3>
              <p className="info">{resumeData.education.major}
                <span>•</span>
                <em className="date">{resumeData.education.date}</em>
                <span>•</span>
                <em className="date">GPA: {resumeData.education.gpa}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
