import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <Process />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <CTA />
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
