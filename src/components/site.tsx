import Link from "next/link";
import { ArrowDownRight, ArrowRight, Asterisk, Braces, ChartNoAxesCombined, Compass, Layers3, MoveUpRight, Network, ScanSearch } from "lucide-react";
import { copy } from "@/content/copy";
import { pathFor, pages, type Locale, type PageKey } from "@/content/config";

export function Mark({ inverse = false }: { inverse?: boolean }) {
  return <span className={`brand-lockup ${inverse ? "inverse" : ""}`}><svg className="brand-symbol" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M7 7h17c9.4 0 17 7.6 17 17S33.4 41 24 41H7V7Z" stroke="currentColor" strokeWidth="3"/><path d="M7 24h34M24 7v34" stroke="currentColor" strokeWidth="3"/><circle cx="24" cy="24" r="4" fill="var(--accent)"/></svg><span>philodox<span className="brand-period">.</span></span></span>;
}

export function Header({ locale, current }: { locale: Locale; current: PageKey }) {
  const t = copy[locale];
  const other: Locale = locale === "en" ? "th" : "en";
  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header"><div className="shell header-inner">
      <Link href={pathFor(locale)} aria-label={`Philodox — ${t.nav.home}`}><Mark /></Link>
      <nav className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "เมนูหลัก"}>{pages.map(p => <Link key={p} href={pathFor(locale, p)} aria-current={p === current ? "page" : undefined} className={p === "contact" ? "nav-contact" : ""}>{t.nav[p]}{p === "contact" && <MoveUpRight size={14} aria-hidden="true" />}</Link>)}</nav>
      <div className="header-actions"><Link className="language-link" href={pathFor(other, current)} lang={other} hrefLang={other} aria-label={`${t.langLabel}: ${other === "en" ? "English" : "ไทย"}`}>{other.toUpperCase()}</Link>
      <details className="mobile-menu"><summary aria-label={t.menu}><span className="menu-bars" aria-hidden="true"><span/><span/></span></summary><nav aria-label={locale === "en" ? "Mobile navigation" : "เมนูมือถือ"}>{pages.map(p => <Link key={p} href={pathFor(locale, p)} aria-current={p === current ? "page" : undefined}>{t.nav[p]}<ArrowRight size={18} aria-hidden="true" /></Link>)}<Link className="mobile-lang" href={pathFor(other, current)} lang={other} hrefLang={other}>{other === "en" ? "English" : "ไทย"}</Link></nav></details></div>
    </div></header>
  </>;
}

export function Footer({ locale, current }: { locale: Locale; current: PageKey }) {
  const t = copy[locale]; const other = locale === "en" ? "th" : "en";
  return <footer className="site-footer"><div className="shell footer-top"><div><Link href={pathFor(locale)} aria-label="Philodox home"><Mark inverse /></Link><p>{t.common.footer}</p></div><nav aria-label={locale === "en" ? "Footer navigation" : "เมนูส่วนท้าย"}>{pages.map(p => <Link key={p} href={pathFor(locale, p)}>{t.nav[p]}</Link>)}</nav><div className="footer-language"><span>{t.langLabel}</span><Link href={pathFor(other, current)} lang={other} hrefLang={other}>{other === "en" ? "English" : "ไทย"} <ArrowRight size={16} aria-hidden="true" /></Link></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Philodox</span><span>Independent by design <span className="blue-dot">●</span> Curious by nature</span></div></footer>;
}

export function ButtonLink({ href, children, secondary = false, inverse = false }: { href: string; children: React.ReactNode; secondary?: boolean; inverse?: boolean }) {
  return <Link className={`button-link ${secondary ? "secondary" : ""} ${inverse ? "button-inverse" : ""}`} href={href}>{children}<ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" /></Link>;
}

export function SectionHeading({ index, eyebrow, title, intro, light = false }: { index?: string; eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "light" : ""}`}><div className="section-kicker"><span>{index || "◇"}</span><span>{eyebrow}</span></div><div><h2>{title}</h2>{intro && <p>{intro}</p>}</div></div>;
}

export function ContactBand({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="contact-band"><div className="shell contact-band-inner"><div className="section-kicker light"><span>↗</span><span>{t.nav.contact}</span></div><h2>{t.common.contactCta}</h2><div className="contact-band-bottom"><p>{t.common.contactBody}</p><ButtonLink href={pathFor(locale, "contact")} inverse>{t.common.start}</ButtonLink></div><div className="orbital orbital-band" aria-hidden="true"><i/><i/><i/></div></div></section>;
}

export function HeroGraphic() { return <div className="hero-graphic" aria-hidden="true"><div className="graphic-grid"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="graphic-axis horizontal"/><div className="graphic-axis vertical"/><div className="graphic-center"/><span className="graphic-label top">P / 01</span><span className="graphic-label bottom">IDEA → IMPACT</span><span className="graphic-coordinate">x 24.01<br/>y 48.08</span></div> }

export const serviceIcons = [Braces, Asterisk, ChartNoAxesCombined, Network, Layers3];
export const smallIcons = [ScanSearch, Compass, Braces, Asterisk];

export function Steps({ locale }: { locale: Locale }) { return <ol className="steps-grid">{copy[locale].steps.map((step, i) => <li key={step.title}><span className="step-number">0{i + 1} <ArrowDownRight size={18} aria-hidden="true" /></span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol> }

export function PageHero({ index, eyebrow, title, intro, graphic = false }: { index: string; eyebrow: string; title: string; intro: string; graphic?: boolean }) { return <section className={`page-hero ${graphic ? "with-graphic" : ""}`}><div className="shell page-hero-inner"><div className="page-hero-copy"><div className="eyebrow"><span className="eyebrow-square"/>{index} / {eyebrow}</div><h1>{title}</h1><p>{intro}</p></div>{graphic && <HeroGraphic />}</div></section> }
