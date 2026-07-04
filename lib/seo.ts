import { SITE_CONFIG } from "@/config/site";

export const SEO = {
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: SITE_CONFIG.locale,
    type: "website" as const
  },
  twitter: {
    card: "summary_large_image" as const,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description
  }
};

