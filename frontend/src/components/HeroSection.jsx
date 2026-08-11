import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, PiggyBank, PieChart, UserCheck, Target, User, Phone, Mail, Lock } from 'lucide-react';
import './HeroSection.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    requirement: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'धन्यवाद! आम्ही लवकरच संपर्क साधू.'
        });
        setFormData({ name: '', mobile: '', email: '', requirement: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'काहीतरी चूक झाली.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-shapes"></div>
      
      <div className="container hero-container">
        
        {/* Left Column: Text & Benefits */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <Star size={16} className="badge-icon" />
            <span>तुमच्या स्वप्नांना आर्थिक बळ द्या</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            आजचे योग्य नियोजन,<br/>
            उद्याची <span className="highlight-gradient">आर्थिक</span><br/>
            <span className="highlight-gradient">सुरक्षितता!</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-desc">
            Financial Planning, Insurance Protection, Investment आणि<br/>
            Retirement Planning — तज्ज्ञ सल्लागारांसोबत.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-benefits">
            <div className="benefit-item">
              <div className="benefit-icon-wrapper shield">
                <Shield size={20} />
              </div>
              <span className="benefit-text">100% विश्वासार्ह</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper hand">
                <PiggyBank size={20} />
              </div>
              <span className="benefit-text">कर वाचविण्याचे फायदे</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper pie">
                <PieChart size={20} />
              </div>
              <span className="benefit-text">लक्ष्यांकित योजना</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper user">
                <UserCheck size={20} />
              </div>
              <span className="benefit-text">तज्ञ मार्गदर्शन</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Center Column: Image & Floating Badge */}
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <div className="image-container">
            <img src="/hero-family.png" alt="Happy family planning finances" className="hero-img" />
          </div>
          
          <div className="floating-purple-badge">
            <div className="purple-badge-icon">
              <Target size={24} />
            </div>
            <div className="purple-badge-text">
              <h4>तुमची स्वप्ने, आमची जबाबदारी</h4>
              <p>तुमचे भविष्य सुरक्षित करण्यासाठी आम्ही सदैव तुमच्यासोबत आहोत.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Right Column: Form Card */}
        <motion.div 
          className="hero-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <div id="consultation-form" className="hero-form-card">
            <div className="form-header">
              <h3>मोफत आर्थिक आरोग्य तपासा</h3>
              <p>तज्ञ सल्लागार तुमच्याशी लवकरच संपर्क साधतील.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="hero-form">
              <div className="input-group">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="तुमचे नाव लिहा"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="input-group">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="मोबाईल क्रमांक लिहा"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              
              <div className="input-group">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="ईमेल आयडी लिहा"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="input-group select-group">
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>आपली गरज निवडा</option>
                  <option value="Customize Financial Planning">Customize Financial Planning</option>
                  <option value="Term insurance planning">Term insurance planning</option>
                  <option value="Life Insurance">Life Insurance</option>
                  <option value="Health Insurance">Health Insurance</option>
                  <option value="Mutual Funds">Mutual Funds & SIP</option>
                  <option value="Retirement">Retirement Planning</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-gradient submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'संपर्क साधा \u2192'}
              </button>
              
              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
            
            <div className="form-footer">
              <Lock size={14} />
              <span>तुमची माहिती सुरक्षित आहे.</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
