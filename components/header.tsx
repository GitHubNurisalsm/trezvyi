import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="w-full py-5 px-6 md:px-8 flex items-center justify-center bg-white border-b-2 border-gray-100">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-0">
        <Link href="/" className="text-2xl font-black tracking-tight text-black md:text-3xl">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[#22c55e] text-black transition hover:bg-[#16a34a]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={3} />
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex min-h-11 items-center gap-2 rounded-full border-2 border-black px-3 text-base font-bold text-black md:text-lg"
          >
            <Phone className="h-5 w-5" strokeWidth={3} />
            <span className="hidden sm:inline">{siteConfig.displayPhone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
