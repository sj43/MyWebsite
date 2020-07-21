import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let projectData = this.props.projectData;

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
              {resumeData.experience.map((ex, idx) => {
                return <div className="row item" key={idx}>
                <div className="twelve columns">
                  <h3>{ex.organization}</h3>
                  <p className="info" >{ex.position} <span>•</span> <em className="date">{ex.date}</em></p>
                  <p>
                    {ex.description.map((elem, idx2) => { return <li key={idx2}>{elem}</li> })}
                  </p>
                </div>
              </div>
              })}
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
          {/* Project & Activity
      ----------------------------------------------- */}
          <div className="row project-activity">
            <div className="three columns header-col">
              <h1><span>Project & Activity</span></h1>
            </div>
            <div className="nine columns main-col">
            {projectData.projects.map((ex, idx) => {
                return <div className="row item" key={idx}>
                <div className="twelve columns">
                  <h3>{ex.name}</h3>
                  {/* <p className="info" >{ex.} <span>•</span> <em className="date">{ex.date}</em></p> */}
                  <p>
                    {ex.description.map((elem, idx2) => { return <li key={idx2}>{elem}</li> })}
                  </p>
                </div>
              </div>
              })}
            </div>
          </div>


        </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
