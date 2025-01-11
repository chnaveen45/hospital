import React from "react";
import Nav from "../Navbar/Nav";
import "./Contactus.css";
import contactus1 from "../Images/contactus1.png";
import contactus2 from "../Images/contactus2.png";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <div className="contact-us-container-1">
        <div className="image-section">
          <img
            src={contactus1}
            className="contactus1"
            alt="Healthcare Professional"
          />
        </div>
        <div className="text-section">
          <h1>Contact Us</h1>
          <h2>Reach Our Team Anytime</h2>
          <p>
            We are always ready to assist you with your healthcare needs.
            <br />
            For inquiries or appointment, call us at [Phone Number] or email
            [Email Address].
            <br />
            Visit us at [Address], and rely on our 24/7 emergency services
            whenever needed.
          </p>
        </div>
      </div>

      <div className="contact-info-container">
        <div className="text-section-1">
          <h2>Get in Touch</h2>
          <p>
            <strong>Address:</strong>
            <br /> [Hospital Name]
            <br /> [Street Address]
            <br /> [City, State, ZIP Code]
          </p>
          <p>
            <strong>Phone Numbers:</strong>
            <br /> General Inquiries: [Phone Number]
            <br /> Emergency Services: [Emergency Number] (Available 24/7)
          </p>
          <p>
            <strong>Email:</strong>
            <br /> contact@hospitalname.com
          </p>
          <p>
            <strong>Working Hours:</strong>
            <br /> Monday to Saturday: 8:00 AM – 8:00 PM
            <br /> Sunday: 10:00 AM – 4:00 PM
            <br /> (Emergency services are available 24/7)
          </p>
        </div>
        <div className="image-section">
          <img
            src={contactus2}
            alt="Medical professional using a tablet"
            className="contactus2"
          />
        </div>
      </div>

      <div className="contact-section-container">
        <div className="contact-section">
          <h2>Book an Appointment</h2>
          <p>
            Need to see a doctor? Schedule your appointment quickly and easily:
          </p>
          <ul>
            <li>Call: [Appointment Hotline]</li>
            <li>
              Email:
              <a href="mailto:appointments@hospitalname.com">
                appointments@hospitalname.com
              </a>
            </li>
            <li>
              Online: <a href="/doctor">Appointment Booking Link</a>
            </li>
          </ul>
        </div>
        <div className="follow-section">
          <h2>Follow Us</h2>
          <p>
            Stay updated with the latest news and health tips from our hospital:
          </p>
          <ul>
            <li>
              Facebook:
              <a href="https://www.facebook.com/" target="_blank">
                Facebook Link
              </a>
            </li>
            <li>
              Instagram:
              <a href="https://www.instagram.com/" target="_blank">
                Instagram Link
              </a>
            </li>
            <li>
              Twitter:
              <a href="https://x.com/" target="_blank">
                Twitter Link
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-info-container-1">
        <div className="contact-details">
          <p>
            <i className="fas fa-map-marker-alt"></i>Physio.
            <br />
            <span>
              Plot no. 00,
              <br /> Road no. 0<br /> Jubilee Hills,
              <br /> Hyderabad - 500000
            </span>
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@physio.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 - 9000000000
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="emailOrPhone">Email / Phone No</label>
              <input type="text" id="emailOrPhone" name="emailOrPhone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;