// import React from 'react'


// import './Nav.css'
// import logo from '../Images/health1.png';

// function Nav() {
//   return (
//     <nav>
//       <nav className="navbar navbar-light bg-light">

//         <ul className='navt'>
//         <img src={logo} width="5%" height="2%"  className="d-inline-block align-top" alt=""/>
//           <li><a href="/" style={{textDecoration: 'none', color: 'black'}}>Home</a></li>
//           <li><a href="/about" style={{textDecoration: 'none', color: 'black'}}>About</a></li>
//           <li><a href="/services" style={{textDecoration: 'none', color: 'black'}}>Services</a></li>
//           <li><a href="/doctor" style={{textDecoration: 'none', color: 'black'}}>Doctor</a></li>
//           <li><a href="/contactus" style={{textDecoration: 'none', color: 'black'}}>Contact Us</a></li>
//         </ul>
//       </nav>
//     </nav>
//   )
// }

// export default Nav

import React from "react";
import "./Nav.css";
import logo from "../Images/health1.png";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">TrustCare</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">AboutUs</a></li>
          <li><a href="/services" className="nav-link">Services</a></li>
          <li><a href="/doctor" className="nav-link">Doctor's</a></li>
          <li><a href="/contactus" className="nav-link">ContactUs</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
