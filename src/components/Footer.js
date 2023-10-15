import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/raihven/react-website-practice">
          <GitHubIcon />
          <p>/src</p>
        </a>
        <LinkedInIcon />
      </div>
      <Link to="/About">About Us</Link>
      <p> &copy; 2023 GadgetGalaxy </p>
      <div className="aboutUs"></div>
    </div>
  );
}

export default Footer;