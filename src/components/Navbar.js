import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../assets/ggLogo.png';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSection" id={openLinks ? 'open' : 'close'}>
        <Link to="/react-website-practice">
        <img src={Logo} alt="logo" />
        </Link>
        <div className="hiddenLinks">
          {/* <Link to="/react-website-practice">Home</Link> */}
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/shoppingCart">Cart</Link>
        </div>
      </div>
      <div className="rightSection">
        {/* <Link to="/react-website-practice">Home</Link> */}
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/shoppingCart">Cart</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
