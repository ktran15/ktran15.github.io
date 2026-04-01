import { site } from "../content/site";

export default function ContactPage() {
  return (
    <div>
      <p className="mono-label">Contact</p>
      <h1 style={{ marginTop: "0.35rem" }}>Let&apos;s talk</h1>
      <p className="lede">Swap in your real email and links in <code>src/content/site.ts</code>.</p>
      <div className="card" style={{ marginTop: "1.5rem", maxWidth: "480px" }}>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href={site.links.github} target="_blank" rel="noreferrer">
            Profile
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            Profile
          </a>
        </p>
      </div>
    </div>
  );
}
