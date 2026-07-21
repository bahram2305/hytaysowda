import React from 'react';
import { Clock, Gem, ShieldCheck, GraduationCap, Users, CheckCircle } from 'lucide-react';

export const AdvantagesGrid: React.FC = () => {
  const advantages = [
    {
      id: 'flexibility',
      icon: Clock,
      title: 'Erkin Iş Tertibi',
      subtitle: 'Wagtyňyzy özüňiz kesgitläň',
      desc: 'Öýde, işde ýa-da gezelençde bolup, özüňize amatly wagtda işläň. Bellenen ýygy-ýygydan iş sagatlary ýok.',
      color: 'from-amber-500 to-amber-600',
      badge: '⏰ Erkinlik'
    },
    {
      id: 'income',
      icon: Gem,
      title: 'Çäksiz Girdeji we 8 Dürli Bonus',
      subtitle: 'Satuw, toparlaýyn we liderlik bonuslary',
      desc: 'Zähmetiňize görä çäksiz köp gazanmak mümkinçiligi. 8 dürli maliýe höweslendiriş ulgamy we syýahat bonuslary.',
      color: 'from-emerald-600 to-emerald-700',
      badge: '💎 8 Bonus'
    },
    {
      id: 'risk-free',
      icon: ShieldCheck,
      title: 'Töwekgelçiliksiz Biznes',
      subtitle: 'Uly maýa goýumsyz',
      desc: 'Müňlerçe dollar maýa goýmak ýa-da karz almak gerek däl. 100% töwekgelçiliksiz we goragly başlangyç.',
      color: 'from-blue-600 to-blue-700',
      badge: '🛡️ 100% Goragly'
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Mugt Okuw we Hemişelik Goldaw',
      subtitle: 'Tejribeli halypalardan sapaklar',
      desc: 'Siz ýeke dälsiňiz! Tälimçilerimiz tarapyndan Türkmen dilinde mugt sapaklar, onlaýn maslahatlar we hemişelik goldaw.',
      color: 'from-purple-600 to-purple-700',
      badge: '🎓 Mugt Tälim'
    },
    {
      id: 'accessible',
      icon: Users,
      title: 'Hemmeler Üçin Elýeterli',
      subtitle: 'Ýörite bilim gerek däl (18+)',
      desc: 'Öňki zähmet tejribesi, ýörite diplom ýa-da bilim talap edilmeýär. Diňe 18 ýaşdan uly bolup, gazanmak islegi ýeterlik!',
      color: 'from-amber-600 to-emerald-600',
      badge: '👥 18+ Ulanyjy'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#2e7d32] font-bold text-xs uppercase tracking-wider mb-3">
            <span>Näme Üçin Bizi Saýlamaly?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Biznesiniň Esasy Artykmaçlyklary
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Hytaý kompaniýasy bilen hyzmatdaşlyk etmek arkaly maliýe erkinligine ýetişmegiň 5 möhüm sebebi.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            const isLarge = idx === 1; // Highlight the main bonus advantage
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#2e7d32]/30 transition-all duration-300 relative flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-1 ring-2 ring-[#2e7d32]/20 bg-emerald-50/20' : ''
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md shadow-emerald-900/10`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#2e7d32] uppercase tracking-wide mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Checkmark */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs font-medium text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-[#2e7d32]" />
                  <span>Resmi Hyzmatdaşlyk Sertifikatly</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
