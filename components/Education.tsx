import { EDUCATION } from "@/lib/resume";
import { McGillMark, LyceeMark } from "./Logos";

const MARKS: Record<string, () => React.ReactNode> = {
  McGill: () => <McGillMark />,
  "Lycée Français": () => <LyceeMark />,
};

export function Education() {
  return (
    <section className="container-x py-14">
      <div className="sec-head">
        <div className="l">
          <span className="num">02b</span>
          <span className="ttl">
            <em>education</em>
            <span className="muted">— credentials</span>
          </span>
        </div>
        <div className="r">2 institutions</div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          border: "1px solid var(--rule)",
        }}
      >
        {EDUCATION.map((e, i) => {
          const Mark = MARKS[e.school];
          return (
            <div
              key={e.school}
              className="grid items-center"
              style={{
                padding: "22px 22px",
                borderRight: i === EDUCATION.length - 1 ? 0 : "1px solid var(--rule)",
                gridTemplateColumns: "auto 1fr",
                gap: "8px 22px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", color: "var(--fg)" }}>
                {Mark ? Mark() : <strong>{e.school}</strong>}
              </div>
              <div className="flex flex-col gap-1">
                <div style={{ color: "var(--fg)", fontSize: 13 }}>{e.degree}</div>
                <div
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  {e.when} · {e.where}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
