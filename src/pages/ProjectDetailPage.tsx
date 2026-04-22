import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, type ProjectImage } from "../content/projects";

function SectionFigure({
  img,
  rotate,
  clear,
}: {
  img: ProjectImage;
  rotate: string;
  clear?: "right" | "none";
}) {
  return (
    <figure
      className="polaroid"
      style={{
        float: "right",
        clear: clear ?? "right",
        width: "260px",
        maxWidth: "50%",
        margin: "0 0 1.25rem 1.5rem",
        transform: `rotate(${rotate})`,
      }}
    >
      <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
      {img.caption && <figcaption className="polaroid-caption">{img.caption}</figcaption>}
    </figure>
  );
}

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

  return (
    <article>
      <p className="section-label">Discovery Project</p>
      <h1>{p.title}</h1>
      <p className="lead">{p.tagline}</p>

      <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        <p style={{ margin: "0 0 0.25rem" }}>
          <strong>Role:</strong> {p.role}
        </p>
        <div className="tags">
          {p.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
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

      {p.sections.map((section, sIdx) => (
        <section
          key={section.id}
          id={section.id}
          style={{ marginTop: sIdx === 0 ? "1rem" : "2.25rem" }}
        >
          <h2 style={{ marginBottom: "0.75rem", clear: "both" }}>{section.heading}</h2>

          {section.images?.map((img, idx) => (
            <SectionFigure
              key={img.src}
              img={img}
              rotate={idx % 2 === 0 ? "-1.2deg" : "1.6deg"}
              clear="right"
            />
          ))}

          {section.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {section.bullets && section.bullets.length > 0 && (
            <ul style={{ paddingLeft: "1.1rem", margin: "0.5rem 0 0" }}>
              {section.bullets.map((b, idx) => (
                <li key={idx} style={{ marginBottom: "0.4rem" }}>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div style={{ clear: "both" }} />
        </section>
      ))}

      {p.gallery.length > 0 && (
        <>
          <h2 style={{ marginTop: "3rem", clear: "both" }}>Gallery</h2>
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
                  maxWidth: "240px",
                  transform: `rotate(${i % 2 === 0 ? "-1.5" : "2"}deg)`,
                }}
              >
                <img src={src} alt="Project photo" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </>
      )}

      <div style={{ marginTop: "2.5rem" }}>
        <Link className="btn" to="/projects">
          All projects
        </Link>
      </div>
    </article>
  );
}
