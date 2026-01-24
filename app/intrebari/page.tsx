'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function IntrebariPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const intrebari = [
    {
      intrebare: "Cum știu dacă am nevoie de terapie?",
      raspuns: "Dacă te întrebi asta, probabil că ai deja un răspuns.\n\nOamenii vin la terapie când simt că ceva nu mai funcționează – anxietate care blochează, tristețe persistentă, relații epuizante sau senzația că reacționezi mereu la fel în situații diferite.\n\nTerapia nu e doar pentru \"cine are probleme\". E pentru cine vrea să trăiască mai bine, să se înțeleagă mai profund și să descopere alternative mai sănătoase. Oricare ar fi motivul tău, este un spațiu sigur în care să explorezi ce simți și să găsești căi noi către o viață mai împlinită."
    },
    {
      intrebare: "Este confidențial?",
      raspuns: "Da, complet. Tot ce discutăm rămâne strict confidențial, cu excepția situațiilor în care există un pericol iminent pentru viața sau siguranța ta ori a altcuiva, sau când legea impune raportarea.\n\nAceste excepții legale sunt:\n• Risc iminent de suicid sau auto-vătămare gravă\n• Risc de vătămare a unei alte persoane\n• Abuz fizic, sexual sau neglijare asupra copiilor sau persoanelor vulnerabile\n• Ordonanță judecătorească care solicită informații\n\nVei fi informat clar despre aceste limite ale confidențialității încă de la prima ședință, în contractul terapeutic."
    },
    {
      intrebare: "Cât durează o ședință de terapie?",
      raspuns: "O ședință durează de obicei 50 de minute. Acest timp permite o explorare profundă a temelor tale, menținând în același timp un cadru structurat și sustenabil.\n\nÎn situații excepționale – cum ar fi terapia de cuplu sau momente de criză – ședința poate dura mai mult, 75-90 de minute. Vom stabili împreună durata potrivită pentru nevoile tale și o vom clarifica în contractul terapeutic."
    },
    {
      intrebare: "Cum funcționează un proces terapeutic?",
      raspuns: "Durata și intensitatea terapiei depind de nevoile tale și de obiectivele pe care vrei să le atingi. Nu există un format standard - procesul se adaptează la ritmul și unicitatea ta.\n\nPsihoterapia adleriană este flexibilă. Putem lucra pe o problemă specifică cu strategii practice, sau putem explora mai profund tiparele relaționale, scopurile comportamentelor tale și construirea de schimbări durabile. Unii clienți caută transformare profundă și cunoaștere de sine amplă.\n\nLa prima întâlnire stabilim împreună ce îți dorești. Nu ești obligat să decizi de la început - terapia poate evolua pe parcurs, iar alegerea de a continua sau de a te opri este oricând a ta."
    },
    {
      intrebare: "Cum decurge prima ședință?",
      raspuns: "Ne cunoaștem și vorbim deschis despre ce te aduce la terapie - motivul pentru care ai făcut acest pas și așteptările pe care le ai de la procesul terapeutic.\n\nÎmi vei povesti despre situația ta actuală, dar și despre contextul mai larg al vieții tale - familie, relații, muncă. Vreau să te înțeleg ca persoană completă, nu doar ca o \"problemă de rezolvat\".\n\nSemnăm împreună contractul terapeutic, care clarifică confidențialitatea, cum colaborăm și aspectele practice ale procesului. E o conversație naturală, într-un spațiu sigur, fără judecată."
    },
    {
      intrebare: "Despre ce trebuie să vorbesc în terapie?",
      raspuns: "Despre orice consideri că e important pentru tine. Nu există un subiect \"corect\" sau \"greșit\" - fiecare persoană vine cu experiența ei unică.\n\nPoți vorbi despre dificultăți actuale, relații, emoții care te copleșesc, gânduri recurente, amintiri, vise, îndoieli sau momente de împlinire. Chiar și lucrurile care ți se par mărunte pot dezvălui aspecte importante despre modul tău de a funcționa în lume.\n\nDin perspectivă adleriană, tot ce aduci în terapie are un sens și un scop - chiar dacă nu e evident de la început. Eu sunt aici să explorez alături de tine, să te încurajez și să te ajut să vezi perspective noi în drumul către obiectivele pe care le alegi tu însuți. Tu decizi cât de mult vrei să împărtășești și în ce ritm. Terapia e spațiul tău."
    },
    {
      intrebare: "Cum îmi aleg terapeutul potrivit?",
      raspuns: "Terapia funcționează prin relație și parteneriat real. De aceea, alegerea terapeului e o decizie care contează.\n\nÎntreabă-te: mă simt ascultat și înțeles de această persoană? Pot să vorbesc deschis cu ea? Simt că ne putem construi o colaborare autentică? Relația terapeutică e fundația întregului proces - fără încredere și conexiune reală, progresul e limitat, oricare ar fi metodele folosite.\n\nE normal să ai nevoie de câteva întâlniri pentru a simți dacă sunteți potriviți. Dacă simți că ceva nu funcționează, poți căuta un alt terapeut - asta nu înseamnă eșec, ci că parteneriatul potrivit diferă de la persoană la persoană.\n\nPe lângă această conexiune personală, asigură-te că lucrezi cu un profesionist calificat și autorizat. Calificările sunt importante, dar relația face diferența reală în terapie."
    },
    {
      intrebare: "În cât timp văd rezultate?",
      raspuns: "Nu există un răspuns universal - fiecare persoană e unică și progresul diferă.\n\nUneori schimbări pot apărea chiar din prima ședință - o perspectivă nouă, un sentiment de ușurare sau o claritate care lipsea. Alteori, sunt necesare mai multe ședințe pentru a înțelege tiparele și a explora posibilități de schimbare. Unii clienți aleg un proces mai îndelungat pentru transformări mai profunde. Nu lucrăm după un calendar prestabilit, ci în ritmul tău.\n\nProgresul vine pe măsură ce începi să înțelegi cum funcționezi și să experimentezi alternative noi. Rezultatele depind de implicarea ta în proces, de curajul tău de a te schimba și de relația de colaborare pe care o construim împreună.\n\nImportant e să îți permiți să progresezi în ritmul tău, fără să te compari cu alți oameni sau să ai așteptări nerealiste."
    },
    {
      intrebare: "Cât de des sunt ședințele?",
      raspuns: "De obicei o dată pe săptămână. Acesta este ritmul care permite continuitate în proces, dându-ți în același timp spațiu să integrezi și să experimentezi între ședințe.\n\nÎn anumite situații - când există o nevoie mai intensă sau treci printr-o perioadă dificilă - putem stabili și două ședințe pe săptămână, în funcție de situația ta și de disponibilitatea din cabinet.\n\nPe măsură ce progresezi și simți că ai mai multe resurse, putem distanța întâlnirile. Tu decizi ce ritm funcționează cel mai bine pentru tine și pentru procesul tău.\n\nAlegerea frecvenței este întotdeauna a ta, deși este indicat să urmezi procesul cu regularitate pentru rezultate mai bune. Poți anula sau reprograma cu minim 24 de ore înainte, iar în situații urgente te rog să mă anunți cât mai curând posibil.\n\nPolitica detaliată de anulare și reprogramare este specificată în contractul terapeutic pe care îl semnăm la prima ședință."
    },
    {
      intrebare: "Cum funcționează terapia online?",
      raspuns: "Exact ca terapia față în față, doar că ne conectăm prin video pe o platformă sigură cu criptare (conform GDPR). Mulți clienți găsesc formatul online la fel de eficient, oferind flexibilitate și confort - poți participa de oriunde îți este ție confortabil.\n\nImportant este să ai un spațiu privat, liniștit și o conexiune stabilă la internet pentru a asigura confidențialitatea și continuitatea ședinței. La prima ședință online vom semna un consimțământ informat specific pentru acest format.\n\nTariful pentru ședințele online este același ca pentru cele la cabinet - calitatea procesului terapeutic rămâne neschimbată indiferent de format.\n\nÎn situații de risc iminent - cum ar fi ideație suicidară acută sau criză severă - terapia la cabinet sau intervenția de urgență sunt recomandate, deoarece necesită prezență fizică directă."
    },
    {
      intrebare: "Psihologul poate prescrie medicamente?",
      raspuns: "Nu. Conform legislației din România, doar medicii psihiatri pot prescrie medicamente psihotrope.\n\nCa psihoterapeut, lucrez prin metode psihologice - explorăm gânduri, comportamente, emoții și relații.\n\nDacă evaluez că ar fi benefică o consultație psihiatrică, te pot îndruma către un psihiatru și putem colabora pentru îngrijirea ta integrată - psihoterapia și medicația pot funcționa foarte bine împreună."
    },
    {
      intrebare: "Care e diferența dintre psiholog clinician, psihoterapeut și psihiatru?",
      raspuns: "Psiholog clinician - absolvent de facultate de psihologie (licență) cu masterat în psihologie clinică și supervizare pentru atestare, autorizat să evalueze și să pună diagnostice psihologice, să facă intervenții clinice primare de scurtă durată. Nu prescrie medicamente și nu e automat psihoterapeut (necesită formare suplimentară).\n\nPsihoterapeut - psiholog clinician (sau medic) cu formare suplimentară de minim 3 ani în psihoterapie (500 ore formare + 250 ore terapie personală + 150 ore supervizare), autorizat să trateze tulburări psihice prin terapie. După încă minimum 1 an de supervizare (total minim 4 ani) devine autonom. Nu prescrie medicamente (dacă nu e și medic).\n\nPsihiatru - medic cu rezidențiat de 5 ani în psihiatrie, poate diagnostica și trata tulburări psihice prin medicamente și psihoterapie (dacă are și această pregătire), poate emite certificate medicale și internări."
    },
    {
      intrebare: "Pot anula/reprograma ședința?",
      raspuns: "Da, poți anula sau reprograma cu minim 24 de ore înainte, anunțându-mă prin mesaj sau apel telefonic. Înțeleg că uneori apar situații neprevăzute. Politica exactă de anulare o discutăm la prima întâlnire și e inclusă în contractul terapeutic."
    },
    {
      intrebare: "Pot veni cu partenerul/familia?",
      raspuns: "Da, terapia de cuplu sau familie este posibilă când dificultățile implică dinamici relaționale.\n\nToți participanții vor semna propriul contract și consimțământ informat. La prima ședință vom clarifica în detaliu cum funcționează confidențialitatea în acest format - acest cadru clar protejează procesul și pe fiecare participant.\n\nTerapia de cuplu sau familie poate fi valuroasă pentru îmbunătățirea comunicării, rezolvarea conflictelor, construirea de relații mai sănătoase și găsirea unui echilibru între nevoile individuale și cele comune."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image with Parallax */}
      <div 
        ref={bgRef}
        className="fixed inset-0 z-0 h-[200vh]"
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          transition: 'transform 0.1s ease-out',
          top: '-50vh'
        }}
      >
        <Image
          src="/pictures/inima.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

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
            <Link href="/intrebari" className="font-sans text-sm text-gray-900 font-semibold transition-colors">
              ÎNTREBĂRI
            </Link>
            <Link href="/servicii" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
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
              className="block font-sans text-sm text-gray-900 font-semibold transition-colors py-2"
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
          <div className="mb-16 flex justify-center">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl shadow-lg border border-white/30 p-10 md:p-14 max-w-3xl w-full">
              <h1 className="font-sans text-4xl md:text-5xl text-gray-900 mb-4 font-bold tracking-tight text-center">
                Întrebări Frecvente
              </h1>
              <div className="w-24 h-1 bg-gray-900 mx-auto mb-6 rounded-full"></div>
              <p className="font-sans text-base md:text-lg text-gray-700 text-center leading-relaxed">
                Răspunsuri la cele mai frecvente întrebări despre psihoterapie
              </p>
            </div>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {intrebari.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/30 backdrop-blur-sm rounded-3xl shadow-lg border border-white/30 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/10 transition-colors"
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
                    <p className="font-sans text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.raspuns}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link 
              href="/"
              className="inline-block mt-12 px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors shadow-lg"
            >
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
