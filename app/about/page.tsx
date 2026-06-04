import { Flame, Gem, Music2 } from "@/components/Icons";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutPillars } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Flames | Two-Floor Social Club in Gomti Nagar, Lucknow",
  description: "Learn about Flames in Lucknow: Flames of Arabia rooftop lounge upstairs and Flames 147 snooker, pool, PS5 gaming and hookah downstairs.",
  path: "/about",
  image: "/images/venue-rooftop-ambience.jpg",
  imageAlt: "Flames rooftop ambience and warm lounge lighting in Lucknow"
});

const icons = [Gem, Music2, Flame];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Flames"
        title="One destination, two ways to spend the night."
        description="Flames brings together Arabia upstairs for rooftop live music and hookah, and 147 downstairs for snooker, pool, PS5 and active group plans."
        image="/images/venue-rooftop-ambience.jpg"
      />

      <AnimatedSection className="container-shell grid gap-8 py-16 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="motion-sheen relative min-h-[480px] overflow-hidden rounded-lg border border-gold/20 transition duration-300 hover:-translate-y-1 hover:border-gold/35">
          <Image
            src="/images/coffee-dessert.png"
            alt="Coffee and dessert for a late evening at Flames of Arabia"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Brand story"
            title="Rooftop energy upstairs. Games downstairs."
            description="The experience is designed for youth, couples, young professionals, hookah customers and friend groups who want more than a table: music, games, warm light, handcrafted drinks and food that supports the night."
            className="mb-0"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-ivory/10 bg-ink/70 py-16 md:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What defines us"
            title="A premium mood with multiple reasons to visit."
            description="Every detail leans into social energy: live music, rooftop atmosphere, snooker, gaming, hookah, coffee, mocktails and food designed for long conversations."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {aboutPillars.map((pillar, index) => {
              const Icon = icons[index] ?? Gem;
              return (
                <article key={pillar.title} className="luxury-card motion-sheen rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <div className="grid size-12 place-items-center rounded-full bg-gold/10 text-gold">
                    <Icon size={23} aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-ivory">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-smoke">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
