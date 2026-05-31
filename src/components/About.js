import React from 'react';
import { FaBullseye, FaCoffee, FaCompass, FaUsers } from 'react-icons/fa';
import '../styles/about.css';

export default function About() {
  return (
    <section className="about-container">

      <div className="about-header">
        <h2>About <span>Me</span> </h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">

        <div className="about-left">
          <h3>Empowering Ideas with Clean Code</h3>
<p className="about-text">I am a passionate Fullstack Developer who enjoys building modern, responsive, and user-friendly web applications. I specialize in creating end-to-end solutions using technologies like React, Node.js, Express, and MongoDB.
I focus on writing clean, efficient, and scalable code while ensuring great user experience and performance. I enjoy turning ideas into real-world applications that solve problems and add value.
I have experience working with frontend and backend development, API integration, and database management. I also enjoy learning new technologies and improving my skills through real projects and collaboration.</p>
          <p className="about-text">
             Recently completed an intensive internship at Fluentian, where I honed my skills
            in modern React, Tailwind CSS, and collaborative software development.
            During my time at the <strong>Fluentian Internship Program</strong>, I worked on real-world challenges and also collaborated with backend developers .
            This improved my ability to build scalable frontend systems and modern UI experiences.
          </p>

          <div className="pillars-grid">

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaBullseye />
              </div>
              <div className="pillar-info">
                <span className="pillar-label">Efficiency</span>
                <span className="pillar-title">Focused</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaCoffee />
              </div>
              <div className="pillar-info">
                <span className="pillar-label">Dedication</span>
                <span className="pillar-title">Creative</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaCompass />
              </div>
              <div className="pillar-info">
                <span className="pillar-label">Design</span>
                <span className="pillar-title">Modern</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <FaUsers />
              </div>
              <div className="pillar-info">
                <span className="pillar-label">Team</span>
                <span className="pillar-title">Collaborative</span>
              </div>
            </div>

          </div>
        </div>

        <div className="about-right">
          <div className="quote-card">
            <p className="quote-text">
            " What sets me apart is my attention to detail and continuous learning mindset. I care about performance, usability, and clean code structure, and I always aim to improve every project I work on. Even when facing challenges, I stay consistent in debugging, learning, and improving my solutions.

I am looking for an opportunity where I can contribute, grow, and build impactful real-world applications as part of a professional development team."
            </p>
            <span className="quote-author">— Yeabsira Getachew</span>
          </div>
        </div>

      </div>
    </section>
  );
}