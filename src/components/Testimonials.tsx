import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const reviews: TestimonialItem[] = [
    {
      id: '1',
      name: 'Mädemin B.',
      location: 'Aşgabat şäheri',
      period: '1.5 ýyldan beri hyzmatdaş',
      comment: 'Öň zähmet haky az bolan işde işleýärdim. Hytaý kompaniýasynyň teklibini kabul edip, erkin grafikde işläp başledym. Häzir mugt tälimler arkaly aýlyk girdejim öňküden 3 esse köpeldi!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      monthlyIncome: '7,500+ TMT'
    },
    {
      id: '2',
      name: 'Söbet A.',
      location: 'Mary şäheri',
      period: '8 aýdan beri hyzmatdaş',
      comment: 'Iň halan zadym — uly maýa goýum ýa-da risk ýoklygy. Kompaniýanyň goldawy we 8 dürli bonus ulgamy hakykatdan hem işleýär. Mashyn almak hyýalıma ýetdim!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      monthlyIncome: '9,200+ TMT'
    },
    {
      id: '3',
      name: 'Gülşat M.',
      location: 'Türkmenabat şäheri',
      period: '1 ýyldan beri hyzmatdaş',
      comment: 'Öý hojalykçysy hökmünde çagalaryma seredip, öýden cykman zähmet çekýärin. Mugt sapaklar hemmesini öwretdi. Arzuw eden azat durmuşyma ýetdim.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      monthlyIncome: '6,100+ TMT'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider mb-3">
            <span>Üstünlik Taryhlary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Hyzmatdaşlarymyzyň Pigikirleri
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Biz bilen işleşip başlan ýüzlerçe watandaşlarymyzyň hakyky üstünlik netijeleri.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between relative hover:shadow-md transition"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-emerald-200" />
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-base font-heading">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.location} • {item.period}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#2e7d32] bg-emerald-100 px-2.5 py-1 rounded-full">
                    {item.monthlyIncome}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
