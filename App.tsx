import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChoose from './components/sections/WhyChoose';
import EventsGallery from './components/sections/EventsGallery';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-[#7FE7DC] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <EventsGallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;