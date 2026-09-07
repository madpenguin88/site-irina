"use client";

import { useState } from "react";
import { useT } from "./LanguageProvider";

export default function FAQSection() {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = t('faq.items') || [];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="intrebari" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 text-center">
          {t('faq.title')}
        </h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mb-10 rounded-full"></div>
        
        <div className="space-y-4">
          {items.map((item: any, index: number) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-serif text-xl text-gray-900">
                  {item.question || item.intrebare}
                </h3>
                <svg 
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-gray-900' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 font-sans text-gray-600 whitespace-pre-wrap leading-relaxed">
                  {item.answer || item.raspuns}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
