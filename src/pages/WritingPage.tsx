export default function WritingPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p className="lead">
        Thoughts on engineering, leadership, and life at Georgia Tech.
      </p>

      <div
        className="paper-card"
        style={{
          marginTop: "2.5rem",
          maxWidth: "480px",
          textAlign: "center",
          padding: "2.5rem 2rem",
        }}
      >
        <p style={{ fontSize: "1.1rem", margin: 0 }}>
          First article coming soon &mdash; stay tuned.
        </p>
      </div>
    </div>
  );
}
