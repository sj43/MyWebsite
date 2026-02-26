import React from 'react';
export default function Footer() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer className="reveal">
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links" />
            <ul className="copyright" />
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#resume" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
}