import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleDot, MoveUpRight, SlidersHorizontal, UsersRound, Zap } from "lucide-react";
import { copy } from "@/content/copy";
import { pathFor, showcaseImages, site, type Locale } from "@/content/config";
import { ButtonLink, ContactBand, PageHero, SectionHeading, serviceIcons, Steps } from "./site";
import { HeroShowcase } from "./hero/HeroShowcase";

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const heroSlides = showcaseImages.map(({ id, image, serviceIndex }) => {
    const service = t.serviceList[serviceIndex];
    return {
      id, image,
      title: serviceIndex === 3 ? t.home.showcase.finalTitle : service.homeTitle,
      subtitle: serviceIndex === 3 ? t.home.showcase.finalSubtitle : service.homeDescription,
      href: `${pathFor(locale, "services")}#${id}`,
    };
  });
  return <main id="main">
    <section className="home-hero"><div className="shell home-hero-inner"><div className="home-hero-copy"><div className="eyebrow"><span className="eyebrow-square"/>{t.home.eyebrow}</div><h1>{t.home.hero}</h1><p>{t.home.intro}</p><div className="hero-actions"><ButtonLink href={pathFor(locale, "services")}>{t.common.explore}</ButtonLink><ButtonLink href={pathFor(locale, "contact")} secondary>{t.common.talk}</ButtonLink></div></div><HeroShowcase slides={heroSlides} labels={t.home.showcase} /></div></section>
    <section className="home-service-section"><div className="shell"><div className="home-service-heading"><h2>{t.home.servicesEyebrow}</h2><span>{t.home.servicesCount}</span></div><div className="home-service-grid">{t.serviceList.map((s, i) => { const Icon = serviceIcons[i]; return <Link key={s.id} href={`${pathFor(locale, "services")}#${s.id}`} className="home-service-card"><span className="home-service-icon"><Icon size={26} strokeWidth={1.35} aria-hidden="true" /></span><strong>{s.homeTitle}</strong><p>{s.homeDescription}</p><ArrowUpRight className="home-service-arrow" size={20} strokeWidth={1.8} aria-hidden="true" /></Link>; })}</div></div></section>
    <section className="why-section"><div className="shell why-grid"><div className="why-intro"><div className="eyebrow">{t.home.whyEyebrow}</div><h2>{t.home.whyHeading}</h2></div><div className="why-items">{t.home.why.map((item, i) => { const Icon = [UsersRound, Zap, SlidersHorizontal][i]; return <article key={item.title}><Icon size={28} strokeWidth={1.35} aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div></div></section>
    <section className="section dark-section home-approach"><div className="shell"><SectionHeading index="03" eyebrow={t.nav.approach} title={t.home.approachHeading} intro={t.home.approachIntro} light/><Steps locale={locale}/><div className="section-end"><Link className="text-link light-link" href={pathFor(locale, "approach")}>{t.common.learn}<ArrowUpRight size={17} aria-hidden="true" /></Link></div></div></section>
    <section className="section studio-overview"><div className="shell"><div className="studio-overview-head"><span>04 — 05 / PHILODOX</span><span>{site.tagline}</span></div><div className="studio-overview-grid"><article><span className="studio-overview-label">04 / {t.nav.ventures}</span><h2>{t.home.ventureHeading}</h2><p>{t.home.ventureText}</p><Link className="text-link" href={pathFor(locale, "ventures")}>{t.common.direction}<ArrowUpRight size={17} aria-hidden="true" /></Link></article><article><span className="studio-overview-label">05 / {t.nav.about}</span><h2>{t.home.aboutHeading}</h2><p>{t.home.aboutText}</p><Link className="text-link" href={pathFor(locale, "about")}>{t.common.about}<ArrowUpRight size={17} aria-hidden="true" /></Link></article></div></div></section>
    <ContactBand locale={locale}/>
  </main>;
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = copy[locale], s = t.services;
  return <main id="main"><PageHero index="01" eyebrow={t.nav.services} title={s.hero} intro={s.intro} graphic />
    <section className="section paper-section"><div className="shell"><SectionHeading index="01" eyebrow={s.overview} title={s.detailHeading} intro={s.detailIntro}/><nav className="service-index" aria-label={s.overview}>{t.serviceList.map((item,i) => <a href={`#${item.id}`} key={item.id}><span>0{i+1}</span>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</nav></div></section>
    <section className="white-section"><div className="shell">{t.serviceList.map((item,i) => { const Icon = serviceIcons[i]; return <article className="service-detail" id={item.id} key={item.id}><div className="service-detail-label"><span>0{i+1} / 05</span><Icon size={32} strokeWidth={1.2} aria-hidden="true" /></div><div className="service-detail-body"><h2>{item.title}</h2><p className="lead">{item.detail}</p><div className="service-detail-lists"><div><h3>{s.examples}</h3><ul>{item.examples.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>{s.outcomes}</h3><ul>{item.outcomes.map(x=><li key={x}>{x}</li>)}</ul></div></div></div></article>})}</div></section>
    <section className="process-bridge"><div className="shell process-bridge-grid"><div className="section-kicker light"><span>02</span><span>{t.nav.approach}</span></div><div><h2>{s.processHeading}</h2><p>{s.processText}</p></div><Link className="text-link light-link" href={pathFor(locale, "approach")}>{t.nav.approach}<ArrowUpRight size={17} aria-hidden="true" /></Link></div></section>
    <section className="section paper-section"><div className="shell"><SectionHeading index="03" eyebrow={locale === "en" ? "Collaboration" : "การร่วมงาน"} title={s.modelsHeading} intro={s.modelsIntro}/><div className="model-grid">{s.models.map((m,i) => <article key={m.title}><span>0{i+1} / 04</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div></div></section><ContactBand locale={locale}/>
  </main>;
}

export function ApproachPage({ locale }: { locale: Locale }) {
  const t = copy[locale], a = t.approach;
  return <main id="main"><PageHero index="02" eyebrow={t.nav.approach} title={a.hero} intro={a.intro} graphic/>
    <section className="section white-section"><div className="shell"><SectionHeading index="01" eyebrow={t.nav.approach} title={a.principlesHeading}/><div className="principles-list">{a.principles.map((p,i) => <article key={p.title}><span className="principle-number">0{i+1}</span><h3>{p.title}</h3><p>{p.text}</p><CircleDot size={18} strokeWidth={1.3} aria-hidden="true" /></article>)}</div></div></section>
    <section className="section dark-section"><div className="shell"><SectionHeading index="02" eyebrow={locale === "en" ? "A working rhythm" : "จังหวะการทำงาน"} title={a.closingHeading} intro={a.closingText} light/><Steps locale={locale}/></div></section><ContactBand locale={locale}/>
  </main>;
}

export function VenturesPage({ locale }: { locale: Locale }) {
  const t = copy[locale], v = t.ventures;
  return <main id="main"><PageHero index="03" eyebrow={t.nav.ventures} title={v.hero} intro={v.intro} graphic/>
    <section className="section paper-section"><div className="shell split-editorial"><div className="section-kicker"><span>01</span><span>{t.nav.ventures}</span></div><div><h2>{v.whyHeading}</h2><p>{v.whyText}</p></div></div></section>
    <section className="section white-section"><div className="shell"><SectionHeading index="02" eyebrow={t.common.interest} title={v.interestsHeading} intro={v.interestsIntro}/><div className="interest-grid">{v.interests.map((x,i) => <div key={x}><span>0{i+1}</span><h3>{x}</h3><MoveUpRight size={18} strokeWidth={1.3} aria-hidden="true" /></div>)}</div></div></section>
    <section className="section dark-section"><div className="shell"><SectionHeading index="03" eyebrow={locale === "en" ? "Intended process" : "กระบวนการที่ตั้งใจใช้"} title={v.processHeading} intro={v.processIntro} light/><ol className="steps-grid">{v.process.map((p,i) => <li key={p.title}><span className="step-number">0{i+1}<ArrowRight size={18} aria-hidden="true" /></span><h3>{p.title}</h3><p>{p.text}</p></li>)}</ol></div></section>
    <section className="section paper-section"><div className="shell split-editorial"><div className="section-kicker"><span>04</span><span>{locale === "en" ? "Partners" : "พันธมิตร"}</span></div><div><h2>{v.partnerHeading}</h2><p>{v.partnerText}</p><ButtonLink href={pathFor(locale, "contact")} secondary>{t.common.start}</ButtonLink></div></div></section><ContactBand locale={locale}/>
  </main>;
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale], a = t.about;
  return <main id="main"><PageHero index="04" eyebrow={t.nav.about} title={a.hero} intro={a.intro} graphic/>
    <section className="section paper-section"><div className="shell split-editorial"><div className="section-kicker"><span>01</span><span>PHILODOX</span></div><div><h2>{a.philosophyHeading}</h2><p>{a.philosophyText}</p></div></div></section>
    <section className="section white-section"><div className="shell split-editorial"><div className="section-kicker"><span>02</span><span>{locale === "en" ? "Purpose" : "จุดมุ่งหมาย"}</span></div><div><h2>{a.whyHeading}</h2><p>{a.whyText}</p></div></div></section>
    <section className="section dark-section"><div className="shell"><SectionHeading index="03" eyebrow={locale === "en" ? "People" : "ผู้คน"} title={a.teamHeading} intro={a.teamText} light/><div className="team-abstract" aria-hidden="true"><div><span>01</span><div className="abstract-person one"/></div><div><span>02</span><div className="abstract-person two"/></div></div><p className="team-note">{a.teamNote}</p></div></section>
    <section className="section paper-section"><div className="shell split-editorial"><div className="section-kicker"><span>04</span><span>{locale === "en" ? "Direction" : "ทิศทาง"}</span></div><div><h2>{a.futureHeading}</h2><p>{a.futureText}</p></div></div></section><ContactBand locale={locale}/>
  </main>;
}

export function ContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale], c = t.contact;
  const mailto = site.contactEmail ? `mailto:${site.contactEmail}?subject=${encodeURIComponent(locale === "en" ? "Inquiry for Philodox" : "ติดต่อ Philodox")}` : "";
  return <main id="main"><PageHero index="05" eyebrow={t.nav.contact} title={c.hero} intro={c.intro}/>
    <section className="section white-section"><div className="shell contact-grid"><div><div className="section-kicker"><span>01</span><span>{c.topicsHeading}</span></div><h2>{c.topicsHeading}</h2><ul className="contact-topics">{c.topics.map((x,i) => <li key={x}><span>0{i+1}</span>{x}<ArrowUpRight size={18} aria-hidden="true" /></li>)}</ul></div><div className="contact-panel"><div className="section-kicker"><span>02</span><span>{c.actionHeading}</span></div><h2>{site.contactEmail ? c.actionHeading : c.fallbackHeading}</h2><p>{site.contactEmail ? c.actionText : c.fallbackText}</p>{mailto && <a className="contact-email" href={mailto}>{site.contactEmail}<ArrowUpRight size={21} aria-hidden="true" /></a>}</div></div></section></main>;
}
