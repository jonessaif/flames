import type { Metadata } from "next";
import { Instagram, MessageCircle, Phone } from "@/components/Icons";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { LocationHours } from "@/components/LocationHours";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Reserve",
  description: "Reserve Arabia, Flames 147, or both experiences at Flames in Lucknow via WhatsApp, phone, or the reservation form."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Reserve"
        title="Reserve the evening before it fills up."
        description="Message the team for Arabia, 147, or both: rooftop live music, hookah sessions, snooker, PS5, date-night corners and small groups."
        image="/images/venue-rooftop-seating.jpg"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={whatsappHref()} icon={<MessageCircle size={17} aria-hidden />}>
            WhatsApp Now
          </ButtonLink>
          <ButtonLink href={`tel:${site.contacts.arabia.phone.replace(/\s/g, "")}`} variant="secondary" icon={<Phone size={17} aria-hidden />}>
            Call Now
          </ButtonLink>
        </div>
      </PageHero>

      <AnimatedSection className="container-shell grid gap-8 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactForm />
        <div>
          <SectionHeading
            eyebrow="Plan the visit"
            title="Good for dates, games, groups, and longer hookah sessions."
            description="Share your preferred floor, date, time, guest count, and mood. The team can confirm availability directly on WhatsApp."
            className="mb-6"
          />
          <div className="luxury-card motion-sheen rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Quick contact</p>
            <div className="mt-5 grid gap-3">
              <ButtonLink href={whatsappHref("Hi Flames, is Arabia or 147 available tonight?")} icon={<MessageCircle size={17} aria-hidden />}>
                Ask Availability
              </ButtonLink>
              <ButtonLink href={`tel:${site.contacts.arabia.phone.replace(/\s/g, "")}`} variant="secondary" icon={<Phone size={17} aria-hidden />}>
                Arabia {site.contacts.arabia.phone}
              </ButtonLink>
              <ButtonLink href={`tel:${site.contacts.flames147.phone.replace(/\s/g, "")}`} variant="secondary" icon={<Phone size={17} aria-hidden />}>
                147 {site.contacts.flames147.phone}
              </ButtonLink>
            </div>
            <div className="mt-5 grid gap-2 border-t border-ivory/10 pt-5 text-sm text-smoke">
              <a className="focus-ring flex items-center gap-3 rounded-md transition hover:text-ivory" href={site.contacts.arabia.instagram} target="_blank" rel="noreferrer">
                <Instagram className="text-gold" size={18} aria-hidden />
                Flames of Arabia Instagram
              </a>
              <a className="focus-ring flex items-center gap-3 rounded-md transition hover:text-ivory" href={site.contacts.flames147.instagram} target="_blank" rel="noreferrer">
                <Instagram className="text-gold" size={18} aria-hidden />
                Flames 147 Instagram
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-smoke">
              For the smoothest experience, reserve before peak evening hours and mention whether you want Arabia, 147, or both.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell pb-16 md:pb-24">
        <LocationHours />
      </AnimatedSection>
    </>
  );
}
