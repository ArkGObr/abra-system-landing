import { Rocket, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import dashboard from "@/assets/dashboard-mockup.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border-gold-soft bg-surface/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Infraestrutura tecnológica de mobilidade urbana
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
            Transforme sua cidade com uma{" "}
            <span className="text-gradient-gold">plataforma profissional</span> de mobilidade.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Aplicativos, painel administrativo, gestão financeira e tecnologia completa
            para operações modernas — em uma única infraestrutura.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#cadastro"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:shadow-gold-strong animate-glow transition-all"
            >
              <Rocket className="size-4" />
              Solicitar demonstração
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#plataforma"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/50 backdrop-blur px-7 py-4 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
            >
              Conhecer a plataforma
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "100%", v: "White-label" },
              { k: "24/7", v: "Operação real" },
              { k: "∞", v: "Escalabilidade" },
            ].map((s) => (
              <div key={s.v} className="border-l border-primary/40 pl-4">
                <dt className="text-2xl md:text-3xl font-display font-semibold text-gradient-gold">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 relative">
          <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" />
          <img
            src={dashboard}
            alt="Painel administrativo ABRA System"
            width={1600}
            height={1100}
            loading="lazy"
            className="relative rounded-2xl border-gold-soft shadow-gold-strong w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
