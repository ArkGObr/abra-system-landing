import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Rocket, CheckCircle2 } from "lucide-react";

const segments = ["Delivery", "Mototáxi", "Passageiros", "Utilitários", "Outro"];

export function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      company: String(fd.get("company") || "").trim() || null,
      city: String(fd.get("city") || "").trim() || null,
      segment: String(fd.get("segment") || "").trim() || null,
      message: String(fd.get("message") || "").trim() || null,
    };

    if (!payload.name || !payload.email) {
      toast.error("Preencha nome e e-mail.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("waitlist").insert(payload);
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast.error("Este e-mail já está na fila.");
      } else {
        toast.error("Não foi possível enviar. Tente novamente.");
      }
      return;
    }

    setDone(true);
    toast.success("Você entrou na fila da ABRA System.");
  };

  if (done) {
    return (
      <div className="text-center py-16">
        <div className="mx-auto size-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-strong">
          <CheckCircle2 className="size-8 text-primary-foreground" strokeWidth={2} />
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-display font-semibold text-foreground">
          Você está na fila.
        </h3>
        <p className="mt-3 text-muted-foreground">
          Nossa equipe entrará em contato para uma demonstração personalizada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field name="name" label="Nome completo *" placeholder="Seu nome" required />
      <Field name="email" type="email" label="E-mail *" placeholder="voce@empresa.com" required />
      <Field name="phone" label="Telefone / WhatsApp" placeholder="(00) 00000-0000" />
      <Field name="company" label="Empresa" placeholder="Sua operação" />
      <Field name="city" label="Cidade" placeholder="Cidade / UF" />
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Segmento</label>
        <select
          name="segment"
          defaultValue=""
          className="h-12 rounded-md bg-surface/80 border border-input px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
        >
          <option value="" disabled>Selecione</option>
          {segments.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem (opcional)</label>
        <textarea
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="Conte rapidamente sobre sua operação"
          className="rounded-md bg-surface/80 border border-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
        />
      </div>
      <div className="md:col-span-2 mt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:shadow-gold-strong disabled:opacity-60 transition-all"
        >
          {loading ? <Loader2 className="size-4 animate-spin" /> : <Rocket className="size-4" />}
          Entrar na fila prioritária
        </button>
        <p className="mt-3 text-xs text-muted-foreground text-center">
          Seus dados são armazenados com segurança. Sem spam.
        </p>
      </div>
    </form>
  );
}

function Field({ name, label, type = "text", placeholder, required }: {
  name: string; label: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-md bg-surface/80 border border-input px-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition"
      />
    </div>
  );
}
