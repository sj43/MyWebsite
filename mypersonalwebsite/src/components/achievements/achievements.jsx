import React from 'react';

export default function Achievements({ resumeData }) {
    if (!resumeData.achievements || resumeData.achievements.length === 0) return null;

    return (
      <section id="achievements">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>Achievements</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="timeline-wrapper">
              {resumeData.achievements.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="achievement-item">
                    <i className={item.icon + " achievement-icon"} />
                    <div className="achievement-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}
