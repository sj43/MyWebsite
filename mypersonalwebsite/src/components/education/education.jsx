import React from 'react';
import SectionShell from '../common/SectionShell';
import TimelineItem from '../common/TimelineItem';

export default function Education({ resumeData }) {
  return (
    <SectionShell id="education" title="Education" rowClassName="education">
      <div className="timeline-wrapper">
        <TimelineItem>
          <div className="timeline-card">
            <div className="timeline-header">
              <h3 className="timeline-org">{resumeData.education.school}</h3>
              <span className="timeline-years">{resumeData.education.date}</span>
            </div>
            <h4 className="timeline-title">{resumeData.education.major} · GPA: {resumeData.education.gpa}</h4>
          </div>
        </TimelineItem>
      </div>
    </SectionShell>
  );
}
