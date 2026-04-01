import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const p = slug ? getProjectBySlug(slug) : undefined;
  if (!p) {
    return (
      <div>
        <h1>Project not found</h1>
        <Link to="/projects">Back</Link>
      </div>
    );
  }
  const paras = p.body.split(/\n\n+/).filter(Boolean);
  return (
    <article>
      <p className="mono-label">Case study</p>
      <h1 style={{ marginTop: "0.35rem" }}>{p.title}</h1>
      <p className="lede">{p.tagline}</p>
      <p className="mono-label" style={{ marginTop: "1rem" }}>
        Role: {p.role}
      </p>
      <p className="mono-label">Stack: {p.stack.join(", ")}</p>
      <div className="industrial-rail" />
      {p.videoUrl && (
        <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: "1.5rem" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe title="Project video" src={p.videoUrl} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
      {paras.map((para) => (
        <p key={para.slice(0, 24)}>{para}</p>
      ))}
      <h2>Gallery</h2>
      <div className="grid-2">
        {p.gallery.map((src) => (
          <img key={src} src={src} alt="Project still" style={{ width: "100%", borderRadius: "8px" }} />
        ))}
      </div>
      <Link className="btn btn-ghost" to="/projects" style={{ marginTop: "2rem", display: "inline-flex" }}>
        All projects
      </Link>
    </article>
  );
}
