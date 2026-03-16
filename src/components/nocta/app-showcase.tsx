import { Container } from "@/components/shared/container";

const benefits = [
  "App-led guest journey presentation",
  "More premium than dashboard-driven",
  "Built for screenshot-friendly storytelling",
  "Clearer hospitality product positioning",
];

function ShowcasePhonePrimary() {
  return (
    <div className="relative mx-auto w-full max-w-[350px] rounded-[44px] border border-[rgba(228,201,142,0.14)] bg-[linear-gradient(180deg,rgba(16,21,16,0.98)_0%,rgba(9,11,9,0.98)_100%)] p-3 shadow-[0_36px_90px_rgba(0,0,0,0.42)]">
      <div className="relative overflow-hidden rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,rgba(19,25,20,0.96)_0%,rgba(11,14,11,0.98)_100%)]">
        <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-medium text-foreground/85">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
            <span className="h-2.5 w-6 rounded-full border border-white/15 bg-white/5" />
          </div>
        </div>

        <div className="px-5 pb-5 pt-4">
          <div className="rounded-[28px] border border-[rgba(228,201,142,0.12)] bg-[linear-gradient(135deg,rgba(26,51,39,0.88)_0%,rgba(12,16,12,0.96)_100%)] p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-soft-gold/90">
              Today at Nocta House
            </p>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-medium text-foreground">
                  Your stay itinerary
                </p>
                <p className="mt-1 text-sm text-muted">
                  Curated around arrival, dining, and wellness
                </p>
              </div>

              <div className="rounded-full border border-[rgba(228,201,142,0.16)] bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-soft-gold">
                personalized
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-[22px] border border-white/6 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    2:30 PM
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Suite access and welcome note
                  </p>
                </div>
                <span className="rounded-full border border-white/8 bg-black/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                  arrival
                </span>
              </div>
            </div>

            <div className="rounded-[22px] border border-white/6 bg-[linear-gradient(180deg,rgba(228,201,142,0.11)_0%,rgba(198,163,106,0.05)_100%)] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    6:30 PM
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Spa ritual reserved for two guests
                  </p>
                </div>
                <span className="rounded-full border border-[rgba(228,201,142,0.14)] bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-soft-gold">
                  confirmed
                </span>
              </div>
            </div>

            <div className="rounded-[22px] border border-white/6 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    8:00 PM
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Chef’s tasting at Atelier Dining
                  </p>
                </div>
                <span className="rounded-full border border-[rgba(78,138,99,0.22)] bg-[rgba(78,138,99,0.12)] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#9ED0AE]">
                  reserved
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[20px] border border-white/6 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Concierge
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                One tap away
              </p>
            </div>

            <div className="rounded-[20px] border border-white/6 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Preferences
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                Saved elegantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <section id="product" className="relative border-t border-white/5 py-24 sm:py-28">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.08)_0%,rgba(78,138,99,0.08)_40%,transparent_72%)] blur-3xl" />

      <Container className="relative">
        <div className="grid gap-14 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
          <div className="max-w-2xl">
            <span className="eyebrow">app experience showcase</span>

            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              The product is shown through stay moments, not analytics panels.
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Nocta Guest is presented as a premium mobile layer for the stay itself:
              arrivals, reservations, concierge requests, and personalized guest
              interactions that feel polished from the first touchpoint onward.
            </p>

            <div className="mt-8 grid gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(180deg,#E4C98E_0%,#C6A36A_100%)] shadow-[0_0_16px_rgba(228,201,142,0.4)]" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="premium-card premium-border-glow rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  product framing
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Hospitality experience first
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  The UI language stays calm, premium, and guest-facing instead
                  of leaning into heavy B2B dashboard visuals.
                </p>
              </div>

              <div className="premium-card premium-border-glow rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  portfolio value
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Stronger screenshots for Fiverr
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  This section is built to create a premium mobile composition
                  that reads instantly in gallery thumbnails and portfolio shots.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="relative min-h-[640px]">
              <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(228,201,142,0.08)]" />
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

              <div className="relative z-20 mx-auto w-full max-w-[360px] pt-8">
                <ShowcasePhonePrimary />
              </div>

              <div className="absolute left-[14%] top-[180px] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,rgba(78,138,99,0.15)_0%,transparent_72%)] blur-3xl" />
              <div className="absolute bottom-[120px] right-[14%] h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.12)_0%,transparent_72%)] blur-3xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}