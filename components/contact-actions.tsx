import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

type ContactActionsProps = {
  message?: string;
};

export function ContactActions({
  message = "Здравствуйте! Я хочу заказать трезвого водителя.",
}: ContactActionsProps) {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2">
      <a
        href={`tel:${siteConfig.phone}`}
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-center text-lg font-black text-white transition hover:-translate-y-1"
      >
        <Phone className="h-5 w-5" />
        Позвонить
      </a>
      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#22c55e] px-5 py-4 text-center text-lg font-black text-black transition hover:-translate-y-1 hover:bg-[#16a34a]"
      >
        <MessageCircle className="h-5 w-5" />
        Написать в WhatsApp
      </a>
      <Link
        href="/zakaz-v-1-klik"
        className="inline-flex min-h-14 items-center justify-center rounded-2xl border-3 border-black bg-white px-5 py-4 text-center text-lg font-black text-black transition hover:-translate-y-1 sm:col-span-2"
      >
        Выбрать услугу
      </Link>
    </div>
  );
}
