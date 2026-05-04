// Brand marks for the engagements wall and education row.
//
// These are inline SVG wordmarks rather than rasterised brand logos. Two
// reasons: (1) sourcing official brand SVGs requires either licensed assets
// or written permission — the EY, Publicis, and McGill marks are
// trademarked and using them as imagery on a personal site is at best a
// nominative-fair-use grey area; (2) inline SVG inherits `currentColor`,
// which means the wall recolors cleanly across light/dark themes without
// shipping two asset variants.
//
// Beiti is the exception — Karim cofounded it, so its real horizontal logo
// is shipped under /public/brands/. If real licensed logos for the other
// brands ever land in /public/brands/, swap the wordmark below for an
// <Image> in one line.

import type { JSX, SVGProps } from "react";
import Image from "next/image";

type Mark = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const EYMark: Mark = (props) => (
  <svg height="26" viewBox="0 0 56 26" xmlns="http://www.w3.org/2000/svg" aria-label="EY" role="img" {...props}>
    <text
      x="0"
      y="22"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontWeight="700"
      fontStyle="italic"
      fontSize="26"
      fill="currentColor"
    >
      EY
    </text>
  </svg>
);

export const PublicisMark: Mark = (props) => (
  <svg height="22" viewBox="0 0 200 22" xmlns="http://www.w3.org/2000/svg" aria-label="Publicis · Moov AI" role="img" {...props}>
    <text
      x="0"
      y="16"
      fontFamily="ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif"
      fontWeight="600"
      fontSize="13"
      letterSpacing="1.4"
      fill="currentColor"
    >
      PUBLICIS · MOOV AI
    </text>
  </svg>
);

// Beiti's real horizontal logo from /public/brands/beiti.png.
// `width="auto"` would warn — we set explicit dimensions and let Next/Image
// optimise. The mask trick keeps it monochrome so it tints with the theme.
export const BeitiMark = () => (
  <span
    aria-label="Beiti"
    role="img"
    style={{
      display: "inline-block",
      width: 150,
      height: 40,
      backgroundColor: "currentColor",
      WebkitMask: "url(/brands/beiti.png) no-repeat left center / contain",
      mask: "url(/brands/beiti.png) no-repeat left center / contain",
    }}
  />
);

// Static export fallback if currentColor masking ever misbehaves on a host —
// drop in <BeitiImage/> instead. Kept exported but unused by default.
export const BeitiImage = () => (
  <Image
    src="/brands/beiti.png"
    alt="Beiti"
    width={120}
    height={28}
    style={{ height: 26, width: "auto", objectFit: "contain" }}
  />
);

export const McGillMark: Mark = (props) => (
  <svg height="26" viewBox="0 0 90 26" xmlns="http://www.w3.org/2000/svg" aria-label="McGill" role="img" {...props}>
    <text x="0" y="22" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="24" fill="currentColor">
      McGill
    </text>
  </svg>
);

export const LyceeMark: Mark = (props) => (
  <svg height="26" viewBox="0 0 170 26" xmlns="http://www.w3.org/2000/svg" aria-label="Lycée Français du Caire" role="img" {...props}>
    <text x="0" y="22" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="400" fontStyle="italic" fontSize="22" fill="currentColor">
      Lycée Français
    </text>
  </svg>
);

// Maps the partner key from lib/resume.ts to its rendered mark. The marks
// have heterogeneous signatures (SVG wordmarks take props, Beiti is a
// nullary masked element), so the map type accepts both.
export const PARTNER_MARKS: Record<string, () => JSX.Element> = {
  ey: () => <EYMark />,
  publicis: () => <PublicisMark />,
  beiti: () => <BeitiMark />,
};
