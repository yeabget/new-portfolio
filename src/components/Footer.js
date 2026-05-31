import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="portfolio-footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2 className="brand-name">Yeabsira Getachew</h2>
            <p className="brand-title">Fullstack Developer</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/yeabget" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/yeabsira-getachew-962001329/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="yabget19@gmail.com">Email</a>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Yeabsira Getachew. All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;