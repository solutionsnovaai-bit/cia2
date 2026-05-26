import FadeIn from "@/components/ui/FadeIn";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";

const pains = [
  { icon: "⏱", text: "Você abre o Instagram e fica parado, sem saber o que postar" },
  { icon: "📉", text: "Passa 2 horas criando um conteúdo que recebe 12 curtidas — sendo 8 de amigos" },
  { icon: "📅", text: "Sabe que precisa de consistência, mas a vida real não deixa" },
  { icon: "👁", text: "Vê concorrentes menores crescendo todo dia e não entende o porquê" },
  { icon: "💸", text: "Quer ganhar dinheiro online, mas não tem produto, audiência ou dinheiro para anunciar" },
];

export default function Pain() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#050811] to-[#0A0E1A]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">
            Você se reconhece aqui?
          </span>
          <h2 className="font-bebas leading-[0.9]" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
            A maioria das pessoas<br />
            <span className="grad-purple">trava exatamente assim</span>
          </h2>
        </FadeIn>

        <div className="grid gap-4 mt-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
          {pains.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex items-start gap-5 p-8 rounded-2xl bg-[rgba(12,20,40,0.4)] border-l-[3px] border-[rgba(180,79,255,0.4)] transition-all duration-300 hover:border-[#B44FFF] hover:bg-[rgba(12,20,40,0.7)] hover:translate-x-1">
                <span className="text-[#B44FFF] text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                <p className="text-[rgba(232,240,255,0.8)] font-medium leading-relaxed text-[17px]">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-20">
          <p className="font-bebas leading-tight text-[rgba(232,240,255,0.95)]" style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}>
            E ninguém te ensinou que existia<br />um caminho diferente.
          </p>
        </FadeIn>

        <FadeIn className="max-w-[680px] mx-auto mt-14">
          <TestimonialCard color="purple">
            <p className="text-[rgba(232,240,255,0.9)] italic font-medium leading-relaxed mb-6" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Em 20 minutos criei 8 posts para o mês inteiro. No mês seguinte, três pacientes novos disseram que me encontraram pelo Instagram. Nunca tinha acontecido isso antes.
            </p>
            <p className="font-extrabold text-[17px]">Dra. Camila Rocha</p>
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#B44FFF]">Dentista · 8 posts em 20 minutos</p>
          </TestimonialCard>
          <div className="flex justify-center mt-6">
            <CTAButton color="purple">QUERO RESULTADOS COMO ESTES AGORA!</CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
