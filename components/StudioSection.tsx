import { studio } from "@/lib/content";
import Reveal from "./Reveal";

export default function StudioSection() {
  return (
    <section className="scene scene-compact studio-scene" id="studio">
      <Reveal className="container">
        <div className="studio-copy">
          <div className="eyebrow">The Studio</div>
          <h2 className="studio-headline display">
            {studio.positioningHeadlineLead}
            <br />
            with <em>{studio.positioningHeadlineEmphasis}</em>
          </h2>
          <p>{studio.positioningCopy}</p>
          <div style={{ marginTop: 28 }}>
            <a href="/studio" className="link-arrow">
              About the Studio <span className="arrow">→</span>
            </a>
          </div>
        </div>
        {/* two offset plates — swappable for real photography */}
        <div className="studio-plates" aria-hidden="true">
          <div className="sp sp1">
            <svg viewBox="0 0 700 800" preserveAspectRatio="xMidYMid slice">
              <line className="ln" x1="0" y1="400" x2="700" y2="400" />
              <line className="ln" x1="350" y1="0" x2="350" y2="800" />
              <rect className="ln-accent" x="0" y="0" width="350" height="260" />
              <line className="ln" x1="0" y1="800" x2="700" y2="200" />
            </svg>
            <div className="sp-caption">Interior detail (TBC)</div>
          </div>
          <div className="sp sp2">
            <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
              <line className="ln" x1="0" y1="200" x2="500" y2="200" />
              <circle className="ln-accent" cx="250" cy="200" r="90" />
            </svg>
            <div className="sp-caption">Material study (TBC)</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
