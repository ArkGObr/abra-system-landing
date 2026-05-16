import logo from "@/assets/abrasystem-logo.jpeg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ABRA System" className="h-9 w-9 rounded-full object-cover ring-1 ring-primary/40" />
          <div>
            <p className="font-display font-semibold text-foreground">ABRA<span className="text-primary">System</span></p>
            <p className="text-xs text-muted-foreground">Infraestrutura de mobilidade urbana</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ABRA System. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
