import FadeIn from "@/components/ui/FadeIn";
import CTAButton from "@/components/ui/CTAButton";

const brains = [
  { icon: "🧠", title: "Cérebro Estrategista", desc: "Define o objetivo do conteúdo: engajamento, autoridade ou venda.", color: "cyan" as const },
  { icon: "✍️", title: "Cérebro Copywriter", desc: "Escreve com gatilhos emocionais, CTA e linguagem do nicho.", color: "purple" as const },
  { icon: "📡", title: "Cérebro de Distribuição", desc: "Adapta o conteúdo para Instagram, TikTok, LinkedIn, Stories, Reels ou anúncio.", color: "gold" as const },
];

const colorMap = {
  cyan: { icon: "bg-[rgba(0,255,229,0.1)] text-[#00FFE5]", hover: "hover:border-[rgba(0,255,229,0.3)] hover:shadow-[0_0_50px_rgba(0,255,229,0.1)]" },
  purple: { icon: "bg-[rgba(180,79,255,0.1)] text-[#B44FFF]", hover: "hover:border-[rgba(180,79,255,0.3)] hover:shadow-[0_0_50px_rgba(180,79,255,0.1)]" },
  gold: { icon: "bg-[rgba(255,184,48,0.1)] text-[#FFB830]", hover: "hover:border-[rgba(255,184,48,0.3)] hover:shadow-[0_0_50px_rgba(255,184,48,0.1)]" },
};

export default function Mechanism() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, rgba(180,79,255,0.04) 0%, transparent 50%, rgba(0,255,229,0.04) 100%)" }}>
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Por que é diferente de tudo</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            O Método dos <span className="grad-purple">3 Cérebros</span>
          </h2>
          <p className="text-[rgba(232,240,255,0.5)] max-w-[680px] mx-auto mt-5 leading-relaxed font-normal" style={{ fontSize: "clamp(15px, 1.8vw, 19px)" }}>
            O mercado está cheio de prompts genéricos. Um agente que tenta criar Carrossel, Reels e Stories ao mesmo tempo entrega resultado mediano nos três. O C.I.A foi construído diferente.
          </p>
        </FadeIn>

        <div className="grid gap-6 mt-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {brains.map((b, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className={`p-10 rounded-[28px] bg-[rgba(12,20,40,0.3)] border border-[rgba(232,240,255,0.05)] transition-all duration-400 hover:-translate-y-2 ${colorMap[b.color].hover}`}>
                <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center text-[28px] mb-7 ${colorMap[b.color].icon}`}>
                  {b.icon}
                </div>
                <p className="font-bebas text-[32px] tracking-wide mb-3">{b.title}</p>
                <p className="text-[rgba(232,240,255,0.5)] leading-relaxed font-normal">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quote block */}
        <FadeIn className="mt-14">
          <div className="text-center p-16 rounded-[32px] bg-[rgba(12,20,40,0.3)] border border-[rgba(232,240,255,0.06)] relative overflow-hidden top-gradient-line">
            <p className="font-syne font-bold max-w-[760px] mx-auto mb-8 leading-snug" style={{ fontSize: "clamp(20px, 3vw, 34px)" }}>
              &quot;Você entrega uma ideia de 10 segundos. Recebe um conteúdo completo, estratégico e pronto —{" "}
              <span className="text-[#00FFE5] underline decoration-[rgba(0,255,229,0.3)]">em menos de 3 minutos.</span>&quot;
            </p>
            <CTAButton>QUERO ESSA VELOCIDADE NO MEU NEGÓCIO</CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
