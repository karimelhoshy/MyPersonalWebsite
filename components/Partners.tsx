import { PARTNERS, SITE } from "@/lib/resume";
import { PARTNER_MARKS } from "./Logos";

export function Partners() {
  return (
    <section className="container-x py-14 border-t" style={{ borderColor: "var(--rule)" }}>
      <div className="sec-head">
        <div className="l">
          <span className="num">02a</span>
          <span className="ttl">
            <em>partners.shipped</em>
            <span className="muted">— built for / built with</span>
          </span>
        </div>
        <div className="r">5 partners · 5 industries · all healthy</div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(5, minmax(0,1fr))",
          border: "1px solid var(--rule)",
        }}
      >
        {PARTNERS.map((p, i) => {
          const Mark = PARTNER_MARKS[p.key];
          return (
            <div
              key={p.key}
              className="logo-cell-flex"
              style={{
                padding: "28px 18px",
                borderRight: i === PARTNERS.length - 1 ? 0 : "1px solid var(--rule)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "flex-start",
                justifyContent: "space-between",
                minHeight: 116,
                color: "var(--fg)",
              }}
            >
              <Mark />
              <div className="flex flex-col gap-1">
                <div
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 10.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  {p.tag}
                </div>
                {p.live && (
                  <div style={{ color: "var(--accent)", fontSize: 10.5 }}>● live</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-4 flex flex-wrap items-baseline"
        style={{
          border: "1px solid var(--rule)",
          padding: "14px 18px",
          gap: "10px 18px",
          color: "var(--fg-2)",
          fontSize: 12,
        }}
      >
        <span
          style={{
            color: "var(--fg-muted)",
            fontSize: 10.5,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            paddingRight: 4,
          }}
        >
          industries
        </span>
        {SITE.industries.map((ind) => (
          <span
            key={ind}
            style={{
              color: "var(--fg)",
              borderLeft: "2px solid var(--accent)",
              paddingLeft: 8,
            }}
          >
            {ind}
          </span>
        ))}
      </div>
    </section>
  );
}
