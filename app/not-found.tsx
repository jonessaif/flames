import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-screen flex-col items-start justify-center py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">404</p>
      <h1 className="mt-4 font-display text-6xl text-ivory">This table is not available.</h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-smoke">
        The page you are looking for may have moved. Head back to the lounge and keep the evening going.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back Home</ButtonLink>
      </div>
    </section>
  );
}
