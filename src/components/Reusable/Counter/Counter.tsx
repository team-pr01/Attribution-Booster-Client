"use client";
import { useEffect, useRef, useState } from "react";

type EasingFn = (t: number) => number;
type FormatFn = (n: number) => string | number;

interface CounterProps {
  from?: number;
  to?: number;
  duration?: number; // seconds
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

  useEffect(() => {
    const tick = (now?: number) => {
      if (!startRef.current) startRef.current = now ?? performance.now();
      const elapsed = (now ?? performance.now()) - startRef.current;
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

    if (startWhenVisible && typeof IntersectionObserver !== "undefined") {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              obs.disconnect();
              startRef.current = performance.now();
              rafRef.current = requestAnimationFrame(tick);
            }
          });
        },
        { threshold: 0.25 }
      );
      if (nodeRef.current) obs.observe(nodeRef.current);
      return () => {
        obs.disconnect();
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      };
    } else {
      // start immediately
      startRef.current = performance.now();
      rafRef.current = requestAnimationFrame(tick);
      return () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      };
    }
  }, [from, to, duration, startWhenVisible, easing,]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <span ref={nodeRef}>{format(value)}</span>;
}
