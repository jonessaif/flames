"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
};

const pageHeroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const pageHeroItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65 }
  }
};

export function PageHero({ eyebrow, title, description, image = "/images/flames-lounge-hero.png", children }: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-[var(--header-height)]">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        priority
        className="ken-burns-subtle absolute inset-0 -z-20 object-cover opacity-[0.62]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,6,5,0.94),rgba(7,6,5,0.64)),linear-gradient(180deg,rgba(7,6,5,0.14),#070605)]" />
      <div className="ambient-shift absolute inset-0 -z-10 bg-premium-radial opacity-25" />
      <div className="noise-layer absolute inset-0 -z-10 opacity-25" />
      <motion.div
        className="container-shell flex min-h-[460px] flex-col justify-center py-20"
        variants={pageHeroContainer}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.p variants={pageHeroItem} className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          {eyebrow}
        </motion.p>
        <motion.h1 variants={pageHeroItem} className="text-balance mt-4 max-w-4xl font-display text-5xl leading-tight text-ivory md:text-7xl">
          {title}
        </motion.h1>
        <motion.p variants={pageHeroItem} className="mt-5 max-w-2xl text-lg leading-8 text-ivory/80">
          {description}
        </motion.p>
        {children ? <motion.div variants={pageHeroItem} className="mt-8">{children}</motion.div> : null}
      </motion.div>
    </section>
  );
}
