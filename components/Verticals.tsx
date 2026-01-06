
import React from 'react';
import { Leaf, Dice5, Banknote, Bitcoin, Gift, Megaphone } from 'lucide-react';
import { VerticalCardProps } from '../types';

const VerticalCard: React.FC<VerticalCardProps> = ({ icon, title, description, colorClass }) => (
  <div className="group p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-indigo-500/30 transition-all duration-300">
    <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const Verticals: React.FC = () => {
  const verticals: VerticalCardProps[] = [
    {
      icon: <Leaf className="w-5 h-5 text-green-400" />,
      title: "Nutra & Health",
      description: "High conversion routes for supplements, diet, and beauty offers. No content filtering on pre-approved templates.",
      colorClass: "bg-green-500/10"
    },
    {
      icon: <Dice5 className="w-5 h-5 text-purple-400" />,
      title: "iGaming & Gambling",
      description: "Casino, betting, and slots. Direct carrier routes ensuring your bonus offers land directly in the inbox.",
      colorClass: "bg-purple-500/10"
    },
    {
      icon: <Banknote className="w-5 h-5 text-blue-400" />,
      title: "Loans & Microcredits",
      description: "PDL (Payday Loans) and MFI. Instant delivery for time-sensitive financial offers and approvals.",
      colorClass: "bg-blue-500/10"
    },
    {
      icon: <Bitcoin className="w-5 h-5 text-orange-400" />,
      title: "Crypto & Forex",
      description: "Reliable OTPs and marketing blasts for exchanges, trading platforms, and signals.",
      colorClass: "bg-orange-500/10"
    },
    {
      icon: <Gift className="w-5 h-5 text-pink-400" />,
      title: "Sweepstakes (Sweeps)",
      description: "Giveaways, vouchers, and contests. We handle the massive burst volumes typical of sweepstake launches.",
      colorClass: "bg-pink-500/10"
    },
    {
      icon: <Megaphone className="w-5 h-5 text-indigo-400" />,
      title: "Affiliate Marketing",
      description: "General CPA marketing. Custom sender IDs and smart link rotation support included.",
      colorClass: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-[#03040B] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Dominating High-Demand Verticals</h2>
          <p className="text-slate-400 max-w-xl">
            Standard gateways block your traffic. LunarSend optimizes routes specifically for high-risk and high-volume industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {verticals.map((v, i) => (
            <VerticalCard key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
