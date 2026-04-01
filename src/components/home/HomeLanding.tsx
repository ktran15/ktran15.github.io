import { Link } from "react-router-dom";
import { welcomeBullets } from "../../content/site";

const chapters = [
  { to: "/about", label: "About me" },
  { to: "/projects", label: "Projects" },
  { to: "/play/scrapbook", label: "Play" },
  { to: "/writing", label: "Writing" },
];

export default function HomeLanding() {
  return (
    <div>
      <div style={{ maxWidth: "640px" }}>
        <h1>
          Hi, I'm Kevin.
        </h1>
        <p className="lead">
          Computer Engineering student at Georgia Tech. I build systems
          that bridge hardware and software, and I care about the
          people and stories behind the work.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2.5rem",
          alignItems: "start",
          marginTop: "2.5rem",
        }}
      >
        <div>
          <ul style={{ paddingLeft: "1.2rem", margin: 0, maxWidth: "54ch" }}>
            {welcomeBullets.map((b) => (
              <li key={b} style={{ marginBottom: "0.6rem" }}>{b}</li>
            ))}
          </ul>

          <nav style={{ marginTop: "2rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
              Look around:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {chapters.map((c) => (
                <Link key={c.to} to={c.to} className="btn">
                  {c.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div
          className="polaroid tilt-right hide-mobile"
          style={{ maxWidth: "220px" }}
        >
          <img
            src="/images/visual-hero.svg"
            alt="Placeholder for a photo of Kevin"
            width={200}
            height={200}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <p className="polaroid-caption">replace with your photo</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          div[style*="grid-template-columns: 1fr auto"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
