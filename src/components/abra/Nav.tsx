import { Link } from "@tanstack/react-router";
import logo from "@/assets/abrasystem-logo.jpeg";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ABRA System" className="h-10 w-10 rounded-full object-cover ring-1 ring-primary/40" />
          <span className="font-display font-semibold tracking-tight text-foreground">
            ABRA<span className="text-primary">System</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#plataforma" className="hover:text-foreground transition-colors">Plataforma</a>
          <a href="#painel" className="hover:text-foreground transition-colors">Painel</a>
          <a href="#diferenciais" className="hover:text-foreground transition-colors">Diferenciais</a>
          <a href="#empresa" className="hover:text-foreground transition-colors">Empresa</a>
        </nav>
        <a
          href="#cadastro"
          className="inline-flex items-center justify-center rounded-md bg-gradient-gold px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold hover:shadow-gold-strong transition-shadow"
        >
          Solicitar acesso
        </a>
      </div>
    </header>
  );
}
