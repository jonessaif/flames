import { MapPin, Navigation } from "@/components/Icons";
import { site } from "@/content/site";

export function MapPanel() {
  return (
    <div className="motion-sheen relative min-h-[360px] overflow-hidden rounded-lg border border-gold/20 bg-[radial-gradient(circle_at_30%_20%,rgba(216,168,75,0.2),transparent_24rem),linear-gradient(135deg,#15100c,#080706)] transition duration-300 hover:-translate-y-1 hover:border-gold/35">
      <div className="noise-layer absolute inset-0 opacity-40" />
      <div className="ambient-shift absolute inset-0 bg-premium-radial opacity-25" />
      <div className="absolute inset-6 rounded-lg border border-ivory/10" />
      <div className="relative flex min-h-[360px] flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Find us</p>
            <h3 className="mt-3 font-display text-4xl text-ivory">Lucknow evenings start here.</h3>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold text-charcoal">
            <MapPin size={22} aria-hidden />
          </span>
        </div>

        <div className="max-w-md">
          <p className="text-sm leading-6 text-smoke">{site.address}</p>
          <p className="mt-2 text-sm leading-6 text-smoke">{site.mapLabel}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name} ${site.address}`)}`}
            target="_blank"
            rel="noreferrer"
            className="focus-ring motion-sheen mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
          >
            <Navigation size={16} aria-hidden />
            Open Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
