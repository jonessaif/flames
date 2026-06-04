"use client";

import { CalendarDays, MessageCircle } from "@/components/Icons";
import { motion, useReducedMotion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import { site } from "@/content/site";
import { whatsappHref } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  experience: string;
  occasion: string;
  note: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  experience: "Arabia",
  occasion: "Date Night",
  note: ""
};

const experienceOptions = ["Arabia", "147", "Both"];
const occasionOptions = ["Birthday", "Date Night", "Corporate Gathering", "Tournament", "Friends Hangout", "Hookah Session"];

const fieldGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055
    }
  }
};

const fieldReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42 }
  }
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi Flames, I want to reserve my evening.",
      `Name: ${form.name || "Guest"}`,
      `Phone: ${form.phone || "Not shared"}`,
      `Date: ${form.date || "Flexible"}`,
      `Time: ${form.time || "Flexible"}`,
      `Guests: ${form.guests}`,
      `Experience: ${form.experience}`,
      `Occasion: ${form.occasion}`,
      form.note ? `Note: ${form.note}` : ""
    ].filter(Boolean).join("\n");

    const reservationNumber = form.experience === "147"
      ? site.contacts.flames147.whatsappNumber
      : site.whatsappNumber;

    window.open(whatsappHref(message, reservationNumber), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="luxury-card motion-sheen rounded-lg p-5 md:p-7"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="mb-6 flex items-start gap-4">
        <span className="grid size-12 place-items-center rounded-full bg-gold text-charcoal">
          <CalendarDays size={21} aria-hidden />
        </span>
        <div>
          <h2 className="font-display text-4xl text-ivory">Reserve your evening</h2>
          <p className="mt-2 text-sm leading-6 text-smoke">
            Choose Arabia, 147, or both. The team can confirm availability on WhatsApp.
          </p>
        </div>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={fieldGroup}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90">
          Name
          <input
            className="focus-ring rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-smoke/50 transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </motion.label>
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90">
          Phone
          <input
            className="focus-ring rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-smoke/50 transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+91"
            autoComplete="tel"
            inputMode="tel"
          />
        </motion.label>
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90">
          Date
          <input
            className="focus-ring rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            type="date"
            value={form.date}
            onChange={(event) => updateField("date", event.target.value)}
          />
        </motion.label>
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90">
          Time
          <input
            className="focus-ring rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            type="time"
            value={form.time}
            onChange={(event) => updateField("time", event.target.value)}
          />
        </motion.label>
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90">
          Guests
          <select
            className="focus-ring rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            value={form.guests}
            onChange={(event) => updateField("guests", event.target.value)}
          >
            {["1", "2", "3", "4", "5", "6+"].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </motion.label>
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90">
          Experience
          <select
            className="focus-ring rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            value={form.experience}
            onChange={(event) => updateField("experience", event.target.value)}
          >
            {experienceOptions.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </motion.label>
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90">
          Occasion
          <select
            className="focus-ring rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            value={form.occasion}
            onChange={(event) => updateField("occasion", event.target.value)}
          >
            {occasionOptions.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </motion.label>
        <motion.label variants={fieldReveal} className="grid gap-2 text-sm font-medium text-ivory/90 md:col-span-2">
          Notes
          <textarea
            className="focus-ring min-h-28 resize-y rounded-md border border-ivory/10 bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-smoke/50 transition duration-200 focus:border-gold/50 focus:bg-charcoal/70"
            value={form.note}
            onChange={(event) => updateField("note", event.target.value)}
            placeholder="Preferred floor, game table, rooftop seating, birthday plan, hookah request..."
          />
        </motion.label>
      </motion.div>

      <button
        type="submit"
        className="focus-ring motion-sheen mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition duration-300 hover:-translate-y-0.5 hover:bg-ember sm:w-auto"
      >
        <MessageCircle size={18} aria-hidden />
        Send via WhatsApp
      </button>
      {sent ? (
        <p className="mt-4 text-sm text-gold" role="status">
          WhatsApp opened with your reservation details.
        </p>
      ) : null}
    </motion.form>
  );
}
