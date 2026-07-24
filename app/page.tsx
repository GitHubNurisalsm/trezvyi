import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TariffsSection } from "@/components/tariffs-section";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  image: `${siteConfig.url}/images/driver.jpg`,
  priceRange: "800–1500 KGS",
  areaServed: [
    {
      "@type": "City",
      name: "Бишкек",
    },
    {
      "@type": "Country",
      name: "Кыргызстан",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги помощи водителям",
    itemListElement: [
      "Трезвый водитель",
      "Доставка бензина",
      "Подкачка колёс",
      "Запуск автомобиля",
      "Буксировка",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <HeroSection />
      <ServicesSection />
      <TariffsSection />
      <Footer />
    </main>
  );
}
