"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Color = "cyan" | "purple" | "gold";

const bgMap: Record<Color, string> = {
  cyan: "#00FFE5",
  purple: "#B44FFF",
  gold: "#FFB830",
};

const shadowMap: Record<Color, string> = {
  cyan: "0 0 25px rgba(0,255,229,0.4)",
  purple: "0 0 25px rgba(180,79,255,0.4)",
  gold: "0 0 25px rgba(255,184,48,0.4)",
};

interface CTAButtonProps {
  children: ReactNode;
  color?: Color;
  href?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function CTAButton({ children, color = "cyan", href = "https://pay.kiwify.com.br/lRRpH6F", className = "", fullWidth = false }: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 font-syne font-extrabold text-[#050811] text-[12px] tracking-[2px] uppercase px-9 py-4 rounded-full transition-all ${fullWidth ? "w-full" : ""} ${className}`}
      style={{ background: bgMap[color], boxShadow: shadowMap[color] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
