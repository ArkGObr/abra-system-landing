export function About() {
  return (
    <section id="empresa" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Quem somos</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
          A ABRA System não é apenas um aplicativo.
          <span className="block text-gradient-gold mt-2">É infraestrutura de mobilidade.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Nascemos da prática dentro do setor de mobilidade urbana e delivery, entendendo
          as dores reais das operações locais. Entregamos tecnologia, estrutura e suporte
          para transformar operações em plataformas profissionais — com visual moderno,
          robustez e a escalabilidade exigida por empresas sérias.
        </p>
      </div>
    </section>
  );
}
