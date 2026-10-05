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
              student at Georgia Tech. This site is a window into who I am: the
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
                loading="lazy"
                decoding="async"
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
          <strong>Strengths:</strong> I like to jump in and get my hands
          dirty, even if I don't get it right the first time. I'm usually the
          one asking why something works, and I'm happiest when I'm working
          alongside other people.
        </p>
        <p>
          <strong>Growth Edges:</strong> I'm working on my time management,
          since everything seems to take longer than I think it will. I'm
          also still learning when to stop perfecting something and call it
          good enough.
        </p>
      </section>

      <hr className="wavy-rule" />

      {/* Biography mosaic */}
      <section>
        <h2>My mosaic</h2>
        <p style={{ color: "var(--ink-light)", maxWidth: "56ch", marginBottom: "1.5rem" }}>
          These are the pieces that made me who I am. Some are old, some are
          new, and a few are a little embarrassing, but they're all me.
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
                style={{
                  flex: "0 0 auto",
                  maxWidth: "340px",
                  width: "100%",
                }}
              >
                {tile.photos.map((photo, j) => {
                  const paired = tile.photos.length > 1;
                  const tilt = (j % 2 === 0) === imageOnLeft ? "tilt-left" : "tilt-right";
                  return (
                    <div
                      key={photo.src}
                      className={`polaroid ${tilt}`}
                      style={{
                        display: "block",
                        position: "relative",
                        zIndex: j,
                        width: paired ? "78%" : "100%",
                        marginLeft: paired && j % 2 === 1 ? "auto" : undefined,
                        marginTop: j > 0 ? "-14%" : undefined,
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%", display: "block", borderRadius: "4px" }}
                      />
                      <p className="polaroid-caption">{photo.caption}</p>
                    </div>
                  );
                })}
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
