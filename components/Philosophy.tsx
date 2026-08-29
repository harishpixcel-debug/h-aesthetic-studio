"use client";
import { useEffect, useRef } from "react";
import { philosophyStatement, philosophyVocab } from "@/lib/content";

export default function Philosophy() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const words = el.textContent?.trim().split(" ") ?? [];
    el.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");
    const spans = el.querySelectorAll<HTMLElement>(".word");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          spans.forEach((w, i) => {
            setTimeout(() => {
              w.style.opacity = "1";
              w.style.transform = "translateY(0)";
              w.style.filter = "blur(0)";
            }, i * 32);
          });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="scene scene-full on-dark">
      {/* grain for material tactility */}
      <div
        className="grain"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }}
        aria-hidden="true"
      />
      <div className="philosophy-grid-bg" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(245,242,236,0.045)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="eyebrow">Philosophy</div>
        <p ref={textRef} className="philosophy-statement display" style={{ marginTop: 22 }}>
          {philosophyStatement}
        </p>
        <div className="philosophy-vocab">
          {philosophyVocab.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
