import React from "react";
import Nav from "../Navbar/Nav";
import "./Home.css";
import hospital from "../Images/hospital2.png";
import hospital1 from "../Images/hospital3.png";
import hospital2 from "../Images/hospital4.png";
import hospital3 from "../Images/hospital5.png";
import hospital4 from "../Images/hospital6.png";
import hospital5 from "../Images/hospital7.png";
import hospital6 from "../Images/hospital8.png";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div>
      <Nav />
      <div
        className="container"
        style={{
          backgroundImage: `url(${hospital})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="content">
          <h1>
            Medical Services <br />
            <span>
              That You can <span className="highlight">Trust</span>
            </span>
          </h1>
          <p>
            Where your health is our top priority, every day. <br />
            Expert care, compassionate service, tailored just for you. <br />
            Together, we'll guide you to a healthier, happier life.
          </p>
          <button
            className="appointment-btn"
            onClick={() => {
              window.location.href = "/doctor";
            }}
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <div style={{ marginTop: "-10vh" }} className="info">
        <div>
          <h4 style={{ color: "black" }}> Contact us</h4>
          <p>info@TrustCare.com</p>
          <p>+91 - 9000000000</p>
        </div>
        <div>
          <h4 style={{ color: "black" }}>Open Hours</h4>
          <p>Mon-Fri: 8:00am to 5:00pm</p>
          <p>Sat-Sun: 9:00am to 3:30pm</p>
        </div>
        <div>
          <h4 style={{ color: "black" }}>Services</h4>
          <p>Emergency Care</p>
          <p>General Medicine</p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h4 style={{ color: "black" }}>ABOUT US -----</h4>
          <h1>Our Qualified Team Is Ready to Help You!</h1>
          <p>
            We are dedicated to providing exceptional healthcare with compassion
            and advanced medical expertise. Our team ensures personalized care
            and state-of-the-art treatments for every patient.
          </p>
          <button
            className="about-btn"
            onClick={() => {
              window.location.href = "/about";
            }}
          >
            About Us
          </button>
        </div>
        <div className="about-image">
          <img
            src={hospital1} // Replace with actual image URL
            alt="Doctors discussing treatment"
          />
        </div>
      </div>
      <div className="why-services-container">
        {/* Why Us Section */}
        <section className="why-us-section">
          <div className="why-us-image">
            <img
              src={hospital2} // Replace with actual image URL
              alt="Doctor and patient"
            />
          </div>
          <div className="why-us-text">
            <h4 style={{ color: "black" }}>WHY US -----</h4>
            <h1>Your Well-Being is our Main Priority</h1>
            <p>
              Our team of skilled specialists is dedicated to providing
              personalized care, leveraging cutting-edge medical technology to
              ensure the best outcomes. From acute conditions and emergency
              scenarios to tailored treatments, we aim to support and empower
              you every step of the way. We strive to elevate your health,
              standard of well-being, creating an extraordinary environment for
              medical care. Your health is at the heart of everything we do, so
              we ensure to provide the highest standards available, helping you
              lead a healthier, happier life.
            </p>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="our-services-section">
          <h4 style={{ color: "black" }}>OUR SERVICES</h4>
          <h1>Specialties</h1>
          <p>
            Our services cover a wide range of specialties, from routine
            check-ups to advanced surgeries and laboratory testing. We focus on
            personalized treatments, ensuring your health needs are met with the
            highest standards of care.
          </p>
          <div className="services-grid">
            <div
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10%",
              }}
            >
              <img
                src={hospital3}
                style={{ maxWidth: "300px", marginBottom: "20px" }}
                alt="Emergency Room"
              />
              <h3>Emergency Care</h3>
              <p>
                Immediate treatment is provided for critical and
                life-threatening conditions. 24/7 on-site medical team ensures
                rapid response during urgent situations.
              </p>
              <button
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                Learn more
              </button>
            </div>
            <div
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10%",
              }}
            >
              <img
                src={hospital4}
                style={{ maxWidth: "300px", marginBottom: "20px" }}
                alt="Emergency Room"
              />
              <h3>Surgical Services</h3>
              <p>
                We provide comprehensive surgical care with precision, safety,
                and advanced technology, ensuring exceptional outcomes for each
                procedure.
              </p>
              <button
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                Learn more
              </button>
            </div>
            <div
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10%",
              }}
            >
              <img
                src={hospital5}
                style={{ maxWidth: "300px", marginBottom: "20px" }}
                alt="Emergency Room"
              />
              <h3>Laboratory Testing</h3>
              <p>
                With advanced technology and a team of experts, we deliver fast,
                accurate results for your diagnostic testing needs.
              </p>
              <button
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                Learn more
              </button>
            </div>
          </div>
        </section>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <button
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 30px",
            borderRadius: "5px",
            cursor: "pointer",
        
          }}
          onClick={() => {
            window.location.href = "/services";
          }}
        >
       Our Services
        </button>
      </div>
      
      <div className="App">
        
        <main className="main-content">
          <div className="appointment-section" style={{backgroundImage:`url(${hospital6})`,backgroundSize:"cover",backgroundPosition:"center",height:"100vh"}}>
            <div className="appointment-text">
              <h2>BOOK AN APPOINTMENT</h2>
              <h3>Our Medical Team Is Ready to Help You!</h3>
              <p >
                Booking an appointment with us is easy and convenient. Simply
                visit our website or give us a call to schedule your visit. Our
                friendly team will assist you in selecting a time that works
                best for you and ensure that all your needs are met. Whether for
                a routine check-up or specialized care, we are here to help you
                take the next step toward better health.
              </p>
              <button
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 30px",
            borderRadius: "5px",
            cursor: "pointer",
           
          }}
          onClick={() => {
            window.location.href = "/contactus";
          }}
        >
      Contact Us
        </button>
            </div>
          </div>
          
        </main>
        
      </div>
      <Footer/>
      
    </div>
  );
}

export default Home;
