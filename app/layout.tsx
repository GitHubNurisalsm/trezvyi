import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ТРЕЗВЫЙ.KG - Трезвый водитель Бишкек",
  description:
    "Служба трезвый водитель в Бишкеке и пригороде. Доставим вас и ваш автомобиль домой. Звоните 24/7.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
