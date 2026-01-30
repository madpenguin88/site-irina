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
  category: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://apiirina.duckdns.org";

export default function ArticleContent({ slug }: { slug: string }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        // First fetch all articles to find by slug
        const response = await fetch(`${API_URL}/api/articles`);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const articles = await response.json();
        const foundArticle = articles.find((a: Article) => a.slug === slug && a.published);
        
        if (!foundArticle) {
          throw new Error("Article not found");
        }
        
        setArticle({
          ...foundArticle,
          category: foundArticle.category || "General",
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

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
            <h1 className="text-md font-semibold text-gray-900" style={{ fontFamily: 'var(--font-cinzel)' }}>
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
        <div className="max-w-3xl mx-auto">
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-200 mb-8">
                <p className="font-sans text-red-600 text-lg mb-2">
                  {error === "Article not found" 
                    ? "Articolul nu a fost găsit." 
                    : "Nu s-a putut încărca articolul."}
                </p>
                <p className="font-sans text-red-500 text-sm">{error}</p>
              </div>
              <Link 
                href="/articole"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
              >
                Înapoi la articole
              </Link>
            </div>
          )}

          {/* Article Content */}
          {!loading && !error && article && (
            <article>
              {/* Back Link */}
              <Link 
                href="/articole"
                className="inline-flex items-center font-sans text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
              >
                ← Înapoi la articole
              </Link>

              {/* Article Header */}
              <header className="mb-8">
                <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  {article.title}
                </h1>
                {article.category && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-sans text-xs">
                      {article.category}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-4 text-gray-500 font-sans text-sm">
                  <span>{formatDate(article.createdAt)}</span>
                  {article.author && (
                    <>
                      <span>•</span>
                      <span>{article.author}</span>
                    </>
                  )}
                </div>
              </header>

              {/* Featured Image */}
              {article.imageUrl && article.imageUrl.trim() !== "" && (
                <div className="relative h-64 md:h-96 w-full mb-8 rounded-2xl overflow-hidden">
                  <Image
                    src={article.imageUrl.startsWith("http") ? article.imageUrl : `${API_URL}${article.imageUrl}`}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              )}

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none font-sans text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-gray-200">
                <Link 
                  href="/articole"
                  className="inline-block px-8 py-4 bg-gray-900 text-white font-sans text-sm rounded-full hover:bg-gray-800 transition-colors"
                >
                  Vezi toate articolele
                </Link>
              </footer>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}
