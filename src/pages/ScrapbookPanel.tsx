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
      <h2>Photography</h2>
      <p>
        Replace the placeholders with your own shots. The
        scrapbook interaction stays.
      </p>

      <div
        ref={wrap}
        style={{
          position: "relative",
          marginTop: "1.5rem",
          overflow: "hidden",
          minHeight: "300px",
          background: "#fff",
          boxShadow: "0 2px 16px rgba(42,37,34,0.08)",
          borderRadius: "4px",
        }}
      >
        {/* Inside spread */}
        <div style={{ padding: "2rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <div className="polaroid tilt-left" style={{ maxWidth: "220px" }}>
            <img src="/images/visual-hero.svg" alt="Placeholder 1" />
            <p className="polaroid-caption">your photo here</p>
          </div>
          <div className="polaroid tilt-right" style={{ maxWidth: "220px" }}>
            <img src="/images/visual-garden.svg" alt="Placeholder 2" />
            <p className="polaroid-caption">your photo here</p>
          </div>
        </div>

        {/* Left cover */}
        <div
          ref={left}
          className="book-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
          }}
        >
          {!opened && (
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink-light)" }}>
              Scrapbook
            </span>
          )}
        </div>

        {/* Right cover */}
        <div
          ref={right}
          className="book-cover book-cover-right"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
          }}
        >
          {!opened && (
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink-light)" }}>
              Photos
            </span>
          )}
        </div>

        {/* Open button overlay */}
        {!opened && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              zIndex: 4,
            }}
          >
            <button type="button" className="btn btn-fill" onClick={() => setOpened(true)}>
              Open scrapbook
            </button>
          </div>
        )}
      </div>

      {opened && (
        <button
          type="button"
          className="btn"
          style={{ marginTop: "1rem" }}
          onClick={reset}
        >
          Close
        </button>
      )}
    </section>
  );
}
