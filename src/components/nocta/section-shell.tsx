import { ReactNode } from "react";
import { Container } from "@/components/shared/container";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="relative overflow-hidden border-t border-white/5 py-24 sm:py-28">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-40" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="max-w-xl">
            <span className="eyebrow">{eyebrow}</span>

            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
          </div>

          <div className="premium-card premium-border-glow rounded-[28px] p-6 sm:p-8">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}