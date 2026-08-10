import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import './Process.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const Process = () => {
  return (
    <section id="process" className="process-section text-center">
      <div className="container">
        
        <span className="section-eyebrow">आमची प्रक्रिया</span>
        <h2 className="section-title">Planning ची सोपी 3-Step प्रक्रिया</h2>
        
        <motion.div 
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          
          {/* Step 1 */}
          <motion.div variants={stepVariants} className="process-step">
            <motion.div 
              className="step-card card-yellow"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="step-number bg-yellow">01</div>
              <div className="step-icon">
                <Search size={40} color="#F59E0B" />
              </div>
              <div className="step-content">
                <h3>समजून घ्या</h3>
                <p>तुमच्या उत्पन्न, खर्च, उद्दिष्टे आणि गरजा समजून घेतल्या जातात.</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={arrowVariants} className="step-arrow">
            <ArrowRight size={24} color="#F97316" />
          </motion.div>
          
          {/* Step 2 */}
          <motion.div variants={stepVariants} className="process-step">
            <motion.div 
              className="step-card card-red"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="step-number bg-red">02</div>
              <div className="step-icon">
                <Target size={40} color="#EF4444" />
              </div>
              <div className="step-content">
                <h3>योजना तयार करा</h3>
                <p>तुमच्या गरजेनुसार Insurance, Investment आणि Goal-based Financial Plan तयार केला जातो.</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={arrowVariants} className="step-arrow">
            <ArrowRight size={24} color="#EF4444" />
          </motion.div>
          
          {/* Step 3 */}
          <motion.div variants={stepVariants} className="process-step">
            <motion.div 
              className="step-card card-blue"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="step-number bg-blue">03</div>
              <div className="step-icon">
                <ShieldCheck size={40} color="#3B82F6" />
              </div>
              <div className="step-content">
                <h3>नियमित पुनरावलोकन</h3>
                <p>परिस्थितीनुसार योजना अपडेट करून भविष्याची आर्थिक सुरक्षितता केली जाते.</p>
              </div>
            </motion.div>
          </motion.div>
          
        </motion.div>
        
      </div>
    </section>
  );
};

export default Process;
