"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// スクロールで要素を表示する。prefers-reduced-motion のときは動かさずに表示する
export function Reveal({ children, y = 32, delay = 0, className = "" }: { children: ReactNode; y?: number; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(el, { opacity: 0, y, duration: 1, delay, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
    });
    return () => ctx.revert();
  }, [y, delay]);
  return <div ref={ref} className={className}>{children}</div>;
}
