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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            spans.forEach((w, i) => {
              setTimeout(() => {
                w.style.opacity = "1";
                w.style.transform = "translateY(0)";
              }, i * 28);
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="scene on-dark">
      <div className="scene-index">04 — Philosophy</div>
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
      <div className="container reveal is-visible">
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
