'use client';

import Link from "next/link";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";

const services = [
  "Evaluare Psihologică",
  "Psihoterapie Individuală",
  "Psihoterapie de Cuplu",
  "Psihoterapie de Familie",
  "Psihoterapie de Grup",
  "Grupuri de Suport",
  "Consiliere Psihologică",
  "Dezvoltare Personală",
];

const serviceCategories = [
  {
    label: "Individual",
    items: [
      { name: "Evaluare psihologică", price: 300, duration: "50 minute" },
      { name: "Psihoterapie individuală", price: 300, duration: "50 minute" },
      { name: "Consiliere psihologică", price: 300, duration: "50 minute" },
      { name: "Dezvoltare personală", price: 300, duration: "50 minute" },
    ],
  },
  {
    label: "Cuplu și familie",
    items: [
      { name: "Psihoterapie de Cuplu", price: 500, duration: "90 minute" },
      { name: "Psihoterapie de Familie", price: 500, duration: "90 minute" },
    ],
  },
  {
    label: "Grupuri",
    items: [
      { name: "Grupuri de suport", price: 200, duration: "120 minute" },
      { name: "Grupuri de dezvoltare personală", price: 200, duration: "120 minute" },
    ],
  },
];

export default function ServiciiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="servicii" />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 text-center">
              Servicii & Tarife
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
            Oriunde ai fi pe drumul tău, există un loc de unde poți începe, și nu trebuie să mergi singur.
            </p>
            <p className="font-sans text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Prevenția psihologică este cea mai înțeleaptă investiție pe care o poți face în tine. <br />Este mult mai ușor să rezolvi lucrurile când abia încep să te apese decât când deja te copleșesc. <br />
            </p>
             <p className="text-md text-gray-600 mb-12 text-center max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-cinzel)' }}>
              <b>Nu aștepta să fie urgent ca să devină important.</b>
            </p>

            <div className="max-w-3xl mx-auto space-y-8">
              {serviceCategories.map((category) => (
                <div key={category.label} className="rounded-2xl bg-gray-50/50 px-5 py-5 md:px-6">
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
                    {category.label}
                  </p>
                  <ul className="divide-y divide-gray-200/80">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
                      >
                        <span className="font-serif text-lg md:text-xl text-gray-900">
                          {item.name}
                        </span>
                        <span className="font-sans text-base text-gray-600 shrink-0">
                          {item.price} RON — ședință / {item.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                src="/pictures/functioneaza.jpeg"
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
