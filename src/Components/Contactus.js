import React from "react";
import Nav from "../Navbar/Nav";
import doctor6 from "../Images/doctor6.png";
import doctor7 from "../Images/doctor7.png";
function Contactus() {
  return (
    <div>
      <Nav />
      <div className="jj">
        <img
          src={doctor6}
          alt="hospital9"
          style={{ width: "50%", borderBottomRightRadius: "10%" }}
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            <h1 style={{ textAlign: "left" }}>Contact Us</h1>
            <h1 style={{ textAlign: "left" }}>Reach Our Team Anytime</h1>
            <p style={{ textAlign: "left" }}>
              we are always ready to assist you with your healthcare needs. For
              inquiries or appointments, call us at [Phone Number] or email
              [Email Address]. Visit us at [Address], and rely on our 24/7
              emergency services whenever needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
