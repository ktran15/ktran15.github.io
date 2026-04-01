export default function ResumePage() {
  return (
    <div>
      <p className="mono-label">Resume</p>
      <h1 style={{ marginTop: "0.35rem" }}>Resume</h1>
      <p className="lede">
        Add your PDF as <code>public/resume.pdf</code>, commit, and push. The download button below will work automatically on GitHub Pages.
      </p>
      <a className="btn" href="/resume.pdf" download style={{ marginTop: "1rem" }}>
        Download PDF
      </a>
      <p style={{ marginTop: "1.5rem", maxWidth: "55ch" }}>
        Until the file exists, the link may 404 â€” that is expected. You can also embed a viewer later once the PDF is in place.
      </p>
    </div>
  );
}
