import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C.I.A — Conteúdo Infinito com IA",
  description: "Um sistema completo de 45 agentes de IA especializados — cada um treinado na linguagem de um nicho, dominando um formato. Conteúdo profissional em menos de 3 minutos.",
  openGraph: {
    title: "C.I.A — Conteúdo Infinito com IA",
    description: "45 Funcionários de IA trabalhando por você.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1003358269049417');fbq('track','PageView');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
