import React from 'react';
import './footer.css'; // Link to the CSS file
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import icons for Facebook, Instagram, Email, and LinkedIn

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>JobBiz Solutions</h2>
          <p>&copy; 2024 JobBiz Solutions. All Rights Reserved.</p>
          <p>NSS Taluk Union Building,Fort Maidan,Palakkad, Kerala.</p>
          <div className="footer-contact">
            <p>Phone: +91 123 456 7890</p>
            <p>Email: <a href="mailto:jobbizindia@gmail.com">jobbizindia@gmail.com</a></p>
          </div>
        </div>
        
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="mailto:jobbizindia@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} />
            </a>
            <a href="https://www.facebook.com/jobbizsolutions" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/jobbizsolutions" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/jobbizsolutions" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
