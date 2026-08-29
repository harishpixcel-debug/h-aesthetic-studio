"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler(e: Event) {
      setOpen((e as CustomEvent).detail);
    }
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
      <a href="/" className="wordmark">
        h-aesthetic<span> · studio</span>
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
