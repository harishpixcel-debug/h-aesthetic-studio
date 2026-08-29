import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="scene on-dark">
      <div className="scene-index">11 — Final</div>
      <Reveal className="container">
        <div className="eyebrow">Have a Space in Mind?</div>
        <h2 className="final-cta-title display">
          Let&apos;s<em>design it.</em>
        </h2>
        <div className="final-cta-actions">
          <a href="/start-a-project" className="link-arrow solid">Start a Project</a>
        </div>
      </Reveal>
    </section>
  );
}
