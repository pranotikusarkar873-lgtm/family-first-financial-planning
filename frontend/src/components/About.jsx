import React from 'react';
import { CheckCircle2, Users, Star, IndianRupee, HeartHandshake } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        {/* Left Column: Why Choose Us */}
        <div className="about-left">
          <h2 className="about-title">
            Family First का निवडावे?<br/>
            कारण तुमचे भविष्य<br/>
            आमच्यासाठी महत्त्वाचे आहे.
          </h2>
          
          <ul className="about-list">
            <li>
              <CheckCircle2 color="#EF4444" size={24} className="check-icon" />
              <span>Goal-based Financial Planning</span>
            </li>
            <li>
              <CheckCircle2 color="#EF4444" size={24} className="check-icon" />
              <span>Family Protection & Risk Management</span>
            </li>
            <li>
              <CheckCircle2 color="#EF4444" size={24} className="check-icon" />
              <span>Investment & Retirement Planning</span>
            </li>
            <li>
              <CheckCircle2 color="#EF4444" size={24} className="check-icon" />
              <span>Long term विचार आणि वैयक्तिक सेवा</span>
            </li>
          </ul>
        </div>
        
        {/* Right Column: Advisor Stats Panel */}
        <div className="about-right">
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
        </div>
        
      </div>
    </section>
  );
};

export default About;
