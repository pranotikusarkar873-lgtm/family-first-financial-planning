import React from 'react';
import './ContactCard.css';

const ContactCard = () => {
  return (
    <section id="contact-card-section" className="contact-section">
      <div className="container">
        <div className="contact-card-wrapper">
          <div className="contact-card">
            <h2 className="contact-name">Mr. Rahul Ramkrishna Kulkarni</h2>
            <div className="contact-subtitles">
              <p>MDRT (USA)</p>
              <p>Risk Management Consultant</p>
            </div>
            
            <div className="contact-divider"></div>
            
            <h3 className="contact-section-title">Office :</h3>
            <p className="contact-address">
              205, Shiv-City Center, Above KFC, Second Floor,<br/>
              Miraj-Sangli Road, Vijaynagar, Sangli.
            </p>
            
            <div className="contact-divider"></div>
            
            <div className="contact-details">
              <p><strong>Contact :</strong> 8421702419, 9922182419</p>
              <p><strong>Email :</strong> lifecareforu9@gmail.com</p>
            </div>
            
            <div className="contact-associates">
              <p>Our Associates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
