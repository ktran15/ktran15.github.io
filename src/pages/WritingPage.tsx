import { Link } from "react-router-dom";
import { posts } from "../content/posts";

export default function WritingPage() {
  return (
    <div>
      <h1>Writing</h1>
      <p className="lead">
        Short essays on leadership, clarity, and how I like to work.
      </p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "2rem" }}>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--ink-light)",
                margin: "0 0 0.25rem",
              }}
            >
              {post.date}
            </p>
            <h2 style={{ margin: "0 0 0.35rem", fontSize: "1.4rem" }}>
              <Link
                to={`/writing/${post.slug}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {post.title}
              </Link>
            </h2>
            <p style={{ margin: 0, color: "var(--ink-light)" }}>
              {post.dek}
            </p>
            <hr className="wavy-rule" style={{ margin: "1.5rem 0 0" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
