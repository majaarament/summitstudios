// src/components/Reveal.tsx
"use client";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

type Props = {
  delay?: number;        // seconds
  amount?: number;       // 0..1 how much of element must be visible
  y?: number;            // px translate on enter
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  amount = 0.15,
  y = 8,
  once = true,
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Fallback: if IO not supported, just show
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold: amount, rootMargin: "0px 0px -10% 0px" }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [amount, once]);

  const style: React.CSSProperties = {
    transition: "transform 400ms ease, opacity 400ms ease",
    transitionDelay: `${delay}s`,
    transform: show ? "translateY(0px)" : `translateY(${y}px)`,
  
    opacity: show ? 1 : 0.01,
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
