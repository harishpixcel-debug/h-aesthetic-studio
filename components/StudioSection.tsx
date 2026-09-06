import Image from "next/image";
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
        <div className="studio-plates">
          <div className="sp sp1">
            <Image
              src="/images/studio/studio-plate-concrete.jpg"
              alt="Raw concrete surface in warm raking light"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 960px) 36vw, 90vw"
            />
          </div>
          <div className="sp sp2">
            <Image
              src="/images/studio/studio-plate-travertine.jpg"
              alt="Travertine stone surface detail"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 960px) 25vw, 90vw"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
