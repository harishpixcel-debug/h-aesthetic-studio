import Reveal from "./Reveal";

type Props = {
  sceneIndex: string;
  eyebrow: string;
  title: string;
  statusLabel: string;
  copy: string;
  id?: string;
  onDark?: boolean;
  darkMedia?: boolean;
  children?: React.ReactNode; // the distinct visual-expression slot
};

/**
 * Shared Coming Soon skeleton — status dot/label, eyebrow, title, copy.
 * Visual differentiation (archive line / material band / spec line /
 * cinematic frame) is passed in as children so each instance keeps its
 * own distinct expression without duplicating the skeleton.
 */
export default function ComingSoon({
  sceneIndex,
  eyebrow,
  title,
  statusLabel,
  copy,
  id,
  onDark,
  darkMedia,
  children,
}: Props) {
  const classes = ["scene", "tight"];
  if (onDark) classes.push("on-dark");
  if (darkMedia) classes.push("dark-media");

  return (
    <section className={classes.join(" ")} id={id}>
      <div className="scene-index">{sceneIndex}</div>
      <Reveal className="container">
        <div className="cs-head">
          <span className="status-dot"></span>
          <span className="status-label">{statusLabel}</span>
        </div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
        <h3 className="cs-title display">{title}</h3>
        <p className="cs-copy">{copy}</p>
        {children}
      </Reveal>
    </section>
  );
}
