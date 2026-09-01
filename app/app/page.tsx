import Hero from "@/components/Hero";
import StudioSection from "@/components/StudioSection";
import ComingSoon from "@/components/ComingSoon";
import Philosophy from "@/components/Philosophy";
import Expertise from "@/components/Expertise";
import ProcessSection from "@/components/ProcessSection";
import AskSection from "@/components/AskSection";
import FinalCTA from "@/components/FinalCTA";
import Marquee from "@/components/Marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioSection />
      <Marquee />

      <ComingSoon
        id="work"
        sceneIndex=""
        eyebrow="Selected Work"
        title="Work"
        statusLabel="Status — In Curation"
        copy="Our project archive is currently being curated. Completed work will appear here as it's ready to be shown."
        compact
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
      <Marquee />
      <ProcessSection />

      <ComingSoon
        id="objects"
        sceneIndex=""
        eyebrow="Our Products"
        title="For Your Space."
        statusLabel="Status — In Curation"
        copy="A limited edit of considered interior pieces — currently being selected."
        compact
      >
        <div className="material-band" aria-hidden="true"></div>
        <div className="material-caption">Selected by material, not by trend.</div>
      </ComingSoon>

      <ComingSoon
        sceneIndex=""
        eyebrow="Design Packages"
        title="Different spaces require different ways of working."
        statusLabel="Status — In Preparation"
        copy=""
        compact
      >
        <div className="spec-line">
          <span className="spec-note">
            Each package will be structured by scope, duration and deliverable — not by size.
          </span>
          <span className="spec-meta">Framework — In Preparation</span>
        </div>
        <div style={{ marginTop: 28 }}>
          <a href="#ask" className="link-arrow">
            Ask About Design <span className="arrow">→</span>
          </a>
        </div>
      </ComingSoon>

      <AskSection />
      <Marquee />
      <FinalCTA />
    </>
  );
}
