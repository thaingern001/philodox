import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { AboutPage } from "@/components/pages";
import { pageMetadata } from "@/lib/metadata";
import type { Locale } from "@/content/config";
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { return pageMetadata((await params).locale, "about"); }
export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; return <><Header locale={locale} current="about"/><AboutPage locale={locale}/><Footer locale={locale} current="about"/></>; }
