import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function MobileActionBar() {
  return (
    <aside aria-label="Быстрый заказ" className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_16px_42px_rgba(15,23,42,0.18)] md:hidden">
      <a href={`tel:${siteConfig.phone}`} className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-green-500 px-3 text-base font-black text-slate-950">
        <Phone className="h-5 w-5" /> Позвонить
      </a>
      <a href={getWhatsAppLink("Здравствуйте! Нужен трезвый водитель.")} target="_blank" rel="noopener noreferrer" className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 text-sm font-black text-white">
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </aside>
  );
}
