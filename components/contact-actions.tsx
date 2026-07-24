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
        className="tap-action inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[#42d36b] px-5 py-4 text-center text-lg font-black text-[#101510]"
      >
        <Phone className="h-5 w-5" />
        Позвонить
      </a>
      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-action inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[#edf8ef] px-5 py-4 text-center text-lg font-black text-[#196f34]"
      >
        <MessageCircle className="h-5 w-5" />
        Написать в WhatsApp
      </a>
      <Link
        href="/zakaz-v-1-klik"
        className="tap-action inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-5 py-4 text-center text-base font-black text-[#171a17] sm:col-span-2"
      >
        Выбрать услугу
      </Link>
    </div>
  );
}
