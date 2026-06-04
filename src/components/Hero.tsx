"use client";

import { ArrowRight, CalendarDays, Flame, Gamepad2, Music2, Sparkles, Trophy } from "@/components/Icons";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { hero, site } from "@/content/site";
import { usePointerTilt } from "@/components/usePointerTilt";

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const revealItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68 }
  }
};

const heroActions = [
  {
    href: "/contact",
    title: "Reserve Table",
    subtitle: "Your Evening Awaits",
    Icon: CalendarDays,
    isPrimary: true
  },
  {
    href: "/hookah-lounge",
    title: "Explore Arabia",
    subtitle: "Rooftop Lounge",
    Icon: Sparkles,
    isPrimary: false
  },
  {
    href: "/flames-147",
    title: "Explore 147",
    subtitle: "Snooker & Gaming",
    Icon: Gamepad2,
    isPrimary: false
  }
];

const heroTrustStrip = [
  { value: "4.5+", label: "Google rating" },
  { value: "Every Weekend", label: "Live music" },
  { value: "Pro Tables", label: "Snooker & pool" },
  { value: "Open Late", label: "Evening plans" }
];

const heroExperiencePanels = [
  {
    floor: "Upstairs",
    name: "Flames of Arabia",
    src: "/images/flames-arabia-social-club-hero.jpg",
    position: "center 46%",
    details: ["Rooftop Lounge", "Live Music", "Premium Hookah"]
  },
  {
    floor: "Downstairs",
    name: "Flames 147",
    src: "/images/flames-147-snooker-player-new.jpg",
    position: "center 50%",
    details: ["Professional Snooker", "Pool", "PS5 Gaming"]
  }
];

