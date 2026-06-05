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

const flamesOfArabiaPlace = {
  ...place,
  name: "Flames of Arabia"
};

const flames147Place = {
  ...place,
  name: "Flames 147"
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

const schemaDayUrls = [
  "https://schema.org/Sunday",
  "https://schema.org/Monday",
  "https://schema.org/Tuesday",
  "https://schema.org/Wednesday",
  "https://schema.org/Thursday",
  "https://schema.org/Friday",
  "https://schema.org/Saturday"
];

const indiaOffsetMinutes = 330;

type SchemaEventDetail = {
  description?: string;
  endTime: string;
  weekday: number;
  weekOfMonth?: number;
  location: typeof place;
  performerName: string;
};

const schemaEventDetails: Record<string, SchemaEventDetail> = {
  "Friday Acoustic Night": {
    description: "Live acoustic music on the rooftop at Flames of Arabia every Friday evening.",
    endTime: "23:59",
    weekday: 5,
    location: flamesOfArabiaPlace,
    performerName: "Live Acoustic Artist"
  },
  "Weekend Snooker Tournament": {
    endTime: "23:00",
    weekday: 6,
    location: flames147Place,
    performerName: "Flames 147 Players"
  },
  "PS5 FIFA Challenge": {
    endTime: "22:00",
    weekday: 0,
    location: flames147Place,
    performerName: "Flames 147 Gaming Guests"
  },
  "Couples Evening": {
    endTime: "23:59",
    weekday: 4,
    location: flamesOfArabiaPlace,
    performerName: "Flames Hospitality Team"
  },
  "Rooftop Chill Session": {
    endTime: "23:59",
    weekday: 5,
    weekOfMonth: 2,
    location: flamesOfArabiaPlace,
    performerName: "Flames Rooftop Artists"
  }
};

function parseSchemaTime(time: string) {
  const [hour = "0", minute = "0"] = time.split(":");

  return {
    hour: Number(hour),
    minute: Number(minute)
  };
}

function toIndiaWallClock(date: Date) {
  return new Date(date.getTime() + indiaOffsetMinutes * 60 * 1000);
}

function formatIndiaDateTime(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hour}:${minute}:00+05:30`;
}

function createIndiaWallDate(year: number, month: number, day: number, time: string) {
  const { hour, minute } = parseSchemaTime(time);

  return new Date(Date.UTC(year, month, day, hour, minute));
}

function nextWeeklyDate(referenceDate: Date, weekday: number, startTime: string) {
  const now = toIndiaWallClock(referenceDate);
  const { hour, minute } = parseSchemaTime(startTime);
  const currentMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const startMinutes = hour * 60 + minute;
  let daysUntil = (weekday - now.getUTCDay() + 7) % 7;

  if (daysUntil === 0 && currentMinutes >= startMinutes) {
    daysUntil = 7;
  }

  return createIndiaWallDate(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + daysUntil,
    startTime
  );
}

function monthlyWeekdayDate(year: number, month: number, weekday: number, weekOfMonth: number, startTime: string) {
  const firstOfMonth = createIndiaWallDate(year, month, 1, startTime);
  const offsetToWeekday = (weekday - firstOfMonth.getUTCDay() + 7) % 7;

  return createIndiaWallDate(year, month, 1 + offsetToWeekday + (weekOfMonth - 1) * 7, startTime);
}

function nextMonthlyDate(referenceDate: Date, weekday: number, weekOfMonth: number, startTime: string) {
  const now = toIndiaWallClock(referenceDate);
  let candidate = monthlyWeekdayDate(now.getUTCFullYear(), now.getUTCMonth(), weekday, weekOfMonth, startTime);

  if (candidate.getTime() <= now.getTime()) {
    candidate = monthlyWeekdayDate(now.getUTCFullYear(), now.getUTCMonth() + 1, weekday, weekOfMonth, startTime);
  }

  return candidate;
}

function createEndDate(startDate: Date, startTime: string, endTime: string) {
  const start = parseSchemaTime(startTime);
  const end = parseSchemaTime(endTime);
  const endDate = createIndiaWallDate(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), endTime);

  if (end.hour * 60 + end.minute <= start.hour * 60 + start.minute) {
    endDate.setUTCDate(endDate.getUTCDate() + 1);
  }

  return endDate;
}

function nextEventDates(event: (typeof events)[number], detail: SchemaEventDetail, referenceDate: Date) {
  const startTime = schemaStartTimes[event.time] ?? event.time;
  const startDate = detail.weekOfMonth
    ? nextMonthlyDate(referenceDate, detail.weekday, detail.weekOfMonth, startTime)
    : nextWeeklyDate(referenceDate, detail.weekday, startTime);
  const endDate = createEndDate(startDate, startTime, detail.endTime);

  return {
    startTime,
    startDate: formatIndiaDateTime(startDate),
    endDate: formatIndiaDateTime(endDate)
  };
}

function createEventJsonLd(event: (typeof events)[number], referenceDate: Date) {
  const detail = schemaEventDetails[event.title];
  const { startTime, startDate, endDate } = nextEventDates(event, detail, referenceDate);

  return {
    "@type": event.title.includes("Snooker") ? "SportsEvent" : "Event",
    name: event.title,
    description: detail.description ?? event.description,
    image: absoluteUrl(event.image),
    startDate,
    endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: detail.location,
    organizer: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl
    },
    performer: {
      "@type": "PerformingGroup",
      name: detail.performerName
    },
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: event.date === "Monthly" ? "P1M" : "P1W",
      byDay: byDay[event.date] ?? schemaDayUrls[detail.weekday],
      startTime,
      endTime: detail.endTime,
      scheduleTimezone: "Asia/Kolkata"
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/contact"),
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "INR",
      validFrom: "2026-01-01T00:00:00+05:30"
    }
  };
}

export function createEventsJsonLd(referenceDate = new Date()) {
  return {
    "@context": "https://schema.org",
    "@graph": events.map((event) => createEventJsonLd(event, referenceDate))
  };
}

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
