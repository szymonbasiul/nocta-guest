import { Container } from "@/components/shared/container";

const reasons = [
  {
    title: "A smoother arrival sets the tone for the entire stay.",
    description:
      "Nocta Guest helps reduce check-in friction and gives guests a calmer, more modern first touchpoint before they even reach the lobby.",
  },
  {
    title: "Guest communication becomes easier to manage in one polished layer.",
    description:
      "Instead of scattered requests across channels, hotel teams get a cleaner guest-facing flow that feels more premium and easier to support.",
  },
  {
    title: "On-property revenue moments feel integrated into the experience.",
    description:
      "Dining, spa, and premium services are surfaced in a way that feels natural to the stay instead of looking like forced upsell modules.",
  },
  {
    title: "The product supports a more memorable brand experience.",
    description:
      "A refined mobile journey helps hospitality brands feel more considered, more elevated, and more aligned with modern guest expectations.",
  },
];

const outcomes = [
  "Better first impression before check-in",
  "Less operational chaos around requests",
  "More elegant guest-facing service flow",
  "Stronger premium hospitality positioning",
];

function ReasonCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="premium-card premium-border-glow rounded-[30px] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(228,201,142,0.14)] bg-[linear-gradient(180deg,rgba(228,201,142,0.12)_0%,rgba(198,163,106,0.06)_100%)] shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
          <span className="text-sm font-semibold tracking-[0.14em] text-soft-gold">
            0{index + 1}
          </span>
        </div>

        <div>
          <h3 className="text-balance text-xl font-medium leading-tight text-foreground">
            {title}
          </h3>

          <p className="mt-3 text-pretty text-sm leading-6 text-muted sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function WhyNocta() {
  return (
    <section id="why-nocta" className="relative border-t border-white/5 py-24 sm:py-28">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.10)_0%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[6%] bottom-[10%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(78,138,99,0.12)_0%,transparent_72%)] blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:gap-10">
          <div className="max-w-2xl">
            <span className="eyebrow">why hotel teams choose nocta guest</span>

            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Built for operators who want service to feel modern without making operations messier.
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Nocta Guest is positioned as a premium hospitality layer that
              improves the guest journey while helping teams keep arrivals,
              requests, and service touchpoints more organized and more elegant.
            </p>

            <div className="mt-8 grid gap-3">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(180deg,#E4C98E_0%,#C6A36A_100%)] shadow-[0_0_16px_rgba(228,201,142,0.38)]" />
                  <span className="text-sm text-foreground">{outcome}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="premium-card premium-border-glow rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  operator value
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Cleaner guest-facing workflows
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  The product is framed as a way to reduce friction around guest
                  touchpoints without overwhelming teams with another heavy system.
                </p>
              </div>

              <div className="premium-card premium-border-glow rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  brand value
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  A more elevated guest journey
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  The hospitality brand feels more refined when requests,
                  reservations, and communication happen inside one polished experience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {reasons.map((reason, index) => (
              <ReasonCard
                key={reason.title}
                title={reason.title}
                description={reason.description}
                index={index}
              />
            ))}

            <div className="premium-card premium-border-glow rounded-[30px] p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                executive summary
              </p>

              <h3 className="mt-4 text-balance text-2xl font-medium leading-tight text-foreground">
                Nocta Guest helps premium hospitality brands feel more coordinated,
                more personal, and more current.
              </h3>

              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted">
                This is the core commercial case of the landing page: the product
                improves guest-facing service moments while reinforcing the type
                of polished experience that boutique and premium hotel operators
                want guests to remember.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[rgba(228,201,142,0.14)] bg-white/[0.03] px-4 py-2 text-sm text-foreground">
                  Premium guest journey
                </span>
                <span className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-foreground">
                  Operationally calmer
                </span>
                <span className="rounded-full border border-[rgba(78,138,99,0.18)] bg-white/[0.03] px-4 py-2 text-sm text-foreground">
                  Boutique-hotel ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}