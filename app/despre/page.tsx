"use client";

import Link from "next/link";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";
import { useT } from "../components/LanguageProvider";

export default function DesprePage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="despre" />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with Photo */}
            <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Left - Centered Image (mobile: full-width, placed above text) */}
              <div className="relative h-auto md:h-[550px] order-1 md:order-1 flex items-center justify-center">
                {/* Main profile image - wider horizontal framing on both mobile and desktop */}
                <div className="relative w-full md:w-[520px] h-[220px] md:h-[440px] overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border-4 md:border-8 border-white">
                  <Image
                    src="/pictures/irina2.jpeg"
                    alt={t('alt.profile')}
                    fill
                    className="object-cover [object-position:50%_18%] md:object-center"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                </div>
              </div>

              {/* Right - Intro Text (mobile: below image) */}
              <div className="space-y-6 pt-6 md:pt-12 order-2 md:order-2">
                <div>
                  <h1 className="font-serif text-4xl md:text-6xl text-gray-900 mb-4">
                    {t('despre.title')}
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-16 bg-gray-300"></div>
                    
                  </div>
                </div>
                
                <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-5">
                  <p className="text-xl font-light">
                    {t('despre.intro_lead')}
                  </p>
                  <p>
                    {t('despre.intro_paragraph')}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Cum lucrez */}
          <section className="mb-16 bg-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              {t('despre.how_i_work_title')}
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              {t('despre.how_i_work_lead')}
            </p>

 {/* Section 1: Text Left, Image Right */}
 <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-16 md:mb-20">
              <div className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm h-full">
                  <h3 className="font-serif text-3xl text-gray-900">
                    {t('despre.individual_title')}
                  </h3>
                  <p className="font-sans text-lg text-gray-700 leading-relaxed">
                    {t('despre.individual_p1')}
                  </p>
                  <p className="font-sans text-lg text-gray-700 leading-relaxed">
                    {t('despre.individual_p2')}
                  </p>
                </div>
              
              {/* Image on right - smaller on mobile */}
              <div className="relative h-[240px] md:h-full overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                <Image
                  src="/pictures/individual.jpg"
                  alt={t('alt.individual')}
                  fill
                  className="object-cover"
                  loading="eager"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>


            {/* Section 2: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-20">
              {/* Single image on left - visible on mobile, shown after text on mobile */}
              <div className="relative h-[240px] md:h-full overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl order-2 md:order-1">
                <Image
                  src="/pictures/cuplu.jpg"
                  alt={t('alt.couple')}
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality="80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm order-1 md:order-2 h-full">
                <h3 className="font-serif text-3xl text-gray-900">
                  {t('despre.couple_title')}
                </h3>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  {t('despre.couple_p1')}
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  {t('despre.couple_p2')}
                </p>
              </div>
            </div>

           
            {/* Section 3: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-16 md:mb-20">
              <div className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm h-full">
                <h3 className="font-serif text-3xl text-gray-900">
                  {t('despre.family_title')}
                </h3>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  {t('despre.family_p1')}
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  {t('despre.family_p2')}
                </p>
              </div>
              
              {/* Image on right - smaller on mobile */}
              <div className="relative h-[240px] md:h-full overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                <Image
                  src="/pictures/familie.jpeg"
                  alt={t('alt.family')}
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Final section: Text only, centered */}
            <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <div className="space-y-5">
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  {t('despre.final_p1')}
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  {t('despre.final_p2')}
                </p>
              </div>
            </div>
          </section>

          {/* Pregătire profesională */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              {t('despre.professional_title')}
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              {t('despre.professional_lead')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              {/* Text - Universitară */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <h3 className="font-serif text-2xl text-gray-900 mb-6">
                  {t('despre.university_title')}
                </h3>
                <ul className="space-y-4 font-sans text-lg text-gray-700 list-disc list-inside">
                  {(t('despre.university_list') || []).map((it: string, i: number) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>

              {/* Text - Post-universitară */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <h3 className="font-serif text-2xl text-gray-900 mb-6">
                  {t('despre.postgrad_title')}
                </h3>
                <ul className="space-y-4 font-sans text-lg text-gray-700 list-disc list-inside">
                  {(t('despre.postgrad_list') || []).map((it: string, i: number) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Final note */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-10 border-l-4 border-gray-900">
              <p className="font-sans text-lg text-gray-700 leading-relaxed italic">
                {t('despre.professional_note')}
              </p>
            </div>
          </section>

          {/* Colaborări Section */}
          <section id="recomandari" className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              {t('recommendations.title')}
            </h2>
            <p className="font-sans text-base md:text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto italic">
              {t('recommendations.subtitle')}
            </p>
            
            <div className="space-y-6">
              <a
                href="https://ryota.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
              >
                {/* Background Image with Glass Effect */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/pictures/home-hero-featured-2.png"
                    alt={t('alt.recommendation_bg')}
                    fill
                    className="object-cover opacity-100"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm group-hover:bg-white/50 transition-colors"></div>
                </div>

                <svg
                  className="absolute top-4 right-4 z-20 w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Image
                      src="/pictures/svgexport-1.svg"
                      alt={t('alt.ryota_logo')}
                      width={60}
                      height={60}
                      className="flex-shrink-0"
                    />
                    <Image
                      src="/pictures/svgexport-3.svg"
                      alt={t('alt.ryota_name')}
                      width={80}
                      height={60}
                      className="flex-shrink-0 translate-y-2"
                    />
                  </div>
                
                  <p className="font-script text-2xl text-amber-900">
                    {t('recommendations.program_title')}
                  </p>
                </div>
              </a>

              <a
                href="https://psihoterapeutpopesculaura.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/pictures/laurapopescu.png"
                    alt={t('alt.laura_bg')}
                    fill
                    className="object-cover opacity-100"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm group-hover:bg-white/50 transition-colors"></div>
                </div>

                <svg
                  className="absolute top-4 right-4 z-20 w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src="/pictures/psihoterapeutpopesculaura-logo.webp"
                      alt={t('alt.laura_logo')}
                      width={220}
                      height={120}
                      className="h-auto w-auto max-w-[220px] object-contain"
                    />
                  </div>

                  <p className="font-script text-2xl md:text-3xl text-amber-900 leading-tight">
                    {t('recommendations.collab_role')}
                  </p>
                </div>
              </a>
            </div>
            
          </section>


          {/* Call to action */}
          <section className="bg-gray-800 rounded-4xl p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              {t('services.book')}
            </h2>
            <p className="font-sans text-lg text-white mb-8">
              {t('contact.lead')}
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-gray-800 font-sans text-sm rounded-full hover:bg-emerald-50 transition-colors"
            >
              {t('home.cta_book')}
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
