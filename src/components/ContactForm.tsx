import React, { useState } from 'react';
import { Send, Phone, User, MessageSquare, ShieldCheck, Lock } from 'lucide-react';

interface ContactFormProps {
  onSuccess: (fullName: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+993 ');
  const [question, setQuestion] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handlePhoneFocus = () => {
    if (!phone.startsWith('+993 ')) {
      setPhone('+993 ');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+993 ')) {
      val = '+993 ' + val.replace(/^\+993\s*/, '').replace(/[^0-9]/g, '');
    } else {
      const rest = val.slice(5).replace(/[^0-9]/g, '');
      val = '+993 ' + rest;
    }
    if (val.length <= 14) {
      setPhone(val);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = fullName.trim();
    const digitsOnly = phone.replace(/[^0-9]/g, '');

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Haýyş, adyňyz we familiýaňyz doly ýazyň!');
      return;
    }

    if (digitsOnly.length < 11) {
      setErrorMsg('Haýyş, 8 sypyrly dogry Türkmen telefon belgiňizi giriziň (+993 XX XXXXXX)!');
      return;
    }

    onSuccess(trimmedName);

    setFullName('');
    setPhone('+993 ');
    setQuestion('');
  };

  return (
    <section id="contact-form" className="py-16 bg-gray-50 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2e7d32] border border-emerald-200 font-bold text-xs uppercase tracking-wide mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Resmi Habar Galdyrmak Formasy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
              Maglumat Almak & Işe Başlamak
            </h2>
            <p className="mt-2 text-gray-500 text-sm">
              Bilermenimiz 24 sagadyň içinde size jaň eder we ähli soraglaryňyza jogap berer.
            </p>
          </div>

          {/* Form Element */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Error Message if any */}
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold flex items-center justify-between">
                <span>⚠️ {errorMsg}</span>
              </div>
            )}

            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="fullName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Adyňyz we Familiýaňyz *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Meselem: Aman Amanow"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition-all text-gray-900 text-sm font-medium"
                />
              </div>
            </div>

            {/* Phone Input with +993 */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Telefon Belgiňiz *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2e7d32]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onFocus={handlePhoneFocus}
                  onChange={handlePhoneChange}
                  placeholder="+993 6X XXXXXX"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition-all text-gray-900 text-sm font-bold tracking-wide"
                />
              </div>
            </div>

            {/* Question / Message */}
            <div className="space-y-1">
              <label htmlFor="question" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Siz näme bilen gyzyklanýarsyňyz? (Goşmaça sorag)
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 text-gray-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="question"
                  rows={3}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Soragyňyzy ýazyň..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent outline-none transition-all text-gray-900 text-sm font-medium resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#2e7d32] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:bg-[#1b5e20] transition-colors text-base sm:text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5 text-amber-300" />
                <span>Maglumat Almak / Ugratmak</span>
              </button>
            </div>

            {/* Status indicator */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center space-x-2 text-[#2e7d32]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">Operatormyz onlaýn • 100% Goragly</span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
