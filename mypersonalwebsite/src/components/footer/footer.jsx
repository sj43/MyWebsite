import React from 'react';
import { getSectionHash, SECTION_IDS } from '../../config/sections';

function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
    return (
      <React.Fragment>
      <footer className="reveal">
        <div className="row">
          <div className="twelve columns">
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href={getSectionHash(SECTION_IDS.experience)} aria-label="Back to top" onClick={scrollToTop}>
              <i className="icon-up-open" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
}
