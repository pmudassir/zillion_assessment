import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className="social-icons">
                    <a href="#" className="icon">Facebook</a>
                    <a href="#" className="icon">Twitter</a>
                    {/* Add more social icons */}
                </div>
            </div>
            <p className="copyright">&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;