import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full bg-[#f5f3ed] px-6 pb-10 pt-8 md:pb-12 md:pt-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 border-t border-[#171a17]/10 pt-8 md:flex-row">
        <p className="display-font text-xl font-black text-[#171a17]">{siteConfig.name}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="tap-action flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#171a17] px-4 text-center text-sm font-black text-white"
        >
          <Phone className="h-4 w-4" />
          {siteConfig.internationalDisplayPhone}
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-action flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-4 text-center text-sm font-black text-[#171a17]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        </div>
      </div>
      <p className="mt-6 w-full text-center text-xs font-bold uppercase tracking-[0.18em] text-[#171a17]/38">
        Бишкек · круглосуточно · выездная служба
      </p>
    </footer>
  );
}
