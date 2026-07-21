import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  onFormScroll: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onFormScroll }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 shadow-lg flex items-center justify-between gap-3">
      
      {/* Call Button */}
      <a
        href="tel:+99361396970"
        className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-3 rounded-xl bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold text-sm shadow-sm transition active:scale-95"
      >
        <Phone className="w-4 h-4 text-amber-300" />
        <span>📞 Jaň Etmek</span>
      </a>

      {/* Message Button */}
      <button
        onClick={onFormScroll}
        className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-sm transition active:scale-95"
      >
        <MessageCircle className="w-4 h-4 text-slate-950" />
        <span>✉️ Habar Ýazmak</span>
      </button>

    </div>
  );
};
