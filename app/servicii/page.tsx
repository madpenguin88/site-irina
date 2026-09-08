"use client";

import Link from "next/link";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";
import { useT } from "../components/LanguageProvider";

type ServiceItem = { name: string; price: string; note: string };
type ServiceCategory = { label: string; items: ServiceItem[] };

export default function ServiciiPage() {
  const t = useT();
  const serviceCategories = (t('services.categories') || []) as ServiceCategory[];

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="servicii" />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 text-center">
              {t('services.title')}
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              {t('services.lead')}
            </p>
            <p className="font-sans text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              {t('services.prevention')}
            </p>
             <p className="text-md text-gray-600 mb-12 text-center max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-cinzel)' }}>
              <b>{t('services.urgent_line')}</b>
            </p>

            <div className="max-w-3xl mx-auto space-y-8">
              {serviceCategories.map((category: ServiceCategory) => (
                <div key={category.label} className="rounded-2xl bg-gray-50/50 px-5 py-5 md:px-6">
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
                    {category.label}
                  </p>
                  <ul className="divide-y divide-gray-200/80">
                    {category.items.map((item: ServiceItem) => (
                        <li
                          key={item.name}
                          className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
                        >
                          <span className="font-serif text-lg md:text-xl text-gray-900">
                            {item.name}
                          </span>
                          <span className="font-sans text-base text-gray-600 shrink-0">
                            {item.price} — {item.note}
                          </span>
                        </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Photo Section with Image */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-gray-800">
                {t('services.how_title')}
              </h3>
              <p className="font-sans text-base text-gray-500 leading-relaxed">
                {t('services.how_p1')}
              </p>
              <p className="font-sans text-base text-gray-500 leading-relaxed">
                {t('services.how_p2')}
              </p>
            </div>
            
            {/* Image on right - smaller on mobile */}
            <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-md">
              <Image
                src="/pictures/functioneaza.jpeg"
                alt="Cabinet Terapie"
                fill
                className="object-cover"
                quality={80}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Call to action */}
          <section className="border border-gray-200 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-3">
              {t('services.book')}
            </h2>
            <p className="font-sans text-base text-gray-500 mb-6 max-w-lg mx-auto">
              {t('services.lead')}
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-7 py-3 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-700 transition-colors"
            >
              {t('contact.title')}
            </Link>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
