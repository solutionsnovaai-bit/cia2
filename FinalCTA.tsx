"use client";

import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden py-28 px-6" id="comprar">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,255,229,0.1) 0%, rgba(180,79,255,0.07) 40%, transparent 70%)" }}
      />

      <div className="max-w-[900px] mx-auto relative z-10">
        <FadeIn>
          <p className="font-mono text-[11px] tracking-[5px] uppercase text-[rgba(232,240,255,0.3)] mb-5">A sua decisão</p>
          <h2 className="font-bebas leading-[0.9] mb-8" style={{ fontSize: "clamp(52px, 9vw, 110px)" }}>
            Você tem duas<br />escolhas agora
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00FFE5] to-[#B44FFF] mx-auto rounded-full mb-14" />
        </FadeIn>

        {/* Choices */}
        <FadeIn className="mb-16">
        <div className="grid gap-5" style={{ gridTemplateColumns: "1fr" }}>
          <div className="p-9 rounded-[28px] bg-[rgba(12,20,40,0.3)] border border-[rgba(232,240,255,0.05)] opacity-50 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[rgba(255,80,80,0.3)] text-[rgba(255,80,80,0.6)] flex items-center justify-center text-[22px]">✗</div>
            <p className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(232,240,255,0.35)]">CONTINUAR ASSIM</p>
            <p className="text-[rgba(232,240,255,0.6)] leading-relaxed font-normal text-[15px]">Fechar essa página, continuar travando no &quot;o que postar hoje&quot; e ver seus concorrentes crescendo enquanto você fica parado.</p>
          </div>
          <div className="relative p-9 rounded-[28px] bg-[rgba(12,20,40,0.5)] border-2 border-[#00FFE5] shadow-[0_0_60px_rgba(0,255,229,0.1)] flex flex-col items-center gap-4">
            <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-[#00FFE5] text-[#050811] font-extrabold text-[10px] tracking-[2px] uppercase px-5 py-1.5 rounded-full whitespace-nowrap">
              RECOMENDADO
            </span>
            <div className="w-14 h-14 rounded-full bg-[rgba(0,255,229,0.1)] border border-[rgba(0,255,229,0.3)] text-[#00FFE5] flex items-center justify-center text-[22px]">✓</div>
            <p className="font-mono text-[10px] tracking-[3px] uppercase text-[#00FFE5]">MUDAR AGORA</p>
            <p className="text-[rgba(232,240,255,0.8)] font-medium leading-relaxed text-[15px]">Investir 12× R$ 20,37 — menos que um café com amigos — e ter nas mãos um sistema que cria conteúdo profissional para qualquer nicho, qualquer dia.</p>
          </div>
        </div>
        </FadeIn>

        {/* CTA Box */}
        <FadeIn>
          <div className="p-12 rounded-[32px] bg-[rgba(12,20,40,0.6)] border border-[rgba(0,255,229,0.2)] shadow-[0_0_80px_rgba(0,255,229,0.1)] backdrop-blur-xl">
            <span className="font-mono text-[10px] tracking-[4px] uppercase text-[rgba(232,240,255,0.4)] mb-3 block">Seu investimento hoje:</span>
            <span
              className="font-bebas leading-none tracking-wide block mb-2"
              style={{
                fontSize: "clamp(52px, 8vw, 100px)",
                background: "linear-gradient(135deg, #00FFE5, #B44FFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              12× R$ 20,37
            </span>
            <span className="text-[rgba(232,240,255,0.5)] italic mb-10 block text-[17px]">ou R$ 197,00 à vista</span>

            <motion.a
              href="https://pay.kiwify.com.br/lRRpH6F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full font-syne font-extrabold text-[#050811] uppercase tracking-[2px] py-6 px-8 rounded-[20px] transition-all"
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                background: "linear-gradient(135deg, #00FFE5, #00CCBB)",
                boxShadow: "0 0 40px rgba(0,255,229,0.3), 0 20px 60px rgba(0,0,0,0.4)",
                animation: "pulseGlow 3s ease-in-out infinite",
              }}
              whileHover={{ y: -4, boxShadow: "0 0 70px rgba(0,255,229,0.5), 0 30px 80px rgba(0,0,0,0.5)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L4.09 12.26c-.4.45-.6.68-.6.93s.2.48.6.93L13 24V14h8.5c.5 0 .5-.5 0-1L13 2z" />
              </svg>
              QUERO MEU TIME DE FUNCIONÁRIOS DE IA AGORA MESMO!
            </motion.a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-7">
              {[
                { icon: "🔒", label: "Pagamento seguro" },
                { icon: "🛡", label: "Garantia 7 dias" },
                { icon: "⚡", label: "Acesso imediato" },
                { icon: "✦", label: "IA 100% gratuita" },
              ].map((m) => (
                <div key={m.label} className="flex flex-col items-center gap-1.5">
                  <span className="text-[18px] text-[#00FFE5]">{m.icon}</span>
                  <span className="font-mono text-[9px] tracking-[2px] uppercase text-[rgba(232,240,255,0.35)] text-center leading-snug">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[rgba(232,240,255,0.25)] text-[12px] font-mono mt-5">
            Acesso imediato · Todos os bônus incluídos · Garantia incondicional de 7 dias
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
