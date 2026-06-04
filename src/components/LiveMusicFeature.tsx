import { Check, Music2 } from "@/components/Icons";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { liveMusicFeature } from "@/content/site";
import { whatsappHref } from "@/lib/utils";

export function LiveMusicFeature() {
  return (
    <section className="relative isolate overflow-hidden border-y border-ivory/10 bg-ink py-16 md:py-24">
      <Image
        src={liveMusicFeature.image}
        alt="Live music night at Flames of Arabia Lucknow"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,6,5,0.96)_0%,rgba(7,6,5,0.76)_52%,rgba(7,6,5,0.46)_100%),linear-gradient(180deg,rgba(7,6,5,0.18)_0%,#070605_100%)]" />
      <div className="noise-layer absolute inset-0 -z-10 opacity-25" />

      <div className="container-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="luxury-card rounded-lg p-6 md:p-8">
          <div className="mb-6 grid size-12 place-items-center rounded-full bg-gold text-charcoal">
            <Music2 size={22} aria-hidden />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {liveMusicFeature.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-6xl">
            {liveMusicFeature.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-ivory/80">{liveMusicFeature.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Reserve Table</ButtonLink>
            <ButtonLink
              href={whatsappHref("Hi Flames of Arabia, I want to know about live music nights.")}
              variant="secondary"
            >
              WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-3">
          {liveMusicFeature.details.map((detail) => (
            <div key={detail} className="rounded-lg border border-ivory/10 bg-charcoal/55 p-4 backdrop-blur">
              <div className="flex items-start gap-3 text-sm leading-6 text-smoke">
                <Check className="mt-0.5 shrink-0 text-gold" size={18} aria-hidden />
                <span>{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
