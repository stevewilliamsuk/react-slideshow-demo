import React from 'react';
import './styles.css';

const GlitchEffect = (props) => {
  return (
    <div className="demo-1 render imgloaded">
      <div className="glitch">
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
      </div>
    </div>
  );
};

export default GlitchEffect;