import React, { useEffect } from 'react';
import About from '../components/About';
import Founders from '../components/Founders';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
