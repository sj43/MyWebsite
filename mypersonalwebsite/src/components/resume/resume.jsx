import React from 'react';
import { getCaseStudySlugForExperience } from '../casestudy/caseStudyLinks';
import CaseStudyButton from '../common/CaseStudyButton';
import SectionShell from '../common/SectionShell';
import SkillTags from '../common/SkillTags';
import TimelineItem from '../common/TimelineItem';

// Parse "[C# | .NET | Azure]" or "[Go | JS] & [AWS | Jenkins]" into an array of skill strings
function parseTechLine(line) {
  const matches = line.match(/\[([^\]]+)\]/g);
  if (!matches) return null;
  return matches
    .flatMap(m => m.slice(1, -1).split(/[|,]/).map(s => s.trim()))
    .filter(Boolean);
}

export default function Resume({ resumeData }) {
  return (
      <SectionShell id="resume" title="Experience" rowClassName="work">
              <div className="timeline-wrapper">
                {resumeData.experience && resumeData.experience.map((item, i) => {
                  const caseStudySlug = getCaseStudySlugForExperience(item);
                  // Separate description bullets from the tech line
                  const bullets = [];
                  let techSkills = null;
                  if (item.description) {
                    item.description.forEach(desc => {
                      const parsed = parseTechLine(desc);
                      if (parsed) {
                        techSkills = parsed;
                      } else {
                        bullets.push(desc);
                      }
                    });
                  }

                  return (
                    <TimelineItem key={`${item.organization}-${item.date || i}`} reveal>
                      <div className="timeline-card">
                        <div className="timeline-header">
                          <h3 className="timeline-org">{item.organization}</h3>
                          <span className="timeline-years">{item.date}</span>
                        </div>
                        <h4 className="timeline-title">{item.position}</h4>
                        {bullets.length > 0 && (
                          <ul className="timeline-bullets">
                            {bullets.map((desc, j) => (
                              <li key={j}>{desc}</li>
                            ))}
                          </ul>
                        )}
                        <SkillTags items={techSkills} />
                        {caseStudySlug && (
                          <div className="portfolio-card-casestudy timeline-case-study-action">
                            <CaseStudyButton slug={caseStudySlug} />
                          </div>
                        )}
                      </div>
                    </TimelineItem>
                  );
                })}
              </div>
      </SectionShell>
    );
}
