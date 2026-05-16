import { WaitlistForm } from "./WaitlistForm";

export function CTASection() {
  return (
    <section id="cadastro" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl overflow-hidden border-gold-soft shadow-gold-strong">
          <div className="absolute inset-0 bg-gradient-gold opacity-95" />
          <div className="absolute inset-0 grid-bg opacity-20 mix-blend-overlay" />
          <div className="relative p-8 md:p-14 bg-background/85">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Fila prioritária</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
                Garanta seu lugar na <span className="text-gradient-gold">próxima rodada</span> de ativações.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Cadastre-se para receber uma demonstração e ser um dos primeiros a operar com a ABRA System na sua cidade.
              </p>
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
