"use client";
import { useEffect, useRef, useState } from "react";

type EasingFn = (t: number) => number;
type FormatFn = (n: number) => string | number;

interface CounterProps {
  from?: number;
  to?: number;
  duration?: number;
  easing?: EasingFn;
  format?: FormatFn;
  startWhenVisible?: boolean;
}

export default function Counter({
  from = 0,
  to = 100,
  duration = 2,
  easing = (t: number) => t,
  format = (n: number) => Math.round(n),
  startWhenVisible = false,
}: CounterProps) {
  const [value, setValue] = useState<number>(from);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  const startAnimation = () => {
    startRef.current = performance.now();

    const tick = (now?: number) => {
      const elapsed = (now ?? performance.now()) - startRef.current!;
      const t = Math.min(1, elapsed / (duration * 1000));
      const eased = easing(t);
      const current = from + (to - from) * eased;

      setValue(current);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  // START-WHEN-VISIBLE MODE
  useEffect(() => {
    if (!startWhenVisible) return;

    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            startAnimation();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startWhenVisible]);

  // AUTO-START MODE
  useEffect(() => {
    if (!startWhenVisible) {
      startAnimation();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startWhenVisible]);

  return <span ref={nodeRef}>{format(value)}</span>;
}
