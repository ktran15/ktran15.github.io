import { recipes } from "../content/recipes";

export default function BakingPanel() {
  return (
    <section>
      <h2>Baking</h2>
      <p>
        I love baking — it's the perfect mix of precision and creativity.
        Here are some things I've made.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {recipes.map((r) => (
          <div key={r.id} className="kraft-card" style={{ padding: 0, overflow: "hidden" }}>
            {r.image && (
              <img
                src={r.image}
                alt={r.title}
                width={240}
                height={200}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
            <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
              <h3 style={{ marginTop: 0, marginBottom: "0.4rem" }}>{r.title}</h3>
              <p style={{ margin: "0 0 0.75rem", fontSize: "0.95rem" }}>{r.note}</p>
              <div className="tags">
                {r.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
