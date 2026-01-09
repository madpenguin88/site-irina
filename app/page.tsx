import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in space-y-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
              Transformă-ți Viziunea
              <span className="block text-dusty-rose mt-2">în Realitate</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-warm-gray leading-relaxed max-w-xl">
              Coaching personalizat și strategii autentice pentru creatorii de conținut și antreprenorii care doresc să-și construiască un business cu impact și eleganță.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-dusty-rose text-white font-sans font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm hover:shadow-md">
                Descoperă Serviciile
              </button>
              <button className="px-8 py-4 border-2 border-dusty-rose text-dusty-rose font-sans font-medium rounded-full hover:bg-dusty-rose hover:text-white transition-all duration-300">
                Despre Mine
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/pictures/IMG_4013.jpeg"
              alt="Ava - Coaching și Mentorat"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Cum Te Pot Ajuta
            </h2>
            <p className="font-sans text-lg text-warm-gray max-w-2xl mx-auto">
              Servicii personalizate pentru fiecare etapă a călătoriei tale antreprenoriale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-soft-pink rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-dusty-rose rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Coaching 1:1
              </h3>
              <p className="font-sans text-warm-gray leading-relaxed">
                Sesiuni personalizate pentru a-ți clarifica viziunea și a construi o strategie autentică, adaptată nevoilor tale unice.
              </p>
              <button className="text-dusty-rose font-sans font-medium hover:underline">
                Află mai multe →
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-beige rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-warm-taupe rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Cursuri Online
              </h3>
              <p className="font-sans text-warm-gray leading-relaxed">
                Programe structurate care te ghidează pas cu pas către atingerea obiectivelor tale de business și dezvoltare personală.
              </p>
              <button className="text-warm-taupe font-sans font-medium hover:underline">
                Vezi cursurile →
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-cream rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 border border-beige">
              <div className="w-16 h-16 bg-dusty-rose rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">💼</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Mentorat de Grup
              </h3>
              <p className="font-sans text-warm-gray leading-relaxed">
                Comunitate exclusivă unde împărtășim experiențe, strategii și ne susținem reciproc în creșterea businessurilor noastre.
              </p>
              <button className="text-dusty-rose font-sans font-medium hover:underline">
                Alătură-te →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="bg-soft-pink py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/pictures/IMG_4020.jpeg"
              alt="Despre Ava"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Bună, sunt Ava
            </h2>
            <p className="font-sans text-lg text-warm-gray leading-relaxed">
              Sunt aici să te ghidez în călătoria ta antreprenorială cu empatie, strategie și o abordare personalizată care respectă unicitatea ta.
            </p>
            <p className="font-sans text-lg text-warm-gray leading-relaxed">
              Cu experiență în coaching și mentoring, am ajutat zeci de antreprenori și creatori de conținut să-și transforme pasiunea în businessuri profitabile și sustenabile.
            </p>
            <button className="px-8 py-4 bg-dusty-rose text-white font-sans font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm">
              Povestea Mea Completă
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Ce Spun Clienții Mei
            </h2>
            <p className="font-sans text-lg text-warm-gray max-w-2xl mx-auto">
              Transformări reale, rezultate autentice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-cream rounded-2xl p-8 space-y-6">
              <div className="text-dusty-rose text-4xl">"</div>
              <p className="font-sans text-warm-gray leading-relaxed italic">
                Ava m-a ajutat să-mi clarific viziunea și să construiesc o strategie clară pentru businessul meu. În doar 3 luni, am reușit să-mi dublez numărul de clienți!
              </p>
              <div className="space-y-1">
                <p className="font-serif text-lg text-charcoal">Maria Popescu</p>
                <p className="font-sans text-sm text-warm-gray">Life Coach</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-soft-pink rounded-2xl p-8 space-y-6">
              <div className="text-dusty-rose text-4xl">"</div>
              <p className="font-sans text-warm-gray leading-relaxed italic">
                Cursurile Avei sunt exact ce aveam nevoie - practice, structurate și pline de empatie. Recomand cu încredere!
              </p>
              <div className="space-y-1">
                <p className="font-serif text-lg text-charcoal">Ana Ionescu</p>
                <p className="font-sans text-sm text-warm-gray">Creatoare de Conținut</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dusty-rose py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Pregătită să Începem?
          </h2>
          <p className="font-sans text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Hai să discutăm despre obiectivele tale și să vedem cum te pot ajuta să le atingi cu eleganță și strategie.
          </p>
          <button className="px-10 py-5 bg-white text-dusty-rose font-sans font-semibold rounded-full hover:shadow-xl transition-all duration-300">
            Programează o Consultație Gratuită
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="font-sans text-white/80">
            © 2026 Ava by Lollipop Creative Studio. Toate drepturile rezervate.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
