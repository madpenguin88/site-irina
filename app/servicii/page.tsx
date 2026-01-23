'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BackToTop from "../components/BackToTop";

export default function ServiciiPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col">
            <h1 className="font-sans text-xl font-semibold text-gray-900">
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
            <Link href="/despre" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              DESPRE MINE
            </Link>
            <Link href="/articole" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ARTICOLE
            </Link>
            <Link href="/intrebari" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ÎNTREBĂRI
            </Link>
            <Link href="/servicii" className="font-sans text-sm text-gray-900 font-semibold transition-colors">
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
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
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
              href="/servicii"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-900 font-semibold transition-colors py-2"
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
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-4">
              Servicii
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gray-300"></div>
              <p className="font-script text-2xl text-gray-600">Terapie și Consiliere</p>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>
            <p className="font-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Ofer sprijin personalizat prin diverse tipuri de terapie și consiliere psihologică
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Evaluare Psihologică
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
                Evaluare completă pentru identificarea nevoilor și stabilirea unui plan terapeutic personalizat. Procesul de evaluare include interviuri clinice, teste psihologice și o analiză detaliată a contextului personal și relațional.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Psihoterapie Individuală
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
                Sesiuni individuale pentru lucrul cu anxietate, depresie, traume și dezvoltare personală. Abordarea se centrează pe nevoile tale unice, ajutându-te să înțelegi tiparele de comportament și să găsești soluții practice pentru schimbare.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Psihoterapie de Cuplu
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
                Îmbunătățirea comunicării și rezolvarea conflictelor în relația de cuplu. Lucrez cu ambii parteneri pentru a construi o relație mai autentică, bazată pe înțelegere reciprocă și sprijin mutual.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Psihoterapie de Familie
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
                Sprijin pentru întreaga familie în depășirea dificultăților și îmbunătățirea relațiilor. Abordarea familiară ajută toți membrii să își înțeleagă rolurile și să colaboreze pentru un mediu familial mai sănătos.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Consiliere Psihologică
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
                Sprijin pe termen scurt pentru situații specifice și luarea deciziilor importante. Consiliera psihologică oferă claritate și perspective noi pentru provocările de moment.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Dezvoltare Personală
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
                Sesiuni pentru creșterea personală, îmbunătățirea stimei de sine și atingerea obiectivelor. Lucrez cu tine pentru a identifica și dezvolta resursele tale interioare.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              Tarife
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Prețurile sunt stabilite în funcție de timpul prestabilit împreună la programarea ședințelor
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Pricing Card 1 */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 text-center">
                <div className="mb-4">
                  <div className="font-serif text-5xl text-gray-900 mb-2">150</div>
                  <div className="font-sans text-gray-600">RON / ședință</div>
                </div>
                <div className="h-px bg-gray-200 my-6"></div>
                <div className="font-sans text-lg font-semibold text-gray-900 mb-2">
                  50 minute
                </div>
                <p className="font-sans text-sm text-gray-600">
                  Ședință standard
                </p>
              </div>

              {/* Pricing Card 2 - Featured */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-gray-900 text-center transform md:scale-105 shadow-xl">
                <div className="mb-4">
                  <div className="font-serif text-5xl text-white mb-2">200</div>
                  <div className="font-sans text-gray-300">RON / ședință</div>
                </div>
                <div className="h-px bg-gray-700 my-6"></div>
                <div className="font-sans text-lg font-semibold text-white mb-2">
                  75 minute
                </div>
                <p className="font-sans text-sm text-gray-300">
                  Ședință extinsă
                </p>
              </div>

              {/* Pricing Card 3 */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 text-center">
                <div className="mb-4">
                  <div className="font-serif text-5xl text-gray-900 mb-2">250</div>
                  <div className="font-sans text-gray-600">RON / ședință</div>
                </div>
                <div className="h-px bg-gray-200 my-6"></div>
                <div className="font-sans text-lg font-semibold text-gray-900 mb-2">
                  90 minute
                </div>
                <p className="font-sans text-sm text-gray-600">
                  Ședință lungă
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-sans text-base text-gray-600 italic max-w-2xl mx-auto">
                * Durata ședințelor se stabilește împreună la programare, în funcție de nevoile tale specifice și de tipul de terapie
              </p>
            </div>
          </section>

          {/* Photo Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-5">
              <h3 className="font-serif text-3xl text-gray-900">
                Cum funcționează
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                Prima ședință este dedicată evaluării și cunoașterii reciproce. Împreună stabilim obiectivele terapiei și frecvența ședințelor.
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                Ședințele pot avea loc față în față în cabinetul din Constanța sau online, în funcție de preferințele și nevoile tale.
              </p>
            </div>
            
            {/* Image on right - smaller on mobile */}
            <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
              <Image
                src="/pictures/ryota.office_10205_Low_wooden_coffee_table_in_therapy_room_sm_2e8a5a14-0d15-4286-9ed3-99ee651e367a_0.png"
                alt="Cabinet Terapie"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Call to action */}
          <section className="bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Programează o ședință
            </h2>
            <p className="font-sans text-lg text-gray-300 mb-8">
              Dacă ai întrebări despre servicii sau tarife, nu ezita să mă contactezi.
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-gray-900 font-sans text-sm rounded-full hover:bg-gray-100 transition-colors"
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
