"use client";

import { CalendarDays, Clock, MessageCircle } from "@/components/Icons";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { events } from "@/content/site";
import { whatsappHref } from "@/lib/utils";

const eventsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const eventVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58 }
  }
};

type EventItem = (typeof events)[number];

function EventPosterCard({
  event,
  index,
  reduceMotion
}: {
  event: EventItem;
  index: number;
  reduceMotion: boolean | null;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 0.52, 1], index % 2 === 0 ? [36, -8, -24] : [54, 0, -38]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.52, 1], index % 2 === 0 ? [-2.2, 0, 1.2] : [2.2, 0, -1.2]);
  const scale = useTransform(scrollYProgress, [0, 0.52, 1], [0.965, 1, 1.01]);

  return (
    <motion.article
      ref={cardRef}
      key={event.title}
      style={reduceMotion ? undefined : { y, rotateZ, scale, transformPerspective: 1100 }}
      variants={eventVariants}
      whileHover={reduceMotion ? undefined : { scale: 1.018, rotateZ: 0 }}
      transition={{ duration: 0.22 }}
      className={[
        "motion-sheen depth-shadow preserve-3d group relative min-h-[320px] overflow-hidden rounded-lg border border-ivory/10 bg-espresso",
        index === 0 ? "lg:col-span-2" : "",
        index === 3 ? "lg:col-span-2" : ""
      ].join(" ")}
    >
      <Image
        src={event.image}
        alt={`${event.title} at Flames Lucknow`}
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
        style={{ objectPosition: event.position ?? "center" }}
        className="object-cover brightness-110 saturate-125 transition duration-500 group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.02)_0%,rgba(7,6,5,0.24)_42%,rgba(7,6,5,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6" style={{ transform: "translateZ(34px)" }}>
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-charcoal/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur">
            <CalendarDays size={14} aria-hidden />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-charcoal/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-smoke backdrop-blur">
            <Clock size={14} aria-hidden />
            {event.time}
          </span>
        </div>
        <h3 className="font-display text-3xl leading-tight text-ivory">{event.title}</h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">{event.meta}</p>
        <p className="mt-3 text-sm leading-6 text-ivory/75">{event.description}</p>
        <a
          href={whatsappHref(event.message)}
          className="focus-ring mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-gold/30 bg-charcoal/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur transition duration-200 hover:bg-gold hover:text-charcoal"
        >
          <MessageCircle size={15} aria-hidden />
          {event.cta}
        </a>
      </div>
    </motion.article>
  );
}

export function EventsPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-5"
      variants={eventsVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {events.map((event, index) => (
        <EventPosterCard key={event.title} event={event} index={index} reduceMotion={reduceMotion} />
      ))}
    </motion.div>
  );
}
