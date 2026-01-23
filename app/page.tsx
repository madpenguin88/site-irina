'use client';

import Image from "next/image";
import Link from "next/link";
import BackToTop from "./components/BackToTop";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex flex-col">
            <h1 className="font-sans text-xl font-semibold text-gray-900">
              Irina Gospodaru
            </h1>
            <p className="font-script text-lg text-gray-600">
              Psihoterapeut Adlerian
            </p>
          </div>

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
            <Link href="/servicii" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              SERVICII
            </Link>
            <a href="#colaborari" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              COLABORĂRI
            </a>
            <a href="#contact" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              CONTACT
            </a>
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
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              SERVICII
            </Link>
            <a 
              href="#colaborari"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              COLABORĂRI
            </a>
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" id="top">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <h2 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight">
                Bine ai venit în
                <span className="block text-gray-600 mt-2">spațiul tău de vindecare</span>
              </h2>
              <p className="font-sans text-lg text-gray-600 leading-relaxed">
                Sunt psiholog și psihoterapeut cu orientare adleriană, dedicată să te sprijin în procesul tău de dezvoltare personală și vindecare emoțională.
              </p>
              <a 
                href="#contact"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
              >
                Programează o ședință
              </a>
            </div>

            {/* Right - Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/pictures/ryota.office_10205_eminine_minimalist_office_desk_soft_natura_62883677-b8b3-47e9-b57a-e8f359e49992_1.png"
                alt="Irina Gospodaru - Psihoterapeut"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Despre Mine Section */}
      <section id="despre" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12 text-center">
            Despre Mine
          </h2>
          
          <div className="grid md:grid-cols-[350px_1fr] gap-12 items-start">
            {/* Left - Image Card */}
            <div className="relative mx-auto">
              <div className="relative h-[400px] w-[300px] overflow-hidden shadow-xl">
                <Image
                  src="/pictures/irina.jpeg"
                  alt="Irina Gospodaru - Psihoterapeut Adlerian"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl text-gray-900">Irina Gospodaru</h3>
                <p className="font-script text-xl text-gray-600 mt-2">Psihoterapeut Adlerian</p>
              </div>
            </div>

            {/* Right - Text */}
            <div className="space-y-6 font-sans text-lg text-gray-700 leading-relaxed md:pt-8">
              <p>
                Sunt Irina Gospodaru, psiholog clinician și psihoterapeut adlerian.
              </p>
              <p>
                Am ales această vocație pentru că vreau să fiu alături de oameni în momentele în care decid să facă schimbări reale în viața lor - schimbări pe care le pot simți și observa cu adevărat. Îmi doresc ca fiecare persoană cu care lucrez să poată depăși situațiile provocatoare din viața sa și să simtă o evoluție reală, atât pentru sine, cât și în relațiile cu cei apropiați și în relațiile sociale.
              </p>
              <Link 
                href="/despre"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
              >
                Află mai mult despre mine
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
            Servicii
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Oferă sprijin personalizat prin diverse tipuri de terapie și consiliere
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                Evaluare Psihologică
              </h3>
              <p className="font-sans text-gray-600">
                Evaluare completă pentru identificarea nevoilor și stabilirea unui plan terapeutic personalizat.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                Psihoterapie Individuală
              </h3>
              <p className="font-sans text-gray-600">
                Sesiuni individuale pentru anxietate, depresie, traume și dezvoltare personală.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                Psihoterapie de Cuplu
              </h3>
              <p className="font-sans text-gray-600">
                Îmbunătățirea comunicării și rezolvarea conflictelor în relația de cuplu.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                Psihoterapie de Familie
              </h3>
              <p className="font-sans text-gray-600">
                Sprijin pentru întreaga familie în depășirea dificultăților și îmbunătățirea relațiilor.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                Consiliere Psihologică
              </h3>
              <p className="font-sans text-gray-600">
                Sprijin pe termen scurt pentru situații specifice și luarea deciziilor importante.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                Dezvoltare Personală
              </h3>
              <p className="font-sans text-gray-600">
                Sesiuni pentru creșterea personală, îmbunătățirea stimei de sine și atingerea obiectivelor.
              </p>
            </div>
          </div>

          {/* Call to Action - Learn More */}
          <div className="text-center mt-12">
            <Link 
              href="/servicii"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Află mai mult despre servicii și tarife
            </Link>
          </div>
        </div>
      </section>

      {/* Colaborări Section */}
      <section id="colaborari" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
            Colaborări
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Proiecte dedicate dezvoltării personale și emoționale
          </p>
          
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900">
                Ryota
              </h3>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            
            <p className="font-script text-xl text-gray-600 mb-6">
              Program de Dezvoltare Socială și Emoțională
            </p>
            
            <div className="space-y-5 font-sans text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Ryota este un proiect dedicat susținerii persoanelor care urmăresc acel sentiment unic de a avea impact pozitiv în societate.
              </p>
              
              <div className="bg-white rounded-xl p-6 border-l-4 border-gray-900">
                <p className="font-semibold text-gray-900 mb-2">
                  Scopul programului:
                </p>
                <p>
                  Antrenarea abilităților de recunoaștere și gestionare a propriilor emoții (pozitive și negative).
                </p>
              </div>
              
              <p>
                Programul include <strong>workshop-uri de prevenție</strong> și <strong>workshop-uri de intervenție</strong> (pentru adolescenți și adulți), precum și <strong>activități de dezvoltare personală</strong> pentru copii.
              </p>
            </div>
            
            <div className="text-center">
              <a 
                href="https://ryota.ro" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
              >
                <span>Descoperă mai multe despre Ryota</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
            Contact
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Mă poți contacta pentru o discuție inițială sau pentru a programa o ședință
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Location Card */}
            <a 
              href="https://www.google.com/maps/place/Cabinet+de+Psihologie+Irina+Gospodaru/@44.1952735,28.6382035,19.34z/data=!4m6!3m5!1s0x40bafb003241efe3:0x377ddf507091f2d4!8m2!3d44.1952502!4d28.6385552!16s%2Fg%2F11x7cxxz6c?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 hover:bg-white rounded-xl transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-red-500 transition-colors">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C7.802 0 4.403 3.403 4.403 7.602c0 1.628.506 3.136 1.368 4.39L12 24l6.229-11.996c.872-1.269 1.378-2.777 1.378-4.402C19.607 3.403 16.208 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1">Adresă</h3>
                  <p className="font-sans text-sm text-gray-600">Strada Primăverii 6, Constanta</p>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/40XXXXXXXXX" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 hover:bg-white rounded-xl transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-green-500 transition-colors">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1">WhatsApp</h3>
                  <p className="font-sans text-sm text-gray-600">+40 XXX XXX XXX</p>
                </div>
              </div>
            </a>

            {/* Facebook Card */}
            <a 
              href="https://facebook.com/irinagospodaru" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 hover:bg-white rounded-xl transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1">Facebook</h3>
                  <p className="font-sans text-sm text-gray-600">@irinagospodaru</p>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://instagram.com/irinagospodaru" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 hover:bg-white rounded-xl transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-500 transition-colors">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1">Instagram</h3>
                  <p className="font-sans text-sm text-gray-600">@irinagospodaru</p>
                </div>
              </div>
            </a>
          </div>

          {/* Cum programăm */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-gray-200">
            <h3 className="font-serif text-2xl text-gray-900 mb-4">
              Cum programăm prima ședință?
            </h3>
            <p className="font-sans text-lg text-gray-700 leading-relaxed">
              Primul pas e ușor: scrie-mi un mesaj pe WhatsApp și vom stabili împreună un apel scurt de 10 minute. 
              În această discuție îmi poți spune pe scurt ce te aduce la terapie, ce așteptări ai și ce dorești să lucrăm împreună. 
              Astfel ne cunoaștem și vedem cum colaborăm cel mai bine - fie la cabinet, fie online.
            </p>
          </div>
        </div>
      </section>

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
