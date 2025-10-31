import React, { useEffect, useState } from "react";

type ViteMeta = { env?: { DEV?: boolean } };

const isDev =
  (typeof process !== "undefined" && process.env.NODE_ENV === "development") ||
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as ViteMeta).env?.DEV === true);

export default function DevDebugOverlay(): React.ReactElement | null {
  const [ctx, setCtx] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    if (!isDev) return;
    const readCtx = () => {
      try {
        const w = window as unknown as {
          universal_login_context?: Record<string, unknown>;
        };
        setCtx(w.universal_login_context || null);
      } catch {
        setCtx(null);
      }
    };

    readCtx();

    // Also watch for changes on window (dev helper may replace the object)
    const id = setInterval(readCtx, 1000);
    return () => clearInterval(id);
  }, []);

  if (!isDev) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 12,
        bottom: 12,
        width: 360,
        maxHeight: "60vh",
        overflow: "auto",
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        padding: 12,
        borderRadius: 8,
        fontSize: 12,
        zIndex: 99999,
      }}
      aria-hidden
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <strong>DEV DEBUG</strong>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => console.log("universal_login_context:", ctx)}
            style={{
              background: "#222",
              color: "#fff",
              border: "none",
              padding: "4px 8px",
              borderRadius: 4,
            }}
          >
            Log
          </button>
          <button
            onClick={() => alert(JSON.stringify(ctx, null, 2))}
            style={{
              background: "#222",
              color: "#fff",
              border: "none",
              padding: "4px 8px",
              borderRadius: 4,
            }}
          >
            Popup
          </button>
        </div>
      </div>

      <div style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>
        <code>
          {ctx
            ? JSON.stringify(ctx, null, 2)
            : "(no universal_login_context present)"}
        </code>
      </div>
    </div>
  );
}
