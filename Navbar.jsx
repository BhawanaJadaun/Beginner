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

// import React,{useEffect,useState} from 'react'
// import "./Navbar.css";
// import { Link } from 'react-router-dom';
// import menu_icon from "./../../assets/menu.png"
// import gmail from "../../assets/icons8-gmail-48.png"
// import linkedin from "../../assets/linkedin.png"
// import github from "../../assets/icons8-github-48.png"
// import instagram from "../../assets/icons8-instagram-48.png"

// // class Navbar extends Component {
// //   state = { clicked: false };

// //   handleClick = () => {
// //     this.setState({ clicked: !this.state.clicked });
// //   }

// //   render() {
  
//   const Navbar = () => {
//     const [mobileMenu,setMobileMenu] = useState(false);
//     const toggleMenu = () =>{
//       mobileMenu ? setMobileMenu (false) : setMobileMenu(true);
//     }
  
//     return (
//       <>
//         <nav>
//           <h1 style={{ fontSize: "25px" }}>Port <span>folio</span></h1>
//           {/* <ul id = "navbar"className={this.state.clicked ? 'navbar active' : 'navbar'}> */}
//           <ul className={mobileMenu?'':'hide-mobile-menu'}>
//             <li><Link to="/" smooth={true} offset={-100} duration={800}>Home</Link></li>
//             <li><Link to="/services"  smooth ={true} offset ={-100} duration={800}>Services</Link></li>
//             <li><Link to="/about" smooth ={true} offset ={-330} duration={500}>About</Link></li>
//             <li><Link to="/skill" smooth ={true} offset ={-300} duration={800}>Skills</Link></li>
//             <li><Link to="/portfolio" smooth ={true} offset ={-170} duration={500}>Portfolio</Link></li>
//             <li><Link to="/contact"  smooth ={true} offset ={-180} duration={500}>Contact</Link></li>
//           </ul>
//           <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
//           {/* <div id="mobile" onClick={this.handleClick}>
//             <i id="bar" className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
//           </div> */}
//         </nav> 
//         {/* <div className="links">
//         <div className="link">
//         <a href="#"><img src= {gmail} alt="/"></img></a>
//         </div>
//         <div className="link">
//         <a href="#"><img src= {linkedin} alt="/"></img></a>
//         </div>
//         <div className="link">
//         <a href="#"><img src= {github} alt="/"></img></a>
//         </div>
//         <div className="link">
//         <a href="#"><img src= {instagram} alt="/"></img></a>
//         </div>
//       </div> */}
//       </>
//     );
//   }


// export default Navbar;
