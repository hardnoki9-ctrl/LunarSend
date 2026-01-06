
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#03040B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <div className="w-4 h-4 rounded-full bg-[#03040B]"></div>
          </div>
          <span className="text-white font-medium tracking-tight text-lg group-hover:text-indigo-300 transition-colors">LunarSend</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#industries" className="hover:text-white transition-colors">Verticals</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#api" className="hover:text-white transition-colors">API</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" onClick={scrollToPricing} className="hidden md:block text-sm font-medium hover:text-white transition-colors">Log in</a>
          <button 
            onClick={scrollToPricing}
            className="bg-white text-[#03040B] px-4 py-2 rounded-full text-xs font-semibold hover:bg-indigo-50 transition-all active:scale-95 shadow-sm"
          >
            Start Sending
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
