import React from 'react';
import { Users, Star, IndianRupee, HeartHandshake } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-header-text">
          <h2 className="about-title-main">आमच्याबद्दल</h2>
          <p className="about-subtitle-main">आम्ही तुमचे आर्थिक उद्दिष्टे साध्य करण्यासाठी मदत करतो.</p>
        </div>

        <div className="about-content-wrapper">
          <div className="about-image-col">
            <img src="/images/rahul_profile.png" alt="Rahul Ramkrishna Kulkarni" className="advisor-image" />
          </div>

          <div className="advisor-info-col">
            <div className="advisor-panel">
              <div className="advisor-header">
                <h3>Rahul Ramkrishna Kulkarni</h3>
                <p className="advisor-company">Family First Financial Planning</p>
                <p className="advisor-tags">Financial Planning • Insurance • Investment • Retirement Planning</p>
              </div>
              
              <div className="advisor-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <Users size={24} color="#7047EB" />
                  </div>
                  <div className="stat-text">
                    <h4>700+</h4>
                    <p>समाधानी ग्राहक</p>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <Star size={24} color="#F97316" />
                  </div>
                  <div className="stat-text">
                    <h4>12+</h4>
                    <p>वर्षांचा अनुभव</p>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <IndianRupee size={24} color="#14B8A6" />
                  </div>
                  <div className="stat-text">
                    <h4>20 Cr+</h4>
                    <p>गुंतवणूक व्यवस्थापित</p>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <HeartHandshake size={24} color="#EF4444" />
                  </div>
                  <div className="stat-text">
                    <h4>75 Cr+</h4>
                    <p>कुटुंब सुरक्षा संरक्षण</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="advisor-bio">
              <p>Started my career as media personal with Satyavedh Magazine and Akashwani... My mentor Mr. Arun Kumbhar (LIC Dev. Officer) introduced me to the world of Financial Welfare Planning, commonly referred as Insurance. Later my natural interest in meeting people and right training gave me deep insight of this sector. Insurance and Pension planning is most appropriate and legal instrument to secure family lifestyle and own dignity at advance age. Later I added health insurance, banking and housing finance sector. It gives me immense pleasure to serve my clients to live a better and satisfied financial life....</p>
              <p>I have 18 years of involvement with Satyavedh group as owner, Akashwani sangli as anchor, daily Punyanagari as reporter and Satyavedh Foundation (NGO) as founder.</p>
              <p>We are ready to serve you with professional and industrial risk management, family income and retirement cashflow.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
