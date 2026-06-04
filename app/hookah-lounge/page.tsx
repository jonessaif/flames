import { ArrowRight, CalendarDays, Check, Flame, MessageCircle, Music2, Sparkles } from "@/components/Icons";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { hookahHighlights } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

const arabiaMoments = [
  {
    title: "Date Nights",
    description: "Warm lights, rooftop seating and a quieter table for two.",
    image: "/images/venue-rooftop-seating.jpg"
  },
  {
    title: "Live Music Nights",
    description: "Weekend performances that make the rooftop feel alive.",
    image: "/images/flames-rooftop-live-music-night.jpg"
  },
  {
    title: "Hookah Sessions",
    description: "Smooth service for conversations that stretch into the night.",
    image: "/images/flames-arabia-rooftop-hookah-table-new.jpg"
  },
  {
    title: "Coffee & Mocktails",
    description: "Late-night drinks for couples, birthdays and rooftop catchups.",
    image: "/images/venue-cafe-drinks.jpg"
  }
];

const arabiaPlanCards = [
  {
    title: "Hookah",
    value: "Rs. 600",
    description: "One price for all available flavours.",
    Icon: Flame
  },
  {
    title: "Platter Combos",
    value: "from Rs. 699",
    description: "Combo plans where platter means hookah.",
    Icon: Sparkles
  },
  {
    title: "Live Music",
    value: "weekends",
    description: "The signature rooftop reason to come upstairs.",
    Icon: Music2
  }
];

const arabiaGallery = [
  "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
  "/images/flames-rooftop-evening-crowd.jpg",
  "/images/flames-rooftop-hookah-night.jpg",
  "/images/venue-rooftop-ambience.jpg"
];

export const metadata = createPageMetadata({
  title: "Flames of Arabia | Rooftop Hookah Lounge & Live Music – Lucknow",
  description: "Flames of Arabia is a rooftop hookah lounge in Gomti Nagar, Lucknow. Live music on weekends, premium hookah at Rs. 600, handcrafted drinks and warm ambience. Open 11 AM to 5 AM.",
  path: "/hookah-lounge",
  image: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
  imageAlt: "Rooftop hookah crowd at Flames of Arabia Lucknow"
});

export default function HookahLoungePage() {
  return (
    <>
      <PageHero
        eyebrow="Flames of Arabia"
        title="Rooftop lounge, live music and premium hookah upstairs."
        description="The Arabia experience is built for rooftop evenings: live music, warm seating, handcrafted drinks, hookah and social nights that feel planned."
        image="/images/flames-arabia-rooftop-hookah-crowd-new.jpg"
      >
        <ButtonLink
          href={whatsappHref("Hi Flames, I want to book Flames of Arabia for rooftop live music and hookah.")}
          icon={<MessageCircle size={17} aria-hidden />}
        >
          Explore Arabia
        </ButtonLink>
      </PageHero>

      <AnimatedSection className="container-shell grid gap-8 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Premium sessions"
            title="Built for rooftop nights."
            description="Hookah is not an add-on here. Arabia centers the upstairs experience around Rs. 600 hookah sessions, rooftop seating, weekend live music, coffee dates and mocktails."
            className="mb-6"
          />
          <ul className="grid gap-3">
            {hookahHighlights.map((item) => (
              <li key={item} className="motion-sheen flex items-start gap-3 rounded-lg border border-ivory/10 bg-ivory/[0.035] p-4 text-sm leading-6 text-smoke transition duration-300 hover:-translate-y-1 hover:border-gold/25">
                <Check className="mt-0.5 shrink-0 text-gold" size={18} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="motion-sheen relative min-h-[480px] overflow-hidden rounded-lg border border-gold/20 transition duration-300 hover:-translate-y-1 hover:border-gold/35">
          <Image
            src="/images/flames-arabia-rooftop-hookah-table-new.jpg"
            alt="Premium hookah detail with smoke and warm lounge lighting"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-premium-radial py-16 md:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Rooftop plans"
            title="The upstairs mood changes with the group."
            description="Arabia is built for evenings that need atmosphere first: date nights, live performances, hookah tables, coffee dates and small groups that want a rooftop setting."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {arabiaMoments.map((moment) => (
              <article key={moment.title} className="motion-sheen group relative min-h-[360px] overflow-hidden rounded-lg border border-gold/20 bg-espresso transition duration-300 hover:-translate-y-1 hover:border-gold/35">
                <Image
                  src={moment.image}
                  alt={`${moment.title} at Flames of Arabia Lucknow`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.05)_0%,rgba(7,6,5,0.86)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-4xl text-ivory">{moment.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-ivory/75">{moment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-ivory/10 bg-ink/70 py-16 md:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Easy booking"
              title="Simple plans for rooftop evenings."
              description="Choose a hookah session, pick an Arabia platter combo, or reserve around live music. Food and drinks support the table, but the real reason to come is the ambience."
              className="mb-6"
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {arabiaPlanCards.map(({ title, value, description, Icon }) => (
                <article key={title} className="luxury-card motion-sheen rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 shrink-0 text-gold" size={24} aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</p>
                      <h3 className="mt-2 font-display text-4xl text-ivory">{value}</h3>
                      <p className="mt-2 text-sm leading-6 text-smoke">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {arabiaGallery.map((photo, index) => (
              <div
                key={photo}
                className={[
                  "motion-sheen relative min-h-[230px] overflow-hidden rounded-lg border border-ivory/10 bg-espresso transition duration-300 hover:-translate-y-1 hover:border-gold/30",
                  index === 0 ? "sm:row-span-2 sm:min-h-[476px]" : ""
                ].join(" ")}
              >
                <Image
                  src={photo}
                  alt="Flames of Arabia rooftop ambience"
                  fill
                  sizes="(min-width: 1024px) 28vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16 md:py-24">
        <div className="depth-shadow relative isolate overflow-hidden rounded-lg border border-gold/20 bg-espresso p-6 md:p-10">
          <Image
            src="/images/venue-social-night.jpg"
            alt="Social rooftop evening at Flames of Arabia Lucknow"
            fill
            sizes="100vw"
            className="-z-20 object-cover opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,6,5,0.9),rgba(7,6,5,0.55)),linear-gradient(180deg,rgba(7,6,5,0.2),#070605)]" />
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Reserve upstairs</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-6xl">Make it a rooftop night.</h2>
            <p className="mt-5 text-base leading-7 text-ivory/75">
              Tell the team whether it is a date, birthday, live music plan or hookah session, and they can guide the best table.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={whatsappHref("Hi Flames, I want to reserve Flames of Arabia for a rooftop evening.")} icon={<CalendarDays size={17} aria-hidden />}>
                Reserve Arabia
              </ButtonLink>
              <ButtonLink href="/menu" variant="secondary" icon={<ArrowRight size={17} aria-hidden />}>
                View Combos
              </ButtonLink>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-6 text-smoke">
          Hookah service is intended for adult guests. Please enjoy responsibly and ask the team for current availability, recommendations, and venue policies.
        </p>
      </AnimatedSection>
    </>
  );
}
