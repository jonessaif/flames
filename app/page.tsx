import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";
import { CrossExperienceCTA } from "@/components/CrossExperienceCTA";
import { EventsPreview } from "@/components/EventsPreview";
import { ExperienceChooser } from "@/components/ExperienceChooser";
import { FAQSection } from "@/components/FAQSection";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { ImmersiveStoryScroller } from "@/components/ImmersiveStoryScroller";
import { MenuPreview } from "@/components/MenuPreview";
import { ReservationCTA } from "@/components/ReservationCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialProof } from "@/components/SocialProof";
import { homeSections } from "@/content/site";
import { createEventsJsonLd, createPageMetadata, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Flames Lucknow | Rooftop Lounge, Hookah, Snooker & PS5 Gaming – Gomti Nagar",
  description: "Flames is Lucknow's social club in Gomti Nagar. Rooftop live music and hookah at Flames of Arabia upstairs. Snooker, pool and PS5 gaming at Flames 147 downstairs. Open 24 hours.",
  path: "/",
  image: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
  imageAlt: "Rooftop hookah crowd at Flames of Arabia Lucknow"
});

export default function HomePage() {
  const eventJsonLd = createEventsJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ImmersiveStoryScroller />

      <section className="container-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Two experiences"
          title={homeSections.chooseTitle}
          description={homeSections.chooseDescription}
        />
        <ExperienceChooser />
      </section>

      <AnimatedSection className="container-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Gallery"
          title={homeSections.galleryTitle}
          description={homeSections.galleryDescription}
          action={<ButtonLink href="/gallery" variant="secondary">View Gallery</ButtonLink>}
        />
        <GalleryPreview />
      </AnimatedSection>

      <SocialProof />

      <AnimatedSection className="border-y border-ivory/10 bg-ink/70 py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Events"
            title={homeSections.eventsTitle}
            description={homeSections.eventsDescription}
          />
          <EventsPreview />
        </div>
      </AnimatedSection>

      <CrossExperienceCTA />

      <AnimatedSection className="bg-premium-radial py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Menu"
            title={homeSections.menuTitle}
            description={homeSections.menuDescription}
            action={<ButtonLink href="/menu" variant="secondary">View Full Menu</ButtonLink>}
          />
          <MenuPreview />
        </div>
      </AnimatedSection>

      <FAQSection />

      <ReservationCTA />
    </>
  );
}
