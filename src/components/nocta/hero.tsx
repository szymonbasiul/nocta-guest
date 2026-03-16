import { Container } from "@/components/shared/container";

const leftGuestMoments = [
  {
    title: "Mobile check-in",
    detail: "Arrival completed before the guest reaches the lobby.",
  },
  {
    title: "Dining reservation",
    detail: "Table bookings feel native to the stay experience.",
  },
];

const rightGuestMoments = [
  {
    title: "Concierge request",
    detail: "Guests message the hotel team without switching channels.",
  },
  {
    title: "Late checkout",
    detail: "Requests are handled cleanly with less operational friction.",
  },
];

function HeroFloatingCard({
  title,
  detail,
  align = "left",
}: {
  title: string;
  detail: string;
  align?: "left" | "right";
}) {
  return (
    <div className="premium-card premium-border-glow premium-card-hover rounded-[26px] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[linear-gradient(180deg,#E4C98E_0%,#C6A36A_100%)] shadow-[0_0_18px_rgba(228,201,142,0.45)]" />
        <div className={align === "right" ? "text-left xl:text-right" : "text-left"}>
          <p className="text-xs uppercase tracking-[0.22em] text-soft-gold/90">
            guest moment
          </p>
          <p className="mt-2 text-sm font-medium text-foreground sm:text-[15px]">
            {title}
          </p>
          <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-medium text-foreground/85">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
        <span className="h-2.5 w-6 rounded-full border border-white/15 bg-white/5" />
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] rounded-[44px] border border-[rgba(228,201,142,0.16)] bg-[linear-gradient(180deg,rgba(16,21,16,0.98)_0%,rgba(9,11,9,0.99)_100%)] p-3 shadow-[0_38px_100px_rgba(0,0,0,0.46)]">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-20 rounded-b-[40px] bg-[radial-gradient(circle_at_top,rgba(228,201,142,0.14),transparent_70%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,rgba(19,25,20,0.96)_0%,rgba(11,14,11,0.98)_100%)]">
        <PhoneStatusBar />

        <div className="px-5 pb-5 pt-4">
          <div className="rounded-[28px] border border-[rgba(228,201,142,0.12)] bg-[linear-gradient(135deg,rgba(26,51,39,0.88)_0%,rgba(12,16,12,0.96)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-soft-gold/90">
              Welcome back
            </p>

            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-lg font-medium text-foreground">Elena’s stay</p>
                <p className="mt-1 text-sm text-muted">
                  The Nocta House • Suite 407
                </p>
              </div>

              <div className="rounded-full border border-[rgba(228,201,142,0.14)] bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-soft-gold">
                arriving today
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-[20px] border border-white/6 bg-black/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Check-in
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Complete now
                </p>
              </div>

              <div className="rounded-[20px] border border-white/6 bg-black/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Room access
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Ready at 3:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[26px] border border-white/6 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-soft-gold/85">
                  Concierge
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Your stay, handled in one place
                </p>
              </div>
              <div className="rounded-full border border-[rgba(78,138,99,0.24)] bg-[rgba(78,138,99,0.12)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#9ED0AE]">
                live
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-[20px] border border-white/6 bg-black/10 p-3">
                <p className="text-sm text-foreground">
                  Spa reservation for 18:30 confirmed.
                </p>
                <p className="mt-1 text-xs text-muted">2 min ago</p>
              </div>

              <div className="rounded-[20px] border border-white/6 bg-[linear-gradient(180deg,rgba(228,201,142,0.11)_0%,rgba(198,163,106,0.05)_100%)] p-3">
                <p className="text-sm text-foreground">
                  Late checkout request is being reviewed by the front desk.
                </p>
                <p className="mt-1 text-xs text-muted">Just now</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[22px] border border-white/6 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Dining
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                Reserve a table
              </p>
              <div className="mt-4 h-1.5 rounded-full bg-white/8">
                <div className="h-1.5 w-[72%] rounded-full bg-[linear-gradient(90deg,#E4C98E_0%,#4E8A63_100%)]" />
              </div>
            </div>

            <div className="rounded-[22px] border border-white/6 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Preferences
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                Saved for future stays
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/8 bg-black/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  quiet room
                </span>
                <span className="rounded-full border border-white/8 bg-black/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  spa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroMetricPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <span className="text-sm font-medium text-foreground">{value}</span>
      <span className="ml-2 text-sm text-muted">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 glow-orb-green" />
        <div className="absolute right-[8%] top-[10%] h-[340px] w-[340px] glow-orb-gold" />
        <div className="absolute left-[8%] top-[28%] h-[280px] w-[280px] glow-orb-green" />
        <div className="section-grid absolute inset-0 opacity-35" />
      </div>

      <Container className="relative py-18 sm:py-22 lg:py-26">
        <div className="grid items-center gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:gap-10">
          <div className="mx-auto max-w-2xl xl:mx-0">
            <span className="eyebrow">premium hospitality product</span>

            <h1 className="mt-8 text-balance text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl lg:text-7xl">
              A better guest experience begins before check-in.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg lg:text-[19px]">
              Nocta Guest helps hotels deliver smoother arrivals, more personal
              service, and elegant on-property experiences through a refined
              mobile guest app designed for modern hospitality teams.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(228,201,142,0.18)] bg-[linear-gradient(180deg,rgba(228,201,142,0.2)_0%,rgba(198,163,106,0.12)_100%)] px-6 py-3.5 text-sm font-medium text-foreground shadow-[0_16px_34px_rgba(0,0,0,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(228,201,142,0.3)]"
              >
                Book a demo
              </a>

              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:border-white/15 hover:text-foreground"
              >
                Explore the experience
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <HeroMetricPill value="Boutique-ready" label="guest journey" />
              <HeroMetricPill value="Mobile-first" label="service layer" />
              <HeroMetricPill value="Premium" label="product feel" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="premium-card premium-border-glow premium-card-hover rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  for hotel teams
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Less friction around arrivals, requests, and reservations
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  A calmer operational flow without forcing guests into scattered
                  channels and disconnected touchpoints.
                </p>
              </div>

              <div className="premium-card premium-border-glow premium-card-hover rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  for the guest
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  A stay that feels smoother, more personal, and more elevated
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Every interaction feels considered, modern, and aligned with a
                  premium hospitality brand experience.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[980px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(228,201,142,0.07)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,0.05)]" />
            <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.09)_0%,rgba(78,138,99,0.08)_38%,transparent_72%)] blur-3xl" />

            <div className="relative z-10 grid items-center gap-6 xl:grid-cols-[220px_minmax(0,340px)_220px] xl:gap-8">
              <div className="hidden xl:flex xl:flex-col xl:gap-6 xl:pt-14">
                {leftGuestMoments.map((item) => (
                  <HeroFloatingCard
                    key={item.title}
                    title={item.title}
                    detail={item.detail}
                    align="left"
                  />
                ))}
              </div>

              <div className="relative z-20 mx-auto w-full max-w-[340px]">
                <PhoneScreen />
              </div>

              <div className="hidden xl:flex xl:flex-col xl:gap-6 xl:pb-14">
                {rightGuestMoments.map((item) => (
                  <HeroFloatingCard
                    key={item.title}
                    title={item.title}
                    detail={item.detail}
                    align="right"
                  />
                ))}
              </div>
            </div>

            <div className="relative z-20 mt-6 grid gap-4 xl:hidden">
              {[...leftGuestMoments, ...rightGuestMoments].map((item) => (
                <HeroFloatingCard
                  key={item.title}
                  title={item.title}
                  detail={item.detail}
                  align="left"
                />
              ))}
            </div>

            <div className="absolute left-1/2 top-[40px] z-0 h-[220px] w-[220px] -translate-x-1/2 glow-orb-gold" />
            <div className="absolute left-[12%] top-[220px] z-0 h-[140px] w-[140px] glow-orb-green" />
            <div className="absolute bottom-[120px] right-[12%] z-0 h-[140px] w-[140px] glow-orb-gold" />
          </div>
        </div>
      </Container>
    </section>
  );
}