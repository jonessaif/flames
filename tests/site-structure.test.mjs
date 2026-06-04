import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();

const read = (file) => readFileSync(join(root, file), "utf8");

test("all requested pages exist", () => {
  [
    "app/page.tsx",
    "app/menu/page.tsx",
    "app/hookah-lounge/page.tsx",
    "app/flames-147/page.tsx",
    "app/gallery/page.tsx",
    "app/about/page.tsx",
    "app/contact/page.tsx",
    "app/sitemap.ts",
    "app/robots.ts"
  ].forEach((file) => assert.equal(existsSync(join(root, file)), true, file));
});

test("brand positioning presents Flames as one destination with two experiences", () => {
  const content = read("src/content/site.ts");
  assert.match(content, /Lucknow's Social Club/);
  assert.match(content, /3D-Logo-Mockup-Design-4-1024x679\.png/);
  assert.match(content, /flames_of_arabia/);
  assert.match(content, /flames_147/);
  assert.match(content, /80905 82902/);
  assert.match(content, /Flames 147", time: "Open 24 hours/);
  assert.match(content, /Flames of Arabia rooftop", time: "11 AM - 5 AM/);
  assert.match(content, /Arabia cafe seating", time: "Available all night/);
  assert.match(content, /Public listing snapshot as of June 2026/);
  assert.match(content, /Play Downstairs\./);
  assert.match(content, /Relax Upstairs\./);
  assert.match(content, /Flames of Arabia/);
  assert.match(content, /Rooftop Lounge/);
  assert.match(content, /Live Music/);
  assert.match(content, /Flames 147/);
  assert.match(content, /Professional Snooker/);
  assert.match(content, /PS5 Gaming/);
  assert.doesNotMatch(content, /\bmandi\b/i);
  assert.doesNotMatch(content, /Dubai-inspired/i);
  assert.doesNotMatch(content, /Arabic restaurant/i);
  assert.doesNotMatch(content, /Traditional café/i);
});

test("menu is combo-first, hookah is simplified, and mobile scannable", () => {
  const content = read("src/content/site.ts");
  const menuContent = content.slice(content.indexOf("export const menuSections"));
  const arabiaCombos = menuContent.indexOf('title: "Arabia Platter Combos"');
  const gamesCombos = menuContent.indexOf('title: "Flames 147 Combos"');
  const hookahMenu = menuContent.indexOf('title: "Hookah"');
  const coffeeMenu = menuContent.indexOf('title: "Coffee"');
  assert.ok(arabiaCombos > -1, "Arabia combo menu section missing");
  assert.ok(gamesCombos > arabiaCombos, "147 combos should follow Arabia combos");
  assert.ok(hookahMenu > gamesCombos, "Hookah should follow combo sections");
  assert.ok(coffeeMenu > hookahMenu, "Coffee should follow simplified hookah");
  assert.match(content, /Micro Combo/);
  assert.match(content, /Starter Break Combo/);
  assert.match(content, /All Hookah Flavours/);
  assert.match(content, /Rs\. 600/);
  assert.doesNotMatch(content, /Mint Frost/);
  assert.doesNotMatch(content, /Double Apple Royale/);
  assert.match(content, /Cafe Frappe/);
  assert.match(content, /Mojito/);
  assert.match(content, /Pizza \/ Burgers \/ Wraps/);
  assert.match(content, /Nutella Kunafa/);
  assert.match(read("src/components/MenuAccordion.tsx"), /button/);
});

test("Arabia and 147 pages include richer destination content", () => {
  const arabia = read("app/hookah-lounge/page.tsx");
  const games = read("app/flames-147/page.tsx");

  assert.match(arabia, /arabiaMoments/);
  assert.match(arabia, /arabiaPlanCards/);
  assert.match(arabia, /Rs\. 600/);
  assert.match(arabia, /View Combos/);
  assert.match(arabia, /flames-rooftop-live-music-night\.jpg/);
  assert.match(games, /gamesMoments/);
  assert.match(games, /gameRates/);
  assert.match(games, /Indian Pool/);
  assert.match(games, /Rs\. 4 \/ min/);
  assert.match(games, /American Pool/);
  assert.match(games, /Rs\. 5 \/ min/);
  assert.match(games, /Snooker/);
  assert.match(games, /Rs\. 6 \/ min/);
  assert.match(games, /PS5/);
  assert.match(games, /Rs\. 200 \/ hour/);
  assert.match(games, /privateCabin/);
  assert.match(games, /Private Cabin/);
  assert.match(games, /privacy or focus/);
  assert.match(games, /comboHighlights/);
  assert.match(games, /Flames 147 Mega Combo/);
  assert.match(games, /flames-147-pool-table\.jpg/);
});

test("homepage is a two-experience destination before menu preview", () => {
  const home = read("app/page.tsx");
  const content = read("src/content/site.ts");

  assert.equal(home.indexOf("<DestinationHighlights />"), -1);
  assert.ok(home.indexOf("<ExperienceChooser />") < home.indexOf("<GalleryPreview />"));
  assert.ok(home.indexOf("<GalleryPreview />") < home.indexOf("<EventsPreview />"));
  assert.ok(home.indexOf("<GalleryPreview />") < home.indexOf("<SocialProof />"));
  assert.ok(home.indexOf("<SocialProof />") < home.indexOf("<EventsPreview />"));
  assert.ok(home.indexOf("<EventsPreview />") < home.indexOf("<CrossExperienceCTA />"));
  assert.ok(home.indexOf("<CrossExperienceCTA />") < home.indexOf("<MenuPreview />"));
  assert.ok(home.indexOf("<MenuPreview />") < home.indexOf("<FAQSection />"));
  assert.ok(home.indexOf("<FAQSection />") < home.indexOf("<ReservationCTA />"));
  assert.match(home, /ExperienceChooser/);
  assert.match(home, /SocialProof/);
  assert.match(home, /EventsPreview/);
  assert.match(home, /CrossExperienceCTA/);
  assert.match(home, /MenuPreview/);
  assert.match(home, /FAQSection/);
  assert.match(home, /ReservationCTA/);
  assert.match(home, /eventJsonLd/);
  assert.match(home, /faqJsonLd/);
  assert.match(content, /Choose Your Experience/);
  assert.match(content, /What Makes Flames Different/);
  assert.match(content, /Real Moments/);
  assert.match(content, /Tonight At Flames/);
  assert.match(content, /Friday Acoustic Night/);
  assert.match(read("src/components/Hero.tsx"), /4\.5\+/);
  assert.match(read("src/components/Hero.tsx"), /heroExperiencePanels/);
  assert.match(content, /Saturday/);
  assert.match(content, /6 PM/);
  assert.match(content, /Google reviews/);
  assert.match(content, /30\+/);
  assert.match(content, /Why Choose One/);
  assert.match(content, /Play downstairs\./);
  assert.match(content, /Relax upstairs\./);
  assert.match(content, /Reserve Your Evening/);
  assert.match(content, /groupSizes/);
  assert.match(content, /Birthday/);
  assert.match(content, /Corporate Gathering/);
  assert.match(content, /Arabia/);
  assert.match(content, /147/);
  assert.match(content, /Both/);
  assert.match(content, /venue-rooftop-ambience\.jpg/);
  assert.match(content, /venue-rooftop-seating\.jpg/);
  assert.match(content, /flames-rooftop-live-music-night\.jpg/);
  assert.match(content, /flames-147-snooker-room\.jpg/);
  assert.match(content, /flames-147-ps5-lounge\.jpg/);
  assert.match(content, /flames-147-pool-table\.jpg/);
});

test("conversion and gallery interactions are wired", () => {
  const header = read("src/components/SiteHeader.tsx");
  const floating = read("src/components/FloatingWhatsApp.tsx");
  const gallery = read("src/components/GalleryLightbox.tsx");
  const contact = read("src/components/ContactForm.tsx");
  const reservation = read("src/components/ReservationCTA.tsx");

  assert.match(header, /Reserve/);
  assert.match(header, /site\.logo\.src/);
  assert.match(floating, /wa\.me/);
  assert.match(gallery, /onKeyDown/);
  assert.match(gallery, /aria-modal/);
  assert.match(contact, /WhatsApp/);
  assert.match(contact, /site\.contacts\.flames147\.whatsappNumber/);
  assert.match(reservation, /whatsappMessage/);
  assert.match(reservation, /site\.contacts\.flames147\.whatsappNumber/);
  assert.match(reservation, /href=\{whatsappHref\(whatsappMessage, whatsappNumber\)\}/);
  assert.match(read("app/contact/page.tsx"), /site\.contacts\.flames147\.phone/);
  assert.match(read("src/components/SiteFooter.tsx"), /Flames 147 Instagram/);
  assert.match(read("src/components/LocationHours.tsx"), /site\.contacts\.flames147\.phone/);
  assert.match(read("src/components/SocialProof.tsx"), /socialProof\.note/);
  assert.match(read("src/lib/seo.ts"), /openingHoursSpecification/);
});

test("SEO metadata is unique per route with canonical URLs and structured data", () => {
  const layout = read("app/layout.tsx");
  const seo = read("src/lib/seo.ts");
  const home = read("app/page.tsx");
  const arabia = read("app/hookah-lounge/page.tsx");
  const games = read("app/flames-147/page.tsx");
  const menu = read("app/menu/page.tsx");
  const gallery = read("app/gallery/page.tsx");
  const contactPage = read("app/contact/page.tsx");

  assert.doesNotMatch(layout, /keywords:/);
  assert.match(layout, /localBusinessJsonLd/);
  assert.match(seo, /createPageMetadata/);
  assert.match(seo, /GeoCoordinates/);
  assert.match(seo, /latitude: 26\.861183/);
  assert.match(seo, /longitude: 81\.014289/);
  assert.match(seo, /opens: "00:00"/);
  assert.match(seo, /closes: "23:59"/);
  assert.match(seo, /opens: "11:00"/);
  assert.match(seo, /closes: "05:00"/);
  assert.match(seo, /Cafe seating available all night/);
  assert.match(seo, /schemaStartTimes/);
  assert.match(seo, /"8 PM": "20:00"/);
  assert.match(seo, /eventJsonLd/);
  assert.match(seo, /FAQPage/);
  assert.match(home, /path: "\/"/);
  assert.match(arabia, /Rooftop Hookah Lounge & Live Music - Lucknow/);
  assert.match(arabia, /path: "\/hookah-lounge"/);
  assert.match(games, /Snooker, Pool & PS5 Gaming Lounge - Lucknow/);
  assert.match(games, /path: "\/flames-147"/);
  assert.match(menu, /path: "\/menu"/);
  assert.match(gallery, /path: "\/gallery"/);
  assert.match(contactPage, /path: "\/contact"/);
  assert.notEqual(arabia.match(/image: "([^"]+)"/)?.[1], games.match(/image: "([^"]+)"/)?.[1]);
  assert.match(read("app/sitemap.ts"), /\/flames-147/);
  assert.match(read("app/robots.ts"), /sitemap/);
});

test("homepage uses immersive scroll depth primitives", () => {
  assert.match(read("src/components/usePointerTilt.ts"), /usePointerTilt/);
  assert.match(read("src/components/usePointerTilt.ts"), /useReducedMotion/);
  assert.match(read("src/components/Hero.tsx"), /usePointerTilt/);
  assert.doesNotMatch(read("src/components/ExperienceChooser.tsx"), /useScroll/);
  assert.doesNotMatch(read("src/components/ExperienceChooser.tsx"), /useTransform/);
  assert.match(read("src/components/GalleryPreview.tsx"), /useTransform/);
  assert.match(read("src/components/EventsPreview.tsx"), /useTransform/);
  assert.doesNotMatch(read("app/page.tsx"), /ScrollFlameJourney/);
  const storyScroller = read("src/components/ImmersiveStoryScroller.tsx");
  assert.match(storyScroller, /storySteps/);
  assert.match(storyScroller, /previousProgressRef/);
  assert.match(storyScroller, /scrollDirection/);
  assert.match(storyScroller, /<img/);
  assert.match(storyScroller, /<motion\.img/);
  assert.match(storyScroller, /<StoryVisual active=\{active\}/);
  assert.match(storyScroller, /direction=\{scrollDirection\}/);
  assert.match(storyScroller, /depth-shadow relative h-full w-full/);
  assert.match(storyScroller, /filter: "blur\(7px\)"/);
  assert.match(storyScroller, /rotate: \[direction \* -3\.2, direction \* 1\.35, 0\]/);
  assert.match(storyScroller, /transformOrigin: "50% 8%"/);
  assert.match(storyScroller, /light-sweep/);
  assert.doesNotMatch(storyScroller, /absolute inset-0 overflow-hidden rounded-lg border border-gold\/20 bg-espresso depth-shadow/);
  assert.doesNotMatch(storyScroller, /AnimatePresence/);
  assert.match(storyScroller, /loading=\{index < 2 \? "eager" : "lazy"\}/);
  assert.doesNotMatch(storyScroller, /clipPath/);
  assert.doesNotMatch(storyScroller, /backgroundImage/);
  assert.doesNotMatch(storyScroller, /opacity-0 scale-\[1\.035\]/);
  assert.match(read("app/page.tsx"), /ImmersiveStoryScroller/);
  assert.match(read("app/globals.css"), /preserve-3d/);
  assert.match(read("app/globals.css"), /scroll-flame-core/);
});

test("global premium elements have subtle dynamic flame ambience", () => {
  const css = read("app/globals.css");
  const layout = read("app/layout.tsx");
  const ambience = read("src/components/FlameAmbience.tsx");

  assert.match(layout, /FlameAmbience/);
  assert.match(ambience, /site-flame-layer/);
  assert.match(ambience, /flame-bloom/);
  assert.match(ambience, /ember/);
  assert.match(css, /body::before/);
  assert.match(css, /body::after/);
  assert.match(css, /ember-field-drift/);
  assert.match(css, /flame-bloom-pulse/);
  assert.match(css, /flame-ribbon-rise/);
  assert.match(css, /ember-rise/);
  assert.match(css, /flame-aura-pulse/);
  assert.doesNotMatch(css, /:is\([^)]*\.motion-sheen[^)]*\)\s*\{\s*animation:\s*flame-aura-pulse/s);
  assert.doesNotMatch(css, /:is\([^)]*\.depth-shadow[^)]*\)\s*\{\s*animation:\s*flame-aura-pulse/s);
  assert.doesNotMatch(css, /will-change:\s*filter/);
  assert.doesNotMatch(css, /filter:\s*drop-shadow/);
  assert.doesNotMatch(css, /:where\(.luxury-card, \.motion-sheen, \.depth-shadow\)::before/);
  assert.doesNotMatch(css, /mask-composite|-webkit-mask/);
  assert.match(css, /prefers-reduced-motion: reduce/);
});
