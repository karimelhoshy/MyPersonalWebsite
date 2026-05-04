"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function TopBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-11 text-[12px]">
          <div className="flex items-center gap-3.5">
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>
              Karim El Hoshy
            </span>
            <span
              className="hidden sm:inline-flex items-center gap-1.5 px-2 py-[2px] rounded-full"
              style={{ border: "1px solid var(--rule-2)", color: "var(--fg-2)" }}
            >
              <span className="pulse-dot" /> live
            </span>
          </div>
          <nav className="flex items-center gap-[18px]">
            <NavLink href="#trace">Work</NavLink>
            <NavLink href="#metadata">Beyond</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <span className="kbd hidden md:inline-flex">
              <span style={{ fontFamily: "system-ui" }}>⌘</span>K
            </span>
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="inline-flex items-center justify-center w-7 h-7 rounded"
              style={{
                border: "1px solid var(--rule-2)",
                color: "var(--fg-2)",
                background: "transparent",
              }}
              suppressHydrationWarning
            >
              {mounted ? (isDark ? "☼" : "☾") : "☼"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="hidden sm:inline-block py-1.5 transition-colors"
      style={{ color: "var(--fg-2)", borderBottom: "1px solid transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--fg)";
        e.currentTarget.style.borderBottomColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--fg-2)";
        e.currentTarget.style.borderBottomColor = "transparent";
      }}
    >
      {children}
    </a>
  );
}
