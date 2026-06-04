"use client";

import { ChevronLeft, ChevronRight, Maximize2, X } from "@/components/Icons";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryImages } from "@/content/site";

const galleryGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const galleryTile = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export function GalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];
  const reduceMotion = useReducedMotion();

  function move(direction: -1 | 1) {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + galleryImages.length) % galleryImages.length;
    });
  }

  useEffect(() => {
    if (activeIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex]);

  return (
    <>
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={galleryGrid}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {galleryImages.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            variants={galleryTile}
            whileHover={reduceMotion ? undefined : { y: -6, scale: 1.012 }}
            transition={{ duration: 0.22 }}
            className="focus-ring motion-sheen group relative min-h-[290px] overflow-hidden rounded-lg border border-ivory/10 bg-espresso text-left md:min-h-[360px]"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {image.category}
                </span>
                <span className="mt-2 block font-display text-3xl text-ivory">{image.title}</span>
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ivory/10 text-ivory">
                <Maximize2 size={18} aria-hidden />
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            ref={dialogRef}
            className="fixed inset-0 z-[70] grid place-items-center bg-charcoal/90 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.title} gallery image`}
            tabIndex={-1}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setActiveIndex(null);
              if (event.key === "ArrowLeft") move(-1);
              if (event.key === "ArrowRight") move(1);
            }}
          >
            <button
              type="button"
              className="focus-ring absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-ivory/10 text-ivory transition hover:bg-ivory/20"
              aria-label="Close gallery image"
              onClick={() => setActiveIndex(null)}
            >
              <X size={20} aria-hidden />
            </button>
            <button
              type="button"
              className="focus-ring absolute left-5 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-ivory transition hover:bg-ivory/20 md:grid"
              aria-label="Previous image"
              onClick={() => move(-1)}
            >
              <ChevronLeft size={22} aria-hidden />
            </button>
            <button
              type="button"
              className="focus-ring absolute right-5 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-ivory transition hover:bg-ivory/20 md:grid"
              aria-label="Next image"
              onClick={() => move(1)}
            >
              <ChevronRight size={22} aria-hidden />
            </button>
            <motion.div
              className="relative h-[72vh] w-full max-w-5xl overflow-hidden rounded-lg border border-gold/20 bg-espresso shadow-2xl"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.28 }}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <motion.div
              className="mt-4 text-center"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.08 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {activeImage.category}
              </p>
              <p className="mt-2 font-display text-3xl text-ivory">{activeImage.title}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
