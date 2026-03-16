import { Container } from "@/components/shared/container";

const faqs = [
  {
    question: "What kind of hospitality brands is Nocta Guest designed for?",
    answer:
      "Nocta Guest is positioned for boutique hotels, aparthotels, design-led stays, and premium hospitality teams that want the guest journey to feel more modern, more seamless, and more considered.",
  },
  {
    question: "Is this meant to replace every operational system a hotel already uses?",
    answer:
      "Nocta Guest is presented as a guest-facing experience layer, not a heavy back-office replacement. The value comes from improving arrivals, communication, requests, and stay moments in a more elegant interface.",
  },
  {
    question: "How does the product help improve the arrival experience?",
    answer:
      "The product supports pre-arrival check-in, clearer room-readiness communication, and smoother handoff moments so the stay can begin with less friction and a stronger first impression.",
  },
  {
    question: "Can the app support dining, spa, and service reservations?",
    answer:
      "Yes. The experience is framed around on-property moments such as dining, wellness, concierge requests, and premium services that feel integrated into the stay rather than pushed as separate sales modules.",
  },
  {
    question: "Does the experience work for premium and boutique positioning?",
    answer:
      "That is the core direction of the product. The UI, copy, and flow are designed to feel calm, elevated, and aligned with the expectations of modern premium hospitality brands.",
  },
  {
    question: "What is the main benefit for hotel teams?",
    answer:
      "Hotel teams get a cleaner guest-facing flow for communication and service moments, which helps reduce friction across arrivals, requests, and on-property interactions while supporting a more polished brand experience.",
  },
];

function FaqCard({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <article className="premium-card premium-border-glow rounded-[28px] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[rgba(228,201,142,0.14)] bg-[linear-gradient(180deg,rgba(228,201,142,0.12)_0%,rgba(198,163,106,0.06)_100%)] shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
          <span className="text-xs font-semibold tracking-[0.14em] text-soft-gold">
            0{index + 1}
          </span>
        </div>

        <div>
          <h3 className="text-balance text-lg font-medium leading-7 text-foreground sm:text-xl">
            {question}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-6 text-muted sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden border-t border-white/5 py-24 sm:py-28">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute right-[8%] top-[14%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.10)_0%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[7%] bottom-[12%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(78,138,99,0.12)_0%,transparent_72%)] blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">faq and conversion clarity</span>

          <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Clear answers for teams evaluating a more modern guest experience layer.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
            This section is designed to reduce hesitation before conversion and
            explain how Nocta Guest fits into premium hospitality operations
            without turning the page into a technical systems pitch.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <FaqCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 premium-card premium-border-glow rounded-[30px] p-6 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                conversion support
              </p>
              <h3 className="mt-4 text-balance text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                The goal is to make the product feel easy to understand, credible, and premium before the final call to action.
              </h3>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted">
                Instead of overwhelming visitors with technical complexity, the
                FAQ keeps the positioning clear: Nocta Guest helps premium
                hospitality teams deliver smoother and more elevated guest
                experiences through one polished mobile layer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-[rgba(228,201,142,0.14)] bg-white/[0.03] px-4 py-2 text-sm text-foreground">
                Lower friction
              </span>
              <span className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-foreground">
                Clearer positioning
              </span>
              <span className="rounded-full border border-[rgba(78,138,99,0.18)] bg-white/[0.03] px-4 py-2 text-sm text-foreground">
                CTA-ready flow
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}