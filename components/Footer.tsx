import { contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <div className="footer-word">h-aesthetic · studio</div>
          <p className="footer-tag">Design precision. Aesthetic, with discipline.</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Studio</div>
          <a href="/work">Work</a>
          <a href="/studio">Studio</a>
          <a href="/#expertise">Expertise</a>
          <a href="/journal">Journal</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <a href="/start-a-project">Start a Project</a>
          <a href="/contact">Ask h-aesthetic</a>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© h-aesthetic studio</span>
        <span>Design Precision</span>
      </div>
    </footer>
  );
}
