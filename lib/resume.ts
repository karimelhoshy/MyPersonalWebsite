// Single source of truth for the portfolio.
//
// Two surfaces read this file:
//   1. The page sections — they import the *PUBLIC* exports below
//      (ROLES, ARCHIVED, PARTNERS, EDUCATION, BEYOND, SITE).
//   2. The chatbot system prompt (server-side, edge runtime) — it imports
//      `resumeAsJson()`, which composes the FULL un-redacted record.
//
// The split exists so the public page can stay portfolio-flavored (flowing
// prose, qualitative stack chips, no dollar figures) while the chatbot can
// still answer detailed recruiter questions ("how much did you save them?",
// "what was the workload reduction?") with hard numbers when *the visitor*
// asks for them. Don't move FULL fields into the public exports — they're
// kept private on purpose.

export type Role = {
  org: string;
  orgSubtitle?: string;
  title: string;
  start: string;     // YYYY-MM
  end: string | "now";
  location: string;
  blurb: string;     // public-safe flowing paragraph
  stack: string[];   // ~5 chips, public-safe
  metrics: { k: string; v: string; suffix?: string }[];
  status: "live" | "ok";
  // for the trace bar: position+width as percentages of the 2020→2026 ruler
  bar: { left: number; width?: number; ongoing?: boolean };
  rangeLabel: string;
};

export type ArchivedRun = {
  id: string;
  title: string;
  body: string;
  meta: string;
};

export type ClientLogo = {
  key: string;
  name: string;
  tag: string;
  live?: boolean;
};

export type EducationItem = {
  school: string;
  degree: string;
  when: string;
  where: string;
};

export const SITE = {
  name: "Karim El Hoshy",
  role: "AI & full-stack engineer",
  location: "Montreal, CA",
  email: "khelhoshy@gmail.com",
  linkedin: "https://linkedin.com/in/karimelhoshy",
  github: "https://github.com/karimelhoshy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://karimelhoshy.com",
  tagline: "Ships production AI systems & full-stack products.",
  languages: {
    fluent: ["English", "French", "Arabic"],
    intermediate: ["German", "Spanish"],
  },
  industries: ["retail", "ecommerce", "banking", "finance", "aerospace", "education", "utilities"],
};

// ── PUBLIC ROLES ─────────────────────────────────────────────────────────
// Flowing portfolio prose. Numbers softened to qualitative language. No
// dollar figures, no named-client counts. The chatbot has the detailed
// version (see RESUME_FULL_PRIVATE below) and can cite hard numbers when a
// visitor explicitly asks.
export const ROLES: Role[] = [
  {
    org: "Moov AI",
    orgSubtitle: "publicis",
    title: "AI & Data Engineer",
    start: "2024-09",
    end: "2026-01",
    location: "Montreal",
    blurb:
      "Designed and shipped production AI systems for enterprise clients across multiple industries. Worked end-to-end — from problem framing and architecture through evaluation, deployment, and post-launch monitoring. Most engagements involved conversational and agentic systems on cloud-native data and AI stacks, often combining retrieval, structured tool use, and observability layers.",
    stack: ["LangGraph", "Dialogflow CX", "Databricks", "BigQuery", "Python"],
    metrics: [
      { k: "industries", v: "7" },
      { k: "client tier", v: "enterprise" },
      { k: "stack", v: "GCP · Databricks" },
      { k: "status", v: "shipped" },
    ],
    status: "ok",
    bar: { left: 66.7, width: 25 },
    rangeLabel: "2024-09 → 2026-01",
  },
  {
    org: "EY",
    title: "AI Engineer",
    start: "2026-03",
    end: "now",
    location: "Montreal",
    blurb:
      "AI engineer on an enterprise agentic-AI platform spanning the full lifecycle of an agent — from intake and design through testing, monitoring, and retirement. Work covers backend services, agent orchestration, and the operator-facing interfaces practitioners use to design and validate their own agents. Also runs training cohorts for staff and leadership across the broader transformation practice.",
    stack: ["LangGraph", "Google ADK", "MCP", "Gemini", "FastAPI"],
    metrics: [
      { k: "client tier", v: "enterprise" },
      { k: "domain", v: "agentic AI" },
      { k: "surface", v: "backend + UI" },
      { k: "status", v: "live" },
    ],
    status: "live",
    bar: { left: 91.7, ongoing: true },
    rangeLabel: "2026-03 → now",
  },
  {
    org: "Beiti",
    orgSubtitle: "marketplace",
    title: "Founding Engineer",
    start: "2026-01",
    end: "now",
    location: "Remote / Cairo",
    blurb:
      "Founding engineer on an early-stage marketplace product. Owns the application from frontend to backend — designing the data model, building the operator and customer experiences, and shipping the integration layer with the underlying commerce platform. Wears the usual founding-engineer hats: scoping, prototyping, deploying, and revising as the product finds its shape.",
    stack: ["React", "TypeScript", "FastAPI", "MongoDB", "Shopify Admin"],
    metrics: [
      { k: "scope", v: "marketplace" },
      { k: "stack", v: "fullstack TS/PY" },
      { k: "auth model", v: "RBAC" },
      { k: "integrations", v: "Shopify" },
    ],
    status: "live",
    bar: { left: 90, ongoing: true },
    rangeLabel: "2026-01 → now",
  },
];

