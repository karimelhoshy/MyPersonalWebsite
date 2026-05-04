export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--rule)",
        color: "var(--fg-muted)",
        fontSize: 11,
        padding: "28px 0 80px",
      }}
    >
      <div className="container-x flex flex-wrap justify-between gap-4">
        <div>Montreal · 2026 · built with Next.js</div>
        <div>chatbot powered by Gemini 2.x · prompts logged anonymously</div>
      </div>
    </footer>
  );
}
