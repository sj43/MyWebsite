import React from 'react';

export default function Skills({ resumeData }) {
    const skills = resumeData.skills;
    if (!skills) return null;

    const categories = [
      { label: 'Languages', key: 'languages' },
      { label: 'Frameworks', key: 'frameworks' },
      { label: 'Cloud & AWS', key: 'cloud' },
      { label: 'Databases', key: 'databases' },
      { label: 'Tools & DevOps', key: 'tools' },
    ];

    return (
      <section id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            {categories.map((cat, i) => (
              skills[cat.key] && skills[cat.key].length > 0 && (
                <div key={cat.key} className={`skill-category reveal reveal-delay-${Math.min(i+1, 3)}`}>
                  <h4 className="skill-category-label">{cat.label}</h4>
                  <div className="skill-tags">
                    {skills[cat.key].map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    );
}
