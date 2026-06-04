"use client";

import { Clock, Flame, Music2, Sparkles, Trophy } from "@/components/Icons";
import { motion, useReducedMotion } from "framer-motion";
import { statsStrip } from "@/content/site";

const statIcons = [Sparkles, Flame, Music2, Trophy, Clock];

const stripVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07
    }
  }
};

const statVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48 }
  }
};

export function StatsStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid gap-2 rounded-lg border border-gold/15 bg-ivory/[0.035] p-2 backdrop-blur md:grid-cols-5"
      variants={stripVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {statsStrip.map((stat, index) => {
        const Icon = statIcons[index] ?? Sparkles;

        return (
          <motion.article
            key={`${stat.value}-${stat.label}`}
            variants={statVariants}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.2 }}
            className="motion-sheen rounded-md border border-ivory/10 bg-charcoal/45 p-5"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <Icon size={22} className="text-gold" aria-hidden />
              <span className="h-px flex-1 bg-gold/20" />
            </div>
            <p className="font-display text-4xl leading-none text-ivory">{stat.value}</p>
            <h3 className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{stat.label}</h3>
            <p className="mt-3 text-sm leading-6 text-smoke">{stat.description}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
