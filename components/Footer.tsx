
import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#03040B] text-sm relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
              <span className="text-white font-medium tracking-tight text-lg">LunarSend</span>
            </div>
            <p className="text-slate-500 mb-6 max-w-xs leading-relaxed">
              Premium SMS infrastructure for the modern web. Built for scale, speed, and delivery.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Global Coverage</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Verify API</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Campaign Manager</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Verticals</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Nutra & Health</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">iGaming</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Crypto</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Finance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Anti-Spam Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="text-slate-600">
            © 2024 LunarSend Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
