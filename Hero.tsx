"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { num: "45", label: "Agentes Especializados" },
  { num: "15", label: "Nichos Mapeados" },
  { num: "3", label: "Formatos por Nicho" },
  { num: "7", label: "Dias de Garantia" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 text-center">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 600, height: 600,
            background: "rgba(0,255,229,0.10)",
            filter: "blur(120px)",
            top: "-15%", left: "-10%",
            animation: "orbFloat 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500,
            background: "rgba(180,79,255,0.10)",
            filter: "blur(120px)",
            bottom: "5%", right: "-10%",
            animation: "orbFloat 8s ease-in-out infinite 3s",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 350, height: 350,
            background: "rgba(255,184,48,0.07)",
            filter: "blur(100px)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            animation: "orbFloat 8s ease-in-out infinite 6s",
          }}
        />
      </div>

      {/* Logo */}
      <motion.div {...fadeUp(0)} className="relative z-10 mb-8">
        <div
          className="relative rounded-3xl overflow-hidden mx-auto"
          style={{
            width: "min(600px, 88vw)",
            boxShadow: "0 0 80px rgba(0,255,229,0.25), 0 40px 80px rgba(0,0,0,0.5)",
            animation: "heroFloat 6s ease-in-out infinite",
          }}
        >
          <Image
            src="/assets/images/logo_oficial.jpeg"
            alt="Conteúdo Infinito com IA"
            width={600}
            height={338}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-3xl border border-[rgba(0,255,229,0.2)]" />
        </div>
      </motion.div>

      {/* Eyebrow */}
      <motion.p
        {...fadeUp(0.1)}
        className="relative z-10 font-mono text-[11px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-5"
      >
        Sistema de Conteúdo com Inteligência Artificial
      </motion.p>

      {/* Title */}
      <motion.h1
        {...fadeUp(0.2)}
        className="relative z-10 font-bebas leading-[0.92] tracking-wide mb-6"
        style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
      >
        <span className="grad-hero">45 Funcionários de IA</span>
        <br />
        <span className="text-[#E8F0FF]">trabalhando por você</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        {...fadeUp(0.3)}
        className="relative z-10 text-[rgba(232,240,255,0.6)] max-w-[600px] leading-relaxed mb-12 font-syne font-normal"
        style={{ fontSize: "clamp(16px, 2.2vw, 21px)" }}
      >
        Um sistema completo de agentes especializados — cada um treinado na linguagem de um nicho, dominando um formato. Conteúdo profissional em menos de 3 minutos.
      </motion.p>

      {/* CTA */}
      <motion.a
        {...fadeUp(0.4)}
        href="https://pay.kiwify.com.br/lRRpH6F"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-3 font-syne font-extrabold uppercase tracking-[2px] px-12 py-6 rounded-full transition-all duration-400 text-[#050811]"
        style={{
          fontSize: "clamp(13px, 1.8vw, 17px)",
          background: "linear-gradient(135deg, #00FFE5, #00CCBB)",
          boxShadow: "0 0 40px rgba(0,255,229,0.35), 0 20px 60px rgba(0,0,0,0.4)",
          animation: "pulseGlow 3s ease-in-out infinite",
        }}
        whileHover={{ y: -4, scale: 1.02 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L4.09 12.26c-.4.45-.6.68-.6.93s.2.48.6.93L13 24V14h8.5c.5 0 .5-.5 0-1L13 2z" />
        </svg>
        QUERO MEU TIME DE IA AGORA
      </motion.a>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.5)}
        className="relative z-10 flex flex-wrap justify-center gap-10 mt-16"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <span
              className="block font-bebas leading-none"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                background: "linear-gradient(135deg, #FFB830, #FF8C00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {s.num}
            </span>
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(232,240,255,0.4)]">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
