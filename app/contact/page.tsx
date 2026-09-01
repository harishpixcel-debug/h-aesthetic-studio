import InquiryForm from "@/components/InquiryForm";
import { contact } from "@/lib/content";

export const metadata = {
  title: "Contact — h-aesthetic studio",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 16 }}>Ask h-aesthetic</div>
        <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.6rem)", marginBottom: 32 }}>
          Have a design question?
        </h1>
        <p style={{ maxWidth: "44ch", color: "#4a4740", fontSize: 16, marginBottom: 48, lineHeight: 1.6 }}>
          A room you&apos;re unsure about. A material you&apos;re considering. A space that doesn&apos;t quite work. Start with a question — no project required.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <a href={contact.phoneHref} className="link-arrow">
            {contact.phone} <span className="arrow">→</span>
          </a>
          <a href={contact.emailHref} className="link-arrow">
            {contact.email} <span className="arrow">→</span>
          </a>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--stone)" }}>
            Instagram — coming soon
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--stone)" }}>
            Behance — coming soon
          </span>
        </div>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--stone-line)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--stone)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
            Or start a full project inquiry
          </p>
          <a href="/start-a-project" className="link-arrow">
            Start a Project <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
