"use client";


import Link from "next/link";
import { Container } from "@/components/shared/container";
import { scrollToTop } from "../../../lib/scroll-to-top";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Product", href: "#product" },
  { label: "Why Nocta", href: "#why-nocta" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(7,8,7,0.72)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <button onClick={scrollToTop} className="flex cursor-pointer items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(228,201,142,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(228,201,142,0.24)]">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soft-gold">
              NG
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-foreground">
              Nocta Guest
            </span>
            <span className="text-xs text-muted">
              hospitality experience platform
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full border border-[rgba(228,201,142,0.14)] bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-[rgba(228,201,142,0.24)] hover:bg-white/[0.05] md:inline-flex"
          >
            Talk to team
          </Link>

          <Link
            href="#contact"
            className="inline-flex rounded-full border border-[rgba(228,201,142,0.16)] bg-[linear-gradient(180deg,rgba(228,201,142,0.18)_0%,rgba(198,163,106,0.12)_100%)] px-4 py-2 text-sm font-medium text-foreground shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(228,201,142,0.28)]"
          >
            Book demo
          </Link>
        </div>
      </Container>
    </header>
  );
}