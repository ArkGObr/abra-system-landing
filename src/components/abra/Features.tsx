import { Smartphone, LayoutDashboard, MapPin, CreditCard, Rocket, Cloud } from "lucide-react";

const items = [
  { icon: Smartphone, title: "Aplicativos completos", desc: "Apps modernos para clientes, motoristas e entregadores com rastreamento em tempo real." },
  { icon: LayoutDashboard, title: "Painel administrativo", desc: "Central de comando para corridas, financeiro, cadastros, relatórios e monitoramento." },
  { icon: MapPin, title: "Rastreamento em tempo real", desc: "Mapas inteligentes com acompanhamento completo de toda a operação." },
  { icon: CreditCard, title: "Gestão financeira", desc: "Controle financeiro e administrativo voltado à escalabilidade e organização." },
  { icon: Rocket, title: "Plataforma escalável", desc: "Construída para operações reais, crescimento sustentável e estabilidade." },
  { icon: Cloud, title: "Infraestrutura robusta", desc: "Estrutura corporativa, atualizações constantes e suporte especializado." },
];

export function Features() {
  return (
    <section id="plataforma" className="relative py-24 md:py-32 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px hairline-gold" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">O que a ABRA entrega</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
            Tecnologia construída para <span className="text-gradient-gold">operações reais</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Delivery, mototáxi, passageiros e utilitários — tudo dentro de uma infraestrutura única.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-xl glass-card p-7 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur" />
              <div className="size-12 rounded-lg border-gold-soft bg-background/60 flex items-center justify-center mb-5">
                <Icon className="size-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
