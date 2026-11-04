import type { MetadataRoute } from "next";
import { locales, pages, pathFor, site } from "@/content/config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = site.url.replace(/\/$/, ""); if (!base) return []; return locales.flatMap(locale => pages.map(page => ({ url: `${base}${pathFor(locale, page)}`, alternates: { languages: { en: `${base}${pathFor("en", page)}`, th: `${base}${pathFor("th", page)}` } } }))); }
