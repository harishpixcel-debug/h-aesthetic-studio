import { contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-logo">
          <div className="logo-lockup">
            <div className="mark">
              <span className="h">h-aesthetic</span>
              <span className="studio">studio</span>
            </div>
            <div className="rule" aria-hidden="true" style={{ height: "0.85em" }}></div>
            <div className="tagline">Design Precision</div>
          </div>
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
          <a href={contact.emailHref}>{contact.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© h-aesthetic studio</span>
        <span>Design Precision</span>
      </div>
    </footer>
  );
}
