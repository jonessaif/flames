"use client";

import { ArrowRight } from "@/components/Icons";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { crossExperience } from "@/content/site";

export function CrossExperienceCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-34, 34]);
  const textY = useTransform(scrollYProgress, [0, 0.55, 1], [36, 0, -18]);
  const cardY = useTransform(scrollYProgress, [0, 0.55, 1], [64, 0, -34]);
  const leftPanelY = useTransform(scrollYProgress, [0, 0.55, 1], [44, -8, -26]);
  const rightPanelY = useTransform(scrollYProgress, [0, 0.55, 1], [76, 0, -42]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.55], [-5, 0]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.55], [5, 0]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden border-y border-ivory/10 bg-ink py-16 md:py-24">
      <motion.div style={reduceMotion ? undefined : { y: bgY }} className="absolute inset-0 -z-20">
        <Image
          src={crossExperience.image}
          alt=""
          fill
          sizes="100vw"
          className="ken-burns-subtle object-cover opacity-35"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,6,5,0.96)_0%,rgba(7,6,5,0.78)_48%,rgba(7,6,5,0.46)_100%)]" />
      <div className="ambient-shift absolute inset-0 -z-10 bg-premium-radial opacity-25" />
      <div className="noise-layer absolute inset-0 -z-10 opacity-25" />

      <div className="container-shell">
        <div className="depth-stage grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div style={reduceMotion ? undefined : { y: textY }}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {crossExperience.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-7xl">
              {crossExperience.title}
            </h2>
          </motion.div>
          <motion.div
            style={reduceMotion ? undefined : { y: cardY, rotateX: rightRotate, transformPerspective: 1000 }}
            className="luxury-card motion-sheen depth-shadow preserve-3d rounded-lg p-6 md:p-8"
          >
            <p className="whitespace-pre-line font-display text-4xl leading-tight text-gold md:text-5xl">
              {crossExperience.description}
            </p>
            <p className="mt-5 text-lg leading-8 text-ivory/80">{crossExperience.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/flames-147" variant="secondary" icon={<ArrowRight size={17} aria-hidden />}>
                Start Downstairs
              </ButtonLink>
              <ButtonLink href="/hookah-lounge" icon={<ArrowRight size={17} aria-hidden />}>
                Go Upstairs
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <div className="depth-stage mt-10 grid gap-4 lg:grid-cols-2">
          {crossExperience.panels.map((panel, index) => (
            <motion.article
              key={panel.name}
              style={
                reduceMotion
                  ? undefined
                  : {
                      y: index === 0 ? leftPanelY : rightPanelY,
                      rotateY: index === 0 ? leftRotate : rightRotate,
                      transformPerspective: 1100
                    }
              }
              whileHover={reduceMotion ? undefined : { scale: 1.012, rotateY: 0 }}
              transition={{ duration: 0.22 }}
              className="motion-sheen depth-shadow preserve-3d group relative min-h-[420px] overflow-hidden rounded-lg border border-gold/20 bg-espresso"
            >
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectPosition: panel.position ?? "center" }}
                className="object-cover brightness-110 saturate-125 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0)_0%,rgba(7,6,5,0.24)_46%,rgba(7,6,5,0.86)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8" style={{ transform: "translateZ(34px)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{panel.label}</p>
                <h3 className="mt-3 font-display text-5xl text-ivory">{panel.name}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/80">{panel.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
