import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/hookah-lounge", priority: 0.92 },
  { path: "/flames-147", priority: 0.92 },
  { path: "/menu", priority: 0.82 },
  { path: "/gallery", priority: 0.76 },
  { path: "/contact", priority: 0.84 },
  { path: "/about", priority: 0.65 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority
  }));
}
