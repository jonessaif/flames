import { Star } from "@/components/Icons";
import Image from "next/image";
import { socialProof, testimonials } from "@/content/site";

export function SocialProof() {
  return (
    <section className="border-y border-ivory/10 bg-ink/70 py-16 md:py-24">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {socialProof.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-6xl">
              {socialProof.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ivory/75">{socialProof.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
            <div className="luxury-card motion-sheen rounded-lg p-6">
              <div className="flex text-gold" aria-label={`${socialProof.averageRating} average rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" aria-hidden />
                ))}
              </div>
              <p className="mt-5 font-display text-6xl leading-none text-ivory">{socialProof.averageRating}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Average rating</p>
              <p className="mt-3 text-sm leading-6 text-smoke">{socialProof.reviewCount}</p>
              <p className="mt-3 text-xs leading-5 text-smoke/70">{socialProof.note}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {socialProof.userPhotos.map((photo, index) => (
                <div
                  key={photo}
                  className={[
                    "relative min-h-[140px] overflow-hidden rounded-lg border border-ivory/10 bg-espresso",
                    index === 0 ? "row-span-2 min-h-[292px]" : ""
                  ].join(" ")}
                >
                  <Image
                    src={photo}
                    alt="Guest moment at Flames"
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure key={review.name} className="luxury-card motion-sheen rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-gold/25 bg-espresso">
                  <Image
                    src={review.photo}
                    alt={`${review.name} review photo at Flames Lucknow`}
                    fill
                    sizes="3.5rem"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-gold" aria-label={`${review.rating} star review`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" aria-hidden />
                    ))}
                  </div>
                  <figcaption className="mt-2 text-sm font-semibold text-ivory">{review.name}</figcaption>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold/80">
                    {review.source} review
                  </p>
                </div>
              </div>
              <blockquote className="mt-5 text-sm leading-7 text-ivory/80">"{review.text}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
