import { ArrowRight } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { destinationExperiences } from "@/content/site";

export function ExperienceChooser() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {destinationExperiences.map((experience) => (
        <article
          key={experience.id}
          id={experience.id}
          className="motion-sheen depth-shadow group relative min-h-[520px] overflow-hidden rounded-lg border border-gold/20 bg-espresso transition duration-300 hover:-translate-y-1 hover:border-gold/40 md:min-h-[600px]"
        >
          <Image
            src={experience.image}
            alt={`${experience.name} ${experience.eyebrow} at Flames Lucknow`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectPosition: experience.position ?? "center" }}
            className="z-0 object-cover brightness-110 saturate-125 transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,6,5,0)_0%,rgba(7,6,5,0.18)_42%,rgba(7,6,5,0.86)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {experience.eyebrow}
            </p>
            <h3 className="mt-3 font-display text-5xl leading-none text-ivory md:text-6xl">
              {experience.name}
            </h3>
            <p className="mt-4 inline-flex rounded-full border border-gold/25 bg-charcoal/50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur">
              {experience.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-full border border-ivory/15 bg-charcoal/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-smoke backdrop-blur"
                >
                  {detail}
                </span>
              ))}
            </div>
            <Link
              href={experience.href}
              className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal transition duration-200 hover:bg-ember"
            >
              {experience.cta}
              <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
