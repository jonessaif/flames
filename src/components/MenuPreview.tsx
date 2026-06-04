"use client";

import { ArrowRight } from "@/components/Icons";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { menuPreview } from "@/content/site";

const menuGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const menuCard = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58 }
  }
};

export function MenuPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      variants={menuGrid}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {menuPreview.map((item, index) => (
        <motion.div
          key={item.title}
          variants={menuCard}
          whileHover={reduceMotion ? undefined : { y: -6, scale: 1.012 }}
          transition={{ duration: 0.22 }}
          className="motion-sheen relative min-h-[340px] overflow-hidden rounded-lg border border-ivory/10 bg-espresso"
        >
          <Link href={item.href} className="focus-ring group block size-full">
            <Image
              src={item.image}
              alt={`${item.title} at Flames Lucknow`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.1)_0%,rgba(7,6,5,0.9)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {index === 0 ? "Signature" : "Evening Support"}
              </p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl text-ivory">{item.title}</h3>
                <ArrowRight className="shrink-0 text-gold transition duration-300 group-hover:translate-x-1" size={18} aria-hidden />
              </div>
              <p className="mt-3 text-sm leading-6 text-ivory/75">{item.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
