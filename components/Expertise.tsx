"use client";
import { useState } from "react";
import Image from "next/image";
import { expertiseAreas } from "@/lib/content";
import Reveal from "./Reveal";

// Index-matched to expertiseAreas order in lib/content.ts:
// S.01 Space Planning, S.02 Hotels, S.03 Cafés, S.04 Restaurants,
// S.05 Co-working Offices, S.06 Cinematography.
const expertiseImages: string[] = [
  "/images/expertise/expertise-space-planning.jpg",
  "/images/expertise/expertise-hotels.jpg",
  "/images/expertise/expertise-cafes.jpg",
  "/images/expertise/expertise-restaurants.jpg",
  "/images/expertise/expertise-coworking.jpg",
  "/images/expertise/expertise-cinematography.jpg",
];

export default function Expertise() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section className="scene scene-compact" id="expertise">
      <Reveal className="container">
        <div className="eyebrow">What We Do</div>
        <h2 className="expertise-title display">Design, from idea to detail.</h2>
        <div className="expertise-scroll">
          {expertiseAreas.map((area, i) => (
            <div
              key={area.index}
              className="exp-card"
              tabIndex={0}
              role="button"
              aria-expanded={expanded === i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded(expanded === i ? null : i); } }}
            >
              <div className="plate">
                {expertiseImages[i] ? (
                  <Image
                    src={expertiseImages[i]}
                    alt={`${area.name} interior — h-aesthetic studio`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="240px"
                  />
                ) : (
                  <svg viewBox="0 0 240 140" preserveAspectRatio="xMidYMid slice">
                    {i === 0 && <line className="ln" x1="0" y1="70" x2="240" y2="70" />}
                    {i === 1 && <rect className="ln-accent" x="20" y="20" width="100" height="70" />}
                    {i === 2 && <circle className="ln" cx="120" cy="70" r="45" />}
                    {i === 3 && <line className="ln" x1="0" y1="0" x2="240" y2="140" />}
                    {i === 4 && <line className="ln" x1="120" y1="0" x2="120" y2="140" />}
                    {i === 5 && <><line className="ln" x1="0" y1="70" x2="240" y2="70" /><circle className="ln-accent" cx="120" cy="70" r="30" /></>}
                  </svg>
                )}
              </div>
              <div className="exp-card-body">
                <div className="exp-index">{area.index}</div>
                <div className="exp-name">{area.name}</div>
                <div className="exp-desc">{area.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
