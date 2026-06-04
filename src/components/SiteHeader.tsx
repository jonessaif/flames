"use client";

import { CalendarDays, Menu, MessageCircle, X } from "@/components/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/content/site";
import { cn, whatsappHref } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-charcoal/80 backdrop-blur-xl">
      <div className="container-shell flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="focus-ring group flex items-center gap-3 rounded-full" onClick={() => setIsOpen(false)}>
          <span className="grid size-12 place-items-center overflow-hidden rounded-full border border-gold/30 bg-charcoal shadow-glow">
            <img
              src={site.logo.src}
              alt={site.logo.alt}
              className="h-full w-full scale-[1.18] object-cover"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl text-ivory">{site.name}</span>
            <span className="mt-1 block text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-smoke">
              Social Club
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === item.href ? "bg-ivory/10 text-gold" : "text-ivory/70 hover:text-ivory"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href={whatsappHref("Hi Flames, I want to ask about table availability for Arabia or 147.")}
            variant="secondary"
            icon={<MessageCircle size={17} aria-hidden />}
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink href="/contact" icon={<CalendarDays size={17} aria-hidden />}>
            Reserve
          </ButtonLink>
        </div>

        <button
          className="focus-ring grid size-11 place-items-center rounded-full border border-ivory/20 bg-ivory/5 text-ivory lg:hidden"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-ivory/10 bg-charcoal/95 px-4 pb-5 pt-3 shadow-2xl lg:hidden">
          <nav className="container-shell flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "focus-ring rounded-lg px-3 py-3 text-base font-medium",
                  pathname === item.href ? "bg-gold/10 text-gold" : "text-ivory/80"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="focus-ring mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal"
            >
              <MessageCircle size={17} aria-hidden />
              WhatsApp Now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
