import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Users, Building, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const newReasons = [
    {
      icon: <BookOpen size={28} strokeWidth={1.5} />,
      title: 'योग्य आर्थिक साक्षरता मार्गदर्शन',
      colorClass: 'choose-peach'
    },
    {
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      title: 'बचत आणि गुंतवणूक यातील फरक',
      colorClass: 'choose-mint'
    },
    {
      icon: <Users size={28} strokeWidth={1.5} />,
      title: 'कुशल कर्मचारी उपलब्ध',
      colorClass: 'choose-blue'
    },
    {
      icon: <Building size={28} strokeWidth={1.5} />,
      title: 'स्वतःचे ऑफिस आणि कर्मचारी',
      colorClass: 'choose-lavender'
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: '१२ वर्षांचा अनुभव',
      colorClass: 'choose-peach'
    },
    {
      icon: <HeartHandshake size={28} strokeWidth={1.5} />,
      title: 'मॅच्युरिटी आणि क्लेम सपोर्ट',
      colorClass: 'choose-mint'
    }
  ];

  const oldReasons = [
    'Goal-based Financial Planning',
    'Family Protection & Risk Management',
    'Investment & Retirement Planning',
    'Long term विचार आणि वैयक्तिक सेवा'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    }
  };

  const listVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-choose-us" className="why-choose-section">
      <div className="container">
        
        <motion.div 
          className="why-choose-header text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-eyebrow">आमची खासियत</span>
          <h2 className="section-title">Family First का निवडावे?</h2>
        </motion.div>

        <div className="why-choose-wrapper">
          
          {/* Left Column: Old approach points */}
          <motion.div 
            className="why-choose-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h3 variants={listVariants} className="core-focus-title">कारण तुमचे भविष्य<br/>आमच्यासाठी महत्त्वाचे आहे.</motion.h3>
            <motion.p variants={listVariants} className="core-focus-desc">आम्ही तुमच्या कुटुंबाच्या सुरक्षिततेसाठी आणि प्रगतीसाठी नेहमी कटिबद्ध आहोत. आमचा मुख्य दृष्टिकोन:</motion.p>
            
            <ul className="core-values-list">
              {oldReasons.map((reason, index) => (
                <motion.li key={index} variants={listVariants}>
                  <CheckCircle2 color="#EF4444" size={24} className="check-icon" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: New 6 Cards */}
          <motion.div 
            className="why-choose-right"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {newReasons.map((reason, index) => (
              <motion.div 
                key={index} 
                className={`compact-choose-card ${reason.colorClass}`} 
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              >
                <div className="compact-icon-wrapper">
                  {reason.icon}
                </div>
                <h4>{reason.title}</h4>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
