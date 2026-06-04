import type { Metadata } from "next";
import { events, faqs, site } from "@/content/site";

export const siteUrl = "https://flamesofarabia.com";

export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return siteUrl;
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
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
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
      images: [ogImage]
    }
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "B-1/3, Vishesh Khand 2",
  addressLocality: "Gomti Nagar",
  addressRegion: "Lucknow",
  postalCode: "226010",
  addressCountry: "IN"
};

const place = {
  "@type": "Place",
  name: site.name,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.8623,
    longitude: 81.0018
  }
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const flames147Hours = {
  "@type": "OpeningHoursSpecification",
  name: "Flames 147",
  dayOfWeek: days,
  opens: "00:00",
  closes: "23:59"
};

const arabiaRooftopHours = {
  "@type": "OpeningHoursSpecification",
  name: "Flames of Arabia Rooftop",
  dayOfWeek: days,
  opens: "11:00",
  closes: "05:00"
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Flames – Lucknow's Social Club",
  url: siteUrl,
  logo: absoluteUrl("/images/flames-logo.jpg"),
  image: absoluteUrl("/images/flames-arabia-rooftop-hookah-crowd-new.jpg"),
  description: "Two-floor social club in Gomti Nagar, Lucknow. Flames of Arabia upstairs for rooftop live music and hookah. Flames 147 downstairs for snooker, pool, PS5 gaming and hookah.",
  address: postalAddress,
  geo: place.geo,
  telephone: ["+917380779789", "+918090582902"],
  openingHoursSpecification: [
    flames147Hours,
    arabiaRooftopHours
  ],
  sameAs: [
    "https://www.instagram.com/flames_of_arabia/",
    "https://www.instagram.com/flames_147/"
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
