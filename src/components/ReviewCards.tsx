import { Star } from "@/components/Icons";
import { testimonials } from "@/content/site";

export function ReviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((review) => (
        <figure key={review.name} className="luxury-card rounded-lg p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex text-gold" aria-label={`${review.rating} star review`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" aria-hidden />
              ))}
            </div>
            <span className="rounded-full border border-gold/25 px-3 py-1 text-xs font-semibold text-gold">
              {review.rating}
            </span>
          </div>
          <blockquote className="text-sm leading-7 text-ivory/80">"{review.text}"</blockquote>
          <figcaption className="mt-5 text-sm font-semibold text-ivory">{review.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
