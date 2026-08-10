import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'services', 'process', 'about', 'footer'];
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
          <div className="nav-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7047EB" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
              <path d="M12 4L4 8L12 12L20 8L12 4Z" />
              <path d="M4 12L12 16L20 12" />
              <path d="M4 16L12 20L20 16" />
            </svg>
          </div>
          <div className="nav-logo-text">
            <span className="logo-main">Family First</span>
            <span className="logo-sub">Financial Planning</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>मुखपृष्ठ</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>आमच्याबद्दल</a>
          <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>योजना</a>
          <a href="#process" className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}>प्रक्रिया</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>का निवडावे आम्हाला?</a>
          <a href="#footer" className={`nav-link ${activeSection === 'footer' ? 'active' : ''}`}>संपर्क</a>
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
          <a href="#about" className={`mobile-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>का निवडावे आम्हाला?</a>
          <a href="#footer" className={`mobile-link ${activeSection === 'footer' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>संपर्क</a>
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
