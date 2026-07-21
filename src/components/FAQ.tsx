import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Kompaniýa bilen hyzmatdaşlyk etmek üçin näme gerek?',
      answer: 'Diňe 18 ýaşdan uly bolmak we gazanmak islegi ýeterlikdir! Ýörite diplom, hyzmat dili bilimi ýa-da öňki iş tejribesi talap edilmeýär.'
    },
    {
      question: 'Maliýe töwekgelçiligi baramy?',
      answer: 'Ýok! Bu biznes ulgamy uly maýa goýumsyz başlanýar. Hiç hili puly töwekgelçilige goýman, töwekgelçiliksiz görnüşde işläp bilersiňiz.'
    },
    {
      question: 'Mugt okuwlar nädip geçirilýär?',
      answer: 'Formany dolduranyňyzdan soň, biziň tejribeli tälimçilerimiz siz bilen habarlaşar. Okuwlar Türkmen dilinde, onlaýn we aňsat sapaklar arkaly mugt öwredilýär.'
    },
    {
      question: 'Girdejileri we bonuslary nädip alýaryn?',
      answer: 'Bonuslar we gazanan girdejileriňiz durnukly ulgam arkaly hasabyňyza geçirilýär. 8 dürli bonus görnüşi bellenilen zähmetiňiz üçin tölenýär.'
    },
    {
      question: 'Iş wagtyny özüm seçip bilerinmi?',
      answer: 'Hawa! Erkin zähmet tertibi esasy artykmaçlyklarymyzdan biridir. Günde 2-3 sagat ýa-da doly iş gününi öz islegiňize görä meýilleşdirip bilersiňiz.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-[#2e7d32] font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Köp Berilýän Soraglar</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            Soraglaryňyza Jogaplar
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Hyzmatdaşlyga başlamazdan öň bilmeli möhüm maglumatlar.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-bold text-slate-900 text-base sm:text-lg focus:outline-none hover:text-[#2e7d32] transition"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#2e7d32]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-emerald-50/20">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
