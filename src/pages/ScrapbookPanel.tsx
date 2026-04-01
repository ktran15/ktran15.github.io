import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function ScrapbookPanel() {
  const wrap = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!opened || reduced || !left.current || !right.current) return;
    const ctx = gsap.context(() => {
      gsap.to(left.current, { xPercent: -100, duration: 0.85, ease: "power2.inOut" });
      gsap.to(right.current, { xPercent: 100, duration: 0.85, ease: "power2.inOut" });
    }, wrap);
    return () => ctx.revert();
  }, [opened, reduced]);

  const reset = () => {
    if (left.current && right.current) {
      gsap.set([left.current, right.current], { xPercent: 0 });
    }
    setOpened(false);
  };

  return (
    <section>
      <h2>Photography scrapbook</h2>
      <p>Replace placeholders with your own photography â€” keep the spreads as wide as you like.</p>
      <div
        ref={wrap}
        style={{
          position: "relative",
          marginTop: "1.5rem",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          minHeight: "300px",
          border: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
          background: "color-mix(in srgb, var(--fg) 5%, transparent)",
        }}
      >
        <div style={{ padding: "1.5rem" }}>
          <p className="mono-label">Inside spread</p>
          <div className="grid-2" style={{ marginTop: "1rem" }}>
            <img src="/images/visual-hero.svg" alt="Placeholder album spread 1" style={{ width: "100%", borderRadius: "8px" }} />
            <img src="/images/visual-garden.svg" alt="Placeholder album spread 2" style={{ width: "100%", borderRadius: "8px" }} />
          </div>
        </div>
        <div
          ref={left}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
            background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 30%, var(--bg)), var(--bg))",
            borderRight: "1px solid color-mix(in srgb, var(--fg) 15%, transparent)",
            display: "grid",
            placeItems: "center",
            padding: "1rem",
          }}
        >
          {!opened && <span className="mono-label">Left cover</span>}
        </div>
        <div
          ref={right}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
            background: "linear-gradient(-135deg, color-mix(in srgb, var(--accent) 22%, var(--bg)), var(--bg))",
            borderLeft: "1px solid color-mix(in srgb, var(--fg) 12%, transparent)",
            display: "grid",
            placeItems: "center",
            padding: "1rem",
          }}
        >
          {!opened && <span className="mono-label">Right cover</span>}
        </div>
        {!opened && (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "auto", zIndex: 4 }}>
            <button type="button" className="btn" onClick={() => setOpened(true)}>
              Open scrapbook
            </button>
          </div>
        )}
      </div>
      {opened && (
        <button type="button" className="btn btn-ghost" style={{ marginTop: "1rem" }} onClick={reset}>
          Close scrapbook
        </button>
      )}
    </section>
  );
}

