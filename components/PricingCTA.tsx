
import React, { useState } from 'react';
import { Check, Loader2, Send } from 'lucide-react';

const PricingCTA: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mqeavook', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent -z-10"></div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">Ready to launch?</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join 500+ affiliate teams and businesses scaling their revenue with LunarSend. 
            Pay only for what you send. No hidden fees.
          </p>
        </div>
        
        <div className="bg-[#0B0C15] p-6 md:p-10 rounded-[32px] border border-white/5 shadow-2xl transition-all duration-300">
          {status === 'success' ? (
            <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <Check className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-2xl mb-3">Message Sent!</h3>
              <p className="text-slate-400">Our enterprise team will reach out shortly to discuss your volume requirements.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="full_name" className="block text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold ml-1">Full Name</label>
                  <input 
                    id="full_name"
                    type="text" 
                    name="full_name"
                    required
                    placeholder="Juan Dela Cruz" 
                    className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold ml-1">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required
                    placeholder="juan@example.com" 
                    className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your case... or leave your Telegram / Viber / WA, and we will connect with you there" 
                  className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm resize-none"
                ></textarea>
              </div>
              
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-sm text-center font-medium">Something went wrong. Please check your connection and try again.</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-white text-black font-black py-5 rounded-full hover:bg-indigo-50 transition-all active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase tracking-[0.3em] shadow-xl"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 rotate-[-15deg]" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-8 flex items-center justify-center gap-6 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-indigo-500" /> Enterprise Direct Routes</span>
            <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-indigo-500" /> 24/7 Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
