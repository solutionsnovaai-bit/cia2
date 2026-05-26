import FadeIn from "@/components/ui/FadeIn";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Guarantee() {
  return (
    <section className="py-24 px-6 text-center" id="garantia">
      <div className="max-w-[800px] mx-auto">
        <FadeIn>
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-[-20px] bg-[rgba(0,255,229,0.08)] blur-[30px] rounded-full" />
            <span className="text-[52px] relative z-10 block">🛡</span>
          </div>

          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Garantia Incondicional</span>
          <h2
            className="font-bebas text-[#FFB830] tracking-wide leading-tight mb-5"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            7 dias de Risco Zero
          </h2>
          <p className="text-[rgba(232,240,255,0.6)] max-w-[580px] mx-auto leading-relaxed italic font-normal mb-8" style={{ fontSize: "clamp(17px, 2.2vw, 23px)" }}>
            &quot;Acesse tudo. Use os agentes. Entre na comunidade. Teste no seu nicho ou no de um cliente.&quot;
          </p>
          <h3
            className="font-bebas text-[#FFB830] leading-snug tracking-wide mb-10"
            style={{ fontSize: "clamp(26px, 4.5vw, 50px)" }}
          >
            Se em 7 dias você não ver valor — devolvemos 100% do seu dinheiro.
          </h3>
        </FadeIn>

        <FadeIn className="flex flex-wrap justify-center gap-3 mb-8">
          {["Sem formulário", "Sem explicação", "Sem burocracia"].map((tag) => (
            <div key={tag} className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[rgba(12,20,40,0.5)] border border-[rgba(0,255,229,0.15)] font-bold text-[14px]">
              <span className="text-[#00FFE5]">✓</span> {tag}
            </div>
          ))}
        </FadeIn>

        <FadeIn>
          <p className="text-[rgba(232,240,255,0.3)] italic font-medium mb-16">O risco é todo nosso.</p>
        </FadeIn>

        <FadeIn className="max-w-[700px] mx-auto">
          <TestimonialCard color="cyan">
            <p className="text-[rgba(232,240,255,0.9)] italic font-medium leading-relaxed mb-6" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Quando comprei o C.I.A, eu tinha R$340 na conta. A garantia de 7 dias me deu coragem. Não precisei usar. Em três semanas, R$1.000 com dois clientes. Hoje tenho 7 clientes fixos.
            </p>
            <p className="font-extrabold text-[17px]">Rafael Souza</p>
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#00FFE5]">R$297 investidos → 7 clientes fixos</p>
          </TestimonialCard>
        </FadeIn>
      </div>
    </section>
  );
}
