const fallbackSiteUrl = "https://trezvyi.vercel.app";

function normalizeSiteUrl(value: string | undefined) {
  if (!value) return fallbackSiteUrl;

  const url = value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

  return url.replace(/\/$/, "");
}

export const siteConfig = {
  name: "ТРЕЗВЫЙ.KG",
  title: "Трезвый водитель в Бишкеке — круглосуточно | ТРЕЗВЫЙ.KG",
  description:
    "Круглосуточная служба трезвых водителей в Бишкеке. Водитель приедет по указанному адресу и доставит вас домой на вашем автомобиле. Заказ по телефону и WhatsApp.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  phone: "+996507777961",
  displayPhone: "0507 77-79-61",
  internationalDisplayPhone: "+996 507 77-79-61",
  whatsappNumber: "996507777961",
  whatsappUrl: "https://wa.me/996507777961",
  city: "Бишкек",
  country: "Кыргызстан",
  serviceArea: [
    "Ленинский район",
    "Первомайский район",
    "Октябрьский район",
    "Свердловский район",
    "ближайший пригород",
  ],
  locale: "ru_KG",
  googleSiteVerification:
    "NFGS1ctjsjeYQrfHpJ9sCVew2FtwcfBrMg2pWI0Rf2E",
};