const heroFeatureStrip = [
  { title: "Live Music", detail: "Weekend nights", Icon: Music2 },
  { title: "Rooftop Lounge", detail: "Open-air mood", Icon: Sparkles },
  { title: "Premium Hookah", detail: "Signature blends", Icon: Flame },
  { title: "Professional Snooker", detail: "Downstairs at 147", Icon: Trophy }
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const heroTilt = usePointerTilt(5);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.02]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);
  const contentLift = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const visualDepth = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const featureDepth = useTransform(scrollYProgress, [0, 1], [0, 26]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-[100svh] overflow-hidden bg-charcoal pt-[var(--header-height)]">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -z-30 opacity-70 blur-[1px]">
        <div className="grid size-full grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div className="relative overflow-hidden">
            <Image
              src="/images/flames-arabia-social-club-hero.jpg"
              alt="Rooftop hookah and evening ambience at Flames"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 46%" }}
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/flames-147-snooker-player-new.jpg"
              alt="Pool and snooker energy at Flames 147"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_34%_44%,rgba(7,6,5,0.36)_0%,rgba(7,6,5,0.72)_38%,rgba(7,6,5,0.94)_76%),linear-gradient(90deg,rgba(7,6,5,0.95)_0%,rgba(7,6,5,0.76)_38%,rgba(7,6,5,0.52)_62%,rgba(7,6,5,0.76)_100%),linear-gradient(180deg,rgba(7,6,5,0.42)_0%,rgba(7,6,5,0.7)_58%,#070605_100%)]" />
      <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent md:hidden" />
      <div className="absolute inset-y-0 left-1/2 -z-10 hidden w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent md:block" />
      <div className="ambient-shift absolute inset-0 -z-10 bg-premium-radial opacity-20" />
      <div className="noise-layer absolute inset-0 -z-10 opacity-25" />

      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[22%] hidden h-px w-40 rotate-[-18deg] bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block"
        initial={reduceMotion ? false : { opacity: 0, x: -24 }}
        animate={reduceMotion ? undefined : { opacity: [0.15, 0.45, 0.15], x: [0, 24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[34%] hidden h-px w-52 rotate-[16deg] bg-gradient-to-r from-transparent via-ivory/25 to-transparent lg:block"
        initial={reduceMotion ? false : { opacity: 0, x: 18 }}
        animate={reduceMotion ? undefined : { opacity: [0.12, 0.34, 0.12], x: [0, -26, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="container-shell grid min-h-[calc(100svh-var(--header-height))] gap-7 py-8 md:py-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
        <motion.div
          style={reduceMotion ? undefined : { y: contentLift }}
          className="relative z-10 max-w-xl"
          variants={revealContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div variants={revealItem} className="mb-6">
            <p className="font-display text-4xl uppercase tracking-[0.28em] text-gold md:text-5xl">
              {site.name}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-ivory/80">
              {hero.eyebrow}
            </p>
          </motion.div>

          <motion.h1 variants={revealItem} className="text-balance font-display text-4xl leading-[0.9] text-ivory sm:text-5xl md:text-6xl xl:text-7xl">
            {hero.title.split("\n").map((line) => (
              <span key={line} className={line.includes("Relax") ? "block text-gold" : "block"}>
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={revealItem} className="mt-5 max-w-lg text-base leading-7 text-ivory/80 md:text-lg">
            {hero.subtitle}
          </motion.p>

          <motion.div
            variants={revealItem}
            className="mt-6 grid grid-cols-2 gap-2 rounded-lg border border-ivory/10 bg-charcoal/50 p-2 backdrop-blur-xl"
          >
            {heroTrustStrip.map((item) => (
              <div key={item.label} className="rounded-md border border-ivory/10 bg-ivory/[0.04] px-3 py-3">
                <p className="text-sm font-semibold text-ivory">{item.value}</p>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold/80">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={revealItem} className="mt-6 grid gap-3 sm:grid-cols-[1.18fr_1fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.18fr_1fr_1fr]">
            {heroActions.map(({ href, title, subtitle, Icon, isPrimary }) => (
              <motion.div
                key={title}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.015 }}
                transition={{ duration: 0.22 }}
              >
                <Link
                  href={href}
                  className={[
                    "focus-ring motion-sheen flex min-h-[72px] items-center justify-center gap-3 rounded-lg border px-5 py-4 text-left transition duration-300",
                    isPrimary
                      ? "border-gold bg-gold text-charcoal shadow-gold-soft hover:bg-ember"
                      : "border-gold/30 bg-charcoal/60 text-ivory backdrop-blur hover:bg-ivory/10"
                  ].join(" ")}
                >
                  <Icon size={21} aria-hidden className="shrink-0" />
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.14em]">{title}</span>
                    <span className={isPrimary ? "mt-1 block text-sm text-charcoal/80" : "mt-1 block text-sm text-smoke"}>
                      {subtitle}
                    </span>
                  </span>
                  <ArrowRight size={16} aria-hidden className="ml-auto hidden shrink-0 sm:block" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={revealItem} className="motion-sheen group relative mt-6 h-[440px] overflow-hidden rounded-lg border border-gold/20 bg-espresso shadow-2xl sm:h-[310px] lg:hidden">
            <div className="absolute inset-0 grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
              {heroExperiencePanels.map((panel, index) => (
                <div key={panel.name} className="relative overflow-hidden">
                  <Image
                    src={panel.src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    style={{ objectPosition: panel.position }}
                    className="object-cover brightness-110 saturate-125 transition duration-700 group-hover:scale-[1.025]"
                  />
                  <div
                    className={[
                      "absolute",
                      index === 0
                        ? "inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-charcoal/30 sm:inset-x-auto sm:inset-y-0 sm:right-0 sm:h-auto sm:w-16 sm:bg-gradient-to-r"
                        : "inset-x-0 top-0 h-20 bg-gradient-to-t from-transparent to-charcoal/30 sm:inset-x-auto sm:inset-y-0 sm:left-0 sm:h-auto sm:w-16 sm:bg-gradient-to-l"
                    ].join(" ")}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: mediaY }} className="depth-stage relative z-0 hidden lg:block">
          <motion.div
            {...heroTilt.handlers}
            style={heroTilt.style}
            whileHover={reduceMotion ? undefined : { y: -5, scale: 1.006 }}
            transition={{ duration: 0.28 }}
            className="motion-sheen depth-shadow preserve-3d group relative h-[650px] overflow-hidden rounded-lg border border-gold/20 bg-espresso"
          >
            <motion.div style={reduceMotion ? undefined : { y: visualDepth }} className="absolute inset-0 grid grid-cols-2">
              {heroExperiencePanels.map((panel, index) => (
                <div key={panel.name} className="relative overflow-hidden">
                  <Image
                    src={panel.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    style={{ objectPosition: panel.position }}
                    className="object-cover brightness-110 saturate-125 transition duration-700 group-hover:scale-[1.025]"
                  />
                  <div
                    className={[
                      "absolute inset-y-0 w-24",
                      index === 0 ? "right-0 bg-gradient-to-r from-transparent to-charcoal/40" : "left-0 bg-gradient-to-l from-transparent to-charcoal/40"
                    ].join(" ")}
                  />
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(7,6,5,0)_0%,rgba(7,6,5,0.12)_48%,rgba(7,6,5,0.42)_100%),linear-gradient(180deg,rgba(7,6,5,0.03)_0%,rgba(7,6,5,0.14)_48%,rgba(7,6,5,0.5)_100%)]" />
            <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          style={reduceMotion ? undefined : { y: featureDepth }}
          variants={revealContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="relative z-10 grid gap-3 rounded-lg border border-ivory/10 bg-charcoal/50 p-3 backdrop-blur-xl sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
        >
          {heroFeatureStrip.map(({ title, detail, Icon }) => (
            <motion.div
              key={title}
              variants={revealItem}
              whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="motion-sheen flex min-h-[132px] items-center gap-4 rounded-md border border-ivory/10 bg-ivory/[0.045] p-5 transition duration-300 hover:border-gold/30 md:min-h-[150px] md:flex-col md:justify-center md:text-center"
            >
              <Icon size={36} aria-hidden className="shrink-0 text-gold" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.17em] text-gold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-smoke">{detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
