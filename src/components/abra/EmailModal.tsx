"use client";

import { useState } from "react";
import { Mail, Loader2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function EmailModal({ trigger }: { trigger?: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button 
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            title="Email: abrasystembrasil@gmail.com"
          >
            <Mail className="w-5 h-5" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Fale com a nossa equipe</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            Use este canal para tirar dúvidas sobre a infraestrutura da ABRA System, propor parcerias comerciais ou falar diretamente com nosso suporte.
          </DialogDescription>
        </DialogHeader>
        
        <form 
          action="https://formsubmit.co/abrasystembrasil@gmail.com" 
          method="POST" 
          className="flex flex-col gap-4 mt-2"
        >
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ""} />
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
          <button type="submit" className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-all">
            <Send className="w-4 h-4" />
            Enviar Mensagem
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
