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
        download
        style={{ marginTop: "0.5rem", display: "inline-block" }}
      >
        Download PDF
      </a>

      <div
        style={{
          marginTop: "2rem",
          width: "100%",
          maxWidth: "800px",
          border: "1px solid var(--ink-faint, #ddd)",
          borderRadius: "6px",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <iframe
          src="/resume.pdf"
          title="Keith Tran Resume"
          style={{
            width: "100%",
            height: "1000px",
            border: "none",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
