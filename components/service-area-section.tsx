import { MapPin } from "lucide-react";

import { ContactActions } from "@/components/contact-actions";
import { siteConfig } from "@/lib/site";

export function ServiceAreaSection() {
  return (
    <section className="w-full px-4 pb-4 pt-14 md:px-8 md:pb-8 md:pt-20">
      <div className="surface-noise mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] bg-[#171a17] px-6 py-10 text-white md:grid-cols-[1.05fr_0.95fr] md:items-center md:rounded-[2.75rem] md:px-12 md:py-14 lg:px-16">
        <div>
          <p className="text-sm font-black text-[#63e587]">Территория выезда</p>
          <h2 className="display-font text-balance mt-3 text-4xl font-black leading-none text-white md:text-6xl">Приедем туда, где вы</h2>
          <p className="text-pretty mt-5 max-w-2xl text-lg leading-relaxed text-white/62">
            Работаем как выездная служба: клиентам не нужно приезжать в офис. Возможность выезда за пределы города уточните при заказе.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {siteConfig.serviceArea.map((area) => (
              <li key={area} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-4 font-bold text-white">
                <MapPin className="h-5 w-5 shrink-0 text-[#63e587]" />
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.75rem] border border-white/12 bg-white/7 p-6 backdrop-blur md:p-8">
          <p className="display-font text-3xl font-black text-white">Заказать водителя</p>
          <p className="mt-3 leading-relaxed text-white/58">Сообщите адрес подачи и предполагаемый маршрут.</p>
          <div className="mt-6">
            <ContactActions />
          </div>
        </div>
      </div>
    </section>
  );
}
