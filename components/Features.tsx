
import React from 'react';
import { Zap, ShieldCheck, BarChart3 } from 'lucide-react';
import { FeatureItemProps } from '../types';

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <li className="flex items-start gap-4">
    <div className="mt-1 text-indigo-400 shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium mb-1">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  </li>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Mission Control for your Campaigns</h2>
            <ul className="space-y-6">
              <FeatureItem 
                icon={<Zap className="w-5 h-5" />}
                title="Instant Delivery"
                description="Direct connections to Tier 1 aggregators ensure your SMS hits the phone in under 5 seconds."
              />
              <FeatureItem 
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Link Protection"
                description="Smart cloaking and domain rotation to prevent link bans by carriers."
              />
              <FeatureItem 
                icon={<BarChart3 className="w-5 h-5" />}
                title="Real-time Analytics"
                description="Watch your ROI skyrocket with granular delivery reports and click-through tracking."
              />
            </ul>
          </div>
          
          {/* UI Mockup */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10"></div>
            <div className="rounded-xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl">
              <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Campaign</div>
                    <div className="text-white font-medium">Nutra_DE_Blast_V2</div>
                  </div>
                  <div className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded border border-green-500/20">Active</div>
                </div>
                {/* Mock Chart Area */}
                <div className="flex items-end gap-2 h-32 mb-6 border-b border-white/5 pb-2">
                  <div className="w-full bg-indigo-500/20 h-[40%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
                  <div className="w-full bg-indigo-500/20 h-[65%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
                  <div className="w-full bg-indigo-500/20 h-[50%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
                  <div className="w-full bg-indigo-500/20 h-[85%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
                  <div className="w-full bg-indigo-500/20 h-[70%] rounded-t-sm hover:bg-indigo-500/40 transition-colors"></div>
                  <div className="w-full bg-indigo-500 h-[95%] rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-center">
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Sent</div>
                    <div className="text-base text-white font-semibold">14,205</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-center">
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Delivered</div>
                    <div className="text-base text-white font-semibold">13,980</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-center">
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Rate</div>
                    <div className="text-base text-green-400 font-semibold">98.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
