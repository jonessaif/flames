"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const storySteps = [
  {
    eyebrow: "Arrival",
    title: "Start downstairs.",
    body: "Walk into Flames 147 for snooker, pool, PS5 and the first round of plans.",
    image: "/images/flames-147-entrance.jpg",
    alt: "Flames 147 cafe and snooker club entrance",
    position: "center"
  },
  {
    eyebrow: "Downstairs",
    title: "Play a serious frame.",
    body: "Professional tables, private-cabin energy and friendly competition before the night moves upstairs.",
    image: "/images/flames-147-snooker-player-new.jpg",
    alt: "Guest playing snooker at Flames 147",
    position: "center 50%"
  },
  {
    eyebrow: "Upstairs",
    title: "Shift into rooftop mode.",
    body: "Warm lights, music, hookah and coffee dates at Flames of Arabia.",
    image: "/images/flames-arabia-social-club-hero.jpg",
    alt: "Couple sitting in the rooftop lounge at Flames of Arabia",
    position: "center 46%"
  },
  {
    eyebrow: "The night",
    title: "Stay for the atmosphere.",
    body: "Friends, couples, live music, hookah sessions and late-night conversations in one destination.",
    image: "/images/flames-rooftop-evening-crowd.jpg",
    alt: "Rooftop evening crowd at Flames",
    position: "center 55%"
  }
];

function StoryVisual({
  active,
  direction,
  reduceMotion
}: {
  active: (typeof storySteps)[number];
  direction: 1 | -1;
  reduceMotion: boolean;
}) {
  return (
    <div className="depth-shadow relative h-full w-full overflow-hidden rounded-lg border border-gold/20 bg-espresso">
      <motion.img
        key={active.image}
        src={active.image}
        alt={active.alt}
        loading="eager"
        initial={reduceMotion ? false : { opacity: 0.62, y: direction * 28, rotate: direction * -3.2, scale: 1.035, filter: "blur(7px)" }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: [direction * -3.2, direction * 1.35, 0], scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover brightness-110 saturate-125"
        style={{ objectPosition: active.position, transformOrigin: "50% 8%" }}
      />
      <motion.div
        key={`${active.image}-light-sweep`}
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0.28, x: "-90%" }}
        animate={reduceMotion ? undefined : { opacity: 0, x: "90%" }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 left-[-15%] w-[55%] skew-x-[-12deg] bg-gradient-to-r from-transparent via-gold/25 to-transparent"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.03)_0%,rgba(7,6,5,0.16)_48%,rgba(7,6,5,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(216,168,75,0.15),transparent_24rem)]" />
      <motion.div
        key={`${active.image}-caption`}
        initial={reduceMotion ? false : { opacity: 0, y: direction * 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 p-7"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{active.eyebrow}</p>
        <h3 className="mt-2 font-display text-5xl leading-none text-ivory">{active.title}</h3>
      </motion.div>
    </div>
  );
}

export function ImmersiveStoryScroller() {
  const sectionRef = useRef<HTMLElement>(null);
  const previousProgressRef = useRef(0);
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<1 | -1>(1);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const visualY = useTransform(scrollYProgress, [0, 0.5, 1], [28, 0, -28]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.985, 1, 1.012]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const delta = latest - previousProgressRef.current;
    if (Math.abs(delta) > 0.002) {
      setScrollDirection(delta > 0 ? 1 : -1);
      previousProgressRef.current = latest;
    }

    const nextStep = Math.min(storySteps.length - 1, Math.max(0, Math.floor(latest * storySteps.length)));
    setActiveStep(nextStep);
  });

  const active = storySteps[activeStep];

  return (
    <section id="flames-story" ref={sectionRef} className="relative border-y border-ivory/10 bg-charcoal md:min-h-[360vh]">
      <div className="noise-layer absolute inset-0 opacity-20" aria-hidden />

      <div className="container-shell relative py-16 md:hidden">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">One evening flow</p>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] text-ivory">
          Play first.
          <span className="block text-gold">Relax after.</span>
        </h2>
        <div className="mt-8 grid gap-5">
          {storySteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="overflow-hidden rounded-lg border border-gold/20 bg-espresso shadow-2xl"
            >
              <img
                src={step.image}
                alt={step.alt}
                loading={index < 2 ? "eager" : "lazy"}
                className="h-72 w-full object-cover brightness-110 saturate-125"
                style={{ objectPosition: step.position }}
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{step.eyebrow}</p>
                <h3 className="mt-3 font-display text-3xl leading-none text-ivory">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-smoke">{step.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="sticky top-0 hidden min-h-screen overflow-hidden pt-[var(--header-height)] md:block">
        <div className="container-shell grid min-h-[calc(100vh-var(--header-height))] items-center gap-10 py-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">One evening flow</p>
            <div className="relative min-h-[250px]">
              <motion.div
                key={active.title}
                initial={reduceMotion ? false : { opacity: 0, y: scrollDirection * 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-0"
              >
                <h2 className="mt-4 font-display text-6xl leading-[0.92] text-ivory xl:text-7xl">
                  {active.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/78">{active.body}</p>
              </motion.div>
            </div>

            <div className="mt-9 grid gap-3">
              {storySteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => {
                      setScrollDirection(index >= activeStep ? 1 : -1);
                      setActiveStep(index);
                    }}
                    className={[
                      "focus-ring flex items-center gap-3 rounded-lg border p-3 text-left transition duration-300",
                      isActive
                        ? "border-gold/45 bg-gold/10 text-ivory"
                        : "border-ivory/10 bg-ivory/[0.035] text-smoke hover:border-gold/25 hover:bg-ivory/[0.055]"
                    ].join(" ")}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/25 bg-gold/10 text-sm font-semibold text-gold">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold">{step.eyebrow}</span>
                      <span className="mt-1 block text-sm">{step.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            style={reduceMotion ? undefined : { y: visualY, scale: visualScale }}
            className="depth-stage relative z-10 h-[68vh] min-h-[560px]"
          >
            <div className="absolute -left-7 top-8 h-[calc(100%-4rem)] w-px overflow-hidden bg-ivory/10">
              <motion.div
                style={{ height: progressHeight }}
                className="absolute left-0 top-0 w-px bg-gradient-to-b from-gold via-ember to-transparent shadow-[0_0_22px_rgba(216,168,75,0.8)]"
              />
            </div>

            <StoryVisual active={active} direction={scrollDirection} reduceMotion={Boolean(reduceMotion)} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
