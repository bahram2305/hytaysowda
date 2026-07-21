import React from 'react';
import { Phone } from 'lucide-react';

interface HeaderProps {
  onOpenCodeModal: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 pr-2">
            <img
              src="/src/assets/images/app_logo_icon_1784662703793.jpg"
              alt="Hytaýda Iş Icon"
              referrerPolicy="no-referrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover shadow-xs border border-emerald-600/20 shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-base sm:text-xl font-extrabold tracking-tight text-[#2e7d32] font-heading whitespace-nowrap">
                  HYTAÝDA IŞ
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-[#2e7d32] border border-emerald-200">
                  Biznes Mümkinçilikleri
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate leading-tight">
                Täze Iş & Durnukly Girdeji Ulgamy
              </p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-6 shrink-0">
            
            <div className="hidden lg:flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-500">Soraglaryňyz barmy?</span>
            </div>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+99361396970"
              className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-xs sm:text-base font-bold shadow-md shadow-green-200 transition transform active:scale-95 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              <span>Jaň Etmek</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
