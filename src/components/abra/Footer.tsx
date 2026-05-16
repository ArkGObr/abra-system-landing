"use client";

import { useState } from "react";
import logo from "@/assets/abrasystem-logo.jpeg";
import { Mail, Instagram, MessageCircle, Loader2, Send } from "lucide-react";
import { EmailModal } from "./EmailModal";

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
            <a 
              href="https://www.instagram.com/oreidodeliverybr?igsh=MWR4bXVkdWt4bHpoZA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              title="Instagram: @oreidodeliverybr (Fundador)"
            >
              <Instagram className="w-5 h-5 text-primary/70" />
            </a>
            <EmailModal />
          </div>
        </div>

      </div>
    </footer>
  );
}
