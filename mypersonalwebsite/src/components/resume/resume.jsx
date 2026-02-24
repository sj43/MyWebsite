import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EXPERIENCE_CASE_STUDIES = {
  'Microsoft': 'microsoft',
  'Expedia Group': 'expedia',
};

export default function Resume({ resumeData }) {
  const navigate = useNavigate();
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    revealEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
      <React.Fragment>
        {/*generated code*/}
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
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
                  {/* <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                </p> */}
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="timeline-wrapper">
                {resumeData.experience && resumeData.experience.map((item, i) => (
                  <div key={i} className="timeline-item reveal">
                    <div className="timeline-dot" />
                    <div className="timeline-card">
                      <div className="timeline-header">
                        <h3 className="timeline-org">{item.organization}</h3>
                        <span className="timeline-years">{item.date}</span>
                      </div>
                      <h4 className="timeline-title">{item.position}</h4>
                      {item.description && (
                        <ul className="timeline-bullets">
                          {item.description.map((desc, j) => (
                            <li key={j}>{desc}</li>
                          ))}
                        </ul>
                      )}
                      {EXPERIENCE_CASE_STUDIES[item.organization] && (
                        <div className="portfolio-card-casestudy" style={{ marginTop: '14px' }}>
                          <button
                            className="cs-card-btn"
                            onClick={() => navigate(`/project/${EXPERIENCE_CASE_STUDIES[item.organization]}`)}
                          >
                            Case Study →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <h1>Language</h1> 
                <p> Python, C, C++, Java, HTML, JavaScript, Go, SQL </p>
                <p></p>
                <h1>Framework & Database & Library </h1>
                <p> Flask, React, ExpressJs, MongoDB, Redis, Heroku, NLTK, Mkdocs, Slate </p>
                <p></p>
                <h1>Amazon Web Service</h1>
                <p> ECS, S3, EMR, CloudFormation, SNS, SQS, Lambda, ElasticSearch, ElasticBeanstalk, CodePipeline, CodeBuild </p>
                <p></p>
                <h1>Development Tool</h1>
                <p> Jenkins, Jira, Coverity static analysis, Gerrit code review</p>
                {/* <ul className="skills">
                  <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                  <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                  <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul> */}
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}

        </section> {/* Resume Section End*/}
      </React.Fragment>
    );
}
