import { Flame, Music2, Sparkles } from "@/components/Icons";
import { features } from "@/content/site";

const icons = [Music2, Sparkles, Flame];

export function FeatureCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = icons[index] ?? Flame;
        return (
          <article key={feature.title} className="luxury-card rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30">
            <div className="mb-6 grid size-12 place-items-center rounded-full bg-gold/10 text-gold">
              <Icon size={23} aria-hidden />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {feature.kicker}
            </p>
            <h3 className="mt-3 font-display text-3xl text-ivory">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-smoke">{feature.description}</p>
          </article>
        );
      })}
    </div>
  );
}
