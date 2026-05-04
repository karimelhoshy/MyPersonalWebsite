"use client";

import { useState } from "react";
import { ROLES } from "@/lib/resume";

export function CareerTrace() {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // EY open by default

  return (
    <section className="container-x py-16" id="trace">
      <div className="sec-head">
        <div className="l">
          <span className="num">01</span>
          <span className="ttl">
            <em>career.trace</em>
            <span className="muted">— current spans</span>
          </span>
        </div>
        <div className="r">3 spans · click any row ▾</div>
      </div>

      <div
        className="trace-axis"
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr 100px 90px",
          gap: 16,
          alignItems: "center",
          color: "var(--fg-muted)",
          fontSize: 11,
          padding: "8px 0",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          borderBottom: "1px dashed var(--rule)",
        }}
      >
        <div className="hidden md:block">SERVICE</div>
        <div className="hidden md:block" style={{ position: "relative" }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              color: "var(--fg-muted)",
              fontSize: 10.5,
              padding: "4px 0 6px",
              marginTop: 6,
            }}
          >
            {["2020", "2021", "2022", "2023", "2024", "2025 →"].map((y, i) => (
              <span
                key={y}
                style={{
                  borderLeft: i === 0 ? 0 : "1px dashed var(--rule)",
                  paddingLeft: i === 0 ? 0 : 6,
                }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block" style={{ textAlign: "right" }}>DURATION</div>
        <div className="hidden md:block" style={{ textAlign: "right" }}>STATUS</div>
      </div>

      {ROLES.map((role, idx) => {
        const isOpen = openIdx === idx;
        const dur = computeDuration(role.start, role.end);
        return (
          <div
            key={role.org}
            data-stream
            style={{
              animationDelay: `${0.05 + idx * 0.13}s`,
              padding: "18px 0",
              borderBottom: "1px solid var(--rule)",
              cursor: "pointer",
              background: isOpen ? "var(--bg-2)" : undefined,
            }}
            onClick={() => setOpenIdx(isOpen ? null : idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpenIdx(isOpen ? null : idx);
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
          >
            <div
              className="grid items-center"
              style={{
                gridTemplateColumns: "minmax(0,220px) minmax(0,1fr) minmax(0,100px) minmax(0,90px)",
                gap: 16,
              }}
            >
              <div className="flex flex-col gap-0.5">
                <div
                  className="flex items-center"
                  style={{ color: "var(--fg)", fontWeight: 500, gap: 8 }}
                >
                  <span
                    aria-hidden
                    style={{
                      display: "inline-block",
                      width: 14,
                      color: isOpen ? "var(--accent)" : "var(--fg-muted)",
                      fontSize: 11,
                      lineHeight: 1,
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform .15s ease, color .15s",
                    }}
                  >
                    ▶
                  </span>
                  <em
                    className="display"
                    style={{
                      fontSize: 17,
                      paddingRight: 6,
                      color: "var(--accent)",
                    }}
                  >
                    {role.title}
                  </em>
                </div>
                <div className="muted" style={{ fontSize: 11, paddingLeft: 22 }}>
                  {role.org.toLowerCase()}{role.orgSubtitle ? ` · ${role.orgSubtitle}` : ""}
                  <span
                    style={{
                      paddingLeft: 8,
                      color: "var(--fg-muted)",
                      opacity: isOpen ? 0 : 0.7,
                      transition: "opacity .15s",
                    }}
                  >
                    — {isOpen ? "" : "click for details"}
                  </span>
                </div>
              </div>
              <div
                className="hidden md:block"
                style={{
                  position: "relative",
                  height: 22,
                  backgroundImage: "linear-gradient(to right, var(--rule) 1px, transparent 1px)",
                  backgroundSize: "16.66% 100%",
                  backgroundRepeat: "repeat-x",
                }}
              >
                <div
                  className={role.bar.ongoing ? "ongoing-blink" : ""}
                  style={{
                    position: "absolute",
                    top: 4,
                    height: 14,
                    left: `${role.bar.left}%`,
                    width: role.bar.width ? `${role.bar.width}%` : undefined,
                    right: role.bar.ongoing ? 0 : undefined,
                    background: "var(--accent-dim)",
                    borderLeft: "2px solid var(--accent)",
                    color: "var(--fg)",
                    fontSize: 10.5,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 8px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {role.rangeLabel}
                  {role.bar.ongoing && (
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: "var(--accent)",
                        animation: "blink 1s step-end infinite",
                      }}
                    />
                  )}
                </div>
              </div>
              <div
                className="hidden md:block"
                style={{ color: "var(--fg-2)", fontSize: 12, textAlign: "right" }}
              >
                {dur}
              </div>
              <div
                className="hidden md:block"
                style={{
                  textAlign: "right",
                  fontSize: 11,
                  color: role.status === "live" ? "var(--accent)" : "var(--ok)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {role.status === "live" ? "● running" : "200 OK"}
              </div>
            </div>

            {isOpen && (
              <div
                className="grid gap-6 md:gap-8 mt-4 pt-4"
                style={{
                  gridTemplateColumns: "1fr",
                  color: "var(--fg-2)",
                  fontSize: 13,
                }}
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div style={{ lineHeight: 1.65 }}>
                    {role.blurb}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {role.stack.map((s) => (
                        <span
                          key={s}
                          style={{
                            display: "inline-block",
                            padding: "2px 8px",
                            border: "1px solid var(--rule-2)",
                            color: "var(--fg-2)",
                            fontSize: 11,
                            borderRadius: 2,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-x-6 gap-y-3 md:border-l md:pl-6"
                    style={{ borderColor: "var(--rule)" }}
                  >
                    {role.metrics.map((m) => (
                      <div key={m.k}>
                        <div
                          style={{
                            color: "var(--fg-muted)",
                            fontSize: 11,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {m.k}
                        </div>
                        <div
                          className="display"
                          style={{ fontSize: 26, color: "var(--fg)", lineHeight: 1.1 }}
                        >
                          {m.v}
                          {m.suffix && (
                            <small
                              className="mono"
                              style={{
                                fontStyle: "normal",
                                fontSize: 11,
                                color: "var(--fg-muted)",
                                paddingLeft: 4,
                              }}
                            >
                              {m.suffix}
                            </small>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:hidden text-xs" style={{ color: "var(--fg-muted)" }}>
                  {role.rangeLabel} · {dur}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function computeDuration(start: string, end: string | "now"): string {
  const [sy, sm] = start.split("-").map(Number);
  const endDate = end === "now" ? new Date() : new Date(`${end}-01`);
  const months =
    (endDate.getFullYear() - sy) * 12 + (endDate.getMonth() + 1 - sm);
  if (end === "now") return "ongoing";
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem ? `${years}y ${rem}mo` : `${years}y`;
}
