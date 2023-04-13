import React from 'react';
import Contact from './Contact';
import './Footer.css';
import StoreLocations from './StoreLocations';
import Copyright from './Copyright';
import Newsletter from './Newsletter';

function Footer() {
  return (
    <div className="footer-container">
      <Newsletter />
      <hr />
      <StoreLocations />
      <hr />
      <Contact />
      <hr />
      <Copyright />
      <hr />
      <div className="d-flex justify-content-between align-items-end">
        <p>created by William Shaner</p>
        <div className="d-flex">
          <p><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/will-shaner-315500245/" className="mx-1">LinkedIn</a></p>
          <p><a target="_blank" rel="noreferrer" href="https://github.com/WillShaner?tab=repositories" className="mx-1">Github</a></p>
          <p><a target="_blank" rel="noreferrer" href="https://genuine-sunflower-520c38.netlify.app/" className="mx-1">Portfolio</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;