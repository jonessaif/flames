import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { FlameAmbience } from "@/components/FlameAmbience";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://flamesofarabia.in"),
  title: {
    default: `${site.name} | Lucknow's Social Club for Rooftop, Hookah, Snooker & Gaming`,
    template: `%s | ${site.name}`
  },
  description: "Flames is Lucknow's Social Club for rooftop live music, premium hookah, snooker, pool, PS5 gaming, handcrafted drinks, and unforgettable nights.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
