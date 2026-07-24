import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center justify-center">
      <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-2">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex min-h-[76px] items-center justify-center gap-3 rounded-2xl bg-black px-5 py-5 text-center text-xl font-black text-white shadow-lg transition hover:-translate-y-1 md:text-2xl"
        >
          <Phone className="h-6 w-6" />
          {siteConfig.internationalDisplayPhone}
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[76px] items-center justify-center gap-3 rounded-2xl bg-[#22c55e] px-5 py-5 text-center text-xl font-black text-black shadow-lg transition hover:-translate-y-1 md:text-2xl"
        >
          <MessageCircle className="h-6 w-6" />
          Написать в WhatsApp
        </a>
      </div>
      <p className="mt-10 w-full text-center text-xl font-black text-black">
        {siteConfig.name} · БИШКЕК · 24/7
      </p>
    </footer>
  );
}
