import Link from "next/link";
import { notFound } from "next/navigation";
import { journalArticles } from "@/lib/content";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = journalArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — h-aesthetic studio Journal`,
    description: article.excerpt,
  };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const article = journalArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <Reveal className="container" style={{ maxWidth: 760 }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/journal" className="link-arrow">
            <span className="arrow" style={{ marginRight: 8 }}>←</span> Journal
          </Link>
        </div>

        <div style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "var(--accent)",
          marginBottom: 20,
          textTransform: "uppercase"
        }}>
          <span>{article.category}</span>
          <span style={{ color: "var(--stone)" }}>·</span>
          <span style={{ color: "var(--stone)" }}>
            {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
          </span>
        </div>

        <h1 className="display" style={{
          fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
          lineHeight: 1.1,
          marginBottom: 40
        }}>
          {article.title}
        </h1>

        <div style={{
          width: 48,
          height: 1,
          background: "var(--accent)",
          marginBottom: 40
        }}></div>

        <div>
          {article.content.map((para, i) => (
            <p key={i} style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "#4a4740",
              marginBottom: 26
            }}>
              {para}
            </p>
          ))}
        </div>

        <div style={{
          marginTop: 60,
          paddingTop: 32,
          borderTop: "1px solid var(--stone-line)"
        }}>
          <Link href="/journal" className="link-arrow">
            More from the Journal <span className="arrow">→</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
