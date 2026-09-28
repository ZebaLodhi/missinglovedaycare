import type { MetadataRoute } from "next";
import { siteUrl } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/programs", "/tuition", "/reviews", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
