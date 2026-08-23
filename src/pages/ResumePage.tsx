export default function ResumePage() {
  return (
    <div>
      <h1>Resume</h1>
      <p className="lead">
        A snapshot of my education, experience, and skills.
      </p>
      <a
        className="btn btn-fill"
        href="/resume.pdf"
        download="KeithTranResume.pdf"
        style={{ marginTop: "0.5rem", display: "inline-block" }}
      >
        Download PDF
      </a>

      <div className="resume-embed">
        <iframe src="/resume.pdf" title="Keith Tran Resume" />
      </div>

      <div className="paper-card resume-fallback">
        <p style={{ margin: "0 0 1rem" }}>
          The full resume is a PDF, which most phone browsers will not
          preview inline. Open it in a new tab or download it above.
        </p>
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
          Open resume
        </a>
      </div>
    </div>
  );
}
