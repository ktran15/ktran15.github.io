import { pianoPieces } from "../content/piano";

export default function PianoPanel() {
  return (
    <section>
      <h2>Piano â€” performances</h2>
      <p>Add YouTube embed URLs in <code>src/content/piano.ts</code>; each card below becomes a performance.</p>
      <img src="/images/visual-piano.svg" alt="" width={400} height={250} style={{ marginTop: "1rem", borderRadius: "var(--radius)", maxWidth: "100%", height: "auto" }} />
      <div className="grid-2" style={{ marginTop: "1.5rem" }}>
        {pianoPieces.map((piece) => (
          <div key={piece.id} className="card">
            <h3 style={{ marginTop: 0 }}>{piece.title}</h3>
            {piece.note && <p>{piece.note}</p>}
            {piece.embedUrl ? (
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginTop: "0.75rem" }}>
                <iframe title={piece.title} src={piece.embedUrl} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            ) : (
              <p className="mono-label" style={{ marginTop: "0.75rem" }}>
                No embed yet
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
