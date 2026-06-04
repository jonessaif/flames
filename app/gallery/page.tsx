import { GalleryLightbox } from "@/components/GalleryLightbox";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Flames Gallery | Rooftop, Hookah, Snooker & Nightlife Photos - Lucknow",
  description: "See real Flames Lucknow moments: rooftop seating, hookah sessions, live music nights, Flames 147 snooker, PS5 gaming, friend groups and date-night ambience.",
  path: "/gallery",
  image: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
  imageAlt: "Guests enjoying hookah and rooftop ambience at Flames Lucknow"
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real moments across both floors."
        description="A preview of the destination: rooftop live music energy, hookah sessions, games-floor atmosphere, handcrafted drinks, friend groups and corners people remember."
        image="/images/flames-arabia-rooftop-hookah-crowd-new.jpg"
      />
      <section className="container-shell py-16 md:py-24">
        <SectionHeading
          eyebrow="Moments"
          title="Open the mood."
          description="Rooftop views, warm lounge corners, premium hookah details, social tables and 147 energy set the tone for the Flames evening."
        />
        <GalleryLightbox />
      </section>
    </>
  );
}
