import { contact } from "@/lib/content";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  copy: string;
  showContact?: boolean;
};

/**
 * Shared shell for dedicated pages that don't have real content yet
 * (Studio, Work, Process, Journal). Never fill these with invented
 * bios, projects, or history — swap this for real content per-page
 * once it's supplied, following the Coming Soon philosophy.
 */
export default function PageStub({ eyebrow, title, copy, showContact }: Props) {
  return (
    <Reveal className="stub-scene">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="stub-title display">{title}</h1>
      <p className="stub-copy">{copy}</p>
      {showContact && (
        <div className="stub-contact">
          <a href={contact.phoneHref} className="link-arrow">
            {contact.phone} <span className="arrow">→</span>
          </a>
          <span className="pending">Email — coming soon</span>
          <span className="pending">Instagram — coming soon</span>
          <span className="pending">Behance — coming soon</span>
        </div>
      )}
    </Reveal>
  );
}
