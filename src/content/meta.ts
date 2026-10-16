import type { Metadata } from "next";
import { SITE, type Content } from "./types";

export function buildMetadata(c: Content): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: c.path, languages: { es: "/", en: "/en/" } },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: c.meta.title,
      description: c.meta.description,
      url: c.path,
      locale: c.locale === "es" ? "es_AR" : "en_US",
      images: [{ url: `/images/og-${c.locale}.png`, width: 1200, height: 630, alt: `${SITE.name} — ${c.hero.role}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [`/images/og-${c.locale}.png`],
    },
  };
}

export function cvMetadata(c: Content): Metadata {
  return { title: c.cv.title, robots: { index: false, follow: false } };
}
