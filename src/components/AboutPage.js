import React from 'react';
import About from './About';
import Founders from './Founders';

function AboutPage() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={style} className="about-page-container">
      <Founders />
      <hr />
      <About />
    </div>
  );
}

export default AboutPage;
