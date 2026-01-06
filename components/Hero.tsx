
import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-glow-radial -z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid opacity-20 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          New High-Speed Routes Available
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400 leading-[1.1]">
          SMS Campaigns that<br className="hidden md:block" /> Reach the Stars.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          The ultimate SMS gateway for high-volume verticals. We specialize in delivery for <span className="text-slate-200">Nutra, Crypto, iGaming, and Finance</span>. Unmatched deliverability where others fail.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToPricing}
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2 group active:scale-95"
          >
            Create Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={scrollToPricing}
            className="w-full md:w-auto px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
