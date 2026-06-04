import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";
import { CrossExperienceCTA } from "@/components/CrossExperienceCTA";
import { EventsPreview } from "@/components/EventsPreview";
import { ExperienceChooser } from "@/components/ExperienceChooser";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { ImmersiveStoryScroller } from "@/components/ImmersiveStoryScroller";
import { MenuPreview } from "@/components/MenuPreview";
import { ReservationCTA } from "@/components/ReservationCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialProof } from "@/components/SocialProof";
import { homeSections } from "@/content/site";

export default function HomePage() {
  return (
    <>
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

      <ReservationCTA />
    </>
  );
}
