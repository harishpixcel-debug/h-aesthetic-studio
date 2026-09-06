import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="scene scene-full on-dark final-cta-scene">
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
          opacity: 0.055,
          mixBlendMode: "overlay" as const,
          zIndex: 1,
          pointerEvents: "none" as const
        }}
        aria-hidden="true"
      />
      <Reveal className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="eyebrow">Have a Space in Mind?</div>
        <h2 className="final-cta-title display" style={{ marginTop: 20 }}>
          Let&apos;s<em>design it.</em>
        </h2>
        <div className="final-cta-actions">
          <a href="/start-a-project" className="link-arrow solid">
            Start a Project
          </a>
        </div>
      </Reveal>
    </section>
  );
}
