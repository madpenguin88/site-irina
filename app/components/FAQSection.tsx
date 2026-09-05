'use client';

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const intrebari = [
    {
      intrebare: "Cum știu dacă am nevoie de terapie?",
      raspuns: "Dacă te întrebi acest lucru, probabil că ai deja un răspuns.\n\nOamenii vin la terapie când simt că ceva nu mai funcționează — anxietate care blochează, tristețe persistentă, relații epuizante sau senzația că reacționează mereu la fel, indiferent de situație.\n\nMulți oameni cred că terapia este doar pentru momentele de criză sau suferință profundă. În realitate, terapia are și un rol preventiv — te ajută să te cunoști mai bine și să previi acumularea unor tensiuni greu de gestionat mai târziu. E pentru oricine vrea să trăiască mai bine, să se înțeleagă mai profund și să descopere alternative mai sănătoase.\n\nOricare ar fi motivul tău, aici găsești un spațiu sigur în care să explorezi ce simți și să deschizi căi noi către o viață mai împlinită."
    },
    {
      intrebare: "Este confidențial?",
      raspuns: "Da, complet. Tot ce discutăm rămâne strict confidențial, cu excepția situațiilor în care există un pericol iminent pentru viața sau siguranța ta ori a altcuiva, sau când legea impune raportarea.\n\nAceste excepții legale sunt:\n• Risc iminent de suicid sau auto-vătămare gravă\n• Risc de vătămare a unei alte persoane\n• Abuz fizic, sexual sau neglijare asupra copiilor sau persoanelor vulnerabile\n• Ordonanță judecătorească care solicită informații\n\nVei fi informat clar despre aceste limite ale confidențialității încă de la prima ședință, specificate în contractul terapeutic."
    },
    {
      intrebare: "Cum funcționează un proces psihoterapeutic?",
      raspuns: "Durata și intensitatea psihoterapiei depind de nevoile tale și de obiectivele pe care îți dorești să le atingi. Nu există un format rigid - procesul se adaptează ritmului și unicității tale.\n\nPsihoterapia adleriană este flexibilă: putem lucra pe o problemă specifică prin strategii practice, sau putem explora mai profund tiparele relaționale, sensul comportamentelor tale și construirea unor schimbări durabile. Unii clienți vin în căutarea unei transformări profunde și a unei mai bune cunoașteri de sine.\n\nLa prima întâlnire stabilim împreună ce îți dorești. Nu trebuie să ai toate răspunsurile de la început — terapia poate evolua pe parcurs, iar decizia de a continua sau de a te opri îți aparține oricând."
    },
    {
      intrebare: "Cum decurge prima ședință?",
      raspuns: "Ne cunoaștem și vorbim deschis despre ce te aduce la terapie - motivul pentru care ai făcut acest pas și așteptările pe care le ai de la procesul terapeutic.\n\nÎmi vei povesti despre situația ta actuală, dar și despre contextul mai larg al vieții tale - familie, relații, muncă - pentru că vreau să te cunosc ca persoană completă, nu doar prin prisma unei „probleme de rezolvat”.\n\nTot acum semnăm împreună contractul terapeutic, care clarifică confidențialitatea, modul în care colaborăm și aspectele practice ale procesului.\n\nEste, în esență, o conversație naturală, într-un spațiu sigur, fără judecată."
    },
    {
      intrebare: "Despre ce trebuie să vorbesc în terapie?",
      raspuns: "Despre orice consideri că e important pentru tine. Nu există un subiect „corect” sau „greșit” - fiecare persoană vine cu experiența ei unică.\n\nPoți vorbi despre dificultăți actuale, relații, emoții care te copleșesc, gânduri recurente, amintiri, vise, îndoieli sau momente de împlinire. Chiar și lucrurile care ți se par mărunte pot dezvălui aspecte importante despre modul tău de a funcționa în lume.\n\nDin perspectivă adleriană, tot ce aduci în terapie are un sens și un scop - chiar dacă nu e evident de la început. Eu sunt aici să explorez alături de tine, să te încurajez și să te ajut să vezi perspective noi în drumul către obiectivele pe care le alegi tu însuți. Tu decizi cât de mult vrei să împărtășești și în ce ritm. Terapia e spațiul tău."
    },
    {
      intrebare: "În cât timp văd rezultate?",
      raspuns: "Nu există un răspuns universal - fiecare persoană e unică și progresul diferă. Uneori schimbări pot apărea chiar din prima ședință - o perspectivă nouă, un sentiment de ușurare sau o claritate care lipsea. Alteori, sunt necesare mai multe ședințe pentru a înțelege tiparele și a explora posibilități de schimbare. \n\nUnii clienți aleg un proces mai îndelungat pentru transformări mai profunde. Nu lucrăm după un calendar prestabilit, ci în ritmul tău. Progresul vine pe măsură ce începi să înțelegi cum funcționezi și să experimentezi alternative noi. \n\nRezultatele depind de implicarea ta în proces, de curajul tău de a te schimba și de relația de colaborare pe care o construim împreună. Permite-ți să evoluezi în ritmul tău, fără să te compari cu ceilalți. Fiecare progres, oricât de mic, contează."
    },
    {
      intrebare: "Pot anula/reprograma ședința?",
      raspuns: "Da, poți anula sau reprograma cu cel puțin 24 de ore înainte, anunțându-mă printr-un mesaj sau un apel telefonic. Înțeleg că uneori apar situații neprevăzute. Ședințele anulate în mai puțin de 24 de ore se achită integral. Politica de anulare o stabilim împreună la prima întâlnire și este inclusă în contractul terapeutic."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="intrebari" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 text-center">
          Răspunsuri la cele mai frecvente întrebări despre psihoterapie
        </h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mb-10 rounded-full"></div>
        
        <div className="space-y-4">
          {intrebari.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-serif text-xl text-gray-900">
                  {item.intrebare}
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
                  {item.raspuns}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
