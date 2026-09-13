import Link from "next/link";
import { journalArticles } from "@/lib/content";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Journal — h-aesthetic studio",
  description:
    "Notes on design and material from h-aesthetic studio.",
};

export default function JournalPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <Reveal className="container">
        <div className="eyebrow">Journal</div>
        <h1 className="display" style={{
          fontSize: "clamp(2.4rem, 6vw, 4rem)",
          maxWidth: "20ch",
          marginTop: 16,
          marginBottom: 56
        }}>
          Notes from the studio.
        </h1>

        <div style={{ borderTop: "1px solid var(--stone-line)" }}>
          {journalArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                padding: "36px 0",
                borderBottom: "1px solid var(--stone-line)"
              }}
            >
              <div style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                color: "var(--accent)",
                marginBottom: 14,
                textTransform: "uppercase"
              }}>
                <span>{article.category}</span>
                <span style={{ color: "var(--stone)" }}>·</span>
                <span style={{ color: "var(--stone)" }}>
                  {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </div>
              <h2 className="display" style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                marginBottom: 12,
                maxWidth: "26ch"
              }}>
                {article.title}
              </h2>
              <p style={{
                fontSize: 16,
                color: "#4a4740",
                maxWidth: "60ch",
                lineHeight: 1.65,
                marginBottom: 14
              }}>
                {article.excerpt}
              </p>
              <span className="link-arrow">Read <span className="arrow">→</span></span>
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
