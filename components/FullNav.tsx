"use client";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function FullNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler(e: Event) {
      const next = (e as CustomEvent).detail;
      setOpen(next);
      document.body.style.overflow = next ? "hidden" : "";
    }
    window.addEventListener("nav:toggle", handler);
    return () => window.removeEventListener("nav:toggle", handler);
  }, []);

  function close() {
    setOpen(false);
    document.body.style.overflow = "";
    window.dispatchEvent(new CustomEvent("nav:toggled", { detail: false }));
  }

  return (
    <nav id="fullNav" className={`full-nav${open ? " open" : ""}`}>
      <div className="full-nav-links">
        {navLinks.map((link, i) => (
          <a key={link.label} href={link.href} onClick={close}>
            <span className="full-nav-num">{String(i + 1).padStart(2, "0")}</span>
            {link.label}
          </a>
        ))}
      </div>
      <div className="full-nav-bottom">
        <a href="/start-a-project" onClick={close}>Start a Project</a>
        <a href="/#ask" onClick={close}>Ask h-aesthetic</a>
      </div>
    </nav>
  );
}
