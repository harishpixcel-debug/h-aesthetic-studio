"use client";
import { useState } from "react";
import { expertiseAreas } from "@/lib/content";
import Reveal from "./Reveal";

export default function Expertise() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="scene tight" id="expertise">
      <div className="scene-index">05 — Expertise</div>
      <Reveal className="container">
        <div className="eyebrow">What We Do</div>
        <h2 className="expertise-title display">Design, from idea to detail.</h2>
        <div className="service-list">
          {expertiseAreas.map((area, i) => (
            <div
              key={area.index}
              className={`service-row${expandedIndex === i ? " expanded" : ""}`}
              tabIndex={0}
              role="button"
              aria-expanded={expandedIndex === i}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setExpandedIndex(expandedIndex === i ? null : i);
                }
              }}
            >
              <div className="service-top">
                <span className="service-index">{area.index}</span>
                <span className="service-name">{area.name}</span>
                <span className="service-plus">+</span>
              </div>
              <p className="service-desc">{area.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
