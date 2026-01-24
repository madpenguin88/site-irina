import ArticleContent from "./ArticleContent";

// Required for static export with catch-all route
export function generateStaticParams() {
  // Return a placeholder slug for static generation
  return [{ slug: ["placeholder"] }];
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
