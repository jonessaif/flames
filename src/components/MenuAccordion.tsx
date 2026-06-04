"use client";

import { ChevronDown } from "@/components/Icons";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { menuSections } from "@/content/site";
import { cn } from "@/lib/utils";

const accordionGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055
    }
  }
};

const accordionSection = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42 }
  }
};

const menuItemsGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04
    }
  }
};

const menuItemReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32 }
  }
};

export function MenuAccordion() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set([menuSections[0].title, menuSections[1].title])
  );
  const reduceMotion = useReducedMotion();

  function toggle(title: string) {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  }

  return (
    <motion.div
      className="grid gap-4"
      variants={accordionGrid}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {menuSections.map((section) => {
        const isOpen = openSections.has(section.title);
        const panelId = `${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-panel`;

        return (
          <motion.section
            key={section.title}
            variants={accordionSection}
            className="luxury-card motion-sheen overflow-hidden rounded-lg"
          >
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(section.title)}
            >
              <span>
                <span className="block font-display text-3xl text-ivory">{section.title}</span>
                {section.note ? (
                  <span className="mt-1 block text-sm text-smoke">{section.note}</span>
                ) : null}
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/25 text-gold">
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={cn("transition duration-200", isOpen && "rotate-180")}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-t border-ivory/10"
                >
                  <motion.div
                    className="grid gap-3 p-5 md:grid-cols-2 md:p-7"
                    variants={menuItemsGrid}
                    initial={reduceMotion ? false : "hidden"}
                    animate="visible"
                  >
                    {section.items.map((item) => (
                      <motion.article
                        key={item.name}
                        variants={menuItemReveal}
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                        transition={{ duration: 0.18 }}
                        className="rounded-lg border border-ivory/10 bg-charcoal/30 p-4 transition duration-200 hover:border-gold/25 hover:bg-charcoal/50"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-semibold text-ivory">{item.name}</h3>
                          <p className="shrink-0 text-sm font-semibold text-gold">{item.price}</p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-smoke">{item.description}</p>
                      </motion.article>
                    ))}
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.section>
        );
      })}
    </motion.div>
  );
}
