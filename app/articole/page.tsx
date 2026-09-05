"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

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
        const publishedArticles = data
          .filter((article: Article) => article.published)
          .map((article: Article) => ({
            ...article,
            category: article.category || "General",
          }));
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

  const groupedArticles = articles.reduce<Record<string, Article[]>>((acc, article) => {
    const category = article.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(article);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedArticles).sort((a, b) => a.localeCompare(b, "ro"));

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="articole" />

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
            <div className="space-y-12">
              {sortedCategories.map((category) => (
                <section key={category}>
                  <h2 className="font-serif text-3xl text-gray-900 mb-6">
                    {category}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedArticles[category]
                      .slice()
                      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                      .map((article) => (
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
                            <div className="mb-2">
                              <span className="inline-block px-2 py-1 rounded-md bg-gray-100 text-gray-600 font-sans text-xs">
                                {article.category}
                              </span>
                            </div>
                            <p className="font-sans text-sm text-gray-500 mb-2">
                              {formatDate(article.createdAt)}
                            </p>
                            <h3 className="font-serif text-xl text-gray-900 mb-3 line-clamp-2">
                              {article.title}
                            </h3>
                            <p className="font-sans text-gray-600 text-sm mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                            <Link
                              href={`/articole/${slugify(article.title)}`}
                              className="inline-block font-sans text-sm text-gray-900 font-medium hover:underline"
                            >
                              Citește mai mult →
                            </Link>
                          </div>
                        </article>
                      ))}
                  </div>
                </section>
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
