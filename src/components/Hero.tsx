import React from 'react';
import { Phone, Send, CheckCircle2, TrendingUp, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onFormScroll: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFormScroll }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#256c28] text-white py-16 sm:py-20 lg:py-24 border-b border-emerald-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-semibold text-amber-300 mb-6 shadow-xs">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Resmi Hyzmatdaşlyk & Ýokary Girdeji</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight mb-6">
            Hytaý Kompaniýasynda <br className="hidden sm:inline" />
            <span className="text-amber-300 underline decoration-amber-400/60 underline-offset-8">
              Täze Iş Mümkinçilikleri!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-emerald-50 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Garaşsyz we üstünlikli biznesiňize şu gün başlaň! Erkin grafik, çäksiz girdeji we töwekgelçiliksiz gelejek.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            
            {/* Primary Call Button */}
            <a
              href="tel:+99361396970"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg shadow-lg shadow-amber-950/20 transition transform active:scale-95"
            >
              <Phone className="w-5 h-5 text-slate-950" />
              <span>Jaň Etmek</span>
            </a>

            {/* Secondary Form Scroll Button */}
            <button
              onClick={onFormScroll}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-lg transition transform active:scale-95"
            >
              <Send className="w-5 h-5 text-emerald-200" />
              <span>Habar galdyrmak</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/15 max-w-3xl mx-auto text-left sm:text-center">
            <div className="flex items-center sm:justify-center space-x-2 text-xs sm:text-sm text-emerald-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
              <span>100% Töwekgelçiliksiz</span>
            </div>
            <div className="flex items-center sm:justify-center space-x-2 text-xs sm:text-sm text-emerald-100 font-medium">
              <TrendingUp className="w-4 h-4 text-amber-300 shrink-0" />
              <span>8 Dürli Bonus Ulgamy</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center space-x-2 text-xs sm:text-sm text-emerald-100 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Mugt Okuw & Goldaw</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
