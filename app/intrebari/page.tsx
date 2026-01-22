'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function IntrebariPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const intrebari = [
    {
      intrebare: "Cum știu dacă am nevoie de terapie?",
      raspuns: "Dacă simți că anumite aspecte din viața ta te copleșesc, ai dificultăți în relații, simți anxietate sau tristețe persistentă, sau pur și simplu vrei să te cunoști mai bine, terapia poate fi benefică. Nu trebuie să aștepți o criză pentru a apela la un specialist."
    },
    {
      intrebare: "Este confidențial?",
      raspuns: "Da, absolut. Tot ce se discută în cadrul ședințelor de terapie este strict confidențial. Singurele excepții sunt situațiile în care există risc de vătămare pentru tine sau pentru alții, conform codului deontologic."
    },
    {
      intrebare: "Cât durează o ședință de terapie?",
      raspuns: "O ședință standard durează 50 de minute. Pentru psihoterapia de cuplu sau familie, sesiunile pot dura 75 de minute pentru a permite timp suficient pentru toți participanții."
    },
    {
      intrebare: "Cum funcționează un proces terapeutic?",
      raspuns: "Procesul terapeutic începe cu evaluarea inițială, continuă cu stabilirea obiectivelor împreună și lucrul activ pentru atingerea lor. Fiecare persoană are un ritm propriu, iar terapia se adaptează nevoilor tale specifice."
    },
    {
      intrebare: "Cum decurge prima ședință?",
      raspuns: "Prima ședință este dedicată cunoașterii. Vei avea ocazia să îmi spui ce te-a adus la terapie, ce așteptări ai și ce dorești să lucrăm împreună. Este o șansă pentru ambii să vedem dacă putem colabora eficient."
    },
    {
      intrebare: "Despre ce trebuie să vorbesc în terapie?",
      raspuns: "Nu există reguli stricte. Poți vorbi despre orice te preocupă: relații, emoții, gânduri, experiențe din trecut sau prezent. Terapia este spațiul tău sigur unde poți explora liber orice subiect."
    },
    {
      intrebare: "Cum îmi aleg terapeutul potrivit?",
      raspuns: "Este important să simți o conexiune și încredere cu terapeutul tău. Poți programa un apel scurt de cunoaștere pentru a vedea dacă abordarea și stilul terapeutic se potrivesc cu nevoile tale."
    },
    {
      intrebare: "În cât timp văd rezultate?",
      raspuns: "Fiecare proces este unic. Unii oameni simt îmbunătățiri după câteva ședințe, pentru alții poate dura mai mult. Important este să fii răbdător și angajat în procesul terapeutic."
    },
    {
      intrebare: "Cât de des sunt ședințele?",
      raspuns: "De obicei, ședințele sunt săptămânale, mai ales la început. Pe măsură ce progresezi, frecvența poate fi ajustată în funcție de nevoile tale și obiectivele stabilite."
    },
    {
      intrebare: "Cum funcționează terapia online?",
      raspuns: "Terapia online se desfășoară prin videocall pe o platformă sigură. Este la fel de eficientă ca terapia față în față și oferă flexibilitate, fiind ideală pentru cei cu program încărcat sau care locuiesc la distanță."
    },
    {
      intrebare: "Psihologul poate prescrie medicamente?",
      raspuns: "Nu, doar medicii psihiatri pot prescrie medicamente. Ca psiholog și psihoterapeut, ofer suport prin conversație, tehnici terapeutice și strategii de coping. Dacă este nevoie de medicație, te pot îndrepta către un psihiatru."
    },
    {
      intrebare: "Care e diferența dintre psiholog, psihoterapeut și psihiatru?",
      raspuns: "Psihologul are studii în psihologie și poate face evaluări. Psihoterapeutul are în plus pregătire specializată în terapie. Psihiatrul este medic și poate prescrie medicamente. Eu sunt psiholog și psihoterapeut cu orientare adleriană."
    },
    {
      intrebare: "Pot anula/reprograma ședința?",
      raspuns: "Da, înțeleg că pot apărea situații neprevăzute. Te rog să mă anunți cu cel puțin 24 de ore înainte pentru a putea reprograma ședința fără costuri suplimentare."
    },
    {
      intrebare: "Pot veni cu partenerul/familia?",
      raspuns: "Da, ofer și terapie de cuplu și terapie de familie. Acestea sunt sesiuni dedicate îmbunătățirii comunicării și rezolvării conflictelor în cadrul relațiilor apropiate."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/pictures/inima.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/55"></div>
      </div>

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
            <Link href="/#despre" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              DESPRE MINE
            </Link>
            <Link href="/articole" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ARTICOLE
            </Link>
            <Link href="/intrebari" className="font-sans text-sm text-gray-900 font-semibold transition-colors">
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
              href="/#despre" 
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
              className="block font-sans text-sm text-gray-900 font-semibold transition-colors py-2"
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

      {/* Content */}
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 text-center">
            Întrebări Frecvente
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-12 text-center">
            Răspunsuri la cele mai frecvente întrebări despre psihoterapie
          </p>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {intrebari.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-serif text-xl text-gray-900">
                    {item.intrebare}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {item.raspuns}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link 
            href="/"
            className="inline-block mt-12 px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
          >
            Înapoi la pagina principală
          </Link>
        </div>
      </div>
    </div>
  );
}
