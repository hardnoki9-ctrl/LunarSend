
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Verticals from './components/Verticals';
import Features from './components/Features';
import ApiSection from './components/ApiSection';
import PricingCTA from './components/PricingCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Verticals />
        <Features />
        <ApiSection />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
