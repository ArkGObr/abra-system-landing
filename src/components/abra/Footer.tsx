"use client";

import { useState } from "react";
import logo from "@/assets/abrasystem-logo.jpeg";
import { Mail, Instagram, MessageCircle, Loader2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";

function EmailModal() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: `[${fd.get("_subject")}] ${fd.get("message")}`,
      segment: "Contato Direto",
    };

    if (!payload.name || !payload.email) {
      toast.error("Preencha seu nome e e-mail.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("waitlist").insert(payload);
      
      if (!error) {
        toast.success("Mensagem recebida! Nossa equipe entrará em contato.");
        setOpen(false);
      } else {
        console.error("Erro Supabase:", error);
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro técnico:", err);
      toast.error("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
          title="Email: abrasystembrasil@gmail.com"
        >
          <Mail className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Fale com a nossa equipe</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            Use este canal para tirar dúvidas sobre a infraestrutura da ABRA System, propor parcerias comerciais ou falar diretamente com nosso suporte.
          </DialogDescription>
        </DialogHeader>
        
        <form 
          onSubmit={onSubmit}
          className="flex flex-col gap-4 mt-2"
        >
          {/* Configurações extras do FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Assunto</label>
            <Select name="_subject" defaultValue="Dúvidas sobre a plataforma">
              <SelectTrigger className="h-10 bg-surface/80 border-input focus:ring-primary">
                <SelectValue placeholder="Selecione um assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dúvidas sobre a plataforma">Dúvidas sobre a plataforma</SelectItem>
                <SelectItem value="Proposta de Parceria">Proposta de Parceria</SelectItem>
                <SelectItem value="Suporte Técnico">Suporte Técnico</SelectItem>
                <SelectItem value="Entre em contato">Entre em contato</SelectItem>
                <SelectItem value="Outro assunto">Outro assunto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Nome</label>
            <input name="name" required placeholder="Seu nome completo" className="h-10 rounded-md bg-surface/80 border border-input px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</label>
            <input name="email" type="email" required placeholder="Seu melhor e-mail" className="h-10 rounded-md bg-surface/80 border border-input px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem</label>
            <textarea name="message" required rows={4} placeholder="Como podemos ajudar?" className="rounded-md bg-surface/80 border border-input px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none" />
          </div>
          <button type="submit" disabled={loading} className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-60 transition-all">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            Enviar Mensagem
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-8 items-center justify-between">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ABRA System" className="h-9 w-9 rounded-full object-cover ring-1 ring-primary/40" />
            <div>
              <p className="font-display font-semibold text-foreground">ABRA<span className="text-primary">System</span></p>
              <p className="text-xs text-muted-foreground">Infraestrutura de mobilidade urbana</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ABRA System. Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-sm font-semibold text-foreground">Fale Conosco</p>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/5544991587257" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              title="WhatsApp: 44 99158-7257"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/abrasystembr?igsh=MXhjOG52d29vZ3duNA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              title="Instagram: @abrasystembr"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <EmailModal />
          </div>
        </div>

      </div>
    </footer>
  );
}
