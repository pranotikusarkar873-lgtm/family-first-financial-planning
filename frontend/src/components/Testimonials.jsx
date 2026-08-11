import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Dr. Shriniketan Kale',
    role: 'Oncologist',
    text: "We medical professionals too need to manage large cashflow for our financial security. Rahul has clear concepts for professional indemnity, income replacement for family and retirement cashflow.",
    color: '#3B82F6', // blue
    initials: 'SK',
    image: '/images/dr_kale.png'
  },
  {
    name: 'Mr. Mahesh Patil',
    role: 'Industrialist',
    text: "Financial planning needs after sales services like renewal, loans and claims. Rahul Kulkarni has great acumen for this and has helped our industry in settling claims.",
    color: '#F97316', // orange
    initials: 'MP',
    image: '/images/mahesh_patil.png'
  },
  {
    name: 'Mrs. Samprada Bidkar',
    role: 'Govt. Officer, DIO Nashik',
    text: "It was really wonderful to plan my retirement cashflow with Rahul's principled guidance. He has helped me to plan my family pension system akin to pre 2004 government pension. Now I have no tension.",
    color: '#14B8A6', // mint
    initials: 'SB',
    image: '/images/samprada_bidkar.png'
  },
  {
    name: 'Mr. Sumit Kulkarni',
    role: 'Cognizant IT Professional',
    text: "I was really unplanned with big salary and company facility. Mr. Rahul Kulkarni conceptually helped to secure my early retirement, lifestyle and replace income.",
    color: '#7047EB', // lavender
    initials: 'SK',
    image: '/images/sumit_kulkarni.png'
  },
  {
    name: 'Arun Kumbhar',
    role: 'Development Officer LIC',
    text: "Rahul has great love for learning & very serious about handling customers money. He is great motivator for my team adviser. He has developed own office with staff and infrastructure for long term customer care.",
    color: '#EF4444', // red
    initials: 'AK',
    image: '/images/arun_kumbhar.png'
  },
  {
    name: 'Prof. Dr. Rahul Sakpal',
    role: 'MD Pathologist',
    text: "Family health insurance is must for medical emergencies. Rahul has helped me to secure and serviced my health claim in right way.",
    color: '#10B981', // green
    initials: 'RS',
    image: '/images/rahul_sakpal.png'
  }
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-eyebrow">ग्राहक मनोगत</span>
          <h2 className="testimonials-title">Reviews / Testimonials</h2>
          <p className="testimonials-subtitle">आमच्यावर विश्वास ठेवणाऱ्या समाधानी ग्राहकांचे अनुभव.</p>
        </motion.div>
        
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={cardVariants}
              style={{ borderBottom: `4px solid ${testimonial.color}` }}
            >
              <Quote size={40} className="quote-icon" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div 
                  className="author-avatar" 
                  style={{ 
                    backgroundColor: testimonial.image ? 'transparent' : testimonial.color,
                    backgroundImage: testimonial.image ? `url(${testimonial.image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: testimonial.image ? '2px solid white' : 'none',
                    boxShadow: testimonial.image ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  {!testimonial.image && testimonial.initials}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Testimonials;
