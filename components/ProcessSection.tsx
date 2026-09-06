import { processSteps } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProcessSection() {
  return (
    <section className="scene scene-compact on-dark" id="process">
      <Reveal className="container">
        <div className="eyebrow">The Process</div>
        <h2 className="display" style={{
          fontSize: "clamp(2rem,3.6vw,3.1rem)",
          maxWidth: "20ch",
          marginTop: 16
        }}>
          From first idea to final detail.
        </h2>
        <div className="process-list">
          {processSteps.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="process-num">{step.num}</div>
              <div className="process-name">{step.name}</div>
              <div className="process-idea">{step.idea}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
