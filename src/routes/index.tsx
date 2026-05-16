import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
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
      { title: "ABRA System — Infraestrutura tecnológica de mobilidade urbana" },
      { name: "description", content: "Plataforma profissional de mobilidade: aplicativos, painel administrativo, gestão financeira e tecnologia completa para operações modernas." },
      { property: "og:title", content: "ABRA System — Plataforma profissional de mobilidade" },
      { property: "og:description", content: "Aplicativos, painel administrativo e infraestrutura robusta para delivery, mototáxi, passageiros e utilitários." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
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
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
