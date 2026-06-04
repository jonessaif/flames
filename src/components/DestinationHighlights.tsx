"use client";

import { Clock, Flame, Gamepad2, Gem, Music2, Sparkles, Trophy } from "@/components/Icons";
import { motion, useReducedMotion } from "framer-motion";
import { destinationHighlights } from "@/content/site";

const icons = [Music2, Sparkles, Trophy, Gamepad2, Flame, Clock];

const highlightGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const highlightCard = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 }
  }
};

export function DestinationHighlights() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      variants={highlightGrid}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {destinationHighlights.map((item, index) => {
        const Icon = icons[index] ?? Gem;
        return (
          <motion.article
            key={item.title}
            variants={highlightCard}
            whileHover={reduceMotion ? undefined : { y: -7, scale: 1.012 }}
            transition={{ duration: 0.22 }}
            className="luxury-card motion-sheen rounded-lg p-6 transition duration-300 hover:border-gold/30"
          >
            <div className="mb-6 grid size-12 place-items-center rounded-full bg-gold/10 text-gold">
              <Icon size={23} aria-hidden />
            </div>
            <h3 className="font-display text-3xl text-ivory">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-smoke">{item.description}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
