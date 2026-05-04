import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
      }}
    >
      <div className="container-x" style={{ textAlign: "left", maxWidth: 720 }}>
        <div className="label" style={{ marginBottom: 16 }}>response.status</div>
        <div
          className="display"
          style={{
            fontSize: "clamp(64px, 12vw, 160px)",
            lineHeight: 1,
            color: "var(--accent)",
            margin: "0 0 8px",
          }}
        >
          404
        </div>
        <div
          className="display"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "var(--fg)",
            margin: "0 0 18px",
          }}
        >
          That route isn&apos;t in the trace.
        </div>
        <p style={{ color: "var(--fg-2)", maxWidth: 520, lineHeight: 1.6 }}>
          The agent looked but couldn&apos;t resolve this path. The work that exists is
          back at the root — the career trace, partners, archived runs, and a chatbot
          that knows the rest.
        </p>
        <div style={{ marginTop: 24 }}>
          <Link
            href="/"
            style={{
              color: "var(--accent)",
              borderBottom: "1px solid var(--accent)",
              textDecoration: "none",
            }}
          >
            return /
          </Link>
        </div>
      </div>
    </main>
  );
}
