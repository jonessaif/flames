"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const journeyStops = [
  { label: "Hero", at: 0.02 },
  { label: "Two Floors", at: 0.18 },
  { label: "Moments", at: 0.36 },
  { label: "Events", at: 0.52 },
  { label: "One Plan", at: 0.68 },
  { label: "Reserve", at: 0.9 }
];

const dropScaleInput = [
  0,
  journeyStops[0].at,
  0.1,
  journeyStops[1].at,
  0.27,
  journeyStops[2].at,
  0.44,
  journeyStops[3].at,
  0.6,
  journeyStops[4].at,
  0.79,
  journeyStops[5].at,
  1
];

const dropScaleOutput = [1.22, 1.22, 0.38, 1.16, 0.42, 1.18, 0.4, 1.13, 0.42, 1.18, 0.38, 1.14, 0.78];
const sourceScaleOutput = [1.18, 1.14, 0.96, 1.1, 0.98, 1.12, 0.97, 1.1, 0.98, 1.12, 0.96, 1.08, 0.98];

export function ScrollFlameJourney() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 24,
    mass: 0.35
  });
  const [activeStop, setActiveStop] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    const closest = journeyStops.reduce(
      (current, stop, index) => {
        const distance = Math.abs(stop.at - latest);
        return distance < current.distance ? { index, distance } : current;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    );

    setActiveStop(closest.index);
  });

  const flameY = useTransform(progress, [0, 1], ["11vh", "82vh"]);
  const flameX = useTransform(progress, [0, 0.18, 0.36, 0.52, 0.68, 0.9, 1], [0, 22, -10, 26, -18, 12, 0]);
  const flameScale = useTransform(progress, dropScaleInput, dropScaleOutput);
  const sourceScale = useTransform(progress, dropScaleInput, sourceScaleOutput);
  const dropOpacity = useTransform(progress, dropScaleInput, [0.95, 0.95, 0.78, 1, 0.78, 1, 0.76, 1, 0.78, 1, 0.76, 1, 0.68]);
  const flameRotate = useTransform(progress, [0, 0.5, 1], [-8, 6, -5]);
  const trailHeight = useTransform(progress, [0, 1], ["2%", "100%"]);

  if (reduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-y-0 right-4 z-40 hidden w-28 md:block xl:right-8">
      <motion.div
        aria-hidden
        style={{ scale: sourceScale }}
        className="absolute left-1/2 top-[7vh] -translate-x-1/2"
      >
        <div className="relative size-20">
          <div className="absolute inset-0 rounded-full bg-ember/20 blur-2xl" />
          <div className="scroll-flame-core absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-1/2 top-[66%] h-9 w-7 -translate-x-1/2 rounded-full bg-gold/15 blur-lg" />
        </div>
      </motion.div>

      <div className="absolute left-1/2 top-[12vh] h-[70vh] w-px -translate-x-1/2 overflow-hidden bg-ivory/10">
        <motion.div
          style={{ height: trailHeight }}
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-gold via-ember to-transparent shadow-[0_0_22px_rgba(216,168,75,0.8)]"
        />
      </div>

      {journeyStops.map((stop, index) => {
        const isActive = index === activeStop;

        return (
          <div
            key={stop.label}
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3"
            style={{ top: `${12 + stop.at * 70}vh` }}
          >
            <span
              className={[
                "size-2 rounded-full border transition duration-300",
                isActive ? "border-gold bg-gold shadow-[0_0_18px_rgba(216,168,75,0.9)]" : "border-gold/30 bg-charcoal/70"
              ].join(" ")}
            />
            <span
              className={[
                "hidden min-w-20 text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition duration-300 xl:block",
                isActive ? "translate-x-0 text-gold opacity-100" : "translate-x-1 text-smoke opacity-45"
              ].join(" ")}
            >
              {stop.label}
            </span>
          </div>
        );
      })}

      <motion.div
        aria-hidden
        style={{ y: flameY, x: flameX, scale: flameScale, rotate: flameRotate, opacity: dropOpacity }}
        className="absolute left-1/2 top-0 -translate-x-1/2"
      >
        <div className="relative size-14">
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl" />
          <div className="scroll-flame-core absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-1/2 top-[58%] h-12 w-px -translate-x-1/2 bg-gradient-to-b from-ember/75 to-transparent blur-[1px]" />
        </div>
      </motion.div>
    </div>
  );
}
