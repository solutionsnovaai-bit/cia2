"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(5,8,17,0.92)] backdrop-blur-xl border-b border-[rgba(0,255,229,0.08)]"
          : "bg-gradient-to-b from-[rgba(5,8,17,0.8)] to-transparent"
      }`}
    >
      <span
        className="font-bebas text-3xl tracking-[4px]"
        style={{
          background: "linear-gradient(135deg, #00FFE5, #B44FFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        C.I.A
      </span>

      <a
        href="https://pay.kiwify.com.br/lRRpH6F"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 bg-[#00FFE5] text-[#050811] font-syne font-extrabold text-[11px] tracking-[2px] uppercase px-7 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,229,0.5)] hover:scale-105"
      >
        Garantir Acesso
      </a>
    </nav>
  );
}
