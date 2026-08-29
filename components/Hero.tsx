import { studio } from "@/lib/content";

export default function Hero() {
  return (
    <section className="scene on-dark dark-media">
      {/* Swappable primary visual: replace this SVG with an <Image> or <video> when real photography/film is available */}
      <div className="film-frame" aria-hidden="true">
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
      <div className="hero-content">
        <div className="hero-eyebrow">{studio.eyebrow}</div>
        <h1 className="hero-title display">
          Design<em>Precision.</em>
        </h1>
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
        Scene 01
        <br />
        Visual placeholder — photography / film TBC
      </div>
    </section>
  );
}
