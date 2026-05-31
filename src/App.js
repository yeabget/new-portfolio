import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Projects from './components/Projects';

export default function App() {
  return (
    <div
      style={{
        position: 'relative',
        overflowX: 'hidden',
        minHeight: '100vh',
        backgroundColor: '#0e0e0e'
      }}
    >
  
      <AnimatedBackground />

      <Navbar />

      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>

      <Footer />
    </div>
  );
}