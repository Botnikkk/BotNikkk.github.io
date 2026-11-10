import React from 'react';
import { profile } from '../data';

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()} {profile.name}
    </p>
    <a href="#home">Back to top ↑</a>
  </footer>
);

export default Footer;
