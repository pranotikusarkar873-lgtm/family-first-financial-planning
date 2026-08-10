import React from 'react';
import { Phone, Mail, Clock, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="nav-logo-icon new-logo-icon">
                <Shield size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="footer-logo-text new-logo-text">
                <span className="logo-main">Family First</span>
                <span className="logo-sub">INSURANCE</span>
              </div>
            </div>
            <p className="footer-desc">
              आपले ध्येय – तुमच्या कुटुंबाचे आज आणि उद्याचे आर्थिक संरक्षण करणे.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div className="footer-column">
            <h4>दुवे</h4>
            <ul>
              <li><a href="#hero">मुखपृष्ठ</a></li>
              <li><a href="#about">आमच्याबद्दल</a></li>
              <li><a href="#services">योजना</a></li>
              <li><a href="#process">प्रक्रिया</a></li>
              <li><a href="#footer">संपर्क</a></li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>योजना</h4>
            <ul>
              <li><a href="#services">जीवन विमा</a></li>
              <li><a href="#services">आरोग्य विमा</a></li>
              <li><a href="#services">गुंतवणूक आणि SIP</a></li>
              <li><a href="#services">निवृत्ती नियोजन</a></li>
            </ul>
          </div>
          
          {/* Column 4: Help */}
          <div className="footer-column">
            <h4>मदत</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">गोपनीयता धोरण</a></li>
              <li><a href="#">अटी आणि शर्ती</a></li>
              <li><a href="#">डेटा संरक्षण</a></li>
            </ul>
          </div>
          
          {/* Column 5: Contact */}
          <div className="footer-column contact-column">
            <h4>संपर्क</h4>
            <ul>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>1800 123 4567</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>support@familyfirst.com</span>
              </li>
              <li>
                <Clock size={16} className="contact-icon" />
                <span>सोम - शनि: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>
      
      {/* Scroll to top button placeholder (optional) */}
      <div className="scroll-top">
        <a href="#hero">↑</a>
      </div>
    </footer>
  );
};

export default Footer;
