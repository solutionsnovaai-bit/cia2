import { ReactNode } from "react";

type Color = "cyan" | "purple" | "gold";

const colorMap: Record<Color, { border: string; shadow: string; highlight: string }> = {
  cyan: { border: "rgba(0,255,229,0.2)", shadow: "rgba(0,255,229,0.06)", highlight: "#00FFE5" },
  purple: { border: "rgba(180,79,255,0.2)", shadow: "rgba(180,79,255,0.06)", highlight: "#B44FFF" },
  gold: { border: "rgba(255,184,48,0.2)", shadow: "rgba(255,184,48,0.06)", highlight: "#FFB830" },
};

export default function TestimonialCard({ children, color = "cyan" }: { children: ReactNode; color?: Color }) {
  const c = colorMap[color];
  return (
    <div
      className="p-10 rounded-[28px] bg-[rgba(12,20,40,0.3)] backdrop-blur-sm relative"
      style={{ border: `1px solid ${c.border}`, boxShadow: `0 0 30px ${c.shadow}` }}
    >
      <span className="text-4xl opacity-30 mb-5 block">"</span>
      {children}
    </div>
  );
}
