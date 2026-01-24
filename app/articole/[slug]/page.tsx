import ArticleContent from "./ArticleContent";

// Required for static export - allows dynamic params at runtime
export function generateStaticParams() {
  // Return empty array since articles are fetched client-side
  // The page will be generated on-demand for any slug
  return [];
}

// Allow any slug to be handled (not just pre-generated ones)
export const dynamicParams = true;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleContent slug={slug} />;
}
