import { Clock, Instagram, MapPin, MessageCircle, Phone } from "@/components/Icons";
import Link from "next/link";
import { navItems, site } from "@/content/site";
import { whatsappHref } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-ivory/10 bg-charcoal/90">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center overflow-hidden rounded-full border border-gold/30 bg-charcoal shadow-glow">
              <img src={site.logo.src} alt={site.logo.alt} className="h-full w-full scale-[1.18] object-cover" />
            </span>
            <div>
              <p className="font-display text-3xl leading-none text-ivory">{site.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-smoke">
            One destination with two experiences: Flames of Arabia upstairs for rooftop live music
            and Flames 147 downstairs for snooker, pool, PS5, hookah and long social nights.
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold/10"
          >
            <MessageCircle size={16} aria-hidden />
            WhatsApp Now
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Explore</p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-md text-sm text-smoke transition hover:text-ivory">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-4 text-sm text-smoke">
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 text-gold" size={18} aria-hidden />
            <span>{site.address}</span>
          </p>
          <a className="focus-ring flex items-center gap-3 rounded-md transition hover:text-ivory" href={`tel:${site.contacts.arabia.phone.replace(/\s/g, "")}`}>
            <Phone className="text-gold" size={18} aria-hidden />
            Arabia: {site.contacts.arabia.phone}
          </a>
          <a className="focus-ring flex items-center gap-3 rounded-md transition hover:text-ivory" href={`tel:${site.contacts.flames147.phone.replace(/\s/g, "")}`}>
            <Phone className="text-gold" size={18} aria-hidden />
            Flames 147: {site.contacts.flames147.phone}
          </a>
          <p className="flex items-start gap-3">
            <Clock className="mt-0.5 text-gold" size={18} aria-hidden />
            <span>{site.hours[0].day}: {site.hours[0].time}<br />{site.hours[1].day}: {site.hours[1].time}</span>
          </p>
          <a className="focus-ring flex items-center gap-3 rounded-md transition hover:text-ivory" href={site.contacts.arabia.instagram} target="_blank" rel="noreferrer">
            <Instagram className="text-gold" size={18} aria-hidden />
            Flames of Arabia Instagram
          </a>
          <a className="focus-ring flex items-center gap-3 rounded-md transition hover:text-ivory" href={site.contacts.flames147.instagram} target="_blank" rel="noreferrer">
            <Instagram className="text-gold" size={18} aria-hidden />
            Flames 147 Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-smoke/75 md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 {site.name}. All rights reserved.</p>
          <p>Rooftop lounge, live music, hookah, snooker, pool and PS5 gaming in Lucknow.</p>
        </div>
      </div>
    </footer>
  );
}
