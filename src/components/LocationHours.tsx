import { Clock, MapPin, MessageCircle, Phone } from "@/components/Icons";
import { site } from "@/content/site";
import { whatsappHref } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";
import { MapPanel } from "./MapPanel";

export function LocationHours() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="luxury-card motion-sheen rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Location / Hours
        </p>
        <h3 className="mt-4 font-display text-4xl text-ivory">Reserve, arrive, settle in.</h3>
        <div className="mt-7 grid gap-5 text-sm text-smoke">
          <p className="flex gap-3">
            <MapPin className="mt-0.5 shrink-0 text-gold" size={19} aria-hidden />
            <span>{site.address}</span>
          </p>
          <a href={`tel:${site.contacts.arabia.phone.replace(/\s/g, "")}`} className="focus-ring flex gap-3 rounded-md transition hover:text-ivory">
            <Phone className="shrink-0 text-gold" size={19} aria-hidden />
            <span>{site.contacts.arabia.label}: {site.contacts.arabia.phone}</span>
          </a>
          <a href={`tel:${site.contacts.flames147.phone.replace(/\s/g, "")}`} className="focus-ring flex gap-3 rounded-md transition hover:text-ivory">
            <Phone className="shrink-0 text-gold" size={19} aria-hidden />
            <span>{site.contacts.flames147.label}: {site.contacts.flames147.phone}</span>
          </a>
          <div className="flex gap-3">
            <Clock className="mt-0.5 shrink-0 text-gold" size={19} aria-hidden />
            <div>
              {site.hours.map((row) => (
                <p key={row.day} className="mb-1">
                  <span className="text-ivory/80">{row.day}:</span> {row.time}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Reserve Table</ButtonLink>
          <ButtonLink href={whatsappHref()} variant="secondary" icon={<MessageCircle size={17} aria-hidden />}>
            WhatsApp Now
          </ButtonLink>
        </div>
      </div>
      <MapPanel />
    </div>
  );
}
