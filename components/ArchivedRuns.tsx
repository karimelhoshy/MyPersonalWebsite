import { ARCHIVED } from "@/lib/resume";

export function ArchivedRuns() {
  return (
    <section className="container-x py-16" id="archived">
      <div className="sec-head">
        <div className="l">
          <span className="num">03</span>
          <span className="ttl">
            <em>archived.runs</em>
            <span className="muted">— selected earlier work</span>
          </span>
        </div>
        <div className="r">2 runs · 200 OK</div>
      </div>

      {ARCHIVED.map((run) => (
        <div
          key={run.id}
          className="grid items-baseline"
          style={{
            gridTemplateColumns: "minmax(0, 80px) minmax(0, 1fr) minmax(0, 240px)",
            gap: 24,
            padding: "22px 0",
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <div className="muted" style={{ fontSize: 11 }}>
            {run.id}
          </div>
          <div>
            <div
              className="display"
              style={{ fontSize: 26, color: "var(--fg)", lineHeight: 1.15 }}
            >
              {run.title}
            </div>
            <div
              style={{
                color: "var(--fg-2)",
                fontSize: 13,
                lineHeight: 1.6,
                marginTop: 8,
              }}
            >
              {run.body}
            </div>
          </div>
          <div
            className="hidden md:block"
            style={{
              color: "var(--fg-muted)",
              fontSize: 11,
              textAlign: "right",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {run.meta}
          </div>
        </div>
      ))}
    </section>
  );
}
