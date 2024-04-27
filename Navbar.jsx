import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">DevBhawana</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
        <Link to="skill" smooth={true} duration={500} onClick={toggleMenu}>Skill</Link>
        <Link to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          <button style={{background:"#fff", padding:"10px", borderRadius:"20px", color:"#3b4da7"}}>Contact Us</button>
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

