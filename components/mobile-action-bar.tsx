import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function MobileActionBar() {
  return (
    <aside
      aria-label="Быстрый заказ"
      className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-[1.15fr_0.85fr] gap-2 rounded-[1.35rem] border border-white/10 bg-[#171a17]/95 p-2 shadow-[0_18px_48px_rgba(23,26,23,0.28)] backdrop-blur md:hidden"
    >
      <a
        href={`tel:${siteConfig.phone}`}
        className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#42d36b] px-3 text-base font-black text-[#101510]"
      >
        <Phone className="h-5 w-5" strokeWidth={2.5} />
        Позвонить
      </a>
      <a
        href={getWhatsAppLink("Здравствуйте! Нужен трезвый водитель.")}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-3 text-sm font-black text-[#171a17]"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
        WhatsApp
      </a>
    </aside>
  );
}
