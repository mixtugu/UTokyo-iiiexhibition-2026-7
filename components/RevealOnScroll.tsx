"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
};

export function RevealOnScroll({ children }: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition duration-700 ease-out will-change-transform ${
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-10 opacity-0 blur-sm"
      }`}
      ref={elementRef}
    >
      {children}
    </div>
  );
}
