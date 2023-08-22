import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Feel free to get in touch with us</p>
          <button className="contact-button">Contact</button>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook">Facebook          </i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter">Twitter          </i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram">Instagram          </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
