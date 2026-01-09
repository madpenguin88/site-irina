import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-black">
            Font Showcase - Ava Project
          </h1>
          <p className="text-lg text-gray-600">
            Demonstrație a fonturilor importate pentru proiect
          </p>
        </div>

        {/* Fonts Section */}
        <div className="grid md:grid-cols-1 gap-12">
          {/* Open Sans */}
          <section className="space-y-4 p-8 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors">
            <h2 className="text-2xl font-semibold text-gray-800">Open Sans</h2>
            <p style={{ fontFamily: "var(--font-open-sans)" }} className="text-lg">
              This is Open Sans - a clean, modern sans-serif font perfect for body text and UI elements. It offers excellent readability and comes in multiple weights (300, 400, 500, 600, 700).
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Usage:</strong> font-sans, body text, paragraphs</p>
              <p><strong>Class:</strong> Use `font-sans` in Tailwind</p>
            </div>
          </section>

          {/* The Seasons */}
          <section className="space-y-4 p-8 border-2 border-gray-200 rounded-lg hover:border-purple-400 transition-colors">
            <h2 style={{ fontFamily: "var(--font-the-seasons)" }} className="text-4xl font-bold text-gray-800">
              The Seasons
            </h2>
            <p style={{ fontFamily: "var(--font-the-seasons)" }} className="text-2xl italic text-gray-700">
              An elegant serif font designed for sophisticated typography. Perfect for headings and titles that need to convey elegance and professionalism.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Usage:</strong> Headings, titles, h1-h6, display text</p>
              <p><strong>Class:</strong> Use `font-serif` in Tailwind or inline styles</p>
            </div>
          </section>

          {/* Beautifully Delicious Script */}
          <section className="space-y-4 p-8 border-2 border-gray-200 rounded-lg hover:border-pink-400 transition-colors">
            <h2 style={{ fontFamily: "var(--font-beautifully-delicious)" }} className="text-4xl font-bold text-gray-800">
              Beautifully Delicious
            </h2>
            <p style={{ fontFamily: "var(--font-beautifully-delicious)" }} className="text-2xl text-gray-700">
              A decorative script font that adds personality and elegance to any design. Ideal for special accents, decorative elements, and brand highlights.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Usage:</strong> Brand name, special accents, decorative text</p>
              <p><strong>Class:</strong> Use `font-script` in Tailwind or inline styles</p>
            </div>
          </section>
        </div>

        {/* Code Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-black">Cum să le folosești</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-black">În className (Tailwind):</h3>
            <pre className="bg-white p-4 rounded border border-gray-300 overflow-x-auto text-sm">
{`<h1 className="font-serif text-4xl">Titlu cu The Seasons</h1>
<p className="font-sans text-lg">Text normal cu Open Sans</p>
<span className="font-script text-2xl">Decorativ cu Beautifully Delicious</span>`}
            </pre>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-black">Cu inline styles:</h3>
            <pre className="bg-white p-4 rounded border border-gray-300 overflow-x-auto text-sm">
{`<h1 style={{ fontFamily: "var(--font-the-seasons)" }}>
  Titlu elegant
</h1>`}
            </pre>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="bg-blue-50 p-8 rounded-lg space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">Quick Reference</h2>
          <ul className="space-y-2 text-blue-900">
            <li><strong>--font-open-sans:</strong> Body text, regular content</li>
            <li><strong>--font-the-seasons:</strong> Headings, titles, elegant text</li>
            <li><strong>--font-beautifully-delicious:</strong> Accents, special elements</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
