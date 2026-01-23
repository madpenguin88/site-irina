"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const API_URL = "http://localhost:3001";

export default function ArticolePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(`${API_URL}/api/articles`);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        // Only show published articles
        const publishedArticles = data.filter((article: Article) => article.published);
        setArticles(publishedArticles);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            <Link href="/articole" className="font-sans text-sm text-gray-900 font-semibold transition-colors">
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
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">
              Articole
            </h1>
            <p className="font-sans text-lg text-gray-600">
              Articole despre psihologie, dezvoltare personală și sănătate mentală.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200 text-center">
              <p className="font-sans text-red-600 text-lg mb-4">
                Nu s-au putut încărca articolele. Asigură-te că serverul API rulează.
              </p>
              <p className="font-sans text-red-500 text-sm">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && articles.length === 0 && (
            <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 text-center">
              <p className="font-sans text-gray-500 text-lg">
                Momentan nu există articole publicate. Reveniti în curând!
              </p>
            </div>
          )}

          {/* Articles Grid */}
          {!loading && !error && articles.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  {article.imageUrl && article.imageUrl.trim() !== "" && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.imageUrl.startsWith("http") ? article.imageUrl : `${API_URL}${article.imageUrl}`}
                        alt={article.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="font-sans text-sm text-gray-500 mb-2">
                      {formatDate(article.createdAt)}
                    </p>
                    <h2 className="font-serif text-xl text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="font-sans text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/articole/${article.slug}`}
                      className="inline-block font-sans text-sm text-gray-900 font-medium hover:underline"
                    >
                      Citește mai mult →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
