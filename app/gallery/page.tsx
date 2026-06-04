import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View rooftop evenings, hookah sessions, Flames 147 games-lounge energy, drinks, friend groups, and date-night ambience at Flames in Lucknow."
};

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
