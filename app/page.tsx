import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    availableLanguage: ["ru", "ky"],
    areaServed: "KG",
  },
  image: `${siteConfig.url}/images/driver.jpg`,
  priceRange: "от 800 KGS",
  areaServed: { "@type": "City", name: siteConfig.city },
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
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      priceCurrency: "KGS",
      itemOffered: { "@type": "Service", name: service.title },
    })),
  },
};

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f5f3ed] pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <ServiceAreaSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