// Earlier-work / project entries intentionally empty for now — the previous
// drafts overstated what was shipped. Repopulate before re-enabling the
// `<ArchivedRuns />` section on the page (currently unmounted).
export const ARCHIVED: ArchivedRun[] = [];

// ── PARTNERS WALL ────────────────────────────────────────────────────────
// Only direct engagements — places Karim was personally on the payroll or
// founding-team. Google and Databricks are intentionally NOT on this wall:
// they were vendor stacks Moov AI projects ran on, not personal partners.
export const PARTNERS: ClientLogo[] = [
  { key: "ey",       name: "EY",                 tag: "employer · 2026–",  live: true },
  { key: "publicis", name: "Publicis · Moov AI", tag: "employer · 2024–26"             },
  { key: "beiti",    name: "Beiti",              tag: "founding engineer · 2026–", live: true },
];

export const EDUCATION: EducationItem[] = [
  { school: "McGill",         degree: "B.A. Computer Science", when: "May 2024",  where: "Montreal" },
  { school: "Lycée Français", degree: "Baccalauréat",          when: "June 2020", where: "Cairo"    },
];

export const BEYOND = [
  {
    k: "athletic_history",
    headline: "Egyptian National Swim Team.",
    body: "Egyptian and Arab record holder. Varsity swimming at McGill.",
  },
  {
    k: "languages.spoken",
    headline: "5",
    body: "English · French · Arabic (fluent) · German · Spanish (intermediate).",
  },
  {
    k: "cities.lived",
    headline: "Cairo → Montreal.",
    body: "Internationally schooled, comfortable in both EN and FR working environments.",
  },
  {
    k: "hobbies",
    headline: "Soccer.",
    body: "Plus gaming and other sports — anything competitive away from the keyboard.",
  },
];

/**
 * Returns the JSON literal handed to Gemini as factual grounding.
 *
 * Deliberately mirrors what the public page shows — no hard numbers, no
 * dollar figures, no client names beyond what the blurbs already say, no
 * phone. The chatbot should not be a back-channel for the CV details we
 * chose to keep off the page; it speaks in the same register as the page.
 *
 * The only "extra" the chatbot gets is *behavioral* guidance — vendor
 * framing and availability disclosure rules. Those aren't facts about
 * Karim, they're rules about how to talk about him.
 */
export function resumeAsJson() {
  return {
    name: SITE.name,
    role: SITE.role,
    location: SITE.location,
    contact: { email: SITE.email, linkedin: SITE.linkedin, github: SITE.github },
    languages: SITE.languages,
    industries: SITE.industries,
    roles: ROLES.map((r) => ({
      org: r.org,
      org_subtitle: r.orgSubtitle,
      title: r.title,
      start: r.start,
      end: r.end,
      location: r.location,
      blurb: r.blurb,
      stack: r.stack,
    })),
    education: EDUCATION,
    beyond_code: BEYOND,
    behavioral_notes: {
      vendor_framing:
        "Google and Databricks were vendor stacks Moov AI projects ran on, not Karim's partners. If asked about platforms or stacks, mention them with that framing — never as 'his partners.'",
      availability:
        "Karim is open to opportunities, but the page intentionally doesn't advertise it. Confirm openness if a visitor asks; don't volunteer it unprompted.",
      detail_ceiling:
        "Don't invent metrics, dollar figures, percentages, client names, or system counts beyond what is in the blurbs above. If a visitor asks for hard numbers, say they're available on request via email and offer to share Karim's email.",
    },
  };
}
