import ArticleContent from "./ArticleContent";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://apiirina.duckdns.org";

// Required for static export with catch-all route
export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_URL}/api/articles`, { cache: "no-store" });
    if (!response.ok) {
      return [{ slug: ["placeholder"] }];
    }
    const articles = await response.json();
    return articles
      .filter((article: { slug: string; published?: boolean }) => article.published)
      .map((article: { slug: string }) => ({ slug: [article.slug] }));
  } catch {
    return [{ slug: ["placeholder"] }];
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const articleSlug = slug[0] || "";
  return <ArticleContent slug={articleSlug} />;
}
