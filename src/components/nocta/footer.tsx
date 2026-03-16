import Link from "next/link";
import { Container } from "@/components/shared/container";

const footerLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Product", href: "#product" },
  { label: "Why Nocta", href: "#why-nocta" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(228,201,142,0.06),transparent_34%)]" />

      <Container className="relative">
        <div className="premium-card premium-border-glow rounded-[34px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(228,201,142,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soft-gold">
                    NG
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground">
                    Nocta Guest
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    premium hospitality experience platform
                  </p>
                </div>
              </div>

              <h3 className="mt-6 max-w-xl text-balance text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                Designed to make the guest journey feel smoother, warmer, and more considered.
              </h3>

              <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted">
                Nocta Guest brings arrivals, communication, reservations, and
                service moments into one polished mobile experience for modern
                hospitality teams and premium hotel brands.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[320px]">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 text-sm text-foreground transition-all duration-300 hover:border-[rgba(228,201,142,0.14)] hover:bg-white/[0.05]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/6 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>Nocta Guest — premium hospitality startup landing concept.</p>
            <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}