import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg font-black tracking-[-0.03em] text-slate-950">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-500">Бишкек · круглосуточно · выездная служба</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <a href={`tel:${siteConfig.phone}`} className="tap-action inline-flex h-11 items-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-bold text-white hover:bg-slate-800">
            <Phone className="h-4 w-4" /> {siteConfig.internationalDisplayPhone}
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="tap-action inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-800 hover:bg-slate-50">
            <MessageCircle className="h-4 w-4 text-green-600" /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
