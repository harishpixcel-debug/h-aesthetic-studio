"use client";
import { useEffect, useRef } from "react";
import { studio } from "@/lib/content";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (visualRef.current) {
        visualRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="scene scene-full on-dark hero">
      {/* Real background image — generated, not stock photography */}
      <div
        ref={visualRef}
        className="film-frame"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          transform: "scale(1.08)",
          transformOrigin: "center center",
        }}
        aria-hidden="true"
      />
      <div className="film-vignette" />
      <div className="hero-content reveal is-visible">
        <div className="hero-lockup">
          <div className="hero-wordmark">
            <span className="hero-h">h-aesthetic</span>
            <span className="hero-s">studio</span>
          </div>
          <div className="hero-lockup-bottom">
            <div className="hero-rule" aria-hidden="true"></div>
            <div className="hero-tagline">Design Precision</div>
          </div>
        </div>
        <p className="hero-sub">{studio.tagline}</p>
        <div className="hero-ctas">
          <a href="/studio" className="link-arrow">
            Explore the Studio <span className="arrow">→</span>
          </a>
          <a href="/start-a-project" className="link-arrow solid">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
