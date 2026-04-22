import { Link } from "react-router-dom";
import { projects } from "../content/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <p className="lead">
        Problem, constraints, what I built, and what I would do next.
      </p>

      <div className="two-col" style={{ marginTop: "2rem" }}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="paper-card"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <img
              src={p.coverImage}
              alt=""
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "3px",
                marginBottom: "1rem",
                display: "block",
              }}
            />
            <h2 style={{ margin: "0 0 0.35rem", fontSize: "1.3rem" }}>
              {p.title}
            </h2>
            <p style={{ margin: "0 0 0.75rem", color: "var(--ink-light)" }}>
              {p.tagline}
            </p>
            <div className="tags">
              {p.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
