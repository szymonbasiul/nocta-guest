import { Container } from "@/components/shared/container";

const testimonials = [
  {
    quote:
      "Nocta Guest feels less like a utility and more like an extension of the stay experience we want guests to remember.",
    name: "Camille Laurent",
    role: "Guest Experience Director",
    company: "Maison Aveline",
  },
  {
    quote:
      "The product helps service moments feel more organized without losing the sense of warmth and attention that defines a boutique property.",
    name: "Jonas Reed",
    role: "Operations Lead",
    company: "North Vale Retreat",
  },
  {
    quote:
      "What stands out is how naturally dining, concierge, and arrival touchpoints fit into one polished guest-facing journey.",
    name: "Elisa Moreau",
    role: "Hospitality Brand Manager",
    company: "Atelier Stay Group",
  },
];

const signals = [
  "Boutique-hotel tone",
  "Premium guest journey",
  "Modern hospitality positioning",
];

function TestimonialCard({
  quote,
  name,
  role,
  company,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <article className="premium-card premium-border-glow rounded-[30px] p-6 sm:p-7">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(180deg,#E4C98E_0%,#C6A36A_100%)] shadow-[0_0_18px_rgba(228,201,142,0.36)]" />
          <span className="text-xs uppercase tracking-[0.22em] text-soft-gold/90">
            hotel quote
          </span>
        </div>

        <p className="mt-6 text-balance text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
          “{quote}”
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(228,201,142,0.14)] bg-[linear-gradient(180deg,rgba(228,201,142,0.12)_0%,rgba(198,163,106,0.06)_100%)] shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-soft-gold">
              {name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">{name}</p>
            <p className="mt-1 text-sm text-muted">
              {role} · {company}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/5 py-24 sm:py-28"
    >
      <div className="section-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(78,138,99,0.12)_0%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-[16%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.10)_0%,transparent_72%)] blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">testimonials and hospitality signals</span>

          <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Built to feel credible for premium hospitality brands.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
            These quotes reinforce the way Nocta Guest is positioned: not as a generic
            SaaS tool, but as a refined guest experience product for modern hotels,
            boutique stays, and elevated hospitality teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>

        <div className="mt-10 premium-card premium-border-glow rounded-[30px] p-6 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                hospitality proof layer
              </p>
              <h3 className="mt-4 text-balance text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                The social proof stays calm, curated, and aligned with the brand tone of the product.
              </h3>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted">
                This section is designed to support trust without breaking the premium
                mood of the page. It feels closer to boutique hospitality branding than
                to a loud, conversion-heavy SaaS testimonial wall.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
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
        </div>
      </Container>
    </section>
  );
}