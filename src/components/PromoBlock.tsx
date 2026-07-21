import React from 'react';
import { Flame, Percent } from 'lucide-react';

export const PromoBlock: React.FC = () => {
  return (
    <div className="relative -mt-8 sm:-mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden text-center transition hover:shadow-md">
        
        {/* Top Floating Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="bg-amber-400 text-amber-900 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center space-x-1.5 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-amber-900 fill-amber-900" />
            <span>Üns Beriň • ÜNS ÇEKIJI TEKLIP</span>
          </span>
        </div>

        {/* Inner Graphic Elements */}
        <div className="flex justify-center mb-3 pt-4 sm:pt-1">
          <div className="inline-flex items-center space-x-2 text-amber-800 bg-amber-100/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            <Percent className="w-3.5 h-3.5 text-amber-700" />
            <span>Maliýe Erkinligi & Çykdaýjy Azaltmak</span>
          </div>
        </div>

        {/* Main Promo Text */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-900 leading-snug font-heading underline decoration-amber-300 decoration-4 underline-offset-4 italic my-2">
          "Gündelik çykdaýjylaryňyzy 50%-den 100%-e çenli azaldyň we goşmaça pul gazanyň!"
        </h2>

        <p className="mt-3 text-sm sm:text-base text-amber-800/90 max-w-2xl mx-auto font-medium">
          Hytaý hyzmatdaşlygynyň bähbitli ulgamy bilen öz maşgala býudjetiňizi tyşşytlaň we täze durnukly girdeji çeşmesini guruň.
        </p>

      </div>
    </div>
  );
};
