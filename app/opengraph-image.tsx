import { ImageResponse } from "next/og";
import { SITE } from "@/lib/resume";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.role}`;

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0A0908",
          color: "#EDEAE0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#6B675F",
            fontFamily: "monospace",
          }}
        >
          karim.elhoshy / trace_a8f3e2c1
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 110,
              fontStyle: "italic",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: "#B7B2A6",
              fontStyle: "italic",
              gap: 12,
            }}
          >
            <span style={{ color: "#FF7849" }}>AI</span>
            <span>&amp; full-stack engineer</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            fontFamily: "monospace",
            color: "#B7B2A6",
            borderTop: "1px solid #232220",
            paddingTop: 24,
          }}
        >
          <span>Montreal, CA · open to opportunities</span>
          <span>EY · Beiti · Moov AI</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
