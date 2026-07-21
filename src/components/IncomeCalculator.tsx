import React, { useState } from 'react';
import { Calculator, DollarSign, Award, ArrowRight, Zap } from 'lucide-react';

interface IncomeCalculatorProps {
  onFormScroll: () => void;
}

export const IncomeCalculator: React.FC<IncomeCalculatorProps> = ({ onFormScroll }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);

  // Income estimation formula
  const baseMonthly = hoursPerWeek * 350; // estimated TMT base per hour rate equivalent
  const bonusAmount = Math.round(baseMonthly * 0.4);
  const totalPotential = baseMonthly + bonusAmount;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30">
              <Zap className="w-3.5 h-3.5" />
              <span>Interaktiw Kalkulýator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight mb-4">
              Mümkin Bolan Swobodny Girdejiňizi Hasaplaň
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Häzirki wagtyňyza görä Hytaý kompaniýasynyň hyzmatdaşlyk ulgamynda näçe goşmaça girdeji gazanyp biljekdigiňizi derrew göz öňüne getiriň.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Çäksiz bonus ulgamy (8 dürli töleg çeşmesi)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Tölegler durnukly we öz wagtynda</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Halypalar tarapyndan 100% mugt öwrediş</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Card */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-6 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg font-heading">Hepdelik Iş Sagady</h3>
                  <p className="text-xs text-slate-400">Özüňiz üçin bellenilen erkin wagt</p>
                </div>
              </div>
              <span className="text-2xl font-black text-amber-400 font-heading">
                {hoursPerWeek} Sagat / Hepde
              </span>
            </div>

            {/* Slider */}
            <div className="py-8">
              <div className="flex justify-between text-xs text-slate-400 font-medium mb-3">
                <span>5 sagat (Goşmaça)</span>
                <span>20 sagat (Part-time)</span>
                <span>40 sagat (Full-time)</span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                step={5}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#2e7d32]"
              />
            </div>

            {/* Calculation Result Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mb-6">
              <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-700">
                <p className="text-xs font-medium text-slate-400 mb-1">Esasy Hyzmatdaşlyk Girdejisi</p>
                <p className="text-2xl font-extrabold text-white font-heading">
                  ~{baseMonthly.toLocaleString()} TMT <span className="text-xs font-normal text-slate-400">/ aýda</span>
                </p>
              </div>

              <div className="bg-emerald-950/40 rounded-2xl p-5 border border-emerald-500/30">
                <p className="text-xs font-medium text-emerald-300 mb-1">Mümkin Bolan Bonuslar (Satuw & Topar)</p>
                <p className="text-2xl font-extrabold text-amber-400 font-heading">
                  +{bonusAmount.toLocaleString()} TMT <span className="text-xs font-normal text-emerald-200">/ aýda</span>
                </p>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] rounded-2xl p-6 text-center shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-xs font-bold text-emerald-200 uppercase tracking-wider">Takmynan Jemi Aýlyk Girdeji</p>
                <p className="text-3xl font-black text-white font-heading">
                  ~{totalPotential.toLocaleString()} TMT
                </p>
              </div>
              <button
                onClick={onFormScroll}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Sözleşme Başlatmak</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
