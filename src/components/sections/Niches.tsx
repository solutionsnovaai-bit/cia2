import FadeIn from "@/components/ui/FadeIn";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";

const niches = [
  { icon: "⚖️", name: "Advogados" },
  { icon: "🦷", name: "Dentistas" },
  { icon: "🏠", name: "Corretores de Imóveis" },
  { icon: "🏋️", name: "Personal Trainers" },
  { icon: "✨", name: "Clínicas de Estética" },
  { icon: "📊", name: "Contadores" },
  { icon: "🧠", name: "Psicólogos" },
  { icon: "🍽️", name: "Restaurantes e Delivery" },
  { icon: "🧭", name: "Arquitetos" },
  { icon: "🔧", name: "Empresas de Reforma" },
  { icon: "🍎", name: "Nutricionistas" },
  { icon: "✂️", name: "Barbearias" },
  { icon: "🩺", name: "Médicos" },
  { icon: "📈", name: "Gestores de Tráfego" },
  { icon: "🎓", name: "Infoprodutores e Coaches" },
];

export default function Niches() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Para quem é o C.I.A</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(40px, 6.5vw, 84px)" }}>
            15 nichos × <span className="grad-gold">3 formatos cada</span> = 45 agentes
          </h2>
          <p className="text-[rgba(232,240,255,0.5)] max-w-[580px] mx-auto mt-4 font-normal" style={{ fontSize: "clamp(15px, 1.8vw, 19px)" }}>
            Cada funcionário de IA fala a língua do nicho e domina o formato. Especialização total — qualidade máxima.
          </p>
        </FadeIn>

        <div
          className="grid gap-3 mb-16"
          style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          {niches.map((n, i) => (
            <FadeIn key={i} delay={(i % 5) * 0.08}>
              <div className="group p-6 rounded-2xl bg-[rgba(12,20,40,0.3)] border border-[rgba(232,240,255,0.05)] text-center transition-all duration-400 hover:border-[rgba(0,255,229,0.3)] hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,255,229,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-[rgba(12,20,40,0.8)] border border-[rgba(232,240,255,0.08)] flex items-center justify-center mx-auto mb-4 text-[22px] transition-all group-hover:text-[#00FFE5] group-hover:border-[rgba(0,255,229,0.3)] relative z-10">
                  {n.icon}
                </div>
                <p className="font-bold text-[14px] leading-snug mb-2 relative z-10">{n.name}</p>
                <span className="font-mono text-[9px] tracking-[2px] uppercase text-[rgba(232,240,255,0.25)] bg-[rgba(232,240,255,0.04)] px-2 py-1 rounded relative z-10">
                  3 agentes
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Responsive grid override via style tag trick */}
        <style>{`
          @media (min-width: 640px) { .niches-auto-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (min-width: 960px) { .niches-auto-grid { grid-template-columns: repeat(5, 1fr) !important; } }
        `}</style>

        <FadeIn className="max-w-[700px] mx-auto">
          <TestimonialCard color="gold">
            <p className="text-[rgba(232,240,255,0.9)] italic font-medium leading-relaxed mb-6" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Primeiro cliente: R$350 por mês. Hoje tenho 9 clientes. R$3.200 por mês. Ainda moro no interior da Bahia, mas agora por escolha.
            </p>
            <p className="font-extrabold text-[17px]">Lucas Mendes</p>
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#FFB830]">De R$900/mês CLT → R$3.200/mês autônomo</p>
          </TestimonialCard>
          <div className="flex justify-center mt-6">
            <CTAButton color="gold">QUERO RESULTADOS COMO ESTES AGORA!</CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
