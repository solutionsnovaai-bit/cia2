"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";

const faqs = [
  { q: "Eu não sei criar conteúdo", a: "O agente cria. Você só aprova. O C.I.A foi desenhado exatamente para quem não tem veia criativa mas precisa de resultados profissionais." },
  { q: "Eu não tenho experiência com IA", a: "Se você sabe digitar, você sabe usar o C.I.A. A interface é intuitiva e os agentes são treinados para entender comandos simples em português." },
  { q: "Eu nunca tive clientes", a: "Com 15 nichos mapeados, basta chegar em um empresário local e mostrar o que você faz. A qualidade do que você vai entregar vende por si só." },
  { q: "Já tentei e não funcionou", a: "Você não tinha o sistema certo. Prompt solto não é sistema. C.I.A é um ecossistema de 45 agentes que trabalham em conjunto." },
  { q: "E se não funcionar pra mim?", a: "Você tem 7 dias de garantia total. Zero risco. Devolvemos 100% sem perguntas. O risco é todo nosso." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <FadeIn className="text-center">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Sem desculpas</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            Toda objeção tem <span className="grad-purple">uma resposta</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-3 mt-14">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className={`rounded-2xl border overflow-hidden transition-all duration-400 ${
                  open === i
                    ? "border-[rgba(0,255,229,0.25)] bg-[rgba(12,20,40,0.4)] shadow-[0_0_40px_rgba(0,255,229,0.05)]"
                    : "border-[rgba(232,240,255,0.06)] bg-[rgba(5,8,17,0.5)]"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center gap-5 px-9 py-7 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-bold transition-colors duration-300 ${open === i ? "text-[#00FFE5]" : "text-[#E8F0FF]"}`} style={{ fontSize: "clamp(17px, 2.2vw, 22px)" }}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-[18px] border transition-all duration-400 ${
                    open === i
                      ? "rotate-45 bg-[#00FFE5] text-[#050811] border-[#00FFE5]"
                      : "border-[rgba(232,240,255,0.1)] text-[rgba(232,240,255,0.5)]"
                  }`}>
                    +
                  </div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-9 pb-7 border-t border-[rgba(232,240,255,0.05)] pt-5">
                        <p className="text-[rgba(232,240,255,0.55)] text-[17px] leading-relaxed font-normal">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16">
          <TestimonialCard color="purple">
            <p className="text-[rgba(232,240,255,0.9)] italic font-medium leading-relaxed mb-6" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Eu achava que IA não conseguia falar com a delicadeza que meu público exige. O agente de Stories me provou o contrário. Ele cria sequências que geram desejo genuíno, sem parecer robô.
            </p>
            <p className="font-extrabold text-[17px]">Mariana Costa</p>
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#B44FFF]">Especialista em Estética</p>
          </TestimonialCard>
          <div className="flex justify-center mt-6">
            <CTAButton color="purple">QUERO RESULTADOS COMO ESTES AGORA!</CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
