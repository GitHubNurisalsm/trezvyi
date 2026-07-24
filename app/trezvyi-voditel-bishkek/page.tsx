import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { ContactActions } from "@/components/contact-actions";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { soberDriverFaq } from "@/lib/faq";
import { primaryService } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const pageTitle = "Трезвый водитель в Бишкеке 24/7";
const pageDescription =
  "Закажите трезвого водителя в Бишкеке: водитель приедет к вам и доставит вас домой на вашем автомобиле. Работаем круглосуточно, стоимость от 800 сом.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/trezvyi-voditel-bishkek" },
  openGraph: {
    type: "website",
    url: "/trezvyi-voditel-bishkek",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    images: [
      {
        url: primaryService.image,
        width: 1024,
        height: 1024,
        alt: "Услуга трезвого водителя в Бишкеке",
      },
    ],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/trezvyi-voditel-bishkek/#service`,
      name: "Трезвый водитель в Бишкеке",
      description: pageDescription,
      url: `${siteConfig.url}/trezvyi-voditel-bishkek`,
      serviceType: "Трезвый водитель",
      areaServed: { "@type": "City", name: siteConfig.city },
      provider: { "@id": `${siteConfig.url}/#business` },
      offers: {
        "@type": "Offer",
        price: "800",
        priceCurrency: "KGS",
        description: "Стоимость от 800 сом; итоговая цена согласовывается до поездки.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: soberDriverFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function SoberDriverPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <section className="bg-black px-6 py-12 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/75 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#86efac]">Выездная услуга · 24/7</p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-7xl">Трезвый водитель в Бишкеке</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
                Водитель приедет по указанному адресу и безопасно доставит вас до места назначения на вашем автомобиле.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-black">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#15803d]">Стоимость</p>
              <p className="mt-2 text-4xl font-black">от 800 сом</p>
              <p className="mt-3 text-sm leading-relaxed text-black/60">Итоговую цену согласуем до начала поездки.</p>
              <div className="mt-6"><ContactActions /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#15803d]">Когда пригодится</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Ваш автомобиль останется с вами</h2>
            <p className="mt-5 text-lg leading-relaxed text-black/70">
              Услуга подходит, когда вы приехали на личном автомобиле, но не хотите или не можете продолжать поездку за рулём. Водитель управляет автомобилем клиента и доставляет его вместе с владельцем по согласованному маршруту.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              "Поездка домой после мероприятия",
              "Ночной или предварительный заказ",
              "Перегон автомобиля по Бишкеку",
              "Выезд в ближайший пригород по согласованию",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-[#f0fdf4] p-5 text-lg font-bold">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#15803d]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#15803d]">Порядок заказа</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Три шага до поездки</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Свяжитесь с нами", "Позвоните или напишите в WhatsApp."],
              ["2", "Сообщите маршрут", "Назовите адрес подачи и место назначения."],
              ["3", "Подтвердите заказ", "Согласуйте стоимость и ожидайте водителя."],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-3xl border-4 border-black bg-white p-6">
                <span className="text-4xl font-black text-[#16a34a]">{number}</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-relaxed text-black/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </main>
  );
}
