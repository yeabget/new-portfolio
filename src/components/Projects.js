import React, { useState } from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';
import projectImg1 from '../images/pro1.jpg'; 
import projectImg2 from '../images/pro2.jpg'; 
import projectImg3 from '../images/rent.jpg'; 
import projectImg4 from '../images/tigat.jpg';
import projectImg5 from '../images/addis.jpg';  
import projectImg6 from '../images/mk.jpg'; 
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectData = [
    {
      title: 'Next Online Course',
       description: 'An AI-powered  modern e-learning website that helps users learn new skills anytime, anywhere.',
      type: 'Internship Project',
      technologies: ['React js', 'css'],
      image: projectImg1,
      liveLink: 'https://nextt-academy.netlify.app/',
      codeLink: 'https://github.com/yeabget/fluentian-second-task-'
    },
    {
      title: 'Fluent Online learning platform',
        description: 'An online learning platform offering interactive courses, expert-led lessons, and skill-building resources. ',
      type: 'Internship Project',
      technologies: ['React js', 'css', 'Node js', "mongo db"],
      image: projectImg2,
      liveLink: 'https://fluent-online-courses.netlify.app/',
      codeLink: 'https://github.com/yeabget/fluent-online-courses'
    }, {
      title: 'Rental Managment System',
      description: 'A web-based platform that streamlines property listings, tenant management, bookings, and rental payments.',
      type: 'Side Project',
      technologies: ['Html', 'cs', 'javascript', 'php','database'],
      image: projectImg3,
      liveLink: '#',
      codeLink: 'https://github.com/yeabget/Rental-management-system'
    },
     {
      title: 'Tigat online courses',
      description: 'An online education platform providing high-quality courses across various subjects and industries.',
      type: 'Side Project',
      technologies: ['React 19', 'Tailwind CSS'],
      image: projectImg4,
      liveLink: 'https://tigat-onlinelearnin-platform.netlify.app/',
      codeLink: 'https://github.com/yeabget/Tigat-Online-learning-platform'
    },
     {
      title: 'Addis Supermarket',
      description: 'A supermarket management system that streamlines inventory, sales, billing, and customer management.',
      type: 'Side Project',
      technologies: ['React 19',  'Tailwind CSS'],
      image: projectImg5,
      liveLink: 'https://addissupermarket.netlify.app/',
      codeLink: 'https://github.com/yeabget/Addis-supermarket'
    },
     {
      title: 'MK Beauty Salon',
      description: 'A web-based salon management system designed to enhance customer experience and operational efficiency.',
      type: 'Side Project',
      technologies: ['React 19', 'Node.js', 'mongodb', 'Express js'],
      image: projectImg6,
      liveLink: 'https://mkbeautysalonbyyeabget.netlify.app/',
      codeLink: 'https://github.com/yeabget/mk'
    }
  ];
  const filteredProjects = activeFilter === 'All' 
    ? projectData 
    : projectData.filter(proj => proj.type === activeFilter);

  return (
    <section className="projects-section">
  
      <div className="projects-header">
        <h2>Featured <span>Projects</span></h2>
        <div className="title-underline"></div>
        <p className="subtitle">
          A selection of projects built during my internship at Fluentian and through independent learning.
        </p>
      </div>
      <div className="filter-bar">
        {['All', 'Internship Project', 'Side Project'].map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <span className="project-tag">{project.type}</span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-section">
                <h4>
                  <span className="code-brackets">&lt;/&gt;</span> TECHNOLOGIES
                </h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="action-btn btn-live">
                  Live Preview <FaExternalLinkAlt className="icon-right" />
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="action-btn btn-code">
                  <FaCode className="icon-left" /> Code
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}