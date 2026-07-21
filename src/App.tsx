import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromoBlock } from './components/PromoBlock';
import { AdvantagesGrid } from './components/AdvantagesGrid';
import { IncomeCalculator } from './components/IncomeCalculator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SuccessModal } from './components/SuccessModal';
import { CodeExportModal } from './components/CodeExportModal';
import { Phone, Mail, MapPin, ShieldCheck, Code } from 'lucide-react';

export default function App() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [submittedUserName, setSubmittedUserName] = useState('');

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSuccess = (userName: string) => {
    setSubmittedUserName(userName);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-20 md:pb-0 selection:bg-[#2e7d32] selection:text-white">
      
      {/* Header */}
      <Header onOpenCodeModal={() => setIsCodeModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onFormScroll={scrollToForm} />

        {/* 2. Promo Highlight Block */}
        <PromoBlock />

        {/* 3. Advantages Grid */}
        <AdvantagesGrid />

        {/* Interactive Income Estimator */}
        <IncomeCalculator onFormScroll={scrollToForm} />

        {/* Real Reviews & Trust */}
        <Testimonials />

        {/* 4. Contact Form */}
        <ContactForm onSuccess={handleFormSuccess} />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-slate-800">
            
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center space-x-2 text-white font-black text-xl font-heading mb-3">
                <span>🇨🇳🇹🇲 HYTAÝ HYZMATDAŞLYK</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Hytaý kompaniýasy bilen resmi hyzmatdaşlykda täze biznes we iş mümkinçilikleri. Erkin grafik, çäksiz girdeji we 100% töwekgelçiliksiz gelejek.
              </p>
              <div className="inline-flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
                <ShieldCheck className="w-4 h-4" />
                <span>Resmi Hyzmatdaşlyk Platformasy</span>
              </div>
            </div>

            {/* Column 2: Quick Contact */}
            <div>
              <h4 className="text-white font-bold text-base font-heading mb-4">
                Habarlaşmak Üçin
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#2e7d32]" />
                  <a href="tel:+99361396970" className="text-white font-bold hover:text-amber-400 transition">
                    Jaň Etmek
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#2e7d32]" />
                  <span>info@hyzmatdaslyk-china.tm</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[#2e7d32]" />
                  <span>Aşgabat şäheri, Türkmenistan</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Hytaý Hyzmatdaşlyk Center. Ähli hukuklar goraglydyr.</p>
            <p>High-Converting Landing Page • Turkmen Language Interface</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onFormScroll={scrollToForm} />

      {/* Custom Form Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        userName={submittedUserName}
        onClose={() => setIsSuccessModalOpen(false)}
      />

      {/* Code Export Modal */}
      <CodeExportModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />

    </div>
  );
}
