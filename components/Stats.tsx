
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '150+', label: 'Countries' },
    { value: '5k+', label: 'TPS Speed' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center md:text-left">
            <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{stat.value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
