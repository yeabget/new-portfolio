import React, { useRef } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { FaCss3Alt } from "react-icons/fa";
import { SiHtml5, SiBootstrap, SiExpress, SiMongodb, SiPhp, SiTailwindcss } from 'react-icons/si';
import '../styles/skills.css';

export default function Skills() {
  const sliderRef = useRef(null);

  const techStack = [
    { name: 'HTML', category: 'Frontend', icon: <SiHtml5 /> },
    { name: 'CSS', category: 'Frontend', icon: <FaCss3Alt /> },
    { name: 'Bootstrap', category: 'Frontend', icon: <SiBootstrap /> },
    { name: 'Tailwind CSS', category: 'Styling', icon: <SiTailwindcss /> },
    { name: 'React 19', category: 'Frontend', icon: <FaReact /> },
    { name: 'Node.js', category: 'Backend', icon: <FaNodeJs /> },
    { name: 'Express.js', category: 'Backend', icon: <SiExpress /> },
    { name: 'MongoDB', category: 'Database', icon: <SiMongodb /> }, 
    { name: 'PHP', category: 'Backend', icon: <SiPhp /> },
    { name: 'Git & GitHub', category: 'Tools', icon: <div className="dual-icon"><FaGitAlt /><FaGithub /></div> }
  ];
  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.skill-card').offsetWidth;
      const gap = 16; 
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="skills-container">
      <div className="skills-header">
        <h2>My Tech <span>Stack</span></h2>
        <div className="title-underline"></div>
      </div>
      <div className="skills-slider-wrapper">
        <div className="skills-grid" ref={sliderRef}>
          {techStack.map((tech, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon-box">{tech.icon}</div>
              <h3 className="skill-name">{tech.name}</h3>
              <span className="skill-badge">{tech.category}</span>
            </div>
          ))}
        </div>
        <button 
          className="slider-control-btn left-arrow" 
          onClick={() => handleScroll('left')}
          aria-label="Previous Skill"
        >
          <FaChevronLeft />
        </button>
        <button 
          className="slider-control-btn right-arrow" 
          onClick={() => handleScroll('right')}
          aria-label="Next Skill"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}