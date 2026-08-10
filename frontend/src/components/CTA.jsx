import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner">
          
          <div className="cta-left">
            <img src="/cta-family.png" alt="Family financial security" className="cta-illustration" />
          </div>
          
          <div className="cta-right">
            <h2>तुमच्या कुटुंबासाठी Financial Health<br/>आजच तपासा.</h2>
            <p>तज्ञ सल्लागार तुमच्याशी संपर्क साधतील.</p>
            <button 
              className="btn btn-white cta-btn"
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Consultation <ArrowRight size={18} />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
