import Reveal from "./Reveal";

export default function AskSection() {
  return (
    <section className="scene scene-compact ask-scene" id="ask">
      <Reveal className="container">
        <div className="ask-inner">
          <div className="ask-left">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Have a Design Question?</div>
            <h2 className="ask-title display">
              A space that doesn&apos;t<br />quite <em>work?</em>
            </h2>
            <p className="ask-copy">
              A room you&apos;re unsure about. A material you&apos;re considering.
              Start with a question — no project required.
            </p>
          </div>
          <div className="ask-right">
            <a href="/contact" className="link-arrow">
              Ask h-aesthetic <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
