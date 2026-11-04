import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { VenturesPage } from "@/components/pages";
import { pageMetadata } from "@/lib/metadata";
import type { Locale } from "@/content/config";
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { return pageMetadata((await params).locale, "ventures"); }
export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; return <><Header locale={locale} current="ventures"/><VenturesPage locale={locale}/><Footer locale={locale} current="ventures"/></>; }
