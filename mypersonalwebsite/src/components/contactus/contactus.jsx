import React from 'react';

export default function ContactUs() {
    return (
      <section id="contact">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>Get In Touch</span></h1>
          </div>
          <div className="nine columns main-col">
            <p className="lead">
              I'm open to full-time software engineering roles. Feel free to reach out!
            </p>
            <div className="contact-cta">
              <a href="mailto:sj43@rice.edu" className="button contact-btn">
                <i className="fa fa-envelope" /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/shjang956/?locale=en_US" target="_blank" rel="noopener noreferrer" className="button contact-btn contact-btn-secondary">
                <i className="fa fa-linkedin" /> LinkedIn
              </a>
              <a href="https://github.com/sj43" target="_blank" rel="noopener noreferrer" className="button contact-btn contact-btn-secondary">
                <i className="fa fa-github" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}