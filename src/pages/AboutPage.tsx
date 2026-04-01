import { mosaicTiles } from "../content/mosaic";
import { careerGoals } from "../content/site";

export default function AboutPage() {
  return (
    <div>
      <h1>A mosaic, not a single story.</h1>
      <p className="lead">
        I'm a Computer Engineering student at Georgia Tech. Below are
        fragments of how I grew up and what I carry into every team
        and every build.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
          marginTop: "2rem",
        }}
      >
        <div className="polaroid tilt-left" style={{ maxWidth: "200px" }}>
          <img
            src="/images/visual-mosaic.svg"
            alt="Placeholder collage"
            style={{ width: "100%", display: "block" }}
          />
          <p className="polaroid-caption">heritage</p>
        </div>

        <div style={{ flex: "1 1 320px" }}>
          {mosaicTiles.map((tile) => (
            <div key={tile.id} style={{ marginBottom: "1.75rem" }}>
              <h3>{tile.title}</h3>
              <p style={{ color: "var(--ink-light)", fontSize: "0.95rem", margin: "0 0 0.35rem" }}>
                {tile.micro}
              </p>
              <p>{tile.body}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="wavy-rule" />

      <section>
        <h2>Career goals</h2>
        <p>{careerGoals.longTerm}</p>

        <h3>Steps I'm taking</h3>
        <ul>
          {careerGoals.steps.map((s) => (
            <li key={s} style={{ marginBottom: "0.4rem" }}>{s}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Strengths and growth edges</h2>
        <p>
          <strong>Strengths:</strong> I stay calm when hardware
          misbehaves; I write things down; I ask clarifying questions
          before optimizing the wrong variable.
        </p>
        <p>
          <strong>Growth:</strong> I'm still learning when to stop
          perfecting a prototype and when to ship. I'm practicing
          estimation, delegation, and giving feedback that is kind and
          specific.
        </p>
      </section>
    </div>
  );
}
