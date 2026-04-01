export default function ResumePage() {
  return (
    <div>
      <h1>Resume</h1>
      <p className="lead">
        Add your PDF as <code>public/resume.pdf</code>, then the
        download link below works automatically.
      </p>
      <a
        className="btn btn-fill"
        href="/resume.pdf"
        download
        style={{ marginTop: "0.5rem" }}
      >
        Download PDF
      </a>
      <p style={{ marginTop: "1.5rem", color: "var(--ink-light)" }}>
        If the file isn't there yet, the link will 404 — that's
        expected.
      </p>
    </div>
  );
}
