"use client";

import ArticleContent from "./ArticleContent";
import { use } from "react";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = use(params);
  const articleSlug = slug[0] || "";
  return <ArticleContent slug={articleSlug} />;
}
