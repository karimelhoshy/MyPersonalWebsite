"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "model"; text: string };

const STARTERS = [
  "what have you shipped at EY?",
  "tell me about Beiti",
  "why should I hire Karim?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const closePanel = useCallback(() => {
    setOpen(false);
    setAutoOpened(false);
    try { sessionStorage.setItem("chatDismissed", "1"); } catch {}
  }, []);

  const openPanel = useCallback((opts?: { auto?: boolean }) => {
    setOpen(true);
    if (opts?.auto) setAutoOpened(true);
    setTimeout(() => inputRef.current?.focus(), 200);
  }, []);

  // ⌘K / Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) closePanel();
        else openPanel();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, openPanel, closePanel]);

  // Auto-open: 900ms after mount, only once per session, only on >=640px,
  // and never if the user prefers reduced motion.
  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem("chatDismissed") === "1"; } catch {}
    if (dismissed) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof window !== "undefined" && window.innerWidth < 640) return;
    const t = setTimeout(() => openPanel({ auto: true }), 900);
    return () => clearTimeout(t);
  }, [openPanel]);

  // scroll to bottom on new content
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, pending]);

  const send = useCallback(
    async (text: string) => {
      if (!text.trim() || pending) return;
      setError(null);
      const next: Msg[] = [...msgs, { role: "user", text }];
      setMsgs(next);
      setDraft("");
      setPending(true);

      // open a placeholder assistant message that we'll fill as the stream
      // arrives — the empty string prevents an empty bubble flash.
      let assistant: Msg = { role: "model", text: "" };
      let displayed = false;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ messages: next.map((m) => ({ role: m.role, content: m.text })) }),
        });

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          if (res.status === 503) {
            setError(body.error || "The chatbot isn't configured yet (no Gemini API key on the server).");
          } else if (res.status === 429) {
            setError(body.error || "Too many requests — give it a minute and try again.");
          } else {
            setError("Something went wrong on the server. Try again in a moment.");
          }
          setPending(false);
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) {
          setError("Streaming unsupported in this browser.");
          setPending(false);
          return;
        }
        const decoder = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          assistant = { role: "model", text: assistant.text + chunk };
          if (!displayed) {
            displayed = true;
            setMsgs((m) => [...m, assistant]);
          } else {
            setMsgs((m) => [...m.slice(0, -1), assistant]);
          }
        }
      } catch {
        setError("Network error. Check your connection and try again.");
      } finally {
        setPending(false);
      }
    },
    [msgs, pending],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => openPanel()}
        aria-label="Open chat with Karim's agent"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 cursor-pointer"
        style={{
          background: "var(--bg-2)",
          color: "var(--fg)",
          border: "1px solid var(--rule-2)",
          padding: "12px 16px",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <span className="pulse-dot accent" />
        <span>chat with my agent</span>
        <span className="kbd"><span style={{ fontFamily: "system-ui" }}>⌘</span>K</span>
      </button>

      <aside
        role="dialog"
        aria-label="Chat with Karim's agent"
        aria-hidden={!open}
        inert={!open}
        className="panel-anim fixed top-0 right-0 bottom-0 z-[70] flex flex-col"
        style={{
          width: 460,
          maxWidth: "100vw",
          background: "var(--bg)",
          borderLeft: "1px solid var(--rule)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform .25s ease-out",
        }}
      >
        <div
          className="flex items-center"
          style={{
            padding: "14px 18px",
            borderBottom: "1px solid var(--rule)",
            fontSize: 12,
          }}
        >
          <div className="flex items-center gap-2.5" style={{ color: "var(--fg-2)" }}>
            <span className="pulse-dot accent" />
            <strong style={{ color: "var(--fg)", fontWeight: 500 }}>karim&apos;s agent</strong>
            <span className="muted">· gemini-2.5-flash</span>
          </div>
          {autoOpened && (
            <span
              className="ml-auto mr-3"
              style={{
                color: "var(--fg-muted)",
                fontSize: 10.5,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              press <span className="kbd">esc</span> to close
            </span>
          )}
          <button
            type="button"
            onClick={closePanel}
            aria-label="Close"
            className={autoOpened ? "" : "ml-auto"}
            style={{
              background: "none",
              border: "none",
              color: "var(--fg-2)",
              cursor: "pointer",
              fontSize: 18,
              padding: "4px 8px",
            }}
          >
            ×
          </button>
        </div>

        <div ref={bodyRef} className="flex-1 overflow-y-auto flex flex-col gap-4" style={{ padding: "20px 18px" }}>
          {msgs.length === 0 && !error && (
            <div style={{ color: "var(--fg-2)", display: "flex", flexDirection: "column", gap: 12 }}>
              <h3
                className="display"
                style={{ fontSize: 26, lineHeight: 1.15, color: "var(--fg)", margin: 0 }}
              >
                Ask anything about my work.
              </h3>
              <div className="muted" style={{ fontSize: 12.5 }}>
                It knows my résumé and a bit of the personality. Anything more specific lives behind email.
              </div>
              <div className="flex flex-col gap-2 mt-3">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="text-left cursor-pointer"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--rule)",
                      color: "var(--fg-2)",
                      padding: "10px 12px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--rule)";
                      e.currentTarget.style.color = "var(--fg-2)";
                    }}
                  >
                    <span className="muted">›</span> {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {msgs.map((m, i) => (
            <div key={i} style={{ fontSize: 13, lineHeight: 1.6 }}>
              <div
                style={{
                  fontSize: 10.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: m.role === "user" ? "var(--accent)" : "var(--ok)",
                  marginBottom: 4,
                }}
              >
                {m.role === "user" ? "you" : "karim's agent"}
              </div>
              <div style={{ color: m.role === "user" ? "var(--fg)" : "var(--fg-2)", whiteSpace: "pre-wrap" }}>
                {m.text || (
                  <span className="muted" style={{ fontStyle: "italic" }}>thinking…</span>
                )}
              </div>
            </div>
          ))}

          {pending && msgs[msgs.length - 1]?.role !== "model" && (
            <div style={{ fontSize: 13 }}>
              <div
                style={{
                  fontSize: 10.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--ok)",
                  marginBottom: 4,
                }}
              >
                karim&apos;s agent
              </div>
              <div className="muted" style={{ fontStyle: "italic" }}>thinking…</div>
            </div>
          )}

          {error && (
            <div
              role="status"
              style={{
                border: "1px solid var(--rule-2)",
                padding: "10px 12px",
                color: "var(--fg-2)",
                fontSize: 12.5,
                background: "var(--bg-2)",
              }}
            >
              {error}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(draft);
          }}
          className="flex gap-2"
          style={{ borderTop: "1px solid var(--rule)", padding: "12px 14px" }}
        >
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            type="text"
            placeholder="message karim's agent..."
            autoComplete="off"
            disabled={pending}
            className="flex-1"
            style={{
              background: "transparent",
              border: "1px solid var(--rule)",
              color: "var(--fg)",
              padding: "9px 11px",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={pending || !draft.trim()}
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              border: "none",
              padding: "0 14px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              cursor: pending || !draft.trim() ? "not-allowed" : "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              opacity: pending || !draft.trim() ? 0.4 : 1,
            }}
          >
            send
          </button>
        </form>
      </aside>
    </>
  );
}
