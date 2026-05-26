import FadeIn from "@/components/ui/FadeIn";

const steps = [
  { num: "01", icon: "🗺", title: "Escolha o nicho", desc: "Advogado, dentista, restaurante, personal trainer..." },
  { num: "02", icon: "📐", title: "Escolha o formato", desc: "Reels, Carrossel, Infográfico, Stories..." },
  { num: "03", icon: "💡", title: "Dê uma ideia simples", desc: "Pode ser uma frase, um tema, uma dúvida do cliente" },
  { num: "04", icon: "🤖", title: "O agente cria tudo", desc: "Conteúdo completo, estratégico, na linguagem do nicho" },
  { num: "05", icon: "🚀", title: "Poste ou venda como serviço", desc: "Para o seu negócio ou para clientes pagantes" },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Simples assim</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            Como funciona em <span className="grad-cyan">5 passos</span>
          </h2>
        </FadeIn>

        {/* Steps connector line (desktop only) */}
        <div className="relative">
          <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(0,255,229,0.15)] to-transparent" />

          <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center gap-5">
                <div className="relative">
                  <div className="w-[72px] h-[72px] rounded-[20px] bg-[rgba(12,20,40,0.8)] border border-[rgba(232,240,255,0.08)] flex items-center justify-center text-[24px] text-[#00FFE5] relative z-10 transition-all duration-300 hover:border-[rgba(0,255,229,0.4)] hover:shadow-[0_0_30px_rgba(0,255,229,0.15)]">
                    {s.icon}
                  </div>
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-bebas text-[90px] leading-none text-[rgba(0,255,229,0.05)] pointer-events-none">
                    {s.num}
                  </span>
                </div>
                <div>
                  <p className="font-syne font-extrabold text-[18px] mb-2">{s.title}</p>
                  <p className="text-[rgba(232,240,255,0.45)] text-[14px] leading-relaxed font-normal">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="text-center mt-20">
          <p className="font-bebas text-[rgba(232,240,255,0.9)] tracking-wide" style={{ fontSize: "clamp(26px, 4vw, 52px)" }}>
            &quot;Se você sabe digitar, você sabe usar o C.I.A.&quot;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
