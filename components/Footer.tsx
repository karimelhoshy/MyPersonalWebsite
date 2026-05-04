export function Footer() {
  return (
    <footer
      className="border-t footer-pad"
      style={{
        borderColor: "var(--rule)",
        color: "var(--fg-muted)",
        fontSize: 11,
      }}
    >
      <div className="container-x flex flex-wrap justify-between gap-4">
        <div>Montreal · 2026</div>
        <div>chatbot powered by Gemini 2.x · prompts logged anonymously</div>
      </div>
    </footer>
  );
}
