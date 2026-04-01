import { mosaicTiles } from "../content/mosaic";
import { careerGoals } from "../content/site";

export default function AboutPage() {
  return (
    <div>
      {/* Welcome statement with photo */}
      <section style={{ marginBottom: "2.5rem" }}>
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
          <div style={{ flex: "1 1 320px" }}>
            <h1>Welcome</h1>
            <p className="lead" style={{ maxWidth: "56ch" }}>
              Thanks for stopping by! I'm Keith Tran, a Computer Engineering
              student at Georgia Tech. This site is a window into who I am — the
              projects I build, the stories that shaped me, and the things I care
              about beyond the classroom. I hope you find something here that
              resonates, and I'd love to connect.
            </p>
          </div>

          {/* Welcome photo with GT badge */}
          <div style={{ position: "relative", flexShrink: 0, alignSelf: "center" }}>
            <div
              style={{
                width: "200px",
                height: "200px",
                border: "4px solid var(--gold, #B3A369)",
                borderRadius: "12px",
                overflow: "hidden",
                background: "var(--cream, #faf8f4)",
              }}
            >
              <img
                src="/images/welcome-keith.jpg"
                alt="Keith Tran"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 70%",
                  display: "block",
                }}
              />
            </div>
            <img
              src="/images/gt-logo.svg"
              alt="Georgia Tech"
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                width: "48px",
                height: "auto",
                background: "var(--cream, #faf8f4)",
                borderRadius: "6px",
                padding: "2px 4px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
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

      <div style={{ marginTop: "1rem" }}>
        {mosaicTiles.map((tile, i) => {
          const imageOnLeft = i % 2 === 0;
          return (
            <div
              key={tile.id}
              style={{
                display: "flex",
                flexDirection: imageOnLeft ? "row" : "row-reverse",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              <div
                className={`polaroid ${imageOnLeft ? "tilt-left" : "tilt-right"}`}
                style={{
                  flex: "0 0 auto",
                  maxWidth: "340px",
                  width: "100%",
                }}
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  style={{ width: "100%", display: "block", borderRadius: "4px" }}
                />
                <p className="polaroid-caption">{tile.micro}</p>
              </div>

              <div style={{ flex: "1 1 300px", minWidth: 0 }}>
                <h3 style={{ marginTop: 0 }}>{tile.title}</h3>
                <p style={{ lineHeight: 1.7 }}>{tile.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
