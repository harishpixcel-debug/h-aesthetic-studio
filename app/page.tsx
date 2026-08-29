import Hero from "@/components/Hero";
import StudioSection from "@/components/StudioSection";
import ComingSoon from "@/components/ComingSoon";
import Philosophy from "@/components/Philosophy";
import Expertise from "@/components/Expertise";
import ProcessSection from "@/components/ProcessSection";
import AskSection from "@/components/AskSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioSection />

      {/* 03 — Work (editorial archive expression) */}
      <ComingSoon
        id="work"
        sceneIndex="03 — Work"
        eyebrow="Selected Work"
        title="Work"
        statusLabel="Status — In Curation"
        copy="Our project archive is currently being curated. Completed work will appear here as it's ready to be shown."
      >
        <div className="archive-line">
          <span className="archive-note">
            The archive is organized by project, place and material — it opens once the first entries are ready.
          </span>
          <span className="archive-meta">Index — Pending</span>
        </div>
      </ComingSoon>

      <Philosophy />
      <Expertise />
      <ProcessSection />

      {/* 07 — Cinematography (cinematic, dark, letterboxed expression) */}
      <ComingSoon
        sceneIndex="07 — Cinematography"
        eyebrow="Spaces in Motion"
        title="Cinematography"
        statusLabel="Status — In Production"
        copy="Interiors experienced through movement, light and time. The film archive is coming together."
        onDark
        darkMedia
      >
        <div className="film-frame" aria-hidden="true" style={{ opacity: 0.6 }}>
          <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
            <line className="ln" x1="0" y1="450" x2="1400" y2="450" />
            <circle className="ln-accent" cx="1000" cy="450" r="180" />
            <line className="ln" x1="0" y1="0" x2="1400" y2="900" />
          </svg>
        </div>
        <div className="film-vignette" />
        <div className="cine-frame">
          <div className="cine-play"></div>
          <div className="cine-time">00:00:00 — TBD</div>
        </div>
      </ComingSoon>

      {/* 08 — Objects (material/object-oriented expression) */}
      <ComingSoon
        id="objects"
        sceneIndex="08 — Objects"
        eyebrow="The Collection"
        title="Objects"
        statusLabel="Status — In Curation"
        copy="Objects for considered spaces. The collection is being curated."
      >
        <div className="material-band" aria-hidden="true"></div>
        <div className="material-caption">Selected by material, not by trend.</div>
      </ComingSoon>

      {/* 09 — Design Packages (service/system expression) */}
      <ComingSoon
        sceneIndex="09 — Packages"
        eyebrow="Design Packages"
        title="Different spaces require different ways of working."
        statusLabel="Status — In Preparation"
        copy=""
      >
        <div className="spec-line">
          <span className="spec-note">
            Each package will be structured by scope, duration and deliverable — not by size.
          </span>
          <span className="spec-meta">Framework — In Preparation</span>
        </div>
        <div style={{ marginTop: 32 }}>
          <a href="#ask" className="link-arrow">
            Ask About Design <span className="arrow">→</span>
          </a>
        </div>
      </ComingSoon>

      <AskSection />
      <FinalCTA />
    </>
  );
}
