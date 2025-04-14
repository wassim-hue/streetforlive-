import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this import is correct
import './Footer.css';

const Footer = () => {
  return (
    <footer className="ig-footer">
      <div className="ig-footer-links">
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <Link to="/press">Press</Link>
        <Link to="/api">API</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/top-accounts">Top Accounts</Link>
        <Link to="/hashtags">Hashtags</Link>
        <Link to="/language">Language</Link>
      </div>
      <div className="ig-footer-copyright">
        © {new Date().getFullYear()} STRET FROM LIVE
      </div>
    </footer>
  );
};

export default Footer;