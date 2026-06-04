"use client";

import { ArrowRight } from "@/components/Icons";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { galleryImages } from "@/content/site";

const galleryVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07
    }
  }
};

const tileVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55 }
  }
};

type GalleryImage = (typeof galleryImages)[number];

function DepthGalleryTile({
  image,
  index,
  reduceMotion
}: {
  image: GalleryImage;
  index: number;
  reduceMotion: boolean | null;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "end start"]
  });
  const isLarge = index === 0 || index === 3 || index === 5 || index === 6;
  const y = useTransform(scrollYProgress, [0, 0.5, 1], isLarge ? [24, -8, -20] : [46, 0, -34]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], isLarge ? [4, 0, -3] : [7, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 1.025]);

  return (
    <motion.div
      ref={tileRef}
      style={reduceMotion ? undefined : { y, rotateX, scale, transformPerspective: 1000 }}
      variants={tileVariants}
      whileHover={reduceMotion ? undefined : { scale: 1.025, rotateX: 0 }}
      transition={{ duration: 0.22 }}
      className={[
        "motion-sheen depth-shadow preserve-3d relative overflow-hidden rounded-lg border border-ivory/10 bg-espresso",
        index === 0 ? "md:col-span-2 md:row-span-2" : "",
        index === 3 ? "md:row-span-2" : "",
        index === 5 ? "md:col-span-2" : "",
        index === 6 ? "md:col-span-2" : ""
      ].join(" ")}
    >
      <Link href="/gallery" className="focus-ring group block size-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          style={{ objectPosition: image.position ?? "center" }}
          className="object-cover brightness-110 saturate-125 transition duration-700 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5" style={{ transform: "translateZ(32px)" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{image.category}</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl text-ivory">{image.title}</h3>
            {index === 0 ? <ArrowRight size={18} className="text-gold transition duration-300 group-hover:translate-x-1" aria-hidden /> : null}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function GalleryPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid auto-rows-[240px] gap-4 md:grid-cols-4 md:auto-rows-[220px]"
      variants={galleryVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {galleryImages.slice(0, 8).map((image, index) => (
        <DepthGalleryTile key={image.src} image={image} index={index} reduceMotion={reduceMotion} />
      ))}
    </motion.div>
  );
}
