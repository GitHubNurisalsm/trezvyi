import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { ContactActions } from "@/components/contact-actions";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { soberDriverFaq } from "@/lib/faq";
import { primaryService } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const pageTitle = "Трезвый водитель в Бишкеке 24/7";
const pageDescription =
  "Закажите трезвого водителя в Бишкеке: водитель приедет к вам и доставит вас домой на вашем автомобиле. Работаем круглосуточно, стоимость от 800 сом.";
const canonicalUrl = `${siteConfig.url}/trezvyi-voditel-bishkek`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    images: [
      {
        url: `${siteConfig.url}${primaryService.image}`,
        width: 1024,
        height: 1024,
        alt: "Услуга трезвого водителя в Бишкеке",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    images: [`${siteConfig.url}${primaryService.image}`],
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
    <main id="main-content" className="min-h-screen bg-white pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <section className="bg-green-50 px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold text-green-700">Выездная услуга · 24/7</p>
              <h1 className="text-balance mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">Трезвый водитель в Бишкеке</h1>
              <p className="text-pretty mt-5 max-w-3xl text-lg leading-7 text-slate-600 md:text-xl md:leading-8">
                Водитель приедет по указанному адресу и безопасно доставит вас до места назначения на вашем автомобиле.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-slate-950 shadow-[0_12px_32px_rgba(15,23,42,0.07)]">
              <p className="text-sm font-extrabold text-green-700">Стоимость</p>
              <p className="mt-2 text-4xl font-black tracking-[-0.04em] text-green-700 sm:text-5xl">от 800 сом</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Итоговую цену согласуем до начала поездки.</p>
              <div className="mt-6"><ContactActions /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black text-[#238d43]">Когда пригодится</p>
            <h2 className="text-balance mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-4xl">Ваш автомобиль останется с вами</h2>
            <p className="text-pretty mt-5 text-lg leading-relaxed text-[#171a17]/58">
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
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 text-lg font-bold text-[#171a17] shadow-[0_10px_28px_rgba(23,26,23,0.04)]">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#238d43]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black text-[#238d43]">Порядок заказа</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-4xl">Три шага до поездки</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Свяжитесь с нами", "Позвоните или напишите в WhatsApp."],
              ["2", "Сообщите маршрут", "Назовите адрес подачи и место назначения."],
              ["3", "Подтвердите заказ", "Согласуйте стоимость и ожидайте водителя."],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                <span className="text-2xl font-black text-green-700">{number}</span>
                <h3 className="mt-5 text-xl font-black text-[#171a17]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#171a17]/58">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
