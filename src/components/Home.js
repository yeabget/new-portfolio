import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import '../styles/home.css';
import port from '../images/port.png';

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home-container">
      <div className="home-content">
        <div className="info-section">
          <div className="opportunity-badge">
            <span className="dot"></span>
            Available for New Opportunities
          </div>

          <h1 className="hero-title">
            FULLSTACK<br /><span>DEVELOPER</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Yeabsira Getachew</strong>. I build scalable fullstack websites using MERN stack technologies.
          </p>

          <div className="cta-group">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work <FaArrowRight className="btn-icon" />
            </button>

            <button
  className="btn btn-secondary"
  onClick={() => {
    const link = document.createElement('a');
    link.href = "/cv/Yeabsira_Getachew_CV.pdf";
    link.download = "Yeabsira_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <FaDownload className="btn-icon-left" /> Download CV
</button>

            
          </div>
        </div>

        <div className="image-section">
          <div className="photo-frame-offset"></div>
          <div className="photo-card">
            <img src={port} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}