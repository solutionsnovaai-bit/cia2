"use client";

import FadeIn from "@/components/ui/FadeIn";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── Reposition ──────────────────────────────────────────────────────────────
export function Reposition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center bg-gradient-to-b from-[#0A0E1A] to-[#050811] py-24 px-6">
      <div className="max-w-[1200px] mx-auto w-full text-center">
        <div className="mb-16">
          {["\"Isso não é um curso.\"", "\"Isso não é um prompt.\""].map((text, i) => (
            <div key={i} className="relative inline-block mb-4 font-bebas text-[rgba(232,240,255,0.2)]" style={{ fontSize: "clamp(28px, 4.5vw, 60px)", display: "block" }}>
              {text}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-[-4px] right-[-4px] h-[3px] bg-[rgba(255,255,255,0.15)] rounded"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut", delay: i * 0.4 + 0.2 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="font-bebas leading-[0.9] mb-12" style={{ fontSize: "clamp(48px, 8vw, 110px)" }}>
            <span className="grad-cyan block">É uma agência de conteúdo</span>
            <span className="grad-purple block">operada por você.</span>
          </h2>

          <div className="max-w-[700px] mx-auto">
            <TestimonialCard color="gold">
              <p className="text-[rgba(232,240,255,0.9)] italic font-medium leading-relaxed mb-6" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
                A produtividade da minha agência triplicou. Onde eu precisava de 3 redatores, hoje uso o C.I.A e apenas um revisor. A margem de lucro explodiu.
              </p>
              <p className="font-extrabold text-[17px]">Pedro Almeida</p>
              <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#FFB830]">Dono de agência 360</p>
            </TestimonialCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── BeliefBreak ──────────────────────────────────────────────────────────────
const myths = [
  "Criar conteúdo bom exige criatividade",
  "Você precisa saber copywriting",
  "Precisa de experiência em marketing digital",
  "Precisa de dinheiro para contratar alguém",
];

export function BeliefBreak() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">A virada de chave</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            Isso era verdade <span className="grad-gold">em 2021</span>
          </h2>
        </FadeIn>

        <div className="grid gap-16 items-center" style={{ gridTemplateColumns: "1fr" }}>
          {/* Myths */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[3px] uppercase bg-[rgba(255,80,80,0.08)] text-[rgba(255,80,80,0.8)] border border-[rgba(255,80,80,0.2)] px-4 py-2 rounded-lg mb-7">
              MITO
            </div>
            <ul className="flex flex-col gap-4 opacity-50">
              {myths.map((m, i) => (
                <li key={i} className="flex items-center gap-4 text-[18px] font-semibold line-through text-[rgba(232,240,255,0.6)]">
                  <span className="text-[rgba(255,80,80,0.5)] text-[20px] font-extrabold flex-shrink-0">✗</span>
                  {m}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Reality */}
          <FadeIn delay={0.2} className="relative">
            <div className="absolute inset-[-60px] bg-[rgba(0,255,229,0.05)] blur-[60px] rounded-full pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[3px] uppercase bg-[rgba(0,255,229,0.08)] text-[#00FFE5] border border-[rgba(0,255,229,0.2)] px-4 py-2 rounded-lg mb-7">
                ✦ REALIDADE
              </div>
              <h3 className="font-bebas leading-[0.95] tracking-wide mb-5" style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}>
                A IA faz o trabalho pesado. O segredo é saber dar a ordem certa.
              </h3>
              <p className="font-bold text-[rgba(232,240,255,0.8)] leading-snug" style={{ fontSize: "clamp(18px, 2.5vw, 22px)" }}>
                E é exatamente isso que o C.I.A entrega pra <span className="text-[#00FFE5]">você.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Opportunity ──────────────────────────────────────────────────────────────
export function Opportunity() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">O ponto que vira o jogo</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            Duas formas de <span className="grad-gold">lucrar com o C.I.A</span>
          </h2>
        </FadeIn>

        <div className="grid gap-6 mb-16" style={{ gridTemplateColumns: "1fr" }}>
          {/* Card 1 */}
          <FadeIn>
            <div className="p-12 rounded-[32px] bg-[rgba(12,20,40,0.3)] border border-[rgba(232,240,255,0.05)]">
              <span className="inline-block font-mono text-[9px] tracking-[3px] uppercase bg-[rgba(0,255,229,0.08)] text-[#00FFE5] border border-[rgba(0,255,229,0.15)] px-4 py-1.5 rounded-md mb-6">
                FORMA 1
              </span>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(0,255,229,0.1)] text-[#00FFE5] flex items-center justify-center text-[24px]">🏢</div>
                <h3 className="font-bebas text-[40px] tracking-wide">Para o seu negócio</h3>
              </div>
              <p className="text-[rgba(232,240,255,0.6)] text-[18px] leading-relaxed mb-8 font-normal">Crie conteúdo todo dia, sem travar, sem contratar agência, sem perder tempo.</p>
              <ul className="flex flex-col gap-3">
                {["Output 5x maior com o mesmo time", "Consistência inquebrável em todas as redes", "Qualidade de agência premium a custo zero"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-semibold text-[rgba(232,240,255,0.8)]">
                    <span className="text-[#00FFE5] font-extrabold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.15}>
            <div className="relative p-12 rounded-[32px] border border-[rgba(255,184,48,0.3)] bg-gradient-to-br from-[rgba(12,20,40,0.8)] to-[rgba(5,8,17,0.9)]" style={{ boxShadow: "0 0 80px rgba(255,184,48,0.07)" }}>
              <span className="absolute -top-[14px] right-8 bg-[#FFB830] text-[#050811] font-extrabold text-[10px] tracking-[2px] uppercase px-4 py-1.5 rounded-full">
                MAIS POPULAR
              </span>
              <span className="inline-block font-mono text-[9px] tracking-[3px] uppercase bg-[rgba(255,184,48,0.08)] text-[#FFB830] border border-[rgba(255,184,48,0.15)] px-4 py-1.5 rounded-md mb-6">
                FORMA 2
              </span>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(255,184,48,0.1)] text-[#FFB830] flex items-center justify-center text-[24px]">📈</div>
                <h3 className="font-bebas text-[40px] tracking-wide">Para ganhar dinheiro</h3>
              </div>
              <p className="text-[rgba(232,240,255,0.75)] text-[18px] leading-relaxed mb-6 font-normal">Atenda 5, 10, 15 clientes. Entregue conteúdo profissional. Cobre mensalidade recorrente.</p>
              <div className="bg-[rgba(5,8,17,0.6)] rounded-2xl border border-[rgba(232,240,255,0.05)] p-7 mb-6">
                {[
                  { label: "5 clientes × R$300", val: "= R$1.500/mês", highlight: false },
                  { label: "10 clientes × R$300", val: "= R$3.000/mês", highlight: false },
                  { label: "30 clientes × R$300", val: "= R$9.000/mês", highlight: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between items-center py-3 border-b border-[rgba(232,240,255,0.04)] last:border-0 font-mono ${row.highlight ? "text-[#FFB830]" : ""}`}>
                    <span className={`text-[12px] ${row.highlight ? "text-[#FFB830]" : "text-[rgba(232,240,255,0.4)]"}`}>{row.label}</span>
                    <span className={`font-bold ${row.highlight ? "text-[18px]" : "text-[13px]"}`}>{row.val}</span>
                  </div>
                ))}
              </div>
              <p className="font-bebas text-[22px] tracking-wide text-[#FFB830] text-center">&quot;Sem equipe. Sem escritório. Sem ferramentas pagas.&quot;</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="max-w-[700px] mx-auto">
          <TestimonialCard color="gold">
            <p className="text-[rgba(232,240,255,0.9)] italic font-medium leading-relaxed mb-6" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Eu, que mal sei fazer captura de tela. Na semana que postei aquele Reels, o restaurante ficou lotado na quinta. O vídeo chegou a 4.200 pessoas — número que eu nunca vi na vida.
            </p>
            <p className="font-extrabold text-[17px]">João Batista Ferreira</p>
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#FFB830]">Proprietário de restaurante · 54 anos</p>
          </TestimonialCard>
        </FadeIn>
      </div>
    </section>
  );
}

// ── FreeAI ──────────────────────────────────────────────────────────────────
const tools = [
  { letter: "C", bg: "#10a37f", name: "ChatGPT", label: "Gratuito" },
  { letter: "G", bg: "#4285f4", name: "Gemini", label: "Gratuito" },
  { letter: "G", bg: "#fff", name: "Grok", label: "Gratuito", dark: true },
];

export function FreeAI() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Sem custo adicional</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            Tudo isso funciona com IA <span className="grad-cyan">100% gratuita</span>
          </h2>
        </FadeIn>

        <FadeIn className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
          {tools.map((t, i) => (
            <div key={i} className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-[rgba(12,20,40,0.4)] border border-[rgba(232,240,255,0.06)] transition-all hover:border-[rgba(232,240,255,0.15)] hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[18px]" style={{ background: t.bg, color: t.dark ? "#000" : "#fff" }}>
                {t.letter}
              </div>
              <div className="text-left">
                <p className="font-bold text-[17px]">{t.name}</p>
                <span className="font-mono text-[9px] tracking-[2px] uppercase text-[rgba(232,240,255,0.3)]">{t.label}</span>
              </div>
            </div>
          ))}
        </FadeIn>

        <div className="w-px h-20 bg-gradient-to-b from-[rgba(0,255,229,0.5)] to-transparent mx-auto mb-10" />

        <FadeIn>
          <p className="font-bebas text-[rgba(232,240,255,0.6)] tracking-wide mb-2" style={{ fontSize: "clamp(22px, 3.5vw, 42px)" }}>
            O segredo não é a ferramenta
          </p>
          <p
            className="font-bebas leading-none tracking-wide mb-4"
            style={{
              fontSize: "clamp(64px, 12vw, 160px)",
              background: "linear-gradient(135deg, #00FFE5, #B44FFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            É o sistema
          </p>
          <p className="font-bebas text-[rgba(232,240,255,0.9)] tracking-wide mb-12" style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}>
            que você vai ter nas mãos
          </p>
          <CTAButton>GARANTIR MEU ACESSO AGORA</CTAButton>
        </FadeIn>
      </div>
    </section>
  );
}
