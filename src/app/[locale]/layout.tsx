import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/content/config";
import "../globals.css";
import "../one-page.css";

export function generateStaticParams() { return locales.map(locale => ({ locale })); }
export const dynamicParams = false;

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <html lang={locale} data-scroll-behavior="smooth"><body>{children}</body></html>;
}
