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
    <div className="grid w-full gap-3">
      <a
        href={`tel:${siteConfig.phone}`}
        className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-4 text-center text-base font-black text-slate-950 hover:bg-green-400"
      >
        <Phone className="h-5 w-5" />
        Позвонить
      </a>
      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-center text-base font-extrabold text-slate-900 hover:bg-slate-50"
      >
        <MessageCircle className="h-5 w-5" />
        Написать в WhatsApp
      </a>
      <Link
        href="/zakaz-v-1-klik"
        className="tap-action inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        Выбрать услугу
      </Link>
    </div>
  );
}
