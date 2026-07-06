import React from 'react';
import SectionShell from '../common/SectionShell';
import TimelineItem from '../common/TimelineItem';

export default function ContactUs({ resumeData }) {
  return (
    <SectionShell id="contact" title="Get In Touch">
      <div className="timeline-wrapper">
        <TimelineItem>
          <div className="timeline-card">
            <p className="timeline-about-text">
              Based in {resumeData.address}. Feel free to reach out at{' '}
              <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${resumeData.email}`} className="btn-inline">
                <i className="fa fa-envelope btn-inline-icon-left" aria-hidden="true" /> Email Me
              </a>
              {resumeData.resumeLink && (
                <a href={resumeData.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-inline">
                  Download Resume <i className="fa fa-download btn-inline-icon-right" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </TimelineItem>
      </div>
    </SectionShell>
  );
}
