import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-[#f5f3ed]/92 px-4 py-3 backdrop-blur-xl md:px-8 md:py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="display-font inline-flex items-center gap-2 text-xl font-black text-[#171a17] md:text-2xl">
          <span className="h-2.5 w-2.5 rounded-full bg-[#42d36b] shadow-[0_0_0_5px_rgba(66,211,107,0.14)]" />
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="tap-action hidden min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-extrabold text-[#171a17] shadow-[0_6px_20px_rgba(23,26,23,0.06)] sm:inline-flex"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="tap-action flex min-h-11 items-center gap-2 rounded-xl bg-[#171a17] px-4 text-sm font-black text-white md:text-base"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            <span className="sm:hidden">Позвонить</span>
            <span className="hidden sm:inline">{siteConfig.displayPhone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
