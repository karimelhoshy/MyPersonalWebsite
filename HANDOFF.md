# HANDOFF — portfolio rebuild on `rebuild/nextjs`

> **READ FIRST:** the rebuild lives on the `rebuild/nextjs` branch and has
> **not** been pushed to GitHub. `main` is untouched, GitHub Pages still
> serves the old site. Nothing about your live site has changed yet.

---

## 1. Verify locally

```bash
git checkout rebuild/nextjs
npm install                  # already run, but safe to re-run
npm run dev                  # http://localhost:3000
```

What to click through:

- Career trace — three roles, EY open by default, click a row to expand.
- Partners — five wordmarks (EY · PUBLICIS·MOOV AI · ب beiti · Google · databricks).
- Education — McGill + Lycée Français, 2-cell row.
- Theme toggle in the top-right (☼ / ☾).
- Chatbot — auto-opens ~900ms after first load on desktop. Sends a real request to `/api/chat`. Without an API key it shows the inline 503 message ("GEMINI_API_KEY not set"). With a key, it streams a real Gemini response. Try a recruiter-y first message ("hire me?", "what role are you looking for?") to trigger the dry easter egg.
- Press `⌘K` anywhere to toggle the chat panel; `Esc` to close.

`npm run build` should report a clean compile. If it doesn't, that's the first thing to fix — don't deploy a failing build.

---

## 2. Get a Gemini API key

1. Go to **https://aistudio.google.com/apikey** (sign in with the Google account you want billed/quota'd against).
2. Click **Create API key** → either pick an existing project or create a new one. Free tier is generous for personal portfolio traffic.
3. Copy the key.

Local:
```bash
cp .env.example .env.local
# then edit .env.local and paste the key after GEMINI_API_KEY=
```
Restart `npm run dev`. Send a message in the chat — you should now stream a real response.

`.env.local` is gitignored. Never commit it.

---

## 3. Deploy to Vercel

You need to be logged in to the Vercel CLI under your own account (this script can't do that for you):

```bash
npm i -g vercel               # if not installed
vercel login                  # opens browser
vercel link                   # link this repo to a Vercel project (or create one)
```

Set the production env var:
```bash
vercel env add GEMINI_API_KEY production
# paste the same key from step 2
```

Optional but recommended:
```bash
vercel env add NEXT_PUBLIC_SITE_URL production
# enter: https://karimelhoshy.com
```

Deploy:
```bash
vercel                        # preview deploy → outputs a *.vercel.app URL
# walk through the preview, exercise the chatbot, then:
vercel --prod
```

Test the production URL incognito before touching DNS.

---

## 4. DNS cutover (after Vercel verifies)

In your DNS registrar for `karimelhoshy.com`:

| type  | name | value                          | notes                |
|-------|------|--------------------------------|----------------------|
| A     | @    | `76.76.21.21`                  | Vercel apex          |
| CNAME | www  | `cname.vercel-dns.com`         | Vercel www           |

In Vercel project settings → **Domains** → add both `karimelhoshy.com` and `www.karimelhoshy.com`. Vercel auto-provisions a Let's Encrypt cert.

Wait for propagation (5–30 min typical), then verify HTTPS at apex + www. The site stays available at the old GitHub Pages address during this transition because GitHub Pages and Vercel can both claim the domain temporarily — Vercel wins as soon as DNS resolves to it.

---

## 5. Disable GitHub Pages (only after Vercel is live)

Once you've confirmed `https://karimelhoshy.com` serves the new Next.js site:

1. GitHub repo → **Settings** → **Pages**.
2. Under **Source**, switch to **None**.
3. Save.

This prevents a split-brain where Pages and Vercel race for the same domain.

---

## 6. Merge `rebuild/nextjs` to `main`

The branch is local-only. Two options:

### Option A — preserve history (recommended)
```bash
git checkout main
git diff main..rebuild/nextjs    # eyeball the diff first
git merge --no-ff rebuild/nextjs # creates a merge commit
git push origin main
```

### Option B — fresh history (destroys 11 prior "Update index.html" commits)
> **WARNING:** this irreversibly destroys the old git history on `main`. Only do this if you genuinely don't want it. It also requires a force push, which is destructive on GitHub.

```bash
git checkout rebuild/nextjs
git checkout --orphan main-fresh
git commit -m "Initial commit — Next.js rebuild"
git branch -M main-fresh main
git push origin main --force
```

---

## 7. Deferred — track these separately

- **Cloudflare Turnstile** on `/api/chat`. The current rate limit is per-IP in-memory and ephemeral per edge instance. Turnstile (free, invisible) would gate against bots properly. Add `TURNSTILE_SECRET_KEY` server, `NEXT_PUBLIC_TURNSTILE_SITE_KEY` client, render `<Turnstile>` in the chat form, verify the token in the route handler.
- **Analytics.** Plausible (paid, privacy-first) or Vercel Analytics (built-in, click one button in dashboard). Neither is wired up.
- **Lighthouse CI in GH Actions** — to catch perf/a11y regressions on every PR. Current production-build smoke gives perf 72 / a11y 96 (dev mode); production deploys typically score 90+.
- **Real photos.** The brief allowed real images in Beyond Code; nothing's wired in yet. If you want a pull-quote photo block there (or a Cairo→Montreal photo strip), that's a 30-min add to `BeyondCode.tsx`.
- **Brand SVG logos.** The current logo wall uses inline SVG `<text>` wordmarks (monochrome via `currentColor`). If you have access to clean trademark-cleared SVG marks for EY/Google/Databricks, swap them into `components/Logos.tsx`. Beiti is intentionally a typeset wordmark featuring the Arabic letter ب (no clean SVG existed in `~/Desktop/Projects/beiti`).
- **Console hydration warnings.** None observed in dev. If any appear after deploy, the most likely culprit is `next-themes` — it's already wrapped in `suppressHydrationWarning` on `<html>`.
- **OG image fonts.** The OG image renders with system fallbacks (Georgia, monospace) because `ImageResponse` won't load `next/font` Google fonts at runtime. To use Instrument Serif there, fetch the woff2 from a stable URL and pass `fonts: [...]` to `ImageResponse`.

---

## File map (for your future self)

```
app/
  layout.tsx              # ThemeProvider, fonts, metadata, JSON-LD Person
  page.tsx                # composes sections in order
  globals.css             # token system + base styles + animations
  api/chat/route.ts       # edge runtime, streams Gemini, recruiter egg
  opengraph-image.tsx     # 1200×630 dynamic OG
  robots.ts, sitemap.ts, not-found.tsx

components/
  TopBar.tsx       Hero.tsx       CareerTrace.tsx
  Partners.tsx     Education.tsx  ArchivedRuns.tsx
  BeyondCode.tsx   Contact.tsx    Footer.tsx
  Chatbot.tsx      Logos.tsx      ThemeProvider.tsx

lib/
  resume.ts               # SINGLE SOURCE OF TRUTH — both UI and chatbot read this

legacy/                   # archived old HTML5UP site, design brief, mockup-v1.html
public/CNAME              # kept for parity; ignored by Vercel
.env.example              # GEMINI_API_KEY=, NEXT_PUBLIC_SITE_URL=
```

To change a job title, metric, or stack item: edit `lib/resume.ts` only. Both the page sections and the chatbot's system prompt update together.
