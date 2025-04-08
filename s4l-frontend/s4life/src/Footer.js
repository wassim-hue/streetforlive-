import React from 'react';
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white p-6 text-center">
      <div className="footer-content">
        <div>&copy; 2025 SocialPro. All rights reserved.</div>
        <div className="footer-links">
          <a href="#" className="footer-link">About</a> |
          <a href="#" className="footer-link">Privacy Policy</a> |
          <a href="#" className="footer-link">Terms of Service</a>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons mt-4">
          <a href="#" className="social-icon">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
