import React, { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleRoute = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="navbar"> 
      <div className="nav-logo" onClick={() => handleRoute('home')}>
        <div className="logo-box">
          <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <div className="logo-text">
          YEAB<span className="logo-highlight">SIRA</span>
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><button onClick={() => handleRoute('home')}>Home</button></li>
        <li><button onClick={() => handleRoute('about')}>About</button></li>
        <li><button onClick={() => handleRoute('skills')}>Skills</button></li>
        <li><button onClick={() => handleRoute('projects')}>Projects</button></li>
        <li><button onClick={() => handleRoute('contact')}>Contact</button></li>
      </ul>

      <div className="nav-actions">
        <button 
          className={`hamburger ${isOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>
    </nav>
  );
}