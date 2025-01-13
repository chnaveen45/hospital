import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div><footer className="footer">
    <div className="footer-section">
      <h4 style={{ color: "black",paddingLeft:"11%"}}>Quick links</h4>
      <ul>
      <li><a href="/about" className="nav-link">AboutUs</a></li>
          <li><a href="/services" className="nav-link">Services</a></li>
          <li><a href="/doctor" className="nav-link">Doctor's</a></li>
          <li><a href="/contactus" className="nav-link">ContactUs</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4 style={{ color: "black" }}>Hours of Operation</h4>
      <p style={{ color: "black" }}>Mon - Fri: 8:00 AM - 6:00 PM</p>
      <p style={{ color: "black" }}>Sat - Sun: 9:00 AM - 3:00 PM</p>
    </div>
    <div className="footer-section">
      <h4 style={{ color: "black" }}>Address</h4>
      <p style={{ color: "black" }}>Plot no. 00, Road no. 0</p>
      <p style={{ color: "black" }}>Jubilee Hills, Hyderabad - 500000</p>
    </div>
    <div className="footer-section">
      <h4 style={{ color: "black" }}>Contact Us</h4>
      <p style={{ color: "black" }}>Phone: +91 - 9000055000</p>
      <p style={{ color: "black" }}>Email: contact@trustcare.com</p>
    </div>
  </footer></div>
  )
}

export default Footer