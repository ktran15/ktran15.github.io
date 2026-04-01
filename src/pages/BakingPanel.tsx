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
      gsap.to(door.current, { rotateX: -68, transformOrigin: "50% 0%", duration: 0.75, ease: "power2.inOut" });
    });
    return () => ctx.revert();
  }, [baked, reduced]);

  const preheat = () => {
    if (reduced) {
      setBaked(true);
      return;
    }
    setBaked(true);
  };

  const reset = () => {
    setBaked(false);
    if (door.current) gsap.set(door.current, { clearProps: "transform" });
  };

  return (
    <section>
      <h2>Oven â€” recipe book</h2>
      <p>Recipes I have baked, saved, or recommend. Edit the list in <code>src/content/recipes.ts</code>.</p>
      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)", alignItems: "start", marginTop: "1.5rem" }}>
        <div>
          <div style={{ perspective: "600px" }}>
            <svg viewBox="0 0 200 200" width="200" height="200" aria-hidden style={{ overflow: "visible" }}>
              <rect x="20" y="40" width="160" height="140" rx="8" fill="color-mix(in srgb, var(--fg) 8%, transparent)" stroke="currentColor" strokeWidth="2" />
              <rect x="35" y="120" width="130" height="45" rx="4" fill="color-mix(in srgb, var(--accent) 15%, transparent)" />
              <g ref={door} style={{ transformBox: "fill-box" as never }}>
                <rect x="45" y="55" width="110" height="55" rx="4" fill="color-mix(in srgb, var(--bg) 90%, transparent)" stroke="currentColor" strokeWidth="2" />
                <circle cx="140" cy="82" r="4" fill="currentColor" />
              </g>
              {baked && !reduced && (
                <g opacity="0.5">
                  <path d="M70 45 Q100 20 130 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="steam-a" />
                  <path d="M85 40 Q100 15 115 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="steam-b" />
                </g>
              )}
            </svg>
          </div>
          {!baked ? (
            <button type="button" className="btn" style={{ marginTop: "1rem" }} onClick={preheat}>
              Open oven
            </button>
          ) : (
            <button type="button" className="btn btn-ghost" style={{ marginTop: "1rem" }} onClick={reset}>
              Close oven
            </button>
          )}
        </div>
        <div>
          {baked ? (
            <motion.ul style={{ listStyle: "none", padding: 0, margin: 0 }} initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
              {recipes.map((r) => (
                <motion.li key={r.id} className="card" style={{ marginBottom: "0.75rem" }} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                  <h3 style={{ marginTop: 0 }}>{r.title}</h3>
                  <p style={{ marginBottom: "0.5rem" }}>{r.note}</p>
                  {r.url && (
                    <a href={r.url} target="_blank" rel="noreferrer">
                      Recipe link
                    </a>
                  )}
                  <p className="mono-label" style={{ marginTop: "0.5rem" }}>
                    {r.tags.join(" Â· ")}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <p className="mono-label">Preheatingâ€¦ open the oven to load recipes.</p>
          )}
        </div>
      </div>
      <img src="/images/visual-bread.svg" alt="" width={360} height={220} style={{ marginTop: "2rem", borderRadius: "var(--radius)", maxWidth: "100%" }} />
      <style>{`
        @keyframes drift { 0%{ transform: translateY(0); opacity:.35} 50%{opacity:.7} 100%{ transform: translateY(-6px); opacity:.35} }
        .steam-a { animation: drift 2.2s ease-in-out infinite; }
        .steam-b { animation: drift 2.8s ease-in-out infinite; animation-delay: .4s; }
        @media (prefers-reduced-motion: reduce) {
          .steam-a, .steam-b { animation: none; }
        }
        @media (max-width: 720px) {
          section > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
