"use client";
import { useEffect, useRef } from "react";
import { studio } from "@/lib/content";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (visualRef.current) {
        visualRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="scene scene-full on-dark hero">
      <div className="film-frame" ref={visualRef} aria-hidden="true">
        <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
          <line className="ln" x1="0" y1="450" x2="1400" y2="450" />
          <line className="ln" x1="700" y1="0" x2="700" y2="900" />
          <rect className="ln-accent" x="700" y="0" width="380" height="390" />
          <line className="ln" x1="0" y1="0" x2="700" y2="450" />
          <circle className="ln" cx="1080" cy="620" r="150" />
          <line className="ln" x1="0" y1="900" x2="1400" y2="0" />
        </svg>
      </div>
      <div className="film-vignette" />
      <div className="hero-content reveal is-visible">
        {/* Logo lockup — responsive, never breaks */}
        <div className="hero-lockup">
          <div className="hero-wordmark">
            <span className="hero-h">h-aesthetic</span>
            <span className="hero-studio">studio</span>
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
      <div className="film-caption">
        Visual placeholder — photography / film TBC
      </div>
    </section>
  );
}
