import { processSteps } from "@/lib/content";
import Reveal from "./Reveal";

const ICONS: Record<string, JSX.Element> = {
  "01": (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.3" />
      <line x1="17.2" y1="17.2" x2="23" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="4" width="16" height="20" stroke="currentColor" strokeWidth="1.3" />
      <line x1="9.5" y1="10" x2="18.5" y2="10" stroke="currentColor" strokeWidth="1.1" />
      <line x1="9.5" y1="14" x2="18.5" y2="14" stroke="currentColor" strokeWidth="1.1" />
      <line x1="9.5" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="6" y1="22" x2="19" y2="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M19 9 L23 5 L23 9 L19 13 Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <line x1="6" y1="22" x2="9" y2="19" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="8" height="8" stroke="currentColor" strokeWidth="1.2" />
      <rect x="15" y="5" width="8" height="8" stroke="currentColor" strokeWidth="1.2" />
      <rect x="5" y="15" width="8" height="8" stroke="currentColor" strokeWidth="1.2" />
      <rect x="15" y="15" width="8" height="8" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  "05": (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15 8 L21 14 L15 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "06": (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="18" height="16" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="14" cy="14" r="2.2" fill="currentColor" />
    </svg>
  ),
};

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
              <div className="process-node" aria-hidden="true"></div>
              <div className="process-icon" aria-hidden="true">{ICONS[step.num]}</div>
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
