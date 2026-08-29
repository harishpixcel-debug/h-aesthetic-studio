import { studio } from "@/lib/content";
import Reveal from "./Reveal";

export default function StudioSection() {
  return (
    <section className="scene studio-scene" id="studio">
      <div className="scene-index">02 — Studio</div>
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
        <div className="studio-plate dark-corner" aria-hidden="true">
          <div className="corner tl"></div>
          <div className="corner tr"></div>
          <div className="corner bl"></div>
          <div className="corner br"></div>
          {/* swappable primary visual */}
          <div className="film-frame">
            <svg viewBox="0 0 700 900" preserveAspectRatio="xMidYMid slice">
              <line className="ln" x1="0" y1="450" x2="700" y2="450" />
              <line className="ln" x1="350" y1="0" x2="350" y2="900" />
              <rect className="ln-accent" x="0" y="0" width="350" height="300" />
              <line className="ln" x1="0" y1="900" x2="700" y2="200" />
            </svg>
          </div>
          <div className="film-caption">Plate — Interior detail (TBC)</div>
        </div>
      </Reveal>
    </section>
  );
}
