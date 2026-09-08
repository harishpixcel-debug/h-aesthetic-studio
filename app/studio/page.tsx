import Reveal from "@/components/Reveal";
import Image from "next/image";

export const metadata = {
  title: "Studio — h-aesthetic studio",
  description:
    "h-aesthetic studio is a designer-led interior practice delivering commercial, residential, hospitality and café interiors — from concept through completion.",
};

export default function StudioPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <Reveal className="container">

        {/* Eyebrow */}
        <div className="eyebrow" style={{ marginBottom: 20 }}>The Studio</div>

        {/* Headline */}
        <h1 className="display" style={{
          fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
          lineHeight: 1.04,
          maxWidth: "18ch",
          marginBottom: 40
        }}>
          Design precision.<br /><em>Grounded in reality.</em>
        </h1>

        {/* Material plates */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 48,
          maxWidth: 700
        }}>
          <div style={{
            position: "relative",
            flex: "1 1 260px",
            maxWidth: 320,
            minWidth: 200,
            aspectRatio: "3 / 2",
            overflow: "hidden"
          }}>
            <Image
              src="/images/studio/studio-plate-commercial.jpg"
              alt="Modern commercial office interior"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 700px) 320px, 45vw"
            />
          </div>
          <div style={{
            position: "relative",
            flex: "1 1 260px",
            maxWidth: 320,
            minWidth: 200,
            aspectRatio: "3 / 2",
            overflow: "hidden"
          }}>
            <Image
              src="/images/studio/studio-plate-residential.jpg"
              alt="Minimalist residential living space"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 700px) 320px, 45vw"
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: 48,
          height: 1,
          background: "var(--accent)",
          marginBottom: 48
        }}></div>

        {/* Body copy */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 6vw, 80px)",
          alignItems: "start",
          maxWidth: 1100
        }}>
          <div>
            <p style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "#4a4740",
              marginBottom: 28
            }}>
              h-aesthetic studio is an interior practice built on a simple premise: a space
              should age with dignity, and its execution should be flawless. Drawing on
              experience in design and project management since 2016, the studio exists to
              close the gap between design intent and site reality.
            </p>

            <div className="eyebrow" style={{ marginBottom: 12 }}>Our Material Truth</div>
            <p style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "#4a4740",
              marginBottom: 28
            }}>
              We design around raw, grounded materials and quiet, earthy tones — travertine,
              microtopping, lime plaster, honest timber, tactile steel. Beauty comes from how
              light moves across a textured surface, and how a space feels at human scale —
              not from surface-level trends.
            </p>

            <div className="eyebrow" style={{ marginBottom: 12 }}>How We Work</div>
            <p style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "#4a4740"
            }}>
              Depending on what a project needs, h-aesthetic works as a design and planning
              studio, or takes on full delivery — managing vendors, execution and handover
              end to end. Material choices are made alongside cost and site realities from
              day one, not after the fact.
            </p>
          </div>

          <div>
            {/* Pull quote */}
            <blockquote style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
              lineHeight: 1.3,
              color: "var(--charcoal)",
              borderLeft: "2px solid var(--accent)",
              paddingLeft: 28,
              marginBottom: 48
            }}>
              &ldquo;Every project is treated as our own.&rdquo;
            </blockquote>

            {/* Practice areas */}
            <div className="eyebrow" style={{ marginBottom: 18 }}>What we work on</div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.04em"
            }}>
              {[
                "Hotels & Hospitality",
                "Cafés & Restaurants",
                "Co-working Offices",
                "Commercial Interiors",
                "Residential Interiors",
              ].map((item) => (
                <div key={item} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--stone-line)",
                  color: "var(--charcoal)"
                }}>
                  <span style={{
                    width: 6, height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0
                  }}></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision note */}
        <div style={{
          marginTop: 80,
          paddingTop: 40,
          borderTop: "1px solid var(--stone-line)",
          maxWidth: 640
        }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>A Growing Practice</div>
          <p style={{ fontSize: 15, color: "#57544c", lineHeight: 1.7 }}>
            h-aesthetic is being built as a collective of designers who share the same
            standard of work — precise, considered and built to last. If you design with
            that discipline, we&apos;d like to hear from you.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href="/contact" className="link-arrow">
              Get in touch <span className="arrow">→</span>
            </a>
          </div>
        </div>

      </Reveal>
    </div>
  );
}
