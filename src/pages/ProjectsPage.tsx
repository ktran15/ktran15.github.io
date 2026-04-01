import { Link } from "react-router-dom";
import { projects } from "../content/projects";

function GearRow() {
  return (
    <svg width="100%" height="24" viewBox="0 0 600 24" aria-hidden style={{ margin: "1.5rem 0", opacity: 0.35 }}>
      <g stroke="currentColor" fill="none" strokeWidth="1.2">
        <circle cx="40" cy="12" r="10" />
        <circle cx="120" cy="12" r="6" />
        <path d="M200 12h360" strokeDasharray="4 6" />
      </g>
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <p className="mono-label">Projects</p>
      <h1 style={{ marginTop: "0.35rem" }}>Workshop case studies</h1>
      <p className="lede">Problem, constraints, what I built, and what I would do next â€” written for humans, not buzzwords.</p>
      <GearRow />
      <div className="grid-2">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={p.coverImage} alt="" width={280} height={175} style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "0.75rem" }} />
            <h2 style={{ margin: "0 0 0.35rem", fontSize: "1.25rem" }}>{p.title}</h2>
            <p style={{ margin: 0, fontSize: "0.95rem" }}>{p.tagline}</p>
            <p className="mono-label" style={{ marginTop: "0.75rem" }}>
              {p.stack.join(" Â· ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
