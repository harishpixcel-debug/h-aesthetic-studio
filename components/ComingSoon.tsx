import Reveal from "./Reveal";

type Props = {
  sceneIndex: string;
  eyebrow: string;
  title: string;
  statusLabel: string;
  copy: string;
  id?: string;
  onDark?: boolean;
  compact?: boolean;
  children?: React.ReactNode;
};

export default function ComingSoon({ sceneIndex, eyebrow, title, statusLabel, copy, id, onDark, compact, children }: Props) {
  const classes = ["scene", compact ? "scene-compact" : "scene-full", "hr"];
  if (onDark) classes.push("on-dark");

  return (
    <section className={classes.join(" ")} id={id}>
      {sceneIndex && <div className="scene-index">{sceneIndex}</div>}
      <Reveal className="container">
        <div className="cs-head">
          <span className="status-dot"></span>
          <span className="status-label">{statusLabel}</span>
        </div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
        <h3 className="cs-title display">{title}</h3>
        {copy && <p className="cs-copy">{copy}</p>}
        {children}
      </Reveal>
    </section>
  );
}
