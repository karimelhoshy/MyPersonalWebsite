// Inline SVG wordmarks. Monochrome via fill="currentColor", ~24px high,
// equal optical weight. Sourcing real brand SVGs is licensing-fraught and
// would also break dark/light tinting — text wordmarks in tasteful faces
// keep the wall consistent without a trademark or color collision.

import type { JSX, SVGProps } from "react";

type Mark = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const EYMark: Mark = (props) => (
  <svg height="24" viewBox="0 0 56 24" xmlns="http://www.w3.org/2000/svg" aria-label="EY" role="img" {...props}>
    <text x="0" y="20" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontStyle="italic" fontSize="24" fill="currentColor">
      EY
    </text>
  </svg>
);

export const PublicisMark: Mark = (props) => (
  <svg height="24" viewBox="0 0 200 24" xmlns="http://www.w3.org/2000/svg" aria-label="Publicis · Moov AI" role="img" {...props}>
    <text x="0" y="18" fontFamily="ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif" fontWeight="600" fontSize="14" letterSpacing="1.2" fill="currentColor">
      PUBLICIS · MOOV AI
    </text>
  </svg>
);

export const BeitiMark: Mark = (props) => (
  // The Arabic letter ب ("b") is the brand's calling card — keep it as the
  // first glyph, then italic serif "beiti" beside it. Doubles as a personal
  // signal: bilingual EN/AR work, Cairo→Montreal arc.
  <svg height="26" viewBox="0 0 100 26" xmlns="http://www.w3.org/2000/svg" aria-label="Beiti" role="img" {...props}>
    <text x="0" y="22" fontFamily="'Instrument Serif', Georgia, serif" fontWeight="400" fontSize="26" fill="currentColor">
      ب
    </text>
    <text x="22" y="22" fontFamily="'Instrument Serif', Georgia, serif" fontWeight="400" fontStyle="italic" fontSize="24" fill="currentColor">
      beiti
    </text>
  </svg>
);

export const GoogleMark: Mark = (props) => (
  <svg height="24" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google" role="img" {...props}>
    <text x="0" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="500" fontSize="22" letterSpacing="-0.4" fill="currentColor">
      Google
    </text>
  </svg>
);

export const DatabricksMark: Mark = (props) => (
  <svg height="24" viewBox="0 0 130 24" xmlns="http://www.w3.org/2000/svg" aria-label="Databricks" role="img" {...props}>
    <text x="0" y="20" fontFamily="ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.3" fill="currentColor">
      databricks
    </text>
  </svg>
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

export const PARTNER_MARKS: Record<string, Mark> = {
  ey: EYMark,
  publicis: PublicisMark,
  beiti: BeitiMark,
  google: GoogleMark,
  databricks: DatabricksMark,
};
