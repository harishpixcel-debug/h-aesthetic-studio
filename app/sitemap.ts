import type { MetadataRoute } from "next";
import { journalArticles } from "@/lib/content";

const baseUrl = "https://www.h-aestheticstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // /process is intentionally excluded — it now redirects to /#process,
  // so the homepage entry below already covers that content.
  const staticRoutes = ["", "/studio", "/work", "/contact", "/start-a-project", "/journal"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const journalRoutes = journalArticles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticRoutes, ...journalRoutes];
}
