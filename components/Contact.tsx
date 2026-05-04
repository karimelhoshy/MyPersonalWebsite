import { SITE } from "@/lib/resume";

const ENDPOINTS = [
  { k: "email",    v: SITE.email,         href: `mailto:${SITE.email}` },
  { k: "linkedin", v: "/in/karimelhoshy", href: SITE.linkedin },
  { k: "github",   v: "/karimelhoshy",    href: SITE.github },
];

export function Contact() {
  return (
    <section className="container-x py-20" id="contact">
      <div className="sec-head">
        <div className="l">
          <span className="num">05</span>
          <span className="ttl">
            <em>endpoints</em>
            <span className="muted">— get in touch</span>
          </span>
        </div>
        <div className="r">all open · no auth</div>
      </div>

      <div
        className="flex flex-wrap"
        style={{ border: "1px solid var(--rule)" }}
      >
        {ENDPOINTS.map((e, i) => (
          <a
            key={e.k}
            href={e.href}
            target={e.href.startsWith("http") ? "_blank" : undefined}
            rel={e.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="endpoint-link group flex flex-col gap-1"
            style={{
              flex: "1 1 240px",
              padding: "18px 22px",
              borderRight: i === ENDPOINTS.length - 1 ? 0 : "1px solid var(--rule)",
              color: "var(--fg)",
              textDecoration: "none",
              transition: "background .15s, color .15s",
            }}
          >
            <span
              style={{
                color: "var(--fg-muted)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {e.k}
            </span>
            <span style={{ fontSize: 13.5 }}>{e.v}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
