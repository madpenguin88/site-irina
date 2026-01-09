import Link from "next/link";

export default function IntrebariPage() {
  const intrebari = [
    "Cum știu dacă am nevoie de terapie?",
    "Este confidențial?",
    "Cât durează o ședință de terapie?",
    "Cum funcționează un proces terapeutic?",
    "Cum decurge prima ședință?",
    "Despre ce trebuie să vorbesc în terapie?",
    "Cum îmi aleg terapeutul potrivit?",
    "În cât timp văd rezultate?",
    "Cât de des sunt ședințele?",
    "Cum funcționează terapia online?",
    "Psihologul poate prescrie medicamente?",
    "Care e diferența dintre psiholog, psihoterapeut și psihiatru?",
    "Pot anula/reprograma ședința?",
    "Pot veni cu partenerul/familia?"
  ];

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

          {/* Navigation Links */}
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
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 text-center">
            Întrebări Frecvente
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-12 text-center">
            Răspunsuri la cele mai frecvente întrebări despre psihoterapie
          </p>
          
          <div className="space-y-4">
            {intrebari.map((intrebare, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  {intrebare}
                </h3>
                <p className="font-sans text-gray-600">
                  Răspuns în curs de dezvoltare...
                </p>
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
