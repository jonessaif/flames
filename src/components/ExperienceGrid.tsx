import Image from "next/image";
import { experiences } from "@/content/site";

export function ExperienceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {experiences.map((experience) => (
        <article key={experience.title} className="group relative min-h-[320px] overflow-hidden rounded-lg border border-ivory/10 bg-espresso">
          <Image
            src={experience.image}
            alt={`${experience.title} experience at Flames Lucknow`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.12)_0%,rgba(7,6,5,0.88)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Signature Experience
            </p>
            <h3 className="font-display text-4xl text-ivory">{experience.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-ivory/75">{experience.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
