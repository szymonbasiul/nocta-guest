"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "../../../lib/scroll-to-top";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-6 right-6 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(228,201,142,0.18)] bg-[linear-gradient(180deg,rgba(19,25,20,0.94)_0%,rgba(11,14,11,0.98)_100%)] text-foreground shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(228,201,142,0.28)]",
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <span className="text-lg leading-none">↑</span>
    </button>
  );
}