import FadeIn from "@/components/ui/FadeIn";

const cards = [
  { type: "false", text: "Não são prompts soltos que você copia e cola" },
  { type: "true", text: "São funcionários de IA com personalidade, estratégia e linguagem própria" },
  { type: "true", text: "Como uma equipe de 45 especialistas — sem salário, sem reclamação, sem feriado" },
  { type: "false", text: "Não é apenas um gerador de texto genérico" },
];

export default function Product() {
  return (
    <section className="py-24 px-6 relative overflow-hidden text-center">
      <div
        className="absolute font-bebas text-[rgba(232,240,255,0.015)] select-none pointer-events-none"
        style={{ fontSize: "40vw", top: "50%", left: "50%", transform: "translate(-50%,-50%)", lineHeight: 1, letterSpacing: "-10px" }}
      >
        45
      </div>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <FadeIn>
          <span className="font-mono text-[10px] tracking-[5px] uppercase text-[#00FFE5] opacity-80 mb-4 block">Conheça o sistema</span>
          <h2 className="font-bebas grad-cyan" style={{ fontSize: "clamp(80px, 14vw, 160px)", lineHeight: 0.9 }}>C.I.A</h2>
          <p className="font-bebas tracking-[3px] opacity-60 mt-2" style={{ fontSize: "clamp(20px, 3.5vw, 38px)" }}>
            Conteúdo Infinito com IA
          </p>
          <p className="text-[rgba(232,240,255,0.6)] max-w-[640px] mx-auto mt-4 leading-relaxed font-normal" style={{ fontSize: "clamp(15px, 1.8vw, 19px)" }}>
            Um sistema de 45 funcionários de IA, cada um especializado em uma função específica de conteúdo, treinado na linguagem e nas dores de um nicho específico.
          </p>
        </FadeIn>

        <div className="grid gap-4 mt-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className={`p-9 rounded-3xl min-h-[200px] flex flex-col justify-between text-left transition-all duration-400 ${
                  c.type === "true"
                    ? "bg-[rgba(12,20,40,0.6)] border border-[rgba(0,255,229,0.2)] hover:border-[rgba(0,255,229,0.5)] hover:-translate-y-1.5 hover:shadow-[0_0_60px_rgba(0,255,229,0.08)]"
                    : "bg-[rgba(5,8,17,0.5)] border border-[rgba(232,240,255,0.06)] opacity-60"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 text-lg font-bold ${
                    c.type === "true"
                      ? "bg-[rgba(0,255,229,0.1)] text-[#00FFE5]"
                      : "bg-[rgba(232,240,255,0.04)] text-[rgba(255,80,80,0.5)]"
                  }`}
                >
                  {c.type === "true" ? "✓" : "✗"}
                </div>
                <p className={`text-[17px] font-bold leading-snug ${c.type === "true" ? "text-[#E8F0FF]" : "text-[rgba(232,240,255,0.35)]"}`}>
                  {c.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
