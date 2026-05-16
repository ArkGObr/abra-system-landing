import { Check } from "lucide-react";
import apps from "@/assets/apps-mockup.jpg";

const bullets = [
  "Controle de corridas e entregas",
  "Gestão financeira completa",
  "Cadastro de motoristas e entregadores",
  "Relatórios e monitoramento em tempo real",
  "Configuração de taxas e áreas de atuação",
  "Cupons, campanhas e gestão operacional centralizada",
];

export function CommandCenter() {
  return (
    <section id="painel" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full" />
          <img
            src={apps}
            alt="Aplicativos ABRA System"
            width={1400}
            height={1200}
            loading="lazy"
            className="relative rounded-2xl border-gold-soft shadow-gold w-full object-cover animate-float"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Central de comando</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
            Toda a operação em <span className="text-gradient-gold">um único painel</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Um painel administrativo profissional desenhado para times que tratam mobilidade
            como infraestrutura, não como aplicativo.
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-1 size-5 rounded-full border-gold-soft flex items-center justify-center">
                  <Check className="size-3 text-primary" strokeWidth={2.5} />
                </span>
                <span className="text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
