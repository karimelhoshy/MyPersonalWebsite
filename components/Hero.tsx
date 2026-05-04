import { SITE } from "@/lib/resume";

export function Hero() {
  return (
    <section className="container-x py-24 pt-20 sm:pt-24 sm:pb-14" data-stream>
      <div
        className="grid gap-12 items-end"
        style={{ gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)" }}
      >
        <div>
          <div className="label" style={{ marginBottom: 18 }}>session.intro</div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(40px, 6.5vw, 84px)",
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
              margin: "0 0 18px",
              color: "var(--fg)",
            }}
          >
            Ships{" "}
            <em style={{ fontStyle: "normal", color: "var(--accent)" }}>production</em> AI
            <br /> systems &amp; full-stack
            <br /> products.
          </h1>
          <div
            className="mono flex flex-wrap gap-x-4 gap-y-2 items-center"
            style={{
              color: "var(--fg-2)",
              fontSize: 13,
              borderTop: "1px solid var(--rule)",
              paddingTop: 14,
              marginTop: 28,
            }}
          >
            <span><strong style={{ color: "var(--fg)", fontWeight: 500 }}>{SITE.location.split(",")[0]}</strong>, CA</span>
            <span className="muted">·</span>
            <span className="flex flex-wrap items-center" style={{ gap: "4px 8px" }}>
              <Lang flag="🇬🇧" code="en" strong />
              <span className="muted">·</span>
              <Lang flag="🇫🇷" code="fr" strong />
              <span className="muted">·</span>
              <Lang flag="🇪🇬" code="ar" strong />
              <span className="muted">fluent</span>
              <span className="muted">·</span>
              <Lang flag="🇩🇪" code="de" />
              <span className="muted">·</span>
              <Lang flag="🇪🇸" code="es" />
              <span className="muted">intermediate</span>
            </span>
          </div>
        </div>
        <aside
          aria-label="session metadata"
          className="hidden md:block"
          style={{
            border: "1px solid var(--rule)",
            background: "var(--bg-2)",
            padding: "16px 18px",
            fontSize: 12.5,
          }}
        >
          <div
            className="flex justify-between items-center"
            style={{
              borderBottom: "1px solid var(--rule)",
              paddingBottom: 10,
              marginBottom: 14,
              color: "var(--fg-muted)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            <span>metadata</span>
            <span>·json</span>
          </div>
          <dl
            className="grid m-0"
            style={{ gridTemplateColumns: "auto 1fr", rowGap: 6, columnGap: 16 }}
          >
            <Row k="role" v={SITE.role} />
            <Row k="based" v="Montreal · remote-friendly" />
            <Row k="education" v="McGill, BA CS · May 2024" />
            <Row k="industries" v={<>7 <span className="muted">(retail, ecommerce, banking, finance, aerospace, education, utilities)</span></>} />
            <Row k="status" v={<span className="ok-fg">200 OK</span>} />
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <>
      <dt style={{ color: "var(--fg-muted)" }}>{k}</dt>
      <dd className="m-0" style={{ color: "var(--fg)" }}>{v}</dd>
    </>
  );
}

// Inline language pill: flag emoji (color) + 2-letter code. The emoji
// inherits its native color, the code follows the document foreground so
// it works in both light and dark themes.
function Lang({ flag, code, strong }: { flag: string; code: string; strong?: boolean }) {
  return (
    <span className="inline-flex items-center" style={{ gap: 4 }}>
      <span aria-hidden style={{ fontSize: 14, lineHeight: 1 }}>{flag}</span>
      <span style={{ color: "var(--fg)", fontWeight: strong ? 500 : 400 }}>{code}</span>
    </span>
  );
}
