import { Features } from "@/components/nocta/features";
import { Hero } from "@/components/nocta/hero";
import { Navbar } from "@/components/nocta/navbar";
import { SectionShell } from "@/components/nocta/section-shell";
import { TrustedBy } from "@/components/nocta/trusted-by";
import { Container } from "@/components/shared/container";

function PlaceholderList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
        >
          <span className="text-sm text-foreground sm:text-base">{item}</span>
          <span className="text-xs uppercase tracking-[0.18em] text-soft-gold">
            planned
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />

      <SectionShell
        id="product"
        eyebrow="app showcase direction"
        title="The product is presented through elegant app moments instead of fake analytics."
        description="The upcoming showcase sections use premium mobile UI compositions, hospitality interaction cards, and layered storytelling to make the landing feel original and product-led."
      >
        <PlaceholderList
          items={[
            "Phone-led hero composition",
            "Hospitality interaction cards",
            "Refined feature storytelling blocks",
            "Screenshot-friendly visual rhythm",
          ]}
        />
      </SectionShell>

      <SectionShell
        id="why-nocta"
        eyebrow="commercial framing"
        title="The landing is shaped for operators who care about service quality and modern guest expectations."
        description="The copy and layout direction position Nocta Guest as a premium hospitality product for boutique hotels, aparthotels, and modern hospitality teams that want a smoother guest journey."
      >
        <PlaceholderList
          items={[
            "Why hotel teams choose Nocta Guest",
            "Proof and hospitality trust layer",
            "Premium testimonials presentation",
            "Clear demo-oriented conversion path",
          ]}
        />
      </SectionShell>

      <section id="faq" className="border-t border-white/5 py-24 sm:py-28">
        <Container>
          <div className="premium-card premium-border-glow rounded-[32px] px-6 py-10 text-center sm:px-10 sm:py-14">
            <span className="eyebrow">coming next</span>

            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              The hero and experience features are live. Next we build the product showcase.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              The next branches will turn the current structure into a full
              premium hospitality landing page with stronger product visuals,
              trust, and conversion support.
            </p>
          </div>
        </Container>
      </section>

      <section id="contact" className="border-t border-white/5 py-24 sm:py-28">
        <Container>
          <div className="premium-card premium-border-glow rounded-[32px] px-6 py-10 text-center sm:px-10 sm:py-14">
            <span className="eyebrow">request a demo</span>

            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Designed for hotels that want a more elevated guest journey.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Nocta Guest brings check-in, service requests, reservations, and
              guest communication into one polished mobile experience for modern
              hospitality teams.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(228,201,142,0.18)] bg-[linear-gradient(180deg,rgba(228,201,142,0.2)_0%,rgba(198,163,106,0.12)_100%)] px-6 py-3.5 text-sm font-medium text-foreground shadow-[0_16px_34px_rgba(0,0,0,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(228,201,142,0.3)]"
              >
                Talk to hospitality team
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}