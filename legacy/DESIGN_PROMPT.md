# Design brief — Karim El Hoshy portfolio

You are designing a personal portfolio site for **Karim El Hoshy**, a Montreal-based AI & full-stack engineer. Output a **single self-contained HTML file** with **Tailwind CDN** (no React, no build step), **mobile-first**, that I can open directly in a browser. Include working interactive states for the chatbot stub (you can mock the responses client-side). The page should look like it was made by a senior independent designer, not a template.

**This brief locks the substance, not the execution.** The content, brand attributes, anti-tropes, and chatbot behavior below are firm. Typography, color, layout, motion, and signature visual moves are *yours to design* — surprise me. Where I make a suggestion, treat it as a starting point you can override if you have a better idea, and tell me why you overrode it.

---

## 1. Who it's for

- **Primary audience**: technical recruiters and engineering hiring managers scanning quickly on a laptop.
- **Secondary audience**: engineering peers who'll click through to GitHub.
- **Conversion goal**: they leave knowing Karim ships production GenAI systems, can run a full-stack product end-to-end, and is currently engageable. The "hire me" chatbot is the hook that makes them stay an extra 90 seconds.

## 2. Brand attributes (5 adjectives — every design decision should map to at least one)

1. **Senior** — calm confidence, not a junior portfolio shouting for attention
2. **Decisive** — strong typographic hierarchy, no hedging copy, no "passionate about" filler
3. **Multilingual / international** — French and Arabic words can appear; the design should breathe across cultures, not feel Silicon-Valley-default
4. **Ships-things** — concrete numbers, named clients, dates. No vague promises
5. **Slightly playful** — one or two moments of personality (the chatbot easter egg, a swimming reference) that prevent the site from being sterile

## 3. Anti-tropes — explicitly avoid (these prevent slop, not creativity)

