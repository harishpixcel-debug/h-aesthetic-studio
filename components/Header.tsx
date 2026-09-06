"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const pathname = usePathname();

  // Hero is dark — all other pages are light backgrounds
  // Track scroll position on homepage to know if we're past the hero
  useEffect(() => {
    const isHomepage = pathname === "/";

    if (!isHomepage) {
      setOnDark(false);
      return;
    }

    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setOnDark(window.scrollY < heroHeight - 100);
    };

    setOnDark(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    function handler(e: Event) { setOpen((e as CustomEvent).detail); }
    window.addEventListener("nav:toggled", handler);
    return () => window.removeEventListener("nav:toggled", handler);
  }, []);

  function toggle() {
    const next = !open;
    setOpen(next);
    window.dispatchEvent(new CustomEvent("nav:toggle", { detail: next }));
  }

  return (
    <header className={`site-header${onDark ? "" : " on-light"}`}
      style={{ color: onDark ? "var(--ivory)" : "var(--charcoal)" }}>
      <a href="/" className="logo-lockup" aria-label="h-aesthetic studio — home"
        style={{ color: onDark ? "var(--ivory)" : "var(--charcoal)" }}>
        <div className="mark">
          <span className="h">h-aesthetic</span>
          <span className="studio">studio</span>
        </div>
        <div className="rule" aria-hidden="true"
          style={{ height: "0.85em", background: onDark ? "rgba(245,242,236,0.4)" : "rgba(42,40,34,0.3)" }}>
        </div>
        <div className="tagline">Design Precision</div>
      </a>
      <button
        className={`menu-trigger${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="fullNav"
        onClick={toggle}
        style={{ color: onDark ? "var(--ivory)" : "var(--charcoal)" }}
      >
        <span className="bars">
          <span style={{ background: onDark ? "var(--ivory)" : "var(--charcoal)" }}></span>
          <span style={{ background: onDark ? "var(--ivory)" : "var(--charcoal)" }}></span>
          <span style={{ background: onDark ? "var(--ivory)" : "var(--charcoal)" }}></span>
        </span>
        <span>{open ? "Close" : "Menu"}</span>
      </button>
    </header>
  );
}
