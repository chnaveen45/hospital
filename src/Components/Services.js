import React from "react";
import Nav from "../Navbar/Nav";
import hospital12 from "../Images/hospital12.png";
import hospital13 from "../Images/hospital13.png";
import hospital14 from "../Images/hospital14.png";
import hospital15 from "../Images/hospital15.png";
import hospital16 from "../Images/hospital16.png";
import hospital17 from "../Images/hospital17.png";
import Footer from "../Footer/Footer";
function Serves() {
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
          <h1>Our Services</h1>
          <h1>Complete Healthcare Solutions!</h1>
          <p>
            We provide complete healthcare solutions with personalized care,
            advanced treatments, and specialized services to meet all your
            medical needs.
          </p>
        </div>
        <img
          src={hospital12}
          style={{ flex: 1, maxWidth: "50%", borderRadius: "10% 0 0 10%" }}
          alt="Our Team"
        ></img>
      </div>
      <div className="jj">
        <img
          src={hospital13}
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
            <h1 style={{ textAlign: "left" }}>Emergency Care</h1>
            <p style={{ textAlign: "left" }}>
              Our Emergency Care department operates 24/7, offering immediate
              attention for life-threatening and urgent medical conditions.
              Whether you’re dealing with trauma, severe illness, or sudden
              injuries, our expert emergency team is always ready to provide
              swift, effective treatment. Equipped with advanced medical
              technology, we ensure accurate assessments and quick interventions
              to stabilize patients in critical conditions. Our medical
              professionals are highly trained to handle various emergencies,
              from cardiac events to severe accidents. We prioritize patient
              safety and comfort while delivering the urgent care you need
              during emergencies. With a dedicated trauma unit and fast-track
              treatment protocols, we aim to provide the best outcomes in the
              shortest possible time.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, paddingRight: "20px", paddingLeft: "20px" }}>
          <h1> General Medicine </h1>
          <p>
            Our General Medicine services are designed to provide comprehensive,
            routine healthcare and disease management for individuals of all
            ages. We focus on preventive care, health screenings, and chronic
            disease management to help you maintain your health and quality of
            life. Our experienced physicians conduct thorough evaluations,
            diagnose various medical conditions, and offer personalized
            treatment plans tailored to each patient's needs. We believe in
            building long-term relationships with our patients, offering
            continuous care and guidance for overall wellness. From managing
            hypertension to addressing common illnesses like diabetes or asthma,
            our general medicine department supports your long-term health
            goals.
          </p>
        </div>
        <img
          src={hospital14}
          style={{ flex: 1, maxWidth: "50%", borderRadius: "10% 0 0 10%" }}
          alt="Our Team"
        ></img>
      </div>
      <div className="jj">
        <img
          src={hospital15}
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
            <h1 style={{ textAlign: "left" }}>Surgical Services </h1>
            <p style={{ textAlign: "left" }}>
              Our Surgical Services department offers a wide range of essential
              surgical procedures aimed at addressing common medical conditions
              and injuries. We specialize in both elective and emergency
              surgeries, ensuring that patients receive the appropriate care for
              their needs. From minimally invasive procedures to more
              traditional surgeries, we utilize the latest techniques and
              equipment to achieve optimal outcomes with minimal recovery time.
              Our team of skilled surgeons is highly trained in performing
              various types of surgeries, including gallbladder removal,
              appendectomy, hernia repairs, and more. Patient safety is our
              highest priority, and our surgical team follows stringent
              protocols to ensure every procedure is performed with precision
              and care.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, paddingRight: "20px", paddingLeft: "20px" }}>
          <h1> Maternity Care </h1>
          <p>
            Our Maternity Care services are designed to provide comprehensive,
            compassionate support to expectant mothers throughout their
            pregnancy journey. From the moment you find out you're expecting, we
            offer personalized prenatal care, providing routine check-ups,
            ultrasound scans, blood tests, and essential screenings to monitor
            both mother and baby's health. Our experienced obstetricians and
            gynecologists work closely with patients to develop tailored care
            plans, addressing any unique medical needs during pregnancy. We
            offer labor and delivery services in a comfortable, state-of-the-art
            environment, where our team provides continuous support throughout
            the birth process.
          </p>
        </div>
        <img
          src={hospital16}
          style={{ flex: 1, maxWidth: "50%", borderRadius: "10% 0 0 10%" }}
          alt="Our Team"
        ></img>
      </div>
      <div className="jj">
        <img
          src={hospital17}
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
            <h1 style={{ textAlign: "left" }}>Laboratory Testing  </h1>
            <p style={{ textAlign: "left" }}>
              Our Laboratory Testing services offer a
              comprehensive range of diagnostic tests to support accurate
              diagnoses and effective treatment plans. From routine blood work
              to more specialized screenings, our laboratory is equipped with
              advanced technology and staffed by highly trained professionals
              who ensure timely, accurate results. We offer a wide range of
              tests, including blood tests, urinalysis, stool tests, and other
              diagnostic procedures to help monitor and detect a variety of
              health conditions. Our lab also supports diagnostic imaging
              services, such as X-rays, MRIs, and ultrasounds, to assist in the
              diagnosis of musculoskeletal, cardiac, and other internal
              conditions.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Serves;
