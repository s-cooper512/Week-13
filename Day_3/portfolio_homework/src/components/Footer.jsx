// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: email@address.com</p>
          <p>Phone: 911-531-8008</p>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My Portfolio. Some rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
