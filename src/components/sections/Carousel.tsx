"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const slides = [
  { src: "/assets/images/mockup1.jpeg", label: "Personal Trainer · Stories" },
  { src: "/assets/images/mockup2.jpeg", label: "Marketing · Reels" },
  { src: "/assets/images/mockup3.jpeg", label: "Copywriter · Carrossel" },
  { src: "/assets/images/mockup4.jpeg", label: "Gestor de Tráfego · Post" },
  { src: "/assets/images/mockup5.jpeg", label: "Arquitetura · Stories" },
  { src: "/assets/images/mockup6.jpeg", label: "Nutricionista · Reels" },
  { src: "/assets/images/mockup7.jpeg", label: "Estética · Carrossel" },
  { src: "/assets/images/mockup8.jpeg", label: "Infoprodutor · Post" },
  { src: "/assets/images/mockup9.jpeg", label: "Marketing Digital · Post" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const touchStartX = useRef(0);

  const visibleCount = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 960) return 2;
    return 4;
  };

  const maxIndex = useCallback(() => Math.max(0, slides.length - visibleCount()), []);

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex()));
    setCurrent(clamped);
  }, [maxIndex]);

  useEffect(() => {
    const cardWidth = (wrapRef.current?.querySelector(".carousel-card") as HTMLElement)?.offsetWidth ?? 260;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * (cardWidth + 24)}px)`;
    }
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => goTo(current >= maxIndex() ? 0 : current + 1), 4000);
    return () => clearInterval(interval);
  }, [current, goTo, maxIndex]);

  const onMouseDown = (e: React.MouseEvent) => { isDragging.current = true; startX.current = e.pageX; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const walk = e.pageX - startX.current;
    if (Math.abs(walk) > 50) { goTo(walk < 0 ? current + 1 : current - 1); isDragging.current = false; }
  };
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  };

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">
            O C.I.A em ação
          </span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            É isso que <span className="grad-cyan">sai do sistema</span>
          </h2>
          <p className="text-[rgba(232,240,255,0.5)] mt-4 max-w-[500px] mx-auto font-normal" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
            Conteúdo real, criado pelos agentes C.I.A para nichos reais. Arraste para ver mais.
          </p>
        </FadeIn>

        <div
          ref={wrapRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none py-5"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div ref={trackRef} className="carousel-track">
            {slides.map((s, i) => (
              <div
                key={i}
                className="carousel-card flex-none w-[260px] rounded-3xl overflow-hidden relative border border-[rgba(0,255,229,0.1)] transition-all duration-400 hover:border-[rgba(0,255,229,0.4)] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(0,255,229,0.12)]"
                style={{ aspectRatio: "9/16", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
              >
                <Image src={s.src} alt={s.label} fill className="object-cover pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12 bg-gradient-to-t from-[rgba(5,8,17,0.95)] to-transparent">
                  <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#00FFE5]">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => goTo(current - 1)}
            className="w-12 h-12 rounded-full border border-[rgba(0,255,229,0.2)] bg-[rgba(12,20,40,0.8)] text-[#00FFE5] flex items-center justify-center transition-all hover:border-[#00FFE5] hover:shadow-[0_0_20px_rgba(0,255,229,0.2)]"
          >
            ←
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxIndex() + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#00FFE5]" : "w-[6px] bg-[rgba(232,240,255,0.2)]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(current + 1)}
            className="w-12 h-12 rounded-full border border-[rgba(0,255,229,0.2)] bg-[rgba(12,20,40,0.8)] text-[#00FFE5] flex items-center justify-center transition-all hover:border-[#00FFE5] hover:shadow-[0_0_20px_rgba(0,255,229,0.2)]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
