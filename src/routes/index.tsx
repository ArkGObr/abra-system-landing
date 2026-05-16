import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/abra/Nav";
import { Hero } from "@/components/abra/Hero";
import { Features } from "@/components/abra/Features";
import { CommandCenter } from "@/components/abra/CommandCenter";
import { Differentials } from "@/components/abra/Differentials";
import { About } from "@/components/abra/About";
import { CTASection } from "@/components/abra/CTASection";
import { Footer } from "@/components/abra/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abra System — Infraestrutura tecnológica de mobilidade urbana" },
      { name: "description", content: "Plataforma profissional de mobilidade: aplicativos, painel administrativo, gestão financeira e tecnologia completa para operações modernas." },
      { property: "og:title", content: "Abra System — Plataforma profissional de mobilidade" },
      { property: "og:description", content: "Aplicativos, painel administrativo e infraestrutura robusta para delivery, mototáxi, passageiros e utilitários." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Bloquear a restauração nativa
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Desabilitar temporariamente o scroll suave para o reset inicial ser absoluto e sem saltos
    const originalStyle = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    const forceTop = () => {
      window.scrollTo(0, 0);
    };

    // Primeira tentativa imediata
    forceTop();

    // Vencer o comportamento do browser de pular para o ID da URL (#plataforma por ex)
    const timers = [
      setTimeout(forceTop, 0),
      setTimeout(forceTop, 50),
      setTimeout(forceTop, 150),
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = originalStyle;
      }, 200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Features />
        <CommandCenter />
        <Differentials />
        <About />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
