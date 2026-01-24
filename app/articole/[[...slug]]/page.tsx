import ArticleContent from "./ArticleContent";

// Required for static export with catch-all route
export function generateStaticParams() {
  // Return a placeholder that generates the base route
  return [{ slug: [] }];
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const articleSlug = slug?.[0] || "";
  return <ArticleContent slug={articleSlug} />;
}
