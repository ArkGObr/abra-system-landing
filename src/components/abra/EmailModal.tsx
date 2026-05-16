"use client";

import { useState } from "react";
import { Mail, Loader2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { formatPhone } from "@/lib/utils";

export function EmailModal({ trigger }: { trigger?: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: phone.trim() || null,
      message: `[${fd.get("_subject")}] ${fd.get("message")}`,
      segment: "Contato Direto",
    };

    if (payload.message.length < 5) {
      toast.error("Por favor, escreva uma mensagem antes de enviar.");
      return;
    }

    setLoading(true);
    try {
      // 1. Salva no Supabase (Backup)
      const { error: supabaseError } = await supabase.from("waitlist").insert(payload);
      if (supabaseError) console.error("Erro Supabase:", supabaseError);

      // 2. Envia via Web3Forms (E-mail Real)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "24363ee5-6fe6-47a7-8a51-e1e1eef0f41f",
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          subject: fd.get("_subject"),
          message: payload.message,
          from_name: "ABRA System Landing",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Mensagem enviada! Entraremos em contato o mais rápido possível.");
        setOpen(false);
        setPhone("");
      } else {
        console.error("Erro Web3Forms:", result);
        toast.error("Erro ao enviar e-mail. Mas a mensagem foi salva no banco.");
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
          onSubmit={onSubmit}
          className="flex flex-col gap-4 mt-2"
        >
          {/* Configurações removidas pois agora usamos Supabase */}

          
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
