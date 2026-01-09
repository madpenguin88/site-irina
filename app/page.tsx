import Image from "next/image";
import Link from "next/link";
import BackToTop from "./components/BackToTop";

export default function Home() {
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#despre" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              DESPRE MINE
            </a>
            <Link href="/articole" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ARTICOLE
            </Link>
            <Link href="/intrebari" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              ÎNTREBĂRI
            </Link>
            <a href="#servicii" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              SERVICII
            </a>
            <a href="#colaborari" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
              COLABORĂRI
            </a>
            <a href="#contact" className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors">
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
                src="/pictures/IMG_4013.jpeg"
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
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 text-center">
            Despre Mine
          </h2>
          <div className="space-y-6 font-sans text-lg text-gray-700 leading-relaxed">
            <p>
              Sunt Irina Gospodaru, psiholog clinician și psihoterapeut cu orientare adleriană. 
              Lucrez cu adulți, copii și adolescenți, oferind sprijin în diverse situații de viață: 
              anxietate, depresie, probleme de relație, dezvoltare personală și multe altele.
            </p>
            <p>
              Cred că fiecare persoană are în ea resurse unice de vindecare și dezvoltare. 
              Rolul meu este să te ghidez și să îți ofer un spațiu sigur în care să explorezi, 
              să înțelegi și să depășești provocările cu care te confrunți.
            </p>
            <p>
              Abordarea mea terapeutică este centrată pe persoană, empatică și non-judecătoare. 
              Împreună vom lucra pentru a descoperi soluții și strategii care funcționează pentru tine.
            </p>
          </div>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 text-center">
            Servicii
          </h2>
          <p className="font-sans text-gray-600 text-center mb-12">
            *Prețurile diferă în funcție de timpul ales – 50/75 min
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Evaluare Psihologică
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Evaluare completă pentru a identifica nevoile și a stabili un plan terapeutic personalizat.
              </p>
              <div className="font-sans text-lg font-semibold text-gray-900">
                150 RON / 50 min
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Psihoterapie Individuală
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Sesiuni individuale pentru a lucra pe anxietate, depresie, traume și dezvoltare personală.
              </p>
              <div className="font-sans text-lg font-semibold text-gray-900">
                150 RON / 50 min
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Psihoterapie de Cuplu
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Îmbunătățirea comunicării și rezolvarea conflictelor în relația de cuplu.
              </p>
              <div className="font-sans text-lg font-semibold text-gray-900">
                200 RON / 75 min
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Psihoterapie de Familie
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Sprijin pentru întreaga familie în depășirea dificultăților și îmbunătățirea relațiilor.
              </p>
              <div className="font-sans text-lg font-semibold text-gray-900">
                200 RON / 75 min
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Consiliere Psihologică
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Sprijin pe termen scurt pentru situații specifice și luarea deciziilor importante.
              </p>
              <div className="font-sans text-lg font-semibold text-gray-900">
                150 RON / 50 min
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                Dezvoltare Personală
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Sesiuni pentru creșterea personală, îmbunătățirea stimei de sine și atingerea obiectivelor.
              </p>
              <div className="font-sans text-lg font-semibold text-gray-900">
                150 RON / 50 min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colaborări Section */}
      <section id="colaborari" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12 text-center">
            Colaborări
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <h3 className="font-serif text-3xl text-gray-900 mb-4">
              Ryota
            </h3>
            <p className="font-sans text-lg text-gray-700 leading-relaxed">
              Program de Dezvoltare Socială și Emoțională pentru copii și adolescenți. 
              O abordare inovatoare care ajută tinerii să își dezvolte competențele emoționale 
              și sociale într-un mediu sigur și suportiv.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12 text-center">
            Contact
          </h2>

          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Informații de Contact</h3>
                <div className="space-y-3 font-sans text-gray-700">
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">📱 WhatsApp:</span>
                    <a href="https://wa.me/" className="hover:text-gray-900">+40 XXX XXX XXX</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">📞 Telefon:</span>
                    <a href="tel:+40" className="hover:text-gray-900">+40 XXX XXX XXX</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">📍 Adresă:</span>
                    <span>București, România</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Social Media</h3>
                <div className="space-y-3 font-sans text-gray-700">
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">📘 Facebook:</span>
                    <a href="#" className="hover:text-gray-900">@irinagospodaru</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">📷 Instagram:</span>
                    <a href="#" className="hover:text-gray-900">@irinagospodaru</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Cum programăm */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-8">
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
