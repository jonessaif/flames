import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Check, Flame, Gamepad2, MessageCircle, Trophy } from "@/components/Icons";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { flames147Highlights, site } from "@/content/site";
import { whatsappHref } from "@/lib/utils";

const playStyles = [
  {
    title: "Professional Snooker",
    description: "A focused setup for serious frames and friendly rivalry.",
    Icon: Trophy
  },
  {
    title: "Pool Tables",
    description: "Easy group games that keep the room social.",
    Icon: Trophy
  },
  {
    title: "PS5 Gaming",
    description: "FIFA challenges and multiplayer plans with food and drinks close by.",
    Icon: Gamepad2
  }
];

const gameRates = [
  {
    title: "Indian Pool",
    price: "Rs. 4 / min",
    description: "Quick games for casual group plans.",
    Icon: Trophy
  },
  {
    title: "American Pool",
    price: "Rs. 5 / min",
    description: "A bigger-table pace for longer rounds.",
    Icon: Trophy
  },
  {
    title: "Snooker",
    price: "Rs. 6 / min",
    description: "Focused frames on professional tables.",
    Icon: Trophy
  },
  {
    title: "PS5",
    price: "Rs. 200 / hour",
    description: "FIFA and multiplayer sessions downstairs.",
    Icon: Gamepad2
  }
];

const privateCabin = {
  title: "Private Cabin",
  description: "A dedicated snooker table cabin for privacy or focus. Ideal for serious frames, small groups, date-style games, private hangouts, or guests who want a quieter 147 experience.",
  image: "/images/flames-147-snooker-room.jpg"
};

const gamesMoments = [
  {
    title: "Serious Frames",
    description: "Professional tables for focused games and friendly rivalry.",
    image: "/images/flames-147-snooker-player-new.jpg"
  },
  {
    title: "Pool Nights",
    description: "Easy group games when the plan needs movement.",
    image: "/images/flames-147-pool-table.jpg"
  },
  {
    title: "PS5 Challenges",
    description: "FIFA runs, multiplayer energy and table-side food.",
    image: "/images/flames-147-ps5-cafe-new.jpg"
  },
  {
    title: "Hookah Breaks",
    description: "Pause between frames without leaving the floor.",
    image: "/images/flames-147-lounge-counter-new.jpg"
  }
];

const comboHighlights = [
  {
    title: "Starter Break Combo",
    price: "Rs. 699",
    description: "60 minutes snooker, 2 mocktails or coffee, and fries."
  },
  {
    title: "Extended Chill Combo",
    price: "Rs. 1299",
    description: "120 minutes snooker, hookah, 2 mocktails and chicken strips."
  },
  {
    title: "Flames 147 Mega Combo",
    price: "Rs. 2299",
    description: "120 minutes snooker, 2 hookahs, 4 mocktails, chicken strips and loaded fries."
  }
];

const gamesGallery = [
  "/images/flames-147-snooker-room.jpg",
  "/images/flames-147-snooker-art-new.jpg",
  "/images/flames-147-cafe-seating.jpg",
  "/images/flames-147-reception-new.jpg"
];

export const metadata: Metadata = {
  title: "Flames 147",
  description: "Explore Flames 147 in Lucknow: professional snooker, pool tables, PS5 gaming, hookah, drinks, and food for long social nights."
};

