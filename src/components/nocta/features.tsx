import { Container } from "@/components/shared/container";

const features = [
  {
    eyebrow: "arrival flow",
    title: "Mobile check-in that makes arrival feel calm, not procedural.",
    description:
      "Guests complete key details before they reach the property, while hotel teams reduce front-desk friction and keep the first interaction more personal.",
    bullets: [
      "Pre-arrival check-in flow",
      "Room-ready visibility",
      "Smoother front-desk handoff",
    ],
    accent: "gold",
  },
  {
    eyebrow: "guest communication",
    title: "Concierge messaging that keeps requests in one elegant channel.",
    description:
      "Instead of scattered messages and operational noise, the stay becomes easier to manage through one polished guest-facing experience.",
    bullets: [
      "In-stay messaging",
      "Service and support requests",
      "Less channel switching for teams",
    ],
    accent: "green",
  },
  {
    eyebrow: "on-property moments",
    title: "Dining, spa, and stay experiences presented as part of the journey.",
    description:
      "Reservations feel native to the stay, helping the property surface premium experiences without making the interface feel sales-heavy.",
    bullets: [
      "Dining reservations",
      "Spa and wellness bookings",
      "Experience-led discovery",
    ],
    accent: "gold",
  },
  {
    eyebrow: "personalization",
    title: "Guest preferences that make repeat stays feel remembered.",
    description:
      "Saved preferences and stay context help hospitality teams deliver a more considered experience while keeping service more consistent.",
    bullets: [
      "Preference memory",
      "Personalized recommendations",
      "Better repeat-stay experience",
    ],
    accent: "green",
  },
];

function FeaturePreview({
  accent,
  index,
}: {
  accent: "gold" | "green";
  index: number;
}) {
  const accentClass =
    accent === "gold"
      ? "from-[rgba(228,201,142,0.18)] to-[rgba(198,163,106,0.05)]"
      : "from-[rgba(78,138,99,0.18)] to-[rgba(26,51,39,0.05)]";

  const pillClass =
    accent === "gold"
      ? "border-[rgba(228,201,142,0.18)] text-soft-gold"
      : "border-[rgba(78,138,99,0.22)] text-[#9ED0AE]";

  const previewTitles = [
    "Arrival details",
    "Guest conversation",
    "Stay experiences",
    "Preference profile",
  ];

  const previewPrimary = [
    "Check-in completed",
    "Front desk replied",
    "Spa booking confirmed",
    "Room preferences saved",
  ];

  const previewSecondary = [
    "Suite 407 · 3:00 PM access",
    "Late checkout request in review",
    "Wellness treatment · 18:30",
    "Quiet room · late arrival",
  ];

  return (
    <div className="rounded-[28px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.015)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="rounded-[24px] border border-white/6 bg-[linear-gradient(180deg,rgba(14,18,14,0.92)_0%,rgba(9,11,9,0.96)_100%)] p-4">
        <div
          className={`rounded-[20px] border bg-gradient-to-br p-4 ${accentClass} ${pillClass}`}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                preview
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {previewTitles[index]}
              </p>
            </div>

            <div
              className={`rounded-full border bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.16em] ${pillClass}`}
            >
              live
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-[18px] border border-white/6 bg-black/10 p-3">
              <p className="text-sm font-medium text-foreground">
                {previewPrimary[index]}
              </p>
              <p className="mt-1 text-xs text-muted">
                {previewSecondary[index]}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[16px] border border-white/6 bg-white/[0.03] p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Flow
                </p>
                <p className="mt-2 text-sm text-foreground">Friction reduced</p>
              </div>

              <div className="rounded-[16px] border border-white/6 bg-white/[0.03] p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Experience
                </p>
                <p className="mt-2 text-sm text-foreground">Premium-ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  eyebrow,
  title,
  description,
  bullets,
  accent,
  index,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  accent: "gold" | "green";
  index: number;
}) {
  const dotClass =
    accent === "gold"
      ? "bg-[linear-gradient(180deg,#E4C98E_0%,#C6A36A_100%)] shadow-[0_0_18px_rgba(228,201,142,0.35)]"
      : "bg-[linear-gradient(180deg,#8BC29F_0%,#4E8A63_100%)] shadow-[0_0_18px_rgba(78,138,99,0.35)]";

  return (
    <article className="premium-card premium-border-glow premium-card-hover rounded-[32px] p-5 sm:p-6 lg:p-7">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
            <span className="text-xs uppercase tracking-[0.22em] text-soft-gold/90">
              {eyebrow}
            </span>
          </div>

          <h3 className="mt-5 max-w-xl text-balance text-2xl font-medium leading-tight text-foreground sm:text-3xl">
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted">
            {description}
          </p>

          <div className="mt-6 grid gap-3">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3"
              >
                <span className={`h-2 w-2 rounded-full ${dotClass}`} />
                <span className="text-sm text-foreground">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <FeaturePreview accent={accent} index={index} />
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="experience" className="relative border-t border-white/5 py-24 sm:py-28 lg:py-32">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-35" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">guest experience features</span>

          <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Every feature is framed around a smoother, more elevated stay.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
            Nocta Guest is not presented as a dashboard product. It is presented
            as a premium guest layer that helps hospitality teams deliver calmer
            arrivals, better service flow, and more memorable on-property moments.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:gap-7">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              bullets={feature.bullets}
              accent={feature.accent}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}