"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
    <header className="site-header">
      <a href="/" className="logo-lockup" aria-label="h-aesthetic studio — home">
        <div className="mark">
          <span className="h">h-aesthetic</span>
          <span className="studio">studio</span>
        </div>
        <div className="rule" aria-hidden="true" style={{ height: "0.85em" }}></div>
        <div className="tagline">Design Precision</div>
      </a>
      <button
        className={`menu-trigger${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="fullNav"
        onClick={toggle}
      >
        <span className="bars"><span></span><span></span><span></span></span>
        <span>{open ? "Close" : "Menu"}</span>
      </button>
    </header>
  );
}
