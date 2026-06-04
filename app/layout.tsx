import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { FlameAmbience } from "@/components/FlameAmbience";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: "Lucknow's Social Club with Flames of Arabia rooftop lounge upstairs, Flames 147 snooker and gaming downstairs, live music, hookah, drinks, food, and reservations.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  telephone: site.phone,
  logo: site.logo.src,
  servesCuisine: ["Cafe drinks", "Mocktails", "Lounge food", "Desserts"],
  priceRange: "Rs. 149 - Rs. 899",
  image: "https://flamesofarabia.in/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
  url: "https://flamesofarabia.in",
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [
    site.contacts.arabia.instagram,
    site.contacts.flames147.instagram
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flamesofarabia.in"),
  title: {
    default: `${site.name} | Lucknow's Social Club for Rooftop, Hookah, Snooker & Gaming`,
    template: `%s | ${site.name}`
  },
  description: "Flames is Lucknow's Social Club for rooftop live music, premium hookah, snooker, pool, PS5 gaming, handcrafted drinks, and unforgettable nights.",
  keywords: [
    "Flames Lucknow",
    "Flames of Arabia Lucknow",
    "Flames 147 Lucknow",
    "rooftop cafe Lucknow",
    "hookah lounge Lucknow",
    "snooker Lucknow",
    "PS5 gaming Lucknow",
    "live music Lucknow",
    "date night Lucknow"
  ],
  openGraph: {
    title: `${site.name} | Lucknow's Social Club`,
    description: "Two floors: rooftop live music and hookah upstairs, snooker, pool and PS5 gaming downstairs.",
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
        width: 1200,
        height: 630,
        alt: "Flames rooftop hookah and lounge ambience"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Lucknow's Social Club`,
    description: "Rooftop live music, hookah, snooker, pool, PS5 gaming, drinks, and unforgettable evenings in Lucknow.",
    images: ["/images/flames-arabia-rooftop-hookah-crowd-new.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <FlameAmbience />
        <main>{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
