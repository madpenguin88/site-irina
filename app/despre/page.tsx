'use client';

import Link from "next/link";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";

export default function DesprePage() {
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
              {/* Left - Centered Image */}
              <div className="relative h-[340px] md:h-[550px] order-2 md:order-1 flex items-center justify-center">
                {/* Main profile image - centered */}
                <div className="relative w-[220px] md:w-[340px] h-[240px] md:h-[440px] overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border-4 md:border-8 border-white">
                  <Image
                    src="/pictures/irina.jpeg"
                    alt="Irina Gospodaru - Psihoterapeut Adlerian"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 220px, 340px"
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
                    Am ales această profesie pentru că vreau să fiu alături de oameni în momentele în care decid să facă schimbări reale în viața lor - schimbări pe care le pot simți și observa cu adevărat, să poată depăși situațiile provocatoare și să simtă o evoluție reală, atât pentru sine, cât și în relațiile sociale și profesionale.
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
                  În terapia individuală
                </h3>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Deși lucrăm împreună individual, țin cont de contextul tău relațional - familie, prieteni, colegi, istoricul tău personal, resursele și oportunitățile de mediu, dar și de scopurile și direcția pe care ți-o dorești în viață.
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  Ceea ce descoperi și schimbi în cabinet se reflectă apoi în toate relațiile tale importante, creând un efect de undă care transformă experiența ta în lume.
                </p>
              </div>
              
              {/* Image on right - smaller on mobile */}
              <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                <Image
                  src="/pictures/individual.jpg"
                  alt="Therapy Setting"
                  fill
                  className="object-cover"
                  loading="eager"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>


            {/* Section 2: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Single image on left - visible on mobile, shown after text on mobile */}
              <div className="relative h-[240px] md:h-[350px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl order-2 md:order-1">
                <Image
                  src="/pictures/cuplu.jpg"
                  alt="Therapy Environment"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality="80"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                  Nu lucrăm doar cu problemele, ci și cu resursele pe care le aveți deja ca pereche, construind pe ele pentru a crea o relație mai autentică și mai satisfăcătoare pentru amândoi.
                </p>
              </div>
            </div>

           
            {/* Section 3: Text Left, Image Right */}
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
                  src="/pictures/adolescent.jpg"
                  alt="Therapy Room Detail"
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
                  În terapie, nu există formule universale - ceea ce funcționează pentru tine poate să nu fie potrivit pentru altcineva.
                </p>
                <p className="font-sans text-lg text-gray-700 leading-relaxed">
                  De aceea, abordarea mea se centrează pe fiecare persoană în parte, pe ritmul și povestea sa unică. Tu ești expertul propriei tale vieți, iar eu sunt acolo să te însoțesc în explorarea a ceea ce te blochează, să analizăm împreună tiparele care nu-ți mai sunt utile și să descoperi noi direcții care au sens pentru evoluția ta.
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
             Pregătirea solidă și perfecționarea continuă sunt esențiale pentru un sprijin autentic și eficient.
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
                  <li>Supervizare în Psihoterapie Adleriană - Institutul Alfred Adler</li>
                  <li>Supervizare în Psihologie Clinică</li>
                </ul>
              </div>
            </div>

            {/* Final note */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-10 border-l-4 border-gray-900">
              <p className="font-sans text-lg text-gray-700 leading-relaxed italic">
              Particip constant la training-uri, workshop-uri și seminarii din abordarea adleriană, atât la nivel național, cât și internațional, alături de specialiști cu experiență vastă în domeniul psihoterapiei. Învățarea nu se oprește niciodată - mă perfecționez continuu pentru a-ți putea oferi cel mai bun suport posibil.
              </p>
            </div>
          </section>

          {/* Colaborări Section */}
          <section id="recomandari" className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              Recomandări
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              
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
                    alt="Background"
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
                      alt="Ryota Logo"
                      width={60}
                      height={60}
                      className="flex-shrink-0"
                    />
                    <Image
                      src="/pictures/svgexport-3.svg"
                      alt="Ryota name Logo"
                      width={80}
                      height={60}
                      className="flex-shrink-0 translate-y-2"
                    />
                  </div>
                
                  <p className="font-script text-2xl text-amber-900">
                    Program de Dezvoltare Socială și Emoțională
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
                    alt="Laura Popescu background"
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
                      alt="Laura Popescu logo"
                      width={220}
                      height={120}
                      className="h-auto w-auto max-w-[220px] object-contain"
                    />
                  </div>

                  <p className="font-script text-2xl md:text-3xl text-amber-900 leading-tight">
                    Psihoterapeut & Psihosexolog
                  </p>
                </div>
              </a>
            </div>
            
          </section>


          {/* Call to action */}
          <section className="bg-gray-800 rounded-4xl p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Programează o ședință
            </h2>
            <p className="font-sans text-lg text-white mb-8">
            Contactează-mă dacă ești pregătit/ă să faci primul pas spre schimbare.
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
