"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { copy } from "@/content/copy";
import { pathFor, type Locale } from "@/content/config";

const slides = [
  { id: "software", image: "/images/hero/software.webp", serviceIndex: 0 },
  { id: "ai", image: "/images/hero/ai.webp", serviceIndex: 1 },
  { id: "data", image: "/images/hero/data.webp", serviceIndex: 2 },
  { id: "consulting", image: "/images/hero/consulting.webp", serviceIndex: 3 },
] as const;

type ParallaxState = { x: number; y: number; targetX: number; targetY: number; frame: number };

function OrbitalOverlay() {
  return <div className="showcase-orbit-layer" aria-hidden="true">
    <svg className="showcase-orbit-svg" viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="169" stroke="currentColor" strokeOpacity=".35" strokeWidth=".8" />
      <circle cx="200" cy="200" r="119" stroke="#789bff" strokeOpacity=".68" strokeWidth="1" />
      <path d="M200 10v380M10 200h380" stroke="currentColor" strokeOpacity=".3" strokeWidth=".75" />
      <path d="M180 200h40M200 180v40" stroke="currentColor" strokeOpacity=".75" strokeWidth=".8" />
      <g className="showcase-orbit-a">
        <ellipse cx="200" cy="200" rx="171" ry="69" stroke="#b6cdff" strokeOpacity=".86" strokeWidth="1.1" />
        <circle cx="371" cy="200" r="3.5" fill="#8bb6ff" />
      </g>
      <g className="showcase-orbit-b">
        <ellipse cx="200" cy="200" rx="163" ry="81" stroke="#7398f7" strokeOpacity=".72" strokeWidth="1" />
        <circle cx="37" cy="200" r="2.5" fill="#a9caff" />
      </g>
      <circle cx="200" cy="200" r="22" stroke="#a6c4ff" strokeOpacity=".85" strokeWidth=".8" />
    </svg>
    <span className="showcase-core" />
    <span className="showcase-coordinate">P / 01<br />X 24.01<br />Y 48.08</span>
  </div>;
}

export function HeroShowcase({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const parallax = useRef<ParallaxState>({ x: 0, y: 0, targetX: 0, targetY: 0, frame: 0 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setHidden(document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (hovered || focused || hidden || reducedMotion) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slides.length), 6000);
    return () => window.clearTimeout(timer);
  }, [active, hovered, focused, hidden, reducedMotion]);

  const animateParallax = useCallback(function tick() {
    const state = parallax.current;
    state.x += (state.targetX - state.x) * .13;
    state.y += (state.targetY - state.y) * .13;
    const element = root.current;
    if (element) {
      element.style.setProperty("--showcase-bg-x", `${(state.x * 5).toFixed(2)}px`);
      element.style.setProperty("--showcase-bg-y", `${(state.y * 5).toFixed(2)}px`);
      element.style.setProperty("--showcase-orbit-x", `${(state.x * 12).toFixed(2)}px`);
      element.style.setProperty("--showcase-orbit-y", `${(state.y * 12).toFixed(2)}px`);
      element.style.setProperty("--showcase-core-x", `${(state.x * 18).toFixed(2)}px`);
      element.style.setProperty("--showcase-core-y", `${(state.y * 18).toFixed(2)}px`);
    }
    if (Math.abs(state.targetX - state.x) > .004 || Math.abs(state.targetY - state.y) > .004) {
      state.frame = requestAnimationFrame(tick);
    } else {
      state.frame = 0;
    }
  }, []);

  const scheduleParallax = useCallback(() => {
    if (!parallax.current.frame) parallax.current.frame = requestAnimationFrame(animateParallax);
  }, [animateParallax]);

  useEffect(() => () => {
    if (parallax.current.frame) cancelAnimationFrame(parallax.current.frame);
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    parallax.current.targetX = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    parallax.current.targetY = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    scheduleParallax();
  }

  function handlePointerLeave() {
    setHovered(false);
    parallax.current.targetX = 0;
    parallax.current.targetY = 0;
    scheduleParallax();
  }

  const current = slides[active];
  const service = t.serviceList[current.serviceIndex];
  const title = active === 3 ? t.home.showcase.finalTitle : service.homeTitle;
  const subtitle = active === 3 ? t.home.showcase.finalSubtitle : service.homeDescription;

  return <div
    ref={root}
    className="hero-showcase"
    role="region"
    aria-label={t.home.showcase.label}
    onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }}
    onPointerMove={handlePointerMove}
    onPointerLeave={handlePointerLeave}
    onFocusCapture={() => setFocused(true)}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
  >
    <div className="showcase-image-layer" aria-hidden="true">
      {slides.map((slide, index) => <Image
        key={slide.id}
        src={slide.image}
        alt=""
        fill
        sizes="(max-width: 560px) 100vw, (max-width: 800px) 560px, 40vw"
        unoptimized
        loading={index === 0 ? "eager" : "lazy"}
        fetchPriority={index === 0 ? "high" : "auto"}
        className={`showcase-image ${index === active ? "is-active" : ""}`}
      />)}
    </div>
    <div className="showcase-tint" aria-hidden="true" />
    <OrbitalOverlay />
    <div className="showcase-meta"><span>{String(active + 1).padStart(2, "0")} / 04</span><div className="showcase-progress" aria-hidden="true">{slides.map((slide, index) => <i key={slide.id} className={index === active ? "is-active" : ""} />)}</div></div>
    <div className="showcase-bottom"><div className="showcase-caption" key={current.id}><Link href={`${pathFor(locale, "services")}#${current.id}`} aria-label={`${t.home.showcase.view}: ${title}`}><strong>{title}</strong><ArrowUpRight size={18} aria-hidden="true" /></Link><span>{subtitle}</span></div><div className="showcase-controls"><button type="button" onClick={() => setActive(index => (index - 1 + slides.length) % slides.length)} aria-label={t.home.showcase.previous}><ChevronLeft size={19} aria-hidden="true" /></button><button type="button" onClick={() => setActive(index => (index + 1) % slides.length)} aria-label={t.home.showcase.next}><ChevronRight size={19} aria-hidden="true" /></button></div></div>
  </div>;
}
