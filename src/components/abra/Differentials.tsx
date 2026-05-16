import { Shield, Zap, Layers, Headphones, Palette, TrendingUp } from "lucide-react";

const items = [
  { icon: Layers, title: "Estrutura profissional", desc: "Arquitetura corporativa pensada para operações de longo prazo." },
  { icon: Zap, title: "Atualizações constantes", desc: "Evolução contínua da plataforma sem interromper sua operação." },
  { icon: Shield, title: "Sistema completo", desc: "Apps, painel, financeiro e infraestrutura em um único produto." },
  { icon: Headphones, title: "Suporte especializado", desc: "Atendimento técnico para quem opera no mundo real." },
  { icon: Palette, title: "Marca personalizada", desc: "White-label completo com a identidade da sua operação." },
  { icon: TrendingUp, title: "Operação escalável", desc: "Cresça de bairro a região metropolitana sem reescrever nada." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px hairline-gold" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Diferenciais</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
            Estabilidade, performance e <span className="text-gradient-gold">segurança</span>.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border-gold-soft">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 hover:bg-surface transition-colors">
              <Icon className="size-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
