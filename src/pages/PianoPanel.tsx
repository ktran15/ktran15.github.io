import { Link } from "react-router-dom";
import { pianoPieces } from "../content/piano";

export default function PianoPanel() {
  return (
    <section>
      <h2>Piano</h2>
      <p>
        Music has always been a creative outlet for me. I've been playing piano
        for years and love learning new pieces across genres.
      </p>

      {pianoPieces.length === 0 && (
        <div
          className="paper-card"
          style={{
            marginTop: "2rem",
            maxWidth: "480px",
            textAlign: "center",
            padding: "2.5rem 2rem",
          }}
        >
          <p style={{ fontSize: "1.1rem", margin: 0 }}>
            Piano videos coming soon.
          </p>
        </div>
      )}

      {pianoPieces.map((piece) => (
        <figure
          key={piece.id}
          className="paper-card"
          style={{
            margin: "2rem 0 0",
            padding: "1rem",
            maxWidth: "700px",
            transform: "rotate(-0.4deg)",
          }}
        >
          {piece.embedUrl && (
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "3px",
                background: "var(--ink)",
              }}
            >
              <iframe
                title={piece.title}
                src={piece.embedUrl}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          <figcaption style={{ padding: "0.9rem 0.25rem 0.25rem" }}>
            <h3 style={{ margin: "0 0 0.3rem" }}>{piece.title}</h3>
            {piece.note && (
              <p style={{ margin: 0, color: "var(--ink-light)", fontSize: "0.95rem" }}>
                {piece.note}
              </p>
            )}
          </figcaption>
        </figure>
      ))}

      <p style={{ marginTop: "1.5rem", color: "var(--ink-light)" }}>
        The build behind that strip is written up as a{" "}
        <Link to="/projects/piano-led-visualizer">case study over in Projects</Link>.
      </p>
    </section>
  );
}
