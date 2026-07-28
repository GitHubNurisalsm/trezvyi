import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur md:px-6">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between md:h-[72px]">
        <Link href="/" aria-label={`${siteConfig.name} — главная`} className="flex items-center gap-2.5 text-xl font-black tracking-[-0.04em] text-slate-950 md:text-2xl">
          <Image src="/icon.svg" alt="" width={36} height={36} priority className="h-9 w-9 rounded-lg" />
          <span>{siteConfig.name}</span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="tap-action hidden h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 hover:bg-slate-50 sm:inline-flex"
          >
            <MessageCircle className="h-5 w-5 text-green-600" strokeWidth={2.3} />
            WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="tap-action inline-flex h-11 items-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-extrabold text-white hover:bg-slate-800 md:text-base"
          >
            <Phone className="h-5 w-5" strokeWidth={2.4} />
            <span className="sm:hidden">Позвонить</span>
            <span className="hidden sm:inline">{siteConfig.displayPhone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
