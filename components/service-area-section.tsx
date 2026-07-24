import { MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function ServiceAreaSection() {
  return (
    <section className="bg-green-50 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-extrabold text-green-700">Территория выезда</p>
          <h2 className="text-balance mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-4xl">Бишкек и ближайшие районы</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Мы приезжаем к клиенту. Возможность выезда за пределы города уточните при заказе.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {siteConfig.serviceArea.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <MapPin className="h-5 w-5 shrink-0 text-green-600" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.07)] md:p-8">
          <h3 className="text-2xl font-black text-slate-950">Заказать водителя</h3>
          <p className="mt-2 text-slate-600">Сообщите адрес подачи и маршрут.</p>
          <div className="mt-6 grid gap-3">
            <a href={`tel:${siteConfig.phone}`} className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 text-base font-black text-slate-950 hover:bg-green-400">
              <Phone className="h-5 w-5" /> Позвонить
            </a>
            <a href={getWhatsAppLink("Здравствуйте! Нужен трезвый водитель.")} target="_blank" rel="noopener noreferrer" className="tap-action inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-base font-extrabold text-slate-900 hover:bg-slate-50">
              <MessageCircle className="h-5 w-5 text-green-600" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
