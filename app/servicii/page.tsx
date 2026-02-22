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
          <div className="mb-14 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-3">
              Servicii
            </h1>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-gray-200"></div>
              <p className="font-script text-xl text-gray-400">Terapie și Consiliere</p>
              <div className="h-px w-12 bg-gray-200"></div>
            </div>
            <p className="font-sans text-base text-gray-500 max-w-2xl mx-auto">
              Ofer sprijin personalizat prin diverse tipuri de terapie și consiliere psihologică
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {[
              'Evaluare Psihologică',
              'Psihoterapie Individuală',
              'Psihoterapie de Cuplu',
              'Psihoterapie de Familie',
              'Consiliere Psihologică',
              'Dezvoltare Personală',
            ].map((service) => (
              <div
                key={service}
                className="px-6 py-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all text-center"
              >
                <h3 className="font-serif text-base md:text-lg text-gray-800">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 text-center">
              Tarife
            </h2>
            <p className="font-sans text-base text-gray-500 mb-6 text-center max-w-3xl mx-auto leading-relaxed">
              Prevenția psihologică este cea mai înțeleaptă investiție pe care o poți face în tine. Este mult mai ușor să rezolvi lucrurile când abia încep să te apese decât când deja te copleșesc.
            </p>
            <p className="text-sm text-gray-500 mb-12 text-center max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-cinzel)' }}>
              <b>Nu aștepta să fie urgent ca să devină important.</b>
            </p>

            <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {[
                { price: '150', duration: '50 minute' },
                { price: '200', duration: '75 minute' },
                { price: '250', duration: '90 minute' },
              ].map((tier) => (
                <div
                  key={tier.price}
                  className="bg-white border border-gray-200 rounded-xl px-6 py-6 text-center hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="font-serif text-2xl text-gray-800 mb-0.5">{tier.price}</div>
                  <div className="font-sans text-sm text-gray-400 mb-3">RON / ședință</div>
                  <div className="h-px bg-gray-100 my-3"></div>
                  <div className="font-sans text-sm text-gray-500">
                    {tier.duration}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="font-sans text-sm text-gray-400 italic max-w-2xl mx-auto">
                * Durata ședințelor o stabilim împreună la programare, în funcție de nevoile tale specifice.
              </p>
            </div>
          </section>

          {/* Photo Section with Image */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-gray-800">
                Cum funcționează?
              </h3>
              <p className="font-sans text-base text-gray-500 leading-relaxed">
                Prima ședință este dedicată evaluării și cunoașterii reciproce. Împreună stabilim obiectivele terapiei și frecvența ședințelor.
              </p>
              <p className="font-sans text-base text-gray-500 leading-relaxed">
                Ședințele pot avea loc față în față în cabinetul din Constanța sau online, în funcție de preferințele și nevoile tale.
              </p>
            </div>
            
            {/* Image on right - smaller on mobile */}
            <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-md">
              <Image
                src="/pictures/functioneaza.jpg"
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
              Programează o ședință
            </h2>
            <p className="font-sans text-base text-gray-500 mb-6 max-w-lg mx-auto">
              Dacă ai întrebări despre servicii sau tarife, nu ezita să mă contactezi.
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-7 py-3 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-700 transition-colors"
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
