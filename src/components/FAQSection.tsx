import { faqs } from "@/content/site";

export function FAQSection() {
  return (
    <section className="container-shell py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">FAQs</p>
        <h2 className="mt-4 font-display text-5xl leading-tight text-ivory md:text-6xl">
          Quick answers before you plan the night.
        </h2>
        <p className="mt-5 text-base leading-7 text-smoke md:text-lg md:leading-8">
          Common questions about hookah, Flames 147 rates, private cabin bookings, location, live music and late-night plans.
        </p>
      </div>
      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <article key={faq.question} className="luxury-card motion-sheen rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/30 md:p-6">
            <h3 className="font-display text-2xl leading-tight text-ivory">{faq.question}</h3>
            <p className="mt-3 text-sm leading-6 text-smoke">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
