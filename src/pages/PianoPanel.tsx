import { pianoPieces } from "../content/piano";

export default function PianoPanel() {
  return (
    <section>
      <h2>Piano</h2>
      <p>
        Performances and pieces I've learned. Add YouTube embed URLs
        in <code>src/content/piano.ts</code>.
      </p>

      <div className="two-col" style={{ marginTop: "1.5rem" }}>
        {pianoPieces.map((piece) => (
          <div key={piece.id} className="paper-card">
            <h3 style={{ marginTop: 0 }}>{piece.title}</h3>
            {piece.note && <p>{piece.note}</p>}
            {piece.embedUrl ? (
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  marginTop: "0.75rem",
                }}
              >
                <iframe
                  title={piece.title}
                  src={piece.embedUrl}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "3px",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <p style={{ color: "var(--ink-light)", fontSize: "0.9rem" }}>
                No video yet — add an embed URL when ready.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