export default function Flames147Page() {
  return (
    <>
      <PageHero
        eyebrow="Flames 147"
        title="Snooker, pool, PS5 and hookah downstairs."
        description="A games-floor experience for friend groups, young professionals, hookah customers and anyone who wants the night to stay active."
        image="/images/flames-147-snooker-player-new.jpg"
      >
        <ButtonLink
          href={whatsappHref("Hi Flames, I want to reserve Flames 147 for snooker, pool, PS5 and hookah.", site.contacts.flames147.whatsappNumber)}
          icon={<MessageCircle size={17} aria-hidden />}
        >
          Reserve 147
        </ButtonLink>
      </PageHero>

      <AnimatedSection className="container-shell grid gap-8 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Games lounge"
            title="For the group that wants one more frame."
            description="Flames 147 gives the destination a second rhythm: focused games, friendly pressure, PS5 challenges, hookah breaks, and food designed for long conversations."
            className="mb-6"
          />
          <ul className="grid gap-3">
            {flames147Highlights.map((item) => (
              <li key={item} className="motion-sheen flex items-start gap-3 rounded-lg border border-ivory/10 bg-ivory/[0.035] p-4 text-sm leading-6 text-smoke transition duration-300 hover:-translate-y-1 hover:border-gold/25">
                <Check className="mt-0.5 shrink-0 text-gold" size={18} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="motion-sheen relative min-h-[480px] overflow-hidden rounded-lg border border-gold/20 transition duration-300 hover:-translate-y-1 hover:border-gold/35">
          <Image
            src="/images/flames-147-ps5-cafe-new.jpg"
            alt="Pool table and games-lounge ambience inside Flames 147"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-ivory/10 bg-ink/70 py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Game rates"
            title="Transparent pricing for the games floor."
            description="Choose by the minute for pool and snooker, or book PS5 by the hour. Combos are still available when you want games, hookah, drinks and food together."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gameRates.map(({ title, price, description, Icon }) => (
              <article key={title} className="luxury-card motion-sheen rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/30">
                <Icon className="text-gold" size={24} aria-hidden />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</p>
                <h2 className="mt-2 font-display text-4xl text-ivory">{price}</h2>
                <p className="mt-3 text-sm leading-6 text-smoke">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16 md:py-24">
        <div className="depth-shadow grid overflow-hidden rounded-lg border border-gold/20 bg-espresso lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[380px] lg:min-h-[520px]">
            <Image
              src={privateCabin.image}
              alt="Private snooker cabin at Flames 147"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
          </div>
          <div className="p-6 md:p-10 lg:flex lg:flex-col lg:justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Privacy / focus</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-6xl">
              {privateCabin.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-ivory/75 md:text-lg md:leading-8">
              {privateCabin.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={whatsappHref("Hi Flames, I want to reserve the private snooker cabin at Flames 147.", site.contacts.flames147.whatsappNumber)} icon={<MessageCircle size={17} aria-hidden />}>
                Reserve Private Cabin
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" icon={<CalendarDays size={17} aria-hidden />}>
                Plan Visit
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-premium-radial py-16 md:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Downstairs energy"
            title="A games floor with reasons to stay."
            description="147 works best when the group wants activity: snooker frames, pool games, PS5 challenges, hookah breaks and food that keeps the night going."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {gamesMoments.map((moment) => (
              <article key={moment.title} className="motion-sheen group relative min-h-[360px] overflow-hidden rounded-lg border border-gold/20 bg-espresso transition duration-300 hover:-translate-y-1 hover:border-gold/35">
                <Image
                  src={moment.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.06)_0%,rgba(7,6,5,0.86)_100%)]" />
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
        <div className="container-shell">
          <SectionHeading
            eyebrow="Play styles"
            title="Pick the pace of the night."
            description="Go competitive at the table, settle into a PS5 challenge, or keep the group moving between games, hookah, drinks and the rooftop."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {playStyles.map(({ title, description, Icon }) => {
              return (
                <article key={title} className="luxury-card motion-sheen rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <Icon className="text-gold" size={23} aria-hidden />
                  <h3 className="mt-5 font-display text-3xl text-ivory">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-smoke">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell grid gap-8 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Combo plans"
            title="Book a frame, then build the night around it."
            description="Flames 147 combos are designed around snooker time, hookah, drinks and quick food so the group can settle in without overthinking the order."
            className="mb-6"
          />
          <div className="grid gap-4">
            {comboHighlights.map((combo) => (
              <article key={combo.title} className="luxury-card motion-sheen rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">147 combo</p>
                    <h3 className="mt-2 font-display text-3xl text-ivory">{combo.title}</h3>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-gold">{combo.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-smoke">{combo.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/menu" variant="secondary" icon={<ArrowRight size={17} aria-hidden />}>
              View Full Combo Menu
            </ButtonLink>
            <ButtonLink href={whatsappHref("Hi Flames, I want to book a Flames 147 combo.", site.contacts.flames147.whatsappNumber)} icon={<CalendarDays size={17} aria-hidden />}>
              Book 147 Combo
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {gamesGallery.map((photo, index) => (
            <div
              key={photo}
              className={[
                "motion-sheen relative min-h-[220px] overflow-hidden rounded-lg border border-ivory/10 bg-espresso transition duration-300 hover:-translate-y-1 hover:border-gold/30",
                index === 0 ? "sm:col-span-2 sm:min-h-[310px]" : ""
              ].join(" ")}
            >
              <Image
                src={photo}
                alt="Flames 147 games-floor ambience"
                fill
                sizes="(min-width: 1024px) 28vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 to-transparent" />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell pb-16 md:pb-24">
        <div className="depth-shadow relative isolate overflow-hidden rounded-lg border border-gold/20 bg-espresso p-6 md:p-10">
          <Image
            src="/images/flames-147-snooker-table.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,6,5,0.88),rgba(7,6,5,0.52)),linear-gradient(180deg,rgba(7,6,5,0.12),#070605)]" />
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Reserve downstairs</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-6xl">Start with a game. Stay for the night.</h2>
            <p className="mt-5 text-base leading-7 text-ivory/75">
              Reserve 147 for snooker, pool, PS5, hookah or a combo plan. You can also pair it with Arabia upstairs for the full Flames evening.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={whatsappHref("Hi Flames, I want to reserve Flames 147 for snooker, gaming and hookah.", site.contacts.flames147.whatsappNumber)} icon={<MessageCircle size={17} aria-hidden />}>
                Reserve 147
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" icon={<Flame size={17} aria-hidden />}>
                Book Both Floors
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
