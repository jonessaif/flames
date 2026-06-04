import type { Metadata } from "next";
import { events, faqs, site } from "@/content/site";

export const siteUrl = "https://flamesofarabia.in";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
};

export function createPageMetadata({ title, description, path, image, imageAlt }: PageSeo): Metadata {
  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address,
  addressLocality: "Lucknow",
  addressRegion: "Uttar Pradesh",
  postalCode: "226010",
  addressCountry: "IN"
};

const place = {
  "@type": "Place",
  name: site.name,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.861183,
    longitude: 81.014289
  }
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const flames147Hours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: days,
  opens: "00:00",
  closes: "23:59"
};

const arabiaRooftopHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: days,
  opens: "11:00",
  closes: "05:00"
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: site.name,
  alternateName: ["Flames of Arabia", "Flames 147"],
  description: "Lucknow's Social Club with Flames of Arabia rooftop lounge upstairs, Flames 147 snooker and gaming downstairs, live music, hookah, drinks, food, and reservations.",
  url: siteUrl,
  logo: site.logo.src,
  image: [
    absoluteUrl("/images/flames-arabia-rooftop-hookah-crowd-new.jpg"),
    absoluteUrl("/images/flames-147-snooker-player-new.jpg")
  ],
  telephone: site.phone,
  address: postalAddress,
  geo: place.geo,
  priceRange: "Rs. 149 - Rs. 2299",
  servesCuisine: ["Cafe drinks", "Mocktails", "Lounge food", "Desserts"],
  openingHoursSpecification: [
    flames147Hours,
    arabiaRooftopHours
  ],
  department: [
    {
      "@type": "LocalBusiness",
      name: site.contacts.arabia.label,
      url: absoluteUrl("/hookah-lounge"),
      telephone: site.contacts.arabia.phone,
      address: postalAddress,
      openingHoursSpecification: [
        arabiaRooftopHours,
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: days,
          opens: "00:00",
          closes: "23:59",
          description: "Cafe seating available all night"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      name: site.contacts.flames147.label,
      url: absoluteUrl("/flames-147"),
      telephone: site.contacts.flames147.phone,
      address: postalAddress,
      openingHoursSpecification: [flames147Hours]
    }
  ],
  sameAs: [
    site.contacts.arabia.instagram,
    site.contacts.flames147.instagram
  ]
};

const byDay: Record<string, string> = {
  "Every Friday": "https://schema.org/Friday",
  "Every Saturday": "https://schema.org/Saturday",
  "Every Sunday": "https://schema.org/Sunday",
  "Every Thursday": "https://schema.org/Thursday"
};

const schemaStartTimes: Record<string, string> = {
  "5 PM": "17:00",
  "6 PM": "18:00",
  "7 PM": "19:00",
  "8 PM": "20:00"
};

export const eventJsonLd = {
  "@context": "https://schema.org",
  "@graph": events.map((event) => ({
    "@type": event.title.includes("Snooker") ? "SportsEvent" : "Event",
    name: event.title,
    description: event.description,
    image: absoluteUrl(event.image),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: place,
    organizer: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl
    },
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: event.date === "Monthly" ? "P1M" : "P1W",
      byDay: byDay[event.date],
      startTime: schemaStartTimes[event.time] ?? event.time,
      scheduleTimezone: "Asia/Kolkata"
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/contact"),
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "INR"
    }
  }))
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};
