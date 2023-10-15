import React from 'react';
import MessOwires from '../assets/messOwires.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MessOwires})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Our Team</h1>
        <p>
          {' '}
          This is the team page lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt, doloremque.
        </p>
      </div>
    </div>
  );
}

export default About;
