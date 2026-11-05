import type { MetadataRoute } from "next";
import { locales, pathFor, site } from "@/content/config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = site.url.replace(/\/$/, ""); return locales.map(locale => ({ url: `${base}${pathFor(locale)}`, alternates: { languages: { en: `${base}${pathFor("en")}`, th: `${base}${pathFor("th")}` } } })); }
