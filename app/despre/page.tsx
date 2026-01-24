'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BackToTop from "../components/BackToTop";

export default function DesprePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col">
            <h1 className="text-md font-semibold text-gray-900" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Irina Gospodaru
            </h1>
            <p className="font-script text-lg text-gray-600">
              Psihoterapeut Adlerian
            </p>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ACASĂ
            </Link>
            <Link href="/despre" className="font-sans text-sm text-gray-900 font-semibold transition-colors">
              DESPRE MINE
            </Link>
            <Link href="/articole" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ARTICOLE
            </Link>
            <Link href="/intrebari" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ÎNTREBĂRI
            </Link>
            <Link href="/#servicii" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              SERVICII
            </Link>
            <Link href="/#colaborari" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              COLABORĂRI
            </Link>
            <Link href="/#contact" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 space-y-4 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              ACASĂ
            </Link>
            <Link 
              href="/despre"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-900 font-semibold transition-colors py-2"
            >
              DESPRE MINE
            </Link>
            <Link 
              href="/articole"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              ARTICOLE
            </Link>
            <Link 
              href="/intrebari"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              ÎNTREBĂRI
            </Link>
            <Link 
              href="/#servicii"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              SERVICII
            </Link>
            <Link 
              href="/#colaborari"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              COLABORĂRI
            </Link>
            <Link 
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with Photo */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Left - Centered Image */}
              <div className="relative h-[340px] md:h-[550px] order-2 md:order-1 flex items-center justify-center">
                {/* Main profile image - centered */}
                <div className="relative w-[220px] md:w-[340px] h-[240px] md:h-[440px] overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border-4 md:border-8 border-white">
                  <Image
                    src="/pictures/irina.jpeg"
                    alt="Irina Gospodaru - Psihoterapeut Adlerian"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Intro Text */}
              <div className="space-y-6 pt-0 md:pt-12 order-1 md:order-2">
                <div>
                  <h1 className="font-serif text-4xl md:text-6xl text-gray-900 mb-4">
                    Despre mine
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-16 bg-gray-300"></div>
                    
                  </div>
                </div>
                
                <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-5">
                  <p className="text-xl font-light">
                    Sunt psiholog clinician și psihoterapeut adlerian.
                  </p>
                  <p>
                    Am ales această vocație pentru că vreau să fiu alături de oameni în momentele în care decid să facă schimbări reale în viața lor - schimbări pe care le pot simți și observa cu adevărat.
                  </p>
                  <p>
                    Îmi doresc ca fiecare persoană cu care lucrez să poată depăși situațiile provocatoare din viața sa și să simtă o evoluție reală, atât pentru sine, cât și în relațiile sociale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cum lucrez */}
          <section className="mb-16 bg-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              Cum lucrez?
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Cred că schimbarea reală nu se întâmplă doar în cabinet, ci atunci când se extinde în viața de zi cu zi.
            </p>

            {/* Section 1: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
              <div className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h3 className="font-serif text-3xl text-gray-900">
                  Cu adolescenții și familiile lor
                </h3>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Lucrez pentru ca ceea ce adolescentul descoperă despre sine în terapie să fie susținut și acasă. Implicarea familiei face ca progresul să fie mai solid și mai durabil - toți învață cum să sprijine schimbarea.
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Ceea ce se întâmplă în cabinet devine parte din viața de zi cu zi a întregii familii, creând un mediu în care schimbarea este nu doar posibilă, ci și susținută.
                </p>
              </div>
              
              {/* Image on right - smaller on mobile */}
              <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                <Image
                  src="/pictures/parinti.jpeg"
                  alt="Therapy Room Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Section 2: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Single image on left - visible on mobile, shown after text on mobile */}
              <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl order-2 md:order-1">
                <Image
                  src="/pictures/cuplu.jpeg"
                  alt="Therapy Environment"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm order-1 md:order-2">
                <h3 className="font-serif text-3xl text-gray-900">
                  În terapia de cuplu
                </h3>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Abordarea este una comună - ambii parteneri contribuie activ la transformarea relației. Schimbările pe care le fac împreună devin vizibile în modul în care comunică, se înțeleg și se susțin reciproc.
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Nu lucrez doar cu problemele, ci și cu resursele pe care le aveți deja ca pereche, construind pe ele pentru a crea o relație mai autentică și mai satisfăcătoare pentru amândoi.
                </p>
              </div>
            </div>

            {/* Section 3: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
              <div className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h3 className="font-serif text-3xl text-gray-900">
                  În terapia individuală
                </h3>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Deși lucrez unu-la-unu cu clientul, țin cont de contextul său relațional - familie, prieteni, colegi, istoricul personal, resursele și oportunitățile de mediu, dar și de scopurile și direcția pe care și-o dorește în viață.
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Ceea ce descoperă și schimbă în cabinet se reflectă apoi în toate relațiile sale importante, creând un efect de undă care transformă experiența sa în lume.
                </p>
              </div>
              
              {/* Image on right - smaller on mobile */}
              <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                <Image
                  src="/pictures/individual.jpeg"
                  alt="Therapy Setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Final section: Text only, centered */}
            <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <div className="space-y-5">
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  În terapie, nu există formule universale - ceea ce funcționează pentru cineva poate să nu fie potrivit pentru altcineva.
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  De aceea, abordarea mea se centrează pe fiecare persoană în parte, pe ritmul și povestea sa unică. Clientul este expertul propriei vieți, iar eu sunt acolo să-l însoțesc în explorarea a ceea ce îl blochează, să analizăm împreună tiparele care nu-i mai sunt utile și să descopere noi direcții care au sens pentru evoluția sa.
                </p>
              </div>
            </div>
          </section>

          {/* Pregătire profesională */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              Pregătire profesională
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              O pregătire complexă și continuă pentru a oferi servicii de calitate
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              {/* Text - Universitară */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <h3 className="font-serif text-2xl text-gray-900 mb-6">
                  Pregătire universitară
                </h3>
                <ul className="space-y-4 font-sans text-lg text-gray-700 list-disc list-inside">
                  <li>Licență în Business Management (4 ani) - Canterbury Christ Church University, UK</li>
                  <li>Licență în Psihologie (3 ani) - Universitatea Ovidius, Constanța</li>
                  <li>Master în Psihoterapii și Psihologie Clinică (2 ani) - Universitatea Tibiscus, Timișoara</li>
      
                </ul>
              </div>

              {/* Text - Post-universitară */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <h3 className="font-serif text-2xl text-gray-900 mb-6">
                  Pregătire post-universitară
                </h3>
                <ul className="space-y-4 font-sans text-lg text-gray-700 list-disc list-inside">
                  <li>Formare în Psihoterapie Adleriană (2 ani) - Institutul Alfred Adler</li>
                  <li>Supervizare în Psihoterapie Adleriană (2 ani, în curs) - Institutul Alfred Adler</li>
                  <li>Supervizare în Psihologie Clinică (2 ani, în curs)</li>
                </ul>
              </div>
            </div>

            {/* Final note */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-10 border-l-4 border-gray-900">
              <p className="font-sans text-lg text-gray-700 leading-relaxed italic">
                De-a lungul timpului, mi-am aprofundat pregătirea participând la training-uri, prelegeri, workshop-uri și seminarii din abordarea adleriană națională și internațională, alături de specialiști cu experiență vastă în domeniul psihoterapiei, și voi continua să mă perfecționez pe tot parcursul carierei.
              </p>
            </div>
          </section>


          {/* Call to action */}
          <section className="bg-gray-800 rounded-4xl p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Hai să vorbim
            </h2>
            <p className="font-sans text-lg text-white mb-8">
              Mă poți contacta dacă simți nevoia unui spațiu sigur pentru a explora ce te preocupă.
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-gray-800 font-sans text-sm rounded-full hover:bg-emerald-50 transition-colors"
            >
              Contactează-mă
            </Link>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-gray-400">
            © 2026 Irina Gospodaru - Psihoterapeut Adlerian. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
