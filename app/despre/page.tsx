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
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left - Stacked Images */}
              <div className="relative h-[600px]">
                {/* Background image - larger, positioned back */}
                <div className="absolute top-0 right-0 md:right-8 w-[280px] h-[380px] overflow-hidden rounded-2xl shadow-2xl z-10">
                  <Image
                    src="/pictures/ryota.office_10205_Professional_psychology_office_bookshelf_c_641c8950-eb68-4d61-b8c2-d7b3b4ed7768_0.png"
                    alt="Psychology Office Interior"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Main profile image - positioned in front */}
                <div className="absolute bottom-0 left-0 md:left-8 w-[300px] h-[420px] overflow-hidden rounded-2xl shadow-2xl z-20 border-8 border-white">
                  <Image
                    src="/pictures/irina.jpeg"
                    alt="Irina Gospodaru - Psihoterapeut Adlerian"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Small accent image - top left corner */}
                <div className="absolute top-40 left-2 md:left-0 w-[180px] h-[220px] overflow-hidden rounded-xl shadow-xl z-5 opacity-90">
                  <Image
                    src="/pictures/ryota.office_10205_Detailed_close-up_of_therapy_bookshelf_wit_df48ae74-2159-4e8b-89ff-c6741be76c18_1.png"
                    alt="Therapy Books Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Intro Text */}
              <div className="space-y-8 md:pt-12">
                <div>
                  <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-4">
                    Despre Mine
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-16 bg-gray-300"></div>
                    <p className="font-script text-2xl text-gray-600">Irina Gospodaru</p>
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
                    Îmi doresc ca fiecare persoană cu care lucrez să poată depăși situațiile provocatoare din viața sa și să simtă o evoluție reală, atât pentru sine, cât și în relațiile cu cei apropiați și în relațiile sociale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cum lucrez */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
              Cum lucrez
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Cred că schimbarea reală nu se întâmplă doar în cabinet, ci atunci când se extinde în viața de zi cu zi.
            </p>

            {/* Section 1: Text Left, Images Right with stacking */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-5">
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
              
              {/* Stacked images on right */}
              <div className="relative h-[450px]">
                <div className="absolute top-0 left-0 w-[280px] h-[320px] overflow-hidden rounded-2xl shadow-xl z-10">
                  <Image
                    src="/pictures/ryota.office_10205_minimalist_feminine_workspace_hands_typing_fb8445b8-9ecb-4c4a-a597-ea6cd7b8c704_0.png"
                    alt="Workspace Detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[280px] overflow-hidden rounded-2xl shadow-2xl z-20 border-4 border-white">
                  <Image
                    src="/pictures/ryota.office_10205_Low_wooden_coffee_table_in_therapy_room_sm_aaac57b2-1fef-479e-a4eb-a3178fcb82d1_1.png"
                    alt="Therapy Room Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Images Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Single large image on left */}
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/pictures/ryota.office_10205_Low_wooden_coffee_table_in_therapy_room_sm_2e8a5a14-0d15-4286-9ed3-99ee651e367a_0.png"
                  alt="Therapy Environment"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-5">
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

            {/* Section 3: Text Left, Image Right with subtle stacking */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-5">
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
              
              {/* Overlapping images on right */}
              <div className="relative h-[420px]">
                <div className="absolute top-0 right-4 w-[260px] h-[240px] overflow-hidden rounded-xl shadow-lg z-10 opacity-95">
                  <Image
                    src="/pictures/ryota.office_10205_minimalist_grey_sofa_with_pampas_grass_in__d051201d-76a8-40d6-8b02-e546187b1c08_1.png"
                    alt="Therapy Setting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] overflow-hidden rounded-2xl shadow-2xl z-20 border-4 border-white">
                  <Image
                    src="/pictures/ryota.office_10205_Low_wooden_coffee_table_in_therapy_room_sm_aaac57b2-1fef-479e-a4eb-a3178fcb82d1_2.png"
                    alt="Therapy Space Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Final section: text with stacked images */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Stacked images on left */}
              <div className="relative h-[400px]">
                <div className="absolute top-4 left-4 w-[240px] h-[280px] overflow-hidden rounded-xl shadow-lg z-10">
                  <Image
                    src="/pictures/ryota.office_10205_stack_of_elegant_books_on_neutral_beige_ba_a9227d92-43c3-48ef-985c-d4037f5762f6_1.png"
                    alt="Books Stack"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[280px] h-[260px] overflow-hidden rounded-2xl shadow-2xl z-20 border-4 border-white">
                  <Image
                    src="/pictures/ryota.office_10205_inimalist_help_concept_hands_holding_open__422686a4-43c1-4f5b-9ed0-dfee1ade9039_2.png"
                    alt="Therapeutic Approach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-5">
                <h3 className="font-serif text-3xl text-gray-900">
                  O abordare personalizată
                </h3>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="font-serif text-2xl text-gray-900 mb-6">
                  Pregătire universitară
                </h3>
                <ul className="space-y-4 font-sans text-lg text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Licență în Psihologie (3 ani) - Universitatea Ovidius, Constanța</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Master în Psihoterapii și Psihologie Clinică (2 ani) - Universitatea Tibiscus, Timișoara</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Licență în Business Management (4 ani) - Canterbury Christ Church University, UK</span>
                  </li>
                </ul>
              </div>

              {/* Images stacked */}
              <div className="relative h-[420px] hidden md:block">
                <div className="absolute top-0 right-8 w-[240px] h-[280px] overflow-hidden rounded-xl shadow-lg z-10">
                  <Image
                    src="/pictures/ryota.office_10205_Macro_shot_of_psychology_office_bookshelf__25f76c39-eac6-4799-ab5b-b26586774cfe_1.png"
                    alt="Psychology Books"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-[280px] h-[300px] overflow-hidden rounded-2xl shadow-2xl z-20 border-4 border-white">
                  <Image
                    src="/pictures/ryota.office_10205_etailed_close-up_of_therapy_books_on_woode_d08d5f5f-861c-4de2-91a4-f519d3dcbba1_1.png"
                    alt="Therapy Books Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              {/* Image on left */}
              <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-xl hidden md:block">
                <Image
                  src="/pictures/ryota.office_10205_eminine_workspace_top_view_planner_open_wi_8d1fae5d-75d4-4d2d-8ac1-203e088d2731_1.png"
                  alt="Study Workspace"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text - Post-universitară */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="font-serif text-2xl text-gray-900 mb-6">
                  Pregătire post-universitară
                </h3>
                <ul className="space-y-4 font-sans text-lg text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Formare în Psihoterapie Adleriană (2 ani) - Institutul Alfred Adler</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Supervizare în Psihoterapie Adleriană (2 ani, în curs) - Institutul Alfred Adler</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Supervizare în Psihologie Clinică (2 ani, în curs)</span>
                  </li>
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

          {/* Detalii practice */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl text-gray-900 mb-6">
              Detalii practice
            </h2>
            <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Sedințele psihologice le realizez în cabinetul meu din Constanța și online.
              </p>
              <p>
                Sunt colaborator în Proiectul Ryota - Program de dezvoltare socială și emoțională, unde organizăm workshop-uri și programe care acoperă ariile psiho-sociale și emoționale pentru copii, adolescenți și adulți.
              </p>
            </div>
          </section>

          {/* Call to action */}
          <section className="bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Hai să vorbim
            </h2>
            <p className="font-sans text-lg text-gray-300 mb-8">
              Mă poți contacta dacă simți nevoia unui spațiu sigur pentru a explora ce te preocupă.
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
