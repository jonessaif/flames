import { PageHero } from "@/components/PageHero";
import { MenuAccordion } from "@/components/MenuAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Flames Menu | Hookah, Combos, Coffee, Mocktails & Food - Lucknow",
  description: "Browse the Flames Lucknow menu with Arabia platter hookah combos, Flames 147 snooker combos, Rs. 600 hookah, coffee, mocktails, comfort food and desserts.",
  path: "/menu",
  image: "/images/flames-147-snooker-player-new.jpg",
  imageAlt: "Flames combo menu experience with games, hookah and drinks"
});

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="Combos first. Hookah, drinks and food around the evening."
        description="Start with Arabia platter combos or Flames 147 snooker combos, then add hookah, coffee, mocktails, sharing plates and desserts for the table."
        image="/images/flames-147-snooker-player-new.jpg"
      />
      <section className="container-shell py-16 md:py-24">
        <SectionHeading
          eyebrow="Browse menu"
          title="Choose the plan, then build the table."
          description="Combo menus are listed first because they are the easiest way to plan a full evening. Platter means hookah in the combo menu, and regular hookah is one price across available flavours."
        />
        <MenuAccordion />
      </section>
    </>
  );
}
