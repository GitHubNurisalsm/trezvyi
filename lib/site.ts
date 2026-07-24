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
    "Круглосуточная служба трезвого водителя в Бишкеке и пригороде. Доставим вас и ваш автомобиль домой. Также доступна помощь на дороге. Звоните 24/7.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  phone: "+996507777961",
  displayPhone: "0507 77-79-61",
  locale: "ru_KG",
  googleSiteVerification:
    "NFGS1ctjsjeYQrfHpJ9sCVew2FtwcfBrMg2pWI0Rf2E",
};
