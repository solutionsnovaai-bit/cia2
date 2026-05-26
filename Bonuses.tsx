import FadeIn from "@/components/ui/FadeIn";
import TestimonialCard from "@/components/ui/TestimonialCard";

const bonuses = [
  { num: "BÔNUS 1", icon: "💡", title: "Banco de 750 Ideias de Conteúdo", desc: "50 ideias prontas para cada um dos 15 nichos, organizadas por formato. Chega de tela em branco.", price: "R$ 197" },
  { num: "BÔNUS 2", icon: "🎨", title: "Guia de Identidade Visual por Nicho", desc: "Paleta de cores com hex para Canva, fontes gratuitas e lógica visual para cada segmento. Você chega no cliente com linguagem que parece agência.", price: "R$ 147" },
  { num: "BÔNUS 3", icon: "💬", title: "Script de Prospecção de Clientes", desc: "Roteiro completo: 3 mensagens para WhatsApp, abordagem no Instagram, roteiro presencial de 2 minutos e as 4 objeções respondidas.", price: "R$ 197" },
  { num: "BÔNUS 4", icon: "📅", title: "Calendário Editorial de 30 Dias", desc: "Plano completo para 10 nichos. Cada dia tem formato fixo e tema sugerido. Sente uma vez, produz tudo, agenda.", price: "R$ 97" },
  { num: "BÔNUS 5", icon: "👥", title: "Comunidade Exclusiva C.I.A", desc: "Troca de experiências reais, resultados dos membros, suporte direto e atualizações em primeira mão. Como uma mentoria rodando 24h.", price: "R$ 197" },
  { num: "BÔNUS 6", icon: "🔄", title: "Atualizações Vitalícias do C.I.A", desc: "A IA muda todo dia. O C.I.A também. Novos agentes adicionados conforme a comunidade sugere. Você nunca ficará desatualizado.", price: "Inestimável" },
];

const priceRows = [
  { label: "Sistema C.I.A — 45 agentes", val: "R$ 497" },
  { label: "Banco de 750 Ideias", val: "R$ 197" },
  { label: "Guia de Identidade Visual", val: "R$ 147" },
  { label: "Script de Prospecção", val: "R$ 197" },
  { label: "Calendário Editorial", val: "R$ 97" },
  { label: "Comunidade Exclusiva", val: "R$ 197" },
  { label: "Atualizações Vitalícias", val: "Inestimável" },
];

export default function Bonuses() {
  return (
    <section className="py-24 px-6" id="bonus">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center">
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Tudo que você recebe</span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            O pacote completo <span className="grad-gold">C.I.A</span>
          </h2>
        </FadeIn>

        <div className="grid gap-4 mt-14 mb-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {bonuses.map((b, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.1}>
              <div className="p-9 rounded-3xl bg-[rgba(12,20,40,0.3)] border-l-[3px] border-[rgba(255,184,48,0.4)] transition-all duration-300 hover:border-[#FFB830] hover:bg-[rgba(12,20,40,0.6)] h-full">
                <span className="inline-block font-mono text-[10px] tracking-[3px] uppercase text-[#FFB830] bg-[rgba(255,184,48,0.08)] border border-[rgba(255,184,48,0.15)] px-3 py-1 rounded-md mb-5">
                  {b.num}
                </span>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[24px] text-[#FFB830]">{b.icon}</span>
                  <h3 className="font-syne font-extrabold text-[19px] leading-snug">{b.title}</h3>
                </div>
                <p className="text-[rgba(232,240,255,0.5)] text-[15px] leading-relaxed font-normal mb-4">{b.desc}</p>
                <div className="flex items-center gap-3 font-mono text-[12px]">
                  <span className="text-[rgba(232,240,255,0.25)] line-through">{b.price}</span>
                  <span className="text-[#FFB830] font-bold">Incluso</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Price table */}
        <FadeIn>
          <div className="max-w-[680px] mx-auto p-12 rounded-[40px] bg-[rgba(12,20,40,0.4)] border border-[rgba(232,240,255,0.06)] relative overflow-hidden top-gradient-line">
            {priceRows.map((row) => (
              <div key={row.label} className="flex justify-between py-3 border-b border-[rgba(232,240,255,0.04)] last:border-0 text-[15px] font-medium text-[rgba(232,240,255,0.5)]">
                <span>{row.label}</span>
                <span className="font-mono text-[13px]">{row.val}</span>
              </div>
            ))}
            <p className="text-right text-[rgba(232,240,255,0.3)] text-sm mt-5 mb-7">Valor total real: R$ 1.332</p>

            <div className="h-[2px] bg-gradient-to-r from-[#00FFE5] via-[#B44FFF] to-[#FFB830] rounded-full mb-8" />

            <div className="text-center flex flex-col items-center gap-3">
              <span className="font-mono text-[10px] tracking-[4px] uppercase text-[rgba(232,240,255,0.4)]">Seu investimento hoje:</span>
              <span
                className="font-bebas tracking-wide leading-none"
                style={{
                  fontSize: "clamp(48px, 8vw, 88px)",
                  background: "linear-gradient(135deg, #00FFE5, #B44FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                12× R$ 20,37
              </span>
              <span className="text-[rgba(232,240,255,0.4)] italic">ou R$ 197 à vista</span>
              <span className="mt-4 bg-[rgba(255,184,48,0.08)] border border-[rgba(255,184,48,0.2)] text-[#FFB830] font-bold text-[13px] tracking-wide px-6 py-3 rounded-full">
                Você economiza R$ 1.135
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="max-w-[700px] mx-auto mt-16">
          <TestimonialCard color="purple">
            <p className="text-[rgba(232,240,255,0.9)] italic font-medium leading-relaxed mb-6" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Em dois meses, consegui três consultas marcadas direto pelo Instagram — algo que nunca tinha acontecido em seis anos de perfil. O C.I.A foi a primeira ferramenta feita pensando em mim.
            </p>
            <p className="font-extrabold text-[17px]">Dra. Fernanda Lins</p>
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#B44FFF]">Advogada tributarista · Recife PE</p>
          </TestimonialCard>
        </FadeIn>
      </div>
    </section>
  );
}
