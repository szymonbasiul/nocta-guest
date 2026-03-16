import { Navbar } from "@/components/nocta/navbar";
import { SectionShell } from "@/components/nocta/section-shell";
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

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(78,138,99,0.20)_0%,rgba(78,138,99,0.06)_38%,transparent_74%)] blur-3xl" />
          <div className="absolute right-[10%] top-[16%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(228,201,142,0.14)_0%,rgba(228,201,142,0.05)_42%,transparent_76%)] blur-3xl" />
          <div className="section-grid absolute inset-0 opacity-35" />
        </div>

        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <span className="eyebrow">product direction reset</span>

            <h1 className="mt-8 max-w-5xl text-balance text-4xl font-medium leading-[1.05] text-foreground sm:text-5xl lg:text-7xl">
              A premium guest experience platform for modern hotels, boutique
              stays, and hospitality teams.
            </h1>

            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg lg:text-xl">
              Nocta Guest is presented as a refined hospitality product that
              helps hotels deliver smoother arrivals, more personal service, and
              a more elevated stay experience without adding operational chaos.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(228,201,142,0.16)] bg-[linear-gradient(180deg,rgba(228,201,142,0.18)_0%,rgba(198,163,106,0.12)_100%)] px-6 py-3 text-sm font-medium text-foreground shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Request a demo
              </a>

              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                Explore the product vision
              </a>
            </div>

            <div className="mt-14 grid w-full gap-4 lg:grid-cols-3">
              <div className="premium-card premium-border-glow rounded-[28px] p-6 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  positioning
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Lead-generation hospitality landing page
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Not pricing-first. Not dashboard-first. The product is framed
                  through guest experience, service quality, and premium stay
                  storytelling.
                </p>
              </div>

              <div className="premium-card premium-border-glow rounded-[28px] p-6 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  visual direction
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Dark luxury with elegant product surfaces
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Black, deep green, and soft gold establish a calm, premium,
                  hotel-oriented visual system with modern startup polish.
                </p>
              </div>

              <div className="premium-card premium-border-glow rounded-[28px] p-6 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-soft-gold">
                  portfolio value
                </p>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Built to look like a funded product
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  The page is being shaped to feel custom, expensive, and highly
                  intentional so it works as strong Fiverr and GitHub portfolio
                  proof.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionShell
        id="experience"
        eyebrow="guest experience foundation"
        title="The experience narrative is now centered on the stay, not the software."
        description="This project will showcase how the product improves check-in, service requests, reservations, communication, and on-property convenience through a polished mobile-first experience."
      >
        <PlaceholderList
          items={[
            "Mobile check-in and arrival flow",
            "Concierge and support messaging",
            "Dining, spa, and on-property reservations",
            "Personalized stay details and guest preferences",
          ]}
        />
      </SectionShell>

      <SectionShell
        id="product"
        eyebrow="app showcase direction"
        title="The product will be presented through elegant app moments instead of fake analytics."
        description="The future showcase sections will use premium mobile UI compositions, hospitality interaction cards, and layered storytelling to make the landing feel original and product-led."
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
        title="The landing is being shaped to appeal to operators who care about service quality and modern guest expectations."
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

      <section id="contact" className="border-t border-white/5 py-24 sm:py-28">
        <Container>
          <div className="premium-card premium-border-glow rounded-[32px] px-6 py-10 text-center sm:px-10 sm:py-14">
            <span className="eyebrow">foundation ready</span>

            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              The Nocta Guest direction is now reset and ready for the hero
              build.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              In the next branch we will build the distinctive premium hero with
              a strong mobile product stage, layered hospitality cards, and a
              composition that clearly separates this project from generic SaaS
              layouts.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}