import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/LegacyRedirect";
import { legacyMetadata } from "@/lib/metadata";
import type { Locale } from "@/content/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  return legacyMetadata((await params).locale, "about");
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  return <LegacyRedirect locale={(await params).locale} page="about" />;
}
