import { sectionFor, type Locale, type PageKey } from "@/content/config";
import { copy } from "@/content/copy";

export function LegacyRedirect({ locale, page }: { locale: Locale; page: PageKey }) {
  const destination = sectionFor(locale, page);
  return <main className="legacy-redirect"><meta httpEquiv="refresh" content={`0;url=${destination}`} /><p>{locale === "en" ? "This content has moved to the main page." : "เนื้อหานี้ย้ายไปอยู่ที่หน้าหลักแล้ว"} <a href={destination}>{copy[locale].nav[page]}</a></p></main>;
}
