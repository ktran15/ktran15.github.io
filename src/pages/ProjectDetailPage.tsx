import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, type ProjectImage } from "../content/projects";
import StatusStamp from "../components/projects/StatusStamp";

function SectionFigure({
  img,
  rotate,
  clear,
}: {
  img: ProjectImage;
  rotate: string;
  clear?: "right" | "none";
}) {
  const wideStyle = {
    clear: "both" as const,
    display: "block",
    width: "min(560px, 100%)",
    margin: "0 auto 1.75rem",
  };

  const floatStyle = {
    float: "right" as const,
    clear: clear ?? ("right" as const),
    width: "260px",
    maxWidth: "50%",
    margin: "0 0 1.25rem 1.5rem",
  };

  return (
    <figure
      className={`polaroid${img.wide ? " figure-wide" : ""}`}
      style={{
        ...(img.wide ? wideStyle : floatStyle),
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
      <h1>
        {p.title}
        <StatusStamp status={p.status} />
      </h1>
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

        {(p.demoUrl || p.repoUrl) && (
          <div className="project-actions">
            {p.demoUrl && (
              <a
                className="btn btn-fill"
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Watch the demo
              </a>
            )}
            {p.repoUrl && (
              <a
                className="btn"
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                View the code
              </a>
            )}
          </div>
        )}
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

      {p.sections.map((section, sIdx) => {
        const images = section.images ?? [];
        const wideImages = images.filter((img) => img.wide);
        const floatImages = images.filter((img) => !img.wide);
        const paragraphs = section.paragraphs;

        // A float only starts where it is declared, so declaring them all up
        // front packs them into the first screenful. Spread them evenly down
        // the paragraphs instead, so the side column stays populated to the
        // end of the section.
        const slots = new Map<number, ProjectImage[]>();
        floatImages.forEach((img, idx) => {
          const slot = Math.min(
            Math.round((idx * paragraphs.length) / floatImages.length),
            Math.max(paragraphs.length - 1, 0)
          );
          slots.set(slot, [...(slots.get(slot) ?? []), img]);
        });

        const rotateFor = (img: ProjectImage) =>
          floatImages.indexOf(img) % 2 === 0 ? "-1.2deg" : "1.6deg";

        return (
          <section
            key={section.id}
            id={section.id}
            style={{ marginTop: sIdx === 0 ? "1rem" : "2.25rem" }}
          >
            <h2 style={{ marginBottom: "0.75rem", clear: "both" }}>{section.heading}</h2>

            {wideImages.map((img) => (
              <SectionFigure key={img.src} img={img} rotate="-1.2deg" />
            ))}

            {paragraphs.map((para, idx) => (
              <Fragment key={idx}>
                {(slots.get(idx) ?? []).map((img) => (
                  <SectionFigure
                    key={img.src}
                    img={img}
                    rotate={rotateFor(img)}
                    clear="right"
                  />
                ))}
                <p>{para}</p>
              </Fragment>
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
        );
      })}

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
