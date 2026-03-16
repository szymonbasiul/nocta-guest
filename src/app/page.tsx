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
      <CtaSection />
      <Footer />
    </main>
  );
}