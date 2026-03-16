import { AppShowcase } from "@/components/nocta/app-showcase";
import { Faq } from "@/components/nocta/faq";
import { Features } from "@/components/nocta/features";
import { Hero } from "@/components/nocta/hero";
import { Navbar } from "@/components/nocta/navbar";
import { Testimonials } from "@/components/nocta/testimonials";
import { TrustedBy } from "@/components/nocta/trusted-by";
import { WhyNocta } from "@/components/nocta/why-nocta";
import { Container } from "@/components/shared/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <AppShowcase />
      <WhyNocta />
      <Testimonials />
      <Faq />

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