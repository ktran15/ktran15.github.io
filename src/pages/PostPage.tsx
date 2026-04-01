import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../content/posts";

export default function PostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link to="/writing">Back</Link>
      </div>
    );
  }
  const paras = post.body.split(/\n\n+/).filter(Boolean);
  return (
    <article>
      <p className="mono-label">{post.date}</p>
      <h1 style={{ marginTop: "0.35rem" }}>{post.title}</h1>
      <p className="lede">{post.dek}</p>
      {paras.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <Link className="btn btn-ghost" to="/writing" style={{ marginTop: "2rem", display: "inline-flex" }}>
        All writing
      </Link>
    </article>
  );
}
