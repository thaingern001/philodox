import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { OnePage } from "@/components/OnePage";
import { pageMetadata } from "@/lib/metadata";
import type { Locale } from "@/content/config";
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> { return pageMetadata((await params).locale, "home"); }
export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) { const { locale } = await params; return <><Header locale={locale}/><OnePage locale={locale}/><Footer locale={locale}/></>; }
