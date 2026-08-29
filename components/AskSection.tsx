import Reveal from "./Reveal";

export default function AskSection() {
  return (
    <section className="scene tight" id="ask">
      <div className="scene-index">10 — Ask</div>
      <Reveal className="container">
        <div className="ask-frame">
          <span className="ask-tag">A Studio Feature</span>
          <div className="ask-mark" aria-hidden="true">ASK</div>
          <div>
            <h2 className="ask-title display">Have a design question?</h2>
            <p className="ask-copy">
              A room you&apos;re unsure about. A material you&apos;re considering.
              A space that doesn&apos;t quite work. Start with a question — no project required.
            </p>
          </div>
          <a href="/contact" className="link-arrow" style={{ whiteSpace: "nowrap" }}>
            Ask h-aesthetic <span className="arrow">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
