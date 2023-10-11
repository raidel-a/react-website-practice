import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pixelGalaxy.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headingContainer">
        <h1> Gadget Galaxy </h1>
        <p> Find DEALS out of this world </p>
        <Link to="/products">
          <button> Browse Products </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
