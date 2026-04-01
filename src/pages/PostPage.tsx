import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../content/posts";

export default function PostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link to="/writing">Back to writing</Link>
      </div>
    );
  }

  const paras = post.body.split(/\n\n+/).filter(Boolean);

  return (
    <article style={{ maxWidth: "640px" }}>
      <p
        style={{
          fontSize: "0.88rem",
          color: "var(--ink-light)",
          marginBottom: "0.25rem",
        }}
      >
        {post.date}
      </p>
      <h1>{post.title}</h1>
      <p className="lead">{post.dek}</p>

      <hr className="wavy-rule" />

      {paras.map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      <div style={{ marginTop: "2.5rem" }}>
        <Link className="btn" to="/writing">
          All writing
        </Link>
      </div>
    </article>
  );
}
