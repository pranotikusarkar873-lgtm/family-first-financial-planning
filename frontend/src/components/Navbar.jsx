import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Shield } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'services', 'process', 'why-choose-us', 'about', 'testimonials', 'contact-card-section'];
      let current = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand */}
        <div className="nav-brand">
          <div className="nav-logo-icon new-logo-icon">
            <Shield size={20} color="white" strokeWidth={2.5} />
          </div>
          <div className="nav-logo-text new-logo-text">
            <span className="logo-main">Family First</span>
            <span className="logo-sub">INSURANCE</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>मुखपृष्ठ</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>आमच्याबद्दल</a>
          <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>योजना</a>
          <a href="#process" className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}>प्रक्रिया</a>
          <a href="#why-choose-us" className={`nav-link ${activeSection === 'why-choose-us' ? 'active' : ''}`}>का निवडावे आम्हाला?</a>
          <a href="#testimonials" className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}>ग्राहक मनोगत</a>
          <a href="#contact-card-section" className={`nav-link ${activeSection === 'contact-card-section' ? 'active' : ''}`}>संपर्क</a>
        </div>
        
        {/* CTA */}
        <div className="nav-cta">
          <button 
            className="btn btn-gradient"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Briefcase size={18} />
            Book Free Consultation &rarr;
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#hero" className={`mobile-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>मुखपृष्ठ</a>
          <a href="#about" className={`mobile-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>आमच्याबद्दल</a>
          <a href="#services" className={`mobile-link ${activeSection === 'services' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>योजना</a>
          <a href="#process" className={`mobile-link ${activeSection === 'process' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>प्रक्रिया</a>
          <a href="#why-choose-us" className={`mobile-link ${activeSection === 'why-choose-us' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>का निवडावे आम्हाला?</a>
          <a href="#testimonials" className={`mobile-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>ग्राहक मनोगत</a>
          <a href="#contact-card-section" className={`mobile-link ${activeSection === 'contact-card-section' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>संपर्क</a>
          <button 
            className="btn btn-gradient mobile-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Briefcase size={18} />
            Book Free Consultation &rarr;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
