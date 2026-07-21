import React from 'react';
import { CheckCircle2, X, PhoneCall } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  userName?: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, userName, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl border border-slate-100 relative animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-20 h-20 bg-emerald-100 text-[#2e7d32] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">
          Ýüzlenmäňiz kabul edildi!
        </h3>

        {/* Message */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {userName ? <strong className="text-slate-800">{userName}</strong> : 'Hormatly Müşderi'}, sag boluň! Tiz arada biziň maslahatçymyz siz bilen habarlaşar.
        </p>

        {/* Direct Call Quick Link */}
        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/60 mb-6 flex items-center justify-between text-left">
          <div>
            <p className="text-xs font-bold text-emerald-800">Garaşasyňyz gelmeýärmi?</p>
            <p className="text-xs text-emerald-700">Derrew jandlaşyp bilersiňiz:</p>
          </div>
          <a
            href="tel:+99361396970"
            className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#2e7d32] text-white text-xs font-bold shadow-xs hover:bg-[#1b5e20] transition"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Jaň Etmek</span>
          </a>
        </div>

        {/* OK / Close Button */}
        <button
          onClick={onClose}
          className="w-full btn-gold py-3.5 rounded-xl font-bold text-base shadow-md"
        >
          Tamamlamak / Ýapmak
        </button>

      </div>
    </div>
  );
};
