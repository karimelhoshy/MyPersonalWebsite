import { BEYOND } from "@/lib/resume";

export function BeyondCode() {
  return (
    <section className="container-x py-16 border-t" id="metadata" style={{ borderColor: "var(--rule)" }}>
      <div className="sec-head">
        <div className="l">
          <span className="num">04</span>
          <span className="ttl">
            <em>session.metadata</em>
            <span className="muted">— beyond code</span>
          </span>
        </div>
        <div className="r">non-functional attributes</div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          border: "1px solid var(--rule)",
        }}
      >
        {BEYOND.map((kv, i) => (
          <div
            key={kv.k}
            className="flex flex-col gap-2"
            style={{
              padding: "20px 22px",
              borderRight: i % 2 === 0 ? "1px solid var(--rule)" : 0,
              borderBottom: i < BEYOND.length - 2 ? "1px solid var(--rule)" : 0,
            }}
          >
            <div
              style={{
                color: "var(--fg-muted)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {kv.k}
            </div>
            <div style={{ color: "var(--fg)", fontSize: 14, lineHeight: 1.55 }}>
              <em
                className="display"
                style={{
                  fontSize: 22,
                  color: "var(--accent)",
                  paddingRight: 6,
                }}
              >
                {kv.headline}
              </em>
              {kv.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
