import React from 'react';
import SectionShell from '../common/SectionShell';
import TimelineItem from '../common/TimelineItem';

export default function Achievements({ resumeData }) {
  if (!resumeData.achievements || resumeData.achievements.length === 0) return null;

  return (
    <SectionShell id="achievements" title="Achievements">
      <div className="timeline-wrapper">
        {resumeData.achievements.map((item, i) => (
          <TimelineItem key={item.title || i}>
            <div className="achievement-item">
              <i className={item.icon + ' achievement-icon'} aria-hidden="true" />
              <div className="achievement-content">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </TimelineItem>
        ))}
      </div>
    </SectionShell>
  );
}
