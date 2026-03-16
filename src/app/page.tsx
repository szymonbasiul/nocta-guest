import { AppShowcase } from "@/components/nocta/app-showcase";
import { CtaSection } from "@/components/nocta/cta-section";
import { Faq } from "@/components/nocta/faq";
import { Features } from "@/components/nocta/features";
import { Footer } from "@/components/nocta/footer";
import { Hero } from "@/components/nocta/hero";
import { Navbar } from "@/components/nocta/navbar";
import { Testimonials } from "@/components/nocta/testimonials";
import { TrustedBy } from "@/components/nocta/trusted-by";
import { WhyNocta } from "@/components/nocta/why-nocta";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />

      <RevealOnScroll>
        <TrustedBy />
      </RevealOnScroll>

      <RevealOnScroll delay={40}>
        <Features />
      </RevealOnScroll>

      <RevealOnScroll delay={60}>
        <AppShowcase />
      </RevealOnScroll>

      <RevealOnScroll delay={80}>
        <WhyNocta />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <Testimonials />
      </RevealOnScroll>

      <RevealOnScroll delay={120}>
        <Faq />
      </RevealOnScroll>

      <RevealOnScroll delay={140}>
        <CtaSection />
      </RevealOnScroll>

      <RevealOnScroll delay={160}>
        <Footer />
      </RevealOnScroll>

      <ScrollToTopButton />
    </main>
  );
}