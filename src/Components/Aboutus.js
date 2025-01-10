import React from "react";
import Nav from "../Navbar/Nav";
import "./Aboutus.css";
import hospital9 from "../Images/hospital9.png";
import hospital10 from "../Images/hospital10.png";
import hospital11 from "../Images/hospital11.png";
import Footer from "../Footer/Footer";

function Aboutus() {
  return (
    <div>
      <Nav />
      <div className="jj">
        <img
          src={hospital9}
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
            <h1 style={{ textAlign: "left" }}>About Us</h1>
            <h1 style={{ textAlign: "left" }}>Wellcome to TrustCare</h1>
            <p style={{ textAlign: "left" }}>
              At TrustCare, we are dedicated to providing exceptional healthcare
              services to our community. With a strong commitment to your
              well-being, we offer a full range of medical services designed to
              meet the needs of individuals and families, both in routine and
              complex care situations. Our team of skilled professionals,
              state-of-the-art technology, and compassionate approach ensure
              that every patient receives the highest standard of care.
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: 1, paddingRight: "20px" ,paddingLeft: "20px"}}>
          <h1>Our Qualified Team is Always Ready To Help You!</h1>
          <p>
            Our team of qualified medical professionals is always ready to provide
            expert care and personalized support. With compassion and dedication,
            we are here to ensure your health and well-being at every step.
          </p>
        </div>
        <img src={hospital10} style={{ flex: 1, maxWidth: "50%", borderRadius: "10% 0 0 10%" ,}} alt="Our Team"></img>
      </div>
      <div className="jj">
        <img
          src={hospital11}
          alt="hospital9"
          style={{ width: "200%",height:"100%", borderBottomRightRadius: "10%" }}
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
            <h1 style={{ textAlign: "left" }}>About Us</h1>
            <h1 style={{ textAlign: "left" }}>Wellcome to TrustCare</h1>
            <p style={{ textAlign: "left" }}>
              At TrustCare, we are dedicated to providing exceptional healthcare
              services to our community. With a strong commitment to your
              well-being, we offer a full range of medical services designed to
              meet the needs of individuals and families, both in routine and
              complex care situations. Our team of skilled professionals,
              state-of-the-art technology, and compassionate approach ensure
              that every patient receives the highest standard of care.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
