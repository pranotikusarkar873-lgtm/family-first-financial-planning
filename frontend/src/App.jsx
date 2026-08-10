import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
