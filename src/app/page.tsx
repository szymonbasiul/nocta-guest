import { Container } from "@/components/shared/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(78,138,99,0.24)_0%,rgba(78,138,99,0.08)_35%,transparent_72%)] blur-3xl" />
          <div className="absolute right-[8%] top-[12%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(198,163,106,0.18)_0%,rgba(198,163,106,0.06)_40%,transparent_75%)] blur-3xl" />
        </div>

        <Container className="relative flex min-h-screen flex-col justify-center py-24 sm:py-28 lg:py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-[rgba(228,201,142,0.18)] bg-[rgba(255,255,255,0.03)] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-softGold/90 backdrop-blur">
              Nocta Guest • project foundation
            </span>

            <h1 className="mt-8 max-w-4xl text-balance text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-7xl">
              Premium hospitality landing page foundation for a modern guest
              experience product.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              This is the clean project baseline for Nocta Guest. In the next
              branches we will build a distinctive hospitality-tech landing page
              with a premium app-led hero, elegant storytelling, and refined UI
              polish.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <div className="rounded-full border border-[rgba(228,201,142,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-6 py-3 text-sm font-medium text-foreground shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                Next.js App Router
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-muted shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                TypeScript + Tailwind CSS
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}