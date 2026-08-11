import React from 'react';
import { motion } from 'framer-motion';
import { Umbrella, HeartPulse, TrendingUp, RockingChair, GraduationCap } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    title: 'जीवन विमा',
    desc: 'तुमच्या कुटुंबाच्या सुरक्षिततेसाठी विश्वासार्ह संरक्षण.',
    icon: Umbrella,
    colorClass: 'service-peach'
  },
  {
    title: 'आरोग्य विमा',
    desc: 'उच्च आरोग्य सेवांसाठी योग्य आणि व्यापक योजना.',
    icon: HeartPulse,
    colorClass: 'service-mint'
  },
  {
    title: 'गुंतवणूक आणि SIP',
    desc: 'शिस्तबद्ध गुंतवणूक आणि ध्येयांच्या पूर्ततेसाठी स्मार्ट पर्याय.',
    icon: TrendingUp,
    colorClass: 'service-blue'
  },
  {
    title: 'निवृत्ती नियोजन',
    desc: 'निवृत्तीनंतरही आर्थिक स्वातंत्र्यासाठी नियोजन आवश्यक.',
    icon: RockingChair,
    colorClass: 'service-lavender'
  },
  {
    title: 'एज्युकेशन प्लॅनिंग',
    desc: 'मुलांच्या उच्च शिक्षणासाठी आणि उज्वल भविष्यासाठी सुरक्षित आर्थिक नियोजन.',
    icon: GraduationCap,
    colorClass: 'service-peach'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section id="services" className="services-section text-center">
      <div className="container">
        
        <span className="section-eyebrow">आम्ही काय देतो</span>
        <h2 className="section-title">तुमच्या आर्थिक आयुष्याच्या प्रत्येक टप्प्यासाठी</h2>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                className={`service-card ${service.colorClass}`} 
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="service-icon-wrapper">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Services;
