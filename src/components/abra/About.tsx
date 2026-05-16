export function About() {
  return (
    <section id="empresa" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Company Section */}
          <div className="text-left">
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

          {/* Founder Section */}
          <div className="text-left bg-surface/30 p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Fundador</p>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
              Carlos André Gomes
            </h3>
            <p className="mt-2 text-sm text-gradient-gold font-medium tracking-wide">
              O "Rei do Delivery"
            </p>
            
            <div className="mt-6 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Empreendedor, especialista em mobilidade urbana e fundador da ABRA System. 
                Com experiência prática no setor de delivery e transporte urbano, Carlos construiu 
                sua trajetória atuando diretamente em operações reais de mobilidade em 9 estados brasileiros.
              </p>
              <p>
                Ao longo de sua trajetória, foi responsável por <strong className="text-foreground font-medium">mais de 1,5 milhão de serviços realizados</strong>, 
                desenvolvendo expertise na gestão de operações de delivery, mototáxi, transporte de passageiros e logística urbana.
              </p>
              <p>
                Toda essa experiência serviu como base para a criação da ABRA System, uma plataforma desenvolvida para oferecer estrutura profissional, 
                escalabilidade e tecnologia moderna para empresas que desejam operar aplicativos completos de mobilidade urbana.
              </p>
              <p>
                Hoje, Carlos lidera a expansão da ABRA System com foco em inovação, performance operacional e desenvolvimento de soluções tecnológicas robustas para o setor no Brasil.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
