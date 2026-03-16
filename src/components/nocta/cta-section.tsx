import { Container } from "@/components/shared/container";

const signals = [
  "Boutique hotel ready",
  "Modern guest journey",
  "Premium hospitality positioning",
];

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 py-24 sm:py-28 lg:py-32">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.12)_0%,rgba(78,138,99,0.08)_45%,transparent_75%)] blur-3xl" />

      <Container className="relative">
        <div className="premium-card premium-border-glow rounded-[38px] px-8 py-12 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <span className="eyebrow">request a demo</span>

          <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Designed for hotels that want every stay to feel more considered.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
            Nocta Guest helps hospitality teams deliver calmer arrivals,
            clearer service moments, and a more elevated guest journey
            through one polished mobile experience.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(228,201,142,0.2)] bg-[linear-gradient(180deg,rgba(228,201,142,0.24)_0%,rgba(198,163,106,0.12)_100%)] px-7 py-3.5 text-sm font-medium text-foreground shadow-[0_16px_34px_rgba(0,0,0,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(228,201,142,0.3)]"
            >
              Book a product demo
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:border-white/15 hover:text-foreground"
            >
              Talk to hospitality team
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[rgba(228,201,142,0.14)] bg-white/[0.03] px-4 py-2 text-sm text-foreground"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}