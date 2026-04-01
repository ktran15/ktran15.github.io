import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { recipes } from "../content/recipes";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function BakingPanel() {
  const door = useRef<SVGGElement>(null);
  const [baked, setBaked] = useState(false);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!baked || !door.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.to(door.current, {
        rotateX: -68,
        transformOrigin: "50% 0%",
        duration: 0.75,
        ease: "power2.inOut",
      });
    });
    return () => ctx.revert();
  }, [baked, reduced]);

  const reset = () => {
    setBaked(false);
    if (door.current) gsap.set(door.current, { clearProps: "transform" });
  };

  return (
    <section>
      <h2>Baking</h2>
      <p>
        Recipes I've baked, saved, or recommend. Edit the list in{" "}
        <code>src/content/recipes.ts</code>.
      </p>

      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "auto 1fr",
          alignItems: "start",
          marginTop: "1.5rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ perspective: "600px" }}>
            <svg
              viewBox="0 0 200 200"
              width="180"
              height="180"
              aria-hidden
              style={{ overflow: "visible" }}
            >
              <rect
                x="20" y="40" width="160" height="140" rx="8"
                className="oven-body" strokeWidth="2"
              />
              <rect
                x="35" y="125" width="130" height="40" rx="4"
                className="oven-rack"
              />
              <g ref={door} style={{ transformBox: "fill-box" as never }}>
                <rect
                  x="45" y="55" width="110" height="55" rx="4"
                  className="oven-door" strokeWidth="2"
                />
                <circle cx="140" cy="82" r="4" fill="var(--ink-light)" />
              </g>
              {baked && !reduced && (
                <g opacity="0.4">
                  <path
                    d="M70 42 Q100 16 130 42"
                    fill="none" stroke="var(--ink-light)" strokeWidth="2"
                    strokeLinecap="round" className="steam-a"
                  />
                  <path
                    d="M85 36 Q100 12 115 36"
                    fill="none" stroke="var(--ink-light)" strokeWidth="1.5"
                    strokeLinecap="round" className="steam-b"
                  />
                </g>
              )}
            </svg>
          </div>
          {!baked ? (
            <button
              type="button"
              className="btn btn-fill"
              style={{ marginTop: "0.75rem" }}
              onClick={() => setBaked(true)}
            >
              Open oven
            </button>
          ) : (
            <button
              type="button"
              className="btn"
              style={{ marginTop: "0.75rem" }}
              onClick={reset}
            >
              Close
            </button>
          )}
        </div>

        <div>
          {baked ? (
            <motion.ul
              style={{ listStyle: "none", padding: 0, margin: 0 }}
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {recipes.map((r) => (
                <motion.li
                  key={r.id}
                  className="kraft-card"
                  style={{ marginBottom: "1rem" }}
                  variants={{
                    hidden: { opacity: 0, y: 14, rotate: -1 },
                    show: { opacity: 1, y: 0, rotate: 0 },
                  }}
                >
                  <h3 style={{ marginTop: "0.75rem" }}>{r.title}</h3>
                  <p>{r.note}</p>
                  {r.url && (
                    <a href={r.url} target="_blank" rel="noreferrer">
                      Recipe link
                    </a>
                  )}
                  <div className="tags" style={{ marginTop: "0.5rem" }}>
                    {r.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <p style={{ color: "var(--ink-light)" }}>
              Open the oven to see what's inside...
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes drift {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-8px); opacity: 0.3; }
        }
        .steam-a { animation: drift 2.2s ease-in-out infinite; }
        .steam-b { animation: drift 2.8s ease-in-out infinite 0.4s; }
        @media (prefers-reduced-motion: reduce) {
          .steam-a, .steam-b { animation: none; }
        }
        @media (max-width: 600px) {
          div[style*="grid-template-columns: auto 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
