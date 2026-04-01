import { mosaicTiles } from "../content/mosaic";
import { careerGoals } from "../content/site";

export default function AboutPage() {
  return (
    <div>
      {/* Welcome statement */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h1>Welcome</h1>
        <p className="lead" style={{ maxWidth: "62ch" }}>
          Thanks for stopping by! I'm Keith Tran, a Computer Engineering
          student at Georgia Tech. This site is a window into who I am — the
          projects I build, the stories that shaped me, and the things I care
          about beyond the classroom. I hope you find something here that
          resonates, and I'd love to connect.
        </p>
      </section>

      <hr className="wavy-rule" />

      {/* Career Goals */}
      <section>
        <h2>Career Goals</h2>
        <p>{careerGoals.longTerm}</p>

        <h3>Steps I'm taking</h3>
        <ul>
          {careerGoals.steps.map((s) => (
            <li key={s} style={{ marginBottom: "0.4rem" }}>{s}</li>
          ))}
        </ul>
      </section>

      {/* Strengths and Growth Edges */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Strengths and Growth Edges</h2>
        <p>
          <strong>Strengths:</strong> I stay calm when hardware
          misbehaves; I write things down; I ask clarifying questions
          before optimizing the wrong variable.
        </p>
        <p>
          <strong>Growth Edges:</strong> I'm still learning when to stop
          perfecting a prototype and when to ship. I'm practicing
          estimation, delegation, and giving feedback that is kind and
          specific.
        </p>
      </section>

      <hr className="wavy-rule" />

      {/* Biography mosaic */}
      <section>
        <h2>A mosaic, not a single story</h2>
        <p style={{ color: "var(--ink-light)", maxWidth: "56ch", marginBottom: "1.5rem" }}>
          Below are fragments of how I grew up and what I carry into every
          team and every build.
        </p>
      </section>

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
    </div>
  );
}
