// Single source of truth for the portfolio. Imported by both the page
// sections and the chatbot system prompt — keeping copy here keeps both in sync.

export type Role = {
  org: string;
  orgSubtitle?: string;
  title: string;
  start: string;     // YYYY-MM
  end: string | "now";
  location: string;
  blurb: string;     // body paragraph (rich text avoided — kept as plain string)
  stack: string[];
  metrics: { k: string; v: string; suffix?: string }[];
  status: "live" | "ok";
  // for the trace bar: position+width as percentages of the 2020→2026 ruler
  bar: { left: number; width?: number; ongoing?: boolean };
  rangeLabel: string; // human-readable date range shown on the bar
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
  phone: "+1 438 866-0655",
  linkedin: "https://linkedin.com/in/karimelhoshy",
  github: "https://github.com/karimelhoshy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://karimelhoshy.com",
  tagline:
    "Ships production GenAI systems & full-stack products.",
  languages: {
    fluent: ["English", "French", "Arabic"],
    intermediate: ["German", "Spanish"],
  },
  industries: ["retail", "finance", "aerospace", "education", "utilities"],
};

export const ROLES: Role[] = [
  {
    org: "Moov AI",
    orgSubtitle: "publicis",
    title: "AI & Data Engineer",
    start: "2024-09",
    end: "2026-01",
    location: "Montreal",
    blurb:
      "Took a bilingual customer-facing chatbot from pilot to production for a major national retailer (Dialogflow, BigQuery, CCAI, Looker). Built an internal LangGraph agent that cut manual workload by 36% and saved an estimated $43K/yr per team member. Delivered a source-grounded RAG research agent on Databricks Vector Search for an institutional investment client. Production GenAI across 5 industries: retail, finance, aerospace, education, utilities.",
    stack: ["LangGraph", "Dialogflow CX", "Databricks", "Vector Search", "BigQuery", "CCAI", "Python", "PySpark", "Kedro"],
    metrics: [
      { k: "workload reduction", v: "36", suffix: "%" },
      { k: "savings / team member", v: "$43k", suffix: "/yr" },
      { k: "industries shipped", v: "5" },
      { k: "prod systems", v: "3", suffix: "+" },
    ],
    status: "ok",
    bar: { left: 66.7, width: 25 },
    rangeLabel: "2024-09 → 2026-01",
  },
  {
    org: "EY",
    orgSubtitle: "agent-lab",
    title: "AI Engineer",
    start: "2026-03",
    end: "now",
    location: "Montreal",
    blurb:
      "Built the intake layer and evaluation workflow for a unified agentic AI lifecycle platform at a major Canadian bank — workflow ideation, agent design, testing, monitoring, retirement. Built the Agent Lab portal that captures workflows, approved logs, data sources, and constraints to generate architecture options and implementation plans. Led training for 30+ managers, senior managers, and partners per cohort, driving cross-team adoption across the Business Transformation practice.",
    stack: ["LangGraph", "Google ADK", "MCP", "Gemini", "Langfuse", "MLflow", "FastAPI", "React", "GCP"],
    metrics: [
      { k: "platform stage", v: "prod" },
      { k: "trained per cohort", v: "30", suffix: "+" },
      { k: "lifecycle stages", v: "5", suffix: " ideation→retire" },
      { k: "client", v: "cdn-bank" },
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
      "Expanded a single-chef Shopify store into a multi-chef marketplace — 120+ orders, 40% returning customer rate. Built a chef self-service portal (React + FastAPI + MongoDB) with 65+ backend routes and RBAC across customer, chef, and admin roles. Automated Shopify admin operations: 10 webhook event types, 9 object types synced via Admin REST + GraphQL.",
    stack: ["React", "TypeScript", "FastAPI", "MongoDB", "Shopify Admin", "REST", "GraphQL", "Webhooks", "RBAC"],
    metrics: [
      { k: "orders", v: "120", suffix: "+" },
      { k: "returning rate", v: "40", suffix: "%" },
      { k: "backend routes", v: "65", suffix: "+" },
      { k: "webhook events", v: "10" },
    ],
    status: "live",
    bar: { left: 90, ongoing: true },
    rangeLabel: "2026-01 → now",
  },
];

export const ARCHIVED: ArchivedRun[] = [
  {
    id: "run_001",
    title: "Investment research RAG agent",
    body: "Source-grounded research agent using embeddings + Databricks Vector Search to synthesize findings, cite sources, and generate analyst-ready reports for an institutional client.",
    meta: "2025 · Databricks · Vector Search",
  },
  {
    id: "run_002",
    title: "Job-market intelligence",
    body: "Pipelined and analyzed Canadian job-market data on Databricks; surfaced demand patterns by skill and region for a McGill capstone.",
    meta: "2024 · Databricks · PySpark",
  },
];

export const PARTNERS: ClientLogo[] = [
  { key: "ey",         name: "EY",                 tag: "employer · 2026–",  live: true  },
  { key: "publicis",   name: "Publicis · Moov AI", tag: "employer · 2024–26"              },
  { key: "beiti",      name: "Beiti",              tag: "cofounder · 2026–", live: true  },
  { key: "google",     name: "Google",             tag: "partner"                          },
  { key: "databricks", name: "Databricks",         tag: "partner"                          },
];

export const EDUCATION: EducationItem[] = [
  { school: "McGill",         degree: "B.A. Computer Science", when: "May 2024",  where: "Montreal" },
  { school: "Lycée Français", degree: "Baccalauréat",          when: "June 2020", where: "Cairo"    },
];

export const BEYOND = [
  {
    k: "athletic_history",
    headline: "Egyptian National Swim Team.",
    body: "Egyptian and Arab record holder. Captained swimming & soccer at school. Varsity swimming at McGill.",
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
    k: "recreation",
    headline: "Open water.",
    body: "Reading. Building things that ship.",
  },
];

/**
 * Returns the JSON literal handed to Gemini as factual grounding. Keeping
 * this deterministic prevents drift between what the page shows and what the
 * agent claims — and JSON grounds better than prose for retrieval-style Q&A.
 */
export function resumeAsJson() {
  return {
    name: SITE.name,
    role: SITE.role,
    location: SITE.location,
    contact: { email: SITE.email, phone: SITE.phone, linkedin: SITE.linkedin, github: SITE.github },
    languages: SITE.languages,
    industries: SITE.industries,
    current_roles: ROLES.map((r) => ({
      org: r.org,
      org_subtitle: r.orgSubtitle,
      title: r.title,
      start: r.start,
      end: r.end,
      location: r.location,
      blurb: r.blurb,
      stack: r.stack,
      metrics: r.metrics,
    })),
    earlier_work: ARCHIVED,
    education: EDUCATION,
    beyond_code: BEYOND,
  };
}