- ❌ Gradient buttons (purple→pink, blue→teal — instant AI-startup tell)
- ❌ Glassmorphism, frosted blurs, "subtle inner glow" anywhere
- ❌ Centered hero with a 3-card row beneath it
- ❌ Inter for everything (it's the Helvetica of 2026)
- ❌ Abstract gradient blobs / mesh gradients in the hero background
- ❌ AI sparkle ✨ icons, robot emojis, "🤖" anywhere near the chatbot
- ❌ "Building the future of X" tagline energy
- ❌ Generic stock photos of laptops, code, cityscapes
- ❌ Rounded-2xl cards stacked in a 3-column grid (the shadcn-default look)
- ❌ Skill bars, percentage rings, "85% Python" gauges
- ❌ Animated number counters ("36% reduction" climbing from 0)

## 4. Creative latitude — this is where I want you to go off-script

Pick a strong point of view and commit. A few directions that could work — feel free to invent your own instead:

- **Editorial / magazine-feel**: serif display, asymmetric grid, real photos, masthead-style logo wall.
- **Specimen / type-as-art**: oversized typography is the design; layout almost disappears. Risky and great when it lands.
- **Document-like / archive**: the page reads like a printed dossier with subtle paper texture, marginalia, tabular blocks. Senior and unusual.
- **Spatial / canvas**: a single horizontal scroll across "rooms" instead of a vertical scroll. High risk, high reward.
- **Console / instrument-panel**: dense data-rich blocks, mono-heavy, terminal-adjacent without being a terminal trope.
- **Something else entirely** — if you see a better fit for the brand attributes, take it.

You should ship **one signature moment** — a single visual or interactive idea that no other portfolio in this bracket has. Examples I'm not asking for, just to calibrate ambition: a live agent-graph that reacts to scroll; a hand-drawn signature that animates once on load; a ticker of in-flight production traffic; a section that swaps language (FR/AR/EN) on click. Invent your own. Don't copy these.

The substance is locked. The execution is yours.

## 5. Typography & color — guidance, not prescription

**Typography.** The default move is editorial serif display + mono accent + workhorse sans body. That's a safe-and-strong pairing. *But*: if you've got a stronger idea — single-typeface specimen, mono-only, a variable font flexed across sizes, a geometric grotesque against a humanist serif — go for it. Some pairings worth considering as starting points, not requirements: Fraunces, GT Sectra, Söhne, JetBrains Mono, Berkeley Mono, Inter Tight, IBM Plex. Free Google Fonts only.

**Color.** Monochrome foundation (off-black / off-white — never pure #000 or #FFF) plus **one** accent. The accent appears on ≤5% of pixels — links on hover, the chatbot FAB, one underline. Pick whatever color matches the direction you've chosen. No secondary, no tertiary, no rainbow.

**Dark + light.** Both modes ship. One is the default identity, the other is the alternate — your call which is which. Don't just invert; design both intentionally. Manual toggle in the top-right.

Define your tokens as CSS custom properties on `:root` so they're swappable. Use any names you like.

## 6. Layout — guidance, not prescription

Whatever direction you pick, honor these constraints:

- **Asymmetry over centering.** Avoid a perfectly centered hero with the title in the middle. Use whitespace as a design element, not a fallback.
- **Mobile-first.** The desktop experience can be ambitious; the mobile experience must still feel deliberate, not a degraded mirror.
- **Generous vertical rhythm.** Don't crowd sections.
- **Don't grid-ify everything.** Sections can have radically different layouts. Variety is fine; chaos is not.

Suggest your own grid system. The 12-col / 8-col / 4-col default is fine if you want it; so is something else.

## 7. Sections + copy (use this verbatim — don't paraphrase, don't add lorem)

The order below is the **logical order** of the content. The **visual order** is up to you — you can interleave, layer, or reorganize as long as a recruiter still encounters this content.

### 7.1 Top nav
Sticky or not — your call. Must include a name/wordmark, links to the main sections, and a theme toggle. No CTA buttons; the chatbot FAB is separate.

### 7.2 Hero / opening
The headline:
> AI & full-stack engineer who ships production GenAI systems and full-stack products.

Supporting facts (place however you want — together, scattered, layered, as a meta-block):
- Montreal · open to opportunities
- Currently — EY (AI Engineer) · Beiti (Founding Engineer)
- Previously — Moov AI / Publicis · McGill CS, May 2024
- EN · FR · AR fluent · DE · ES intermediate

No CTA button in the hero. The chatbot FAB lives somewhere persistent (probably bottom-right, but you decide).

### 7.3 Current work — three roles, the centerpiece

**EY** · `Mar 2026 – Present` · Montreal · **AI Engineer**
> Built the intake layer and evaluation workflow for a unified agentic AI lifecycle platform at a major Canadian bank — workflow ideation, agent design, testing, monitoring, retirement. Led training for 30+ managers, senior managers, and partners per cohort, driving cross-team adoption across the Business Transformation practice.

**Beiti** · `Jan 2026 – Present` · Remote / Cairo · **Founding Engineer**
> Expanded a single-chef Shopify store into a multi-chef marketplace — 120+ orders, 40% returning customer rate. React + FastAPI + MongoDB chef portal with 65+ backend routes and RBAC across customer, chef, and admin roles. 10 Shopify webhook event types, 9 object types synced via Admin REST + GraphQL.

**Moov AI / Publicis** · `Sep 2024 – Jan 2026` · Montreal · **AI & Data Engineer**
> Took a bilingual customer-facing chatbot from pilot to production for a major national retailer (Dialogflow, BigQuery, CCAI, Looker). Built an internal LangGraph agent that cut manual workload by 36% and saved an estimated $43K/yr per team member. Delivered a source-grounded RAG research agent on Databricks Vector Search for an institutional investment client. Production GenAI across **5 industries**: retail, finance, aerospace, education, utilities.

How you present these is open: timeline, ledger, dossier, layered cards, scroll-triggered reveals, side-by-side comparison, whatever serves the direction you've picked. Just don't render them as three identical rounded-2xl cards in a row.

### 7.4 Logo wall — "Built and shipped for"

Wordmarks, monochrome, equal optical weight. Names to include (style as you like): `EY`, `PUBLICIS · MOOV AI`, `BEITI`, `GOOGLE`, `DATABRICKS`, plus generic industry tags `RETAIL` · `FINANCE` · `AEROSPACE` · `EDUCATION` · `UTILITIES`. Magazine-masthead energy, not startup-landing-page energy. Static row, marquee, ticker, vertical column — your call.

### 7.5 Selected earlier work

Heading: `Earlier work — selected`. Two items only:

1. **Investment research RAG agent** · `2025 · Databricks Vector Search`
   > Source-grounded research agent using embeddings + Databricks Vector Search to synthesize findings, cite sources, and generate analyst-ready reports for an institutional client.

2. **Job-market intelligence** · `2024 · Databricks · PySpark`
   > Pipelined and analyzed Canadian job-market data on Databricks; surfaced demand patterns by skill and region for a McGill capstone.

Not cards. Expanded list rows, a ledger, a stacked archive — your call.

### 7.6 Beyond code

Heading: `Beyond code`. Two items, no icons:

- **Egyptian National Swim Team** — Egyptian and Arab record holder. Captained swimming and soccer teams at school. Varsity swimming at McGill.
- **Five languages** — English, French, Arabic fluent. German, Spanish intermediate. Lived in Cairo, Montreal.

This is where playfulness lives. If you want to do something unusual here (a pull-quote, a marginal note, an asymmetric photo block, language-toggle), this is the right place.

### 7.7 Contact

Heading: `Get in touch`. One direct line:
> `khelhoshy@gmail.com` · `+1 438 866-0655` · [LinkedIn](https://linkedin.com/in/karimelhoshy) · [GitHub](https://github.com/karimelhoshy)

No form. No "let's grab a coffee" energy.

### 7.8 Footer

> `Montreal · 2026 · built with Next.js · the chatbot is a Gemini 2.x demo, prompts are logged anonymously`

## 8. Chatbot — behavior is firm, presentation is yours

**Behavior (firm):**

- Persistent entry point on every screen (probably a FAB — but it could be a navbar item, a docked tab, an opening sentence that's interactive, etc.).
- Open: a panel, sheet, modal, takeover, or inline expansion — your call. On mobile it should be near-full-screen.
- Empty state: a short heading, a one-line subhead, and **3 starter prompts**. The starter copy should be: `what have you shipped at EY?` · `tell me about Beiti` · `are you open to senior roles?` (you can rephrase if you have stronger phrasing — keep them concrete and recruiter-relevant).
- Streaming: agent text appears character-by-character (mock with `setTimeout`, ~20–30ms/char). User messages and agent messages are visually distinct — how is up to you (alignment, type weight, color, indentation, label). No avatar bubbles.
- Thinking state before the first character streams.
- Error and rate-limited states, both inline, both calm.
- **Recruiter easter egg**: if the user's first message contains any of `hire`, `hiring`, `recruiter`, `role`, `opportunity`, `position`, `team`, the agent's first reply opens with a dry, self-aware line recommending the user hire Karim, then answers their question. Hardcode 2–3 example responses in the mockup so I can read the tone. Avoid: pleading, exclamation marks, "🚀". Aim for: confident, slightly amused, almost embarrassed-to-be-saying-it.
- ESC closes. Close affordance is visible.

**Presentation (yours):** form factor, motion, typography, label conventions, how you visually distinguish user vs agent — all design decisions. Just don't make it look like every other LLM chat UI.

**Avoid:** robot mascots, sparkle icons, "AI" badge with a gradient, "powered by" disclaimers in the chat itself (the footer covers it).

## 9. Motion + accessibility (firm)

- All animation respects `prefers-reduced-motion: reduce`. Reduced-motion users get instant transitions and no decorative animation.
- Visible focus states on every interactive element (no removed outlines, no glow-only states).
- Color contrast ≥ AA in both themes.
- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), logical tab order, ARIA where it earns its place.

## 10. Output requirements

- **Single HTML file**, self-contained, opens correctly via `file://`.
- Tailwind CDN with an inline config block for your custom tokens. Google Fonts via `<link>`. Vanilla JS for chatbot stub, theme toggle, and any motion.
- No external images — placeholder rectangles labeled like `<div>[photo: brief description]</div>` with realistic aspect ratios. I'll swap real assets later.
- A short comment block at the top of the file: (a) the design direction you chose and why, (b) the one signature move you're most proud of, (c) which brand attribute drove which section.

When you've drafted v1, before showing me the file, tell me:

1. **The direction you picked** and the one design move you're proudest of.
2. **3 specific decisions** that are most likely to feel un-AI to a recruiter who's seen 50 portfolios this week.
3. **1 trade-off you're least sure about** — something I can push back on before you iterate.

Then give me the file.
