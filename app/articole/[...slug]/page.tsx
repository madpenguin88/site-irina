import ArticleContent from "./ArticleContent";

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

// Required for static export with catch-all route
export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_URL}/api/articles`, { cache: "no-store" });
    if (!response.ok) {
      console.warn("Failed to fetch articles for static generation");
      return [];
    }
    const articles = await response.json();
    const params = articles
      .filter((article: { title: string; published?: boolean }) => article.published)
      .map((article: { title: string }) => ({ slug: [slugify(article.title)] }));
    
    console.log(`Generating ${params.length} article pages`);
    return params;
  } catch (error) {
    console.error("Error fetching articles for static generation:", error);
    return [];
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
