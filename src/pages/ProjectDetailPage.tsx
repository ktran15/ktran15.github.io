import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const p = slug ? getProjectBySlug(slug) : undefined;

  if (!p) {
    return (
      <div>
        <h1>Project not found</h1>
        <Link to="/projects">Back to projects</Link>
      </div>
    );
  }

  const paras = p.body.split(/\n\n+/).filter(Boolean);

  return (
    <article>
      <p className="section-label">Case study</p>
      <h1>{p.title}</h1>
      <p className="lead">{p.tagline}</p>

      <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        <p style={{ margin: "0 0 0.25rem" }}>
          <strong>Role:</strong> {p.role}
        </p>
        <div className="tags">
          {p.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>

      <hr className="wavy-rule" />

      {p.videoUrl && (
        <div
          className="paper-card"
          style={{ padding: 0, overflow: "hidden", marginBottom: "2rem" }}
        >
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              title="Project video"
              src={p.videoUrl}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {paras.map((para) => (
        <p key={para.slice(0, 30)}>{para}</p>
      ))}

      <h2>Gallery</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {p.gallery.map((src, i) => (
          <div
            key={src}
            className="polaroid"
            style={{
              maxWidth: "280px",
              transform: `rotate(${i % 2 === 0 ? "-1.5" : "2"}deg)`,
            }}
          >
            <img src={src} alt="Project photo" />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <Link className="btn" to="/projects">
          All projects
        </Link>
      </div>
    </article>
  );
}
