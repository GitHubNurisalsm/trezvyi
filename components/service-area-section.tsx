import { MapPin } from "lucide-react";

import { ContactActions } from "@/components/contact-actions";
import { siteConfig } from "@/lib/site";

export function ServiceAreaSection() {
  return (
    <section className="w-full bg-[#f0fdf4] px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#15803d]">Территория выезда</p>
          <h2 className="mt-3 text-3xl font-black text-black md:text-5xl">Бишкек и ближайшие районы</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/70">
            Работаем как выездная служба: клиентам не нужно приезжать в офис. Возможность выезда за пределы города уточните при заказе.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {siteConfig.serviceArea.map((area) => (
              <li key={area} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-black">
                <MapPin className="h-5 w-5 shrink-0 text-[#15803d]" />
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border-4 border-black bg-white p-6 shadow-xl md:p-8">
          <p className="text-2xl font-black text-black">Заказать водителя 24/7</p>
          <p className="mt-3 text-black/65">Сообщите адрес подачи и предполагаемый маршрут.</p>
          <div className="mt-6">
            <ContactActions />
          </div>
        </div>
      </div>
    </section>
  );
}
