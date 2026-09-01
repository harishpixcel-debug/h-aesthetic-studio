"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity .65s cubic-bezier(.19,1,.22,1), transform .65s cubic-bezier(.19,1,.22,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 30);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
