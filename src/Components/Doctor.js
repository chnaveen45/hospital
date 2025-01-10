import React from "react";
import Nav from "../Navbar/Nav";
import hospital18 from "../Images/hospital18.png";
import Doctor1 from "../Images/doctor1.png";
import Doctor2 from "../Images/doctor2.png";
import Doctor3 from "../Images/doctor3.png";
import Doctor4 from "../Images/doctor4.png";
import Doctor5 from "../Images/doctor5.png";
import "./Doctor.css";
import Footer from "../Footer/Footer";

const doctorsData = [
  {
    name: "Dr Naveen",
    specialty: "Emergency Care",
    education:
      "MBBS Madras University, Chennai\nMD Psychiatry Santosh University",
    experience: "7+ years of experience",
    languages: "Speaks English, Hindi, Telugu",
    license: "License Number: Hyderabad registration HN 004",
    imageUrl: Doctor1,
  },
  {
    name: "Dr Ashwith",
    specialty: "General Medicine",
    education:
      "MBBS Bharati Vidyapeeth University, Pune\nMD Psychiatry Santosh University",
    experience: "8+ years of experience",
    languages: "Speaks English, Hindi, Telugu",
    license: "License Number: Hyderabad registration HN 006",
    imageUrl: Doctor2,
  },
  {
    name: "Dr Rashmika",
    specialty: "Surgical Services",
    education:
      "MBBS Bharati University, Mumbai\nMD Psychiatry Santosh University",
    experience: "8+ years of experience",
    languages: "Speaks English, Hindi, Tamil",
    license: "License Number: Hyderabad registration HN 031",
    imageUrl: Doctor3,
  },
  {
    name: "Dr Chandu",
    specialty: "Maternity Care",
    education:
      "MBBS Osmania University, Hyderabad\nMD Psychiatry Santosh University",
    experience: "8+ years of experience",
    languages: "Speaks English, Hindi, Telugu",
    license: "License Number: Hyderabad registration HN 003",
    imageUrl: Doctor4,
  },
  {
    name: "Dr Sai Pallavi",
    specialty: "Laboratory Testing",
    education:
      "MBBS Bharati University, Delhi\nMD Psychiatry Santosh University",
    experience: "6+ years of experience",
    languages: "Speaks English, Hindi, Kannada",
    license: "License Number: Hyderabad registration HN 031",
    imageUrl: Doctor5,
  },
];

const specialtiesData = [
  {
    title: "Emergency Care",
    description:
      "Fast, expert care for life-threatening injuries and urgent medical conditions, available round-the-clock.",
  },
  {
    title: "General Medicine",
    description:
      "Personalized health assessments and treatments for common illnesses and ongoing care of chronic conditions.",
  },
  {
    title: "Basic Surgical Services",
    description:
      "Minimally invasive and traditional surgical options tailored to ensure quick recovery and optimal outcomes.",
  },
  {
    title: "Maternity Care",
    description:
      "Comprehensive prenatal, delivery, and postnatal care to ensure the health of both mother and baby.",
  },
  {
    title: "Laboratory Testing",
    description:
      "Wide range of diagnostic tests using advanced technology for accurate results and timely treatments.",
  },
];
function Doctor() {
  return (
    <div>
      <Nav />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, paddingRight: "20px", paddingLeft: "20px" }}>
          <h1> Doctor’s </h1>
          <h1>Meet Our Team of Experts</h1>
          <p>
            At TrustCare, we are proud to have a team of dedicated, highly
            skilled, and compassionate doctors who are committed to providing
            exceptional care to all our patients. Each member of our medical
            team brings years of experience, specialized training, and a passion
            for improving patient outcomes. We believe that a collaborative
            approach to healthcare, combined with personalized care, is key to
            achieving the best results for our patients.
          </p>
        </div>
        <img
          src={hospital18}
          style={{ flex: 1, maxWidth: "50%", borderRadius: "10% 0 0 10%" }}
          alt="Our Team"
        ></img>
      </div>
      <div className="specialties-container">
        <h2>Our Specialties</h2>
        <div className="specialties-grid">
          {specialtiesData.map((specialty, index) => (
            <div className="specialty-card" key={index}>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="doctor-list-container">
        {doctorsData.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="doctor-image"
            />
            <div
              className="doctor-info"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <h3>{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-education">{doctor.education}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>{doctor.experience}</p>
                <p>{doctor.languages}</p>
                <p>{doctor.license}</p>
                <button className="appointment-button">
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="why-choose-doctors">
        {" "}
        <h2>Why Choose Our Doctors?</h2>{" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>Expertise:</strong> Our team includes board-certified
            specialists and doctors with advanced training in their respective
            fields.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Compassionate Care:</strong> We put our patients first,
            ensuring every individual is treated with empathy, respect, and
            dignity.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Innovation:</strong> We incorporate the latest medical
            advancements and technology to ensure our patients receive the best
            possible care.{" "}
          </li>{" "}
          <li>
            {" "}
            <strong>Collaborative Approach:</strong> Our doctors work together,
            sharing knowledge and expertise, to provide the most comprehensive
            and effective treatment plans for our patients.{" "}
          </li>{" "}
        </ul>{" "}
      </div>
      <Footer/>
    </div>
  );
}

export default Doctor;
