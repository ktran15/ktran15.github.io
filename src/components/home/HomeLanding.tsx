import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { welcomeBullets } from "../../content/site";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const portals = [
  { to: "/about", title: "Mosaic", dek: "Heritage, community, dreams", hue: "#d4a84b" },
  { to: "/projects", title: "Workshop", dek: "Circuits, systems, case studies", hue: "#7cb8a8" },
  { to: "/play/scrapbook", title: "Play", dek: "Photos, piano, garden, baking", hue: "#8fd18f" },
  { to: "/writing", title: "Writing", dek: "Essays on leadership and craft", hue: "#c4b5fd" },
];

export default function HomeLanding() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".home-prologue > *", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".home-portal", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.35,
        ease: "power3.out",
      });
      gsap.from(".home-illus", {
        scale: 0.92,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={root}>
      <div className="home-hero-grid" style={{ display: "grid", gap: "2.5rem", alignItems: "start", gridTemplateColumns: "minmax(0,1fr) minmax(0,320px)" }}>
        <div>
          <p className="mono-label" style={{ marginBottom: "0.75rem" }}>
            Prologue
          </p>
          <div className="home-prologue">
            <h1 style={{ margin: "0 0 1rem" }}>Hi â€” I am glad you are here.</h1>
            <p className="lede" style={{ margin: "0 0 1.25rem" }}>
              This portfolio is intentionally split into chapters. Each room has its own mood, because my work and my life do not fit a single beige template.
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.2rem", maxWidth: "58ch" }}>
              {welcomeBullets.map((b) => (
                <li key={b} style={{ marginBottom: "0.5rem" }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: "2.25rem" }} className="grid-2">
            {portals.map((p) => (
              <Link key={p.to} to={p.to} className="home-portal card" style={{ textDecoration: "none", color: "inherit", borderColor: `color-mix(in srgb, ${p.hue} 35%, transparent)` }}>
                <p className="mono-label" style={{ margin: "0 0 0.35rem", color: p.hue }}>
                  Enter
                </p>
                <h2 style={{ margin: "0 0 0.35rem", fontSize: "1.35rem" }}>{p.title}</h2>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "color-mix(in srgb, var(--fg) 72%, transparent)" }}>{p.dek}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="home-illus card" style={{ padding: 0, overflow: "hidden", border: "none" }}>
          <img src="/images/visual-hero.svg" alt="Abstract chapter map illustration" width={320} height={224} style={{ display: "block", width: "100%", height: "auto" }} />
          <p className="mono-label" style={{ padding: "0.75rem 1rem", margin: 0, borderTop: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)" }}>
            Figure 0 â€” your path
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .home-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
