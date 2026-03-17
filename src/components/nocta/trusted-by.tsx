import { Container } from "@/components/shared/container";

const logos = [
  "Aster House",
  "Veloré Suites",
  "Atelier Stay",
  "North Vale Resort",
  "The Luma Collection",
];

const propertyTypes = [
  "Boutique hotels",
  "Aparthotels",
  "Luxury stays",
  "Design-led resorts",
];

export function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="relative overflow-hidden border-b border-white/5 py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,201,142,0.05),transparent_34%)]" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="max-w-xl">
            <span className="eyebrow">built for modern hospitality teams</span>

            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Designed for operators who want service to feel more seamless,
              personal, and premium.
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-muted sm:text-lg">
              Nocta Guest is positioned for hospitality brands that care about
              arrival flow, guest communication, and elevated on-property
              experiences without adding more friction for the team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {propertyTypes.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center rounded-full border border-[rgba(228,201,142,0.12)] bg-white/[0.03] px-4 py-2 text-sm text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="premium-card premium-border-glow rounded-[30px] p-5 sm:p-6 lg:p-8">
            <div className="grid gap-4">
              <div className="flex items-center justify-between gap-4 border-b border-white/6 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                    hospitality fit
                  </p>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    Built for premium guest-facing operations
                  </p>
                </div>

                <div className="rounded-full border border-[rgba(78,138,99,0.24)] bg-[rgba(78,138,99,0.12)] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#9ED0AE]">
                  hospitality-ready
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/6 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    used for
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    check-in, service requests, reservations, guest messaging
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/6 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    product role
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    mobile guest layer for a smoother stay journey
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  sample hospitality brands
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {logos.map((logo) => (
                    <div
                      key={logo}
                      className="flex min-h-[78px] items-center justify-center rounded-[22px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                    >
                      <span className="text-sm font-medium tracking-[0.12em] text-foreground/88 uppercase">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2 rounded-[24px] border border-[rgba(228,201,142,0.1)] bg-[linear-gradient(180deg,rgba(228,201,142,0.08)_0%,rgba(198,163,106,0.03)_100%)] p-4">
                <p className="text-sm leading-6 text-muted">
                  The goal of this layer is not loud social proof. It is a calm,
                  premium signal that the product belongs in boutique and
                  experience-led hospitality environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}