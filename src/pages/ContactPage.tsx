import { site } from "../content/site";

export default function ContactPage() {
  return (
    <div>
      <h1>Let's talk</h1>
      <p className="lead">
        I'd love to hear from you. Swap in your real details in{" "}
        <code>src/content/site.ts</code>.
      </p>

      <div
        className="paper-card"
        style={{
          marginTop: "2rem",
          maxWidth: "420px",
          transform: "rotate(-0.5deg)",
        }}
      >
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginBottom: "1.25rem" }}>
          Kevin Tran
        </p>
        <p>
          <strong>Email</strong>{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>
          <strong>GitHub</strong>{" "}
          <a href={site.links.github} target="_blank" rel="noreferrer">
            {site.links.github.replace("https://", "")}
          </a>
        </p>
        <p>
          <strong>LinkedIn</strong>{" "}
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            Profile
          </a>
        </p>
      </div>
    </div>
  );
}
