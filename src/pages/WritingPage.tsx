import { Link } from "react-router-dom";
import { posts } from "../content/posts";

export default function WritingPage() {
  return (
    <div>
      <p className="mono-label">Writing</p>
      <h1 style={{ marginTop: "0.35rem" }}>Essays and bench notes</h1>
      <p className="lede">Short pieces on leadership, clarity, and how I like to work.</p>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
        {posts.map((post) => (
          <li key={post.slug} className="card" style={{ marginBottom: "1rem" }}>
            <p className="mono-label" style={{ margin: "0 0 0.35rem" }}>
              {post.date}
            </p>
            <h2 style={{ margin: "0 0 0.35rem", fontSize: "1.35rem" }}>
              <Link to={`/writing/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ margin: 0 }}>{post.dek}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
