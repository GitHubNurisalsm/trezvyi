import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const oneClickServices = services;

export function getWhatsAppLink(message: string) {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
