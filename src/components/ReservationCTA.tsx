"use client";

import { CalendarDays, Check, MessageCircle } from "@/components/Icons";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { reservationCta } from "@/content/site";
import { usePointerTilt } from "@/components/usePointerTilt";
import { whatsappHref } from "@/lib/utils";

export function ReservationCTA() {
  const reduceMotion = useReducedMotion();
  const reservationTilt = usePointerTilt(4);
  const [experience, setExperience] = useState("Both");
  const [groupSize, setGroupSize] = useState("4");
  const [occasion, setOccasion] = useState("Friends Hangout");

  const selectedChoice = reservationCta.choices.find((choice) => choice.label === experience) ?? reservationCta.choices[2];
  const whatsappMessage = useMemo(() => {
    return [
      selectedChoice.message,
      `Group Size: ${groupSize}`,
      `Occasion: ${occasion}`,
      "Planning an evening with friends?"
    ].join("\n");
  }, [groupSize, occasion, selectedChoice.message]);

  return (
    <section className="container-shell py-16 md:py-24">
      <motion.div
        {...reservationTilt.handlers}
        style={reservationTilt.style}
        className="depth-stage depth-shadow preserve-3d relative isolate overflow-hidden rounded-lg border border-gold/20 bg-espresso p-6 md:p-10"
      >
        <Image
          src={reservationCta.image}
          alt=""
          fill
          sizes="100vw"
          className="ken-burns-subtle absolute inset-0 -z-20 object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,6,5,0.94)_0%,rgba(7,6,5,0.72)_58%,rgba(7,6,5,0.4)_100%)]" />
        <div className="ambient-shift absolute inset-0 -z-10 bg-premium-radial opacity-25" />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div style={{ transform: "translateZ(28px)" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {reservationCta.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-6xl">
            {reservationCta.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-ivory/80">{reservationCta.description}</p>
          </div>

          <div className="luxury-card rounded-lg p-5 md:p-6" style={{ transform: "translateZ(42px)" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Experience</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {reservationCta.choices.map((choice) => {
                  const isSelected = choice.label === experience;

                  return (
                    <motion.button
                      layout
                      key={choice.label}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setExperience(choice.label)}
                      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.018 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                      className={[
                        "focus-ring motion-sheen inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200",
                        isSelected
                          ? "border-gold bg-gold text-charcoal"
                          : "border-ivory/15 bg-charcoal/45 text-ivory hover:border-gold/40 hover:text-gold"
                      ].join(" ")}
                    >
                      {isSelected ? <Check size={15} aria-hidden /> : null}
                      {choice.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-ivory/90">
                Group Size
                <select
                  className="focus-ring rounded-md border border-ivory/10 bg-charcoal/60 px-4 py-3 text-ivory transition duration-200 focus:border-gold/50"
                  value={groupSize}
                  onChange={(event) => setGroupSize(event.target.value)}
                >
                  {reservationCta.groupSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-ivory/90">
                Occasion
                <select
                  className="focus-ring rounded-md border border-ivory/10 bg-charcoal/60 px-4 py-3 text-ivory transition duration-200 focus:border-gold/50"
                  value={occasion}
                  onChange={(event) => setOccasion(event.target.value)}
                >
                  {reservationCta.occasions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-7 rounded-lg border border-gold/20 bg-charcoal/50 p-4">
              <p className="font-display text-3xl leading-tight text-ivory">{reservationCta.footerCta}</p>
              <p className="mt-2 text-sm leading-6 text-gold">{reservationCta.footerMessage}</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" icon={<CalendarDays size={18} aria-hidden />}>
                Reserve Table
              </ButtonLink>
              <ButtonLink
                href={whatsappHref(whatsappMessage)}
                variant="secondary"
                icon={<MessageCircle size={18} aria-hidden />}
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
