import type { Metadata } from "next";
import { copy } from "@/content/copy";
import { pathFor, site, type Locale, type PageKey } from "@/content/config";

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const { title, description } = copy[locale].meta[page];
  const base = site.url.replace(/\/$/, "");
  const path = pathFor(locale);
  return {
    title, description,
    ...(base ? { metadataBase: new URL(base), alternates: { canonical: `${base}${path}`, languages: { en: `${base}${pathFor("en")}`, th: `${base}${pathFor("th")}`, "x-default": `${base}${pathFor("en")}` } } } : {}),
    openGraph: { title, description, type: "website", siteName: "Philodox", locale: locale === "en" ? "en_US" : "th_TH", alternateLocale: locale === "en" ? ["th_TH"] : ["en_US"], ...(base ? { url: `${base}${path}`, images: [{ url: `${base}/og.png`, width: 1200, height: 630, alt: "Philodox — engineering shaped around your challenge" }] } : {}) },
    twitter: { card: "summary_large_image", title, description, ...(base ? { images: [`${base}/og.png`] } : {}) },
  };
}

export function legacyMetadata(locale: Locale, page: PageKey): Metadata {
  const base = site.url.replace(/\/$/, "");
  return { title: copy[locale].meta[page].title, robots: { index: false, follow: true }, alternates: { canonical: `${base}${pathFor(locale)}` } };
}
