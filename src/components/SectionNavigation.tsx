"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { pages, sectionFor, type Locale, type PageKey } from "@/content/config";

export function SectionNavigation({ locale, labels, languageLabel, menuLabel }: { locale: Locale; labels: Record<PageKey, string>; languageLabel: string; menuLabel: string }) {
  const [active, setActive] = useState<PageKey>("home");
  const menu = useRef<HTMLDetailsElement>(null);
  const navigatingTo = useRef<PageKey | null>(null);
  const other: Locale = locale === "en" ? "th" : "en";

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1) as PageKey;
      if (pages.includes(id)) setActive(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    const observer = new IntersectionObserver(() => {
      const target = navigatingTo.current;
      if (target) {
        const top = document.getElementById(target)?.getBoundingClientRect().top ?? Infinity;
        if (top > 140 || top < -20) return;
      }
      navigatingTo.current = null;
      const current = pages.find(page => {
        const rect = document.getElementById(page)?.getBoundingClientRect();
        return rect && rect.bottom > 140 && rect.top < window.innerHeight * 0.55;
      });
      if (current) setActive(current);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] });
    pages.forEach(page => { const el = document.getElementById(page); if (el) observer.observe(el); });
    return () => { observer.disconnect(); window.removeEventListener("hashchange", fromHash); };
  }, []);

  const selectSection = (page: PageKey) => {
    navigatingTo.current = page;
    window.setTimeout(() => { if (navigatingTo.current === page) navigatingTo.current = null; }, 1500);
    setActive(page);
    if (menu.current) menu.current.open = false;
    window.setTimeout(() => document.getElementById(page)?.focus({ preventScroll: true }), 150);
  };
  const links = pages.map(page => <a key={page} href={sectionFor(locale, page)} aria-current={active === page ? "location" : undefined} className={page === "contact" ? "nav-contact" : ""} onClick={() => selectSection(page)}>{labels[page]}{page === "contact" && <MoveUpRight size={14} aria-hidden="true" />}</a>);
  return <><nav className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "เมนูหลัก"}>{links}</nav><div className="header-actions"><a className="language-link" href={sectionFor(other, active)} lang={other} hrefLang={other} aria-label={`${languageLabel}: ${other === "en" ? "English" : "ไทย"}`}>{other.toUpperCase()}</a><details className="mobile-menu" ref={menu}><summary aria-label={menuLabel}><span className="menu-bars" aria-hidden="true"><span/><span/></span></summary><nav aria-label={locale === "en" ? "Mobile navigation" : "เมนูมือถือ"}>{pages.map(page => <a key={page} href={sectionFor(locale, page)} aria-current={active === page ? "location" : undefined} onClick={() => selectSection(page)}>{labels[page]}<ArrowRight size={18} aria-hidden="true" /></a>)}<a className="mobile-lang" href={sectionFor(other, active)} lang={other} hrefLang={other}>{other === "en" ? "English" : "ไทย"}</a></nav></details></div></>;
}
