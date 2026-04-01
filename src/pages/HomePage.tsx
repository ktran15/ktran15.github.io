import HomeLanding from "../components/home/HomeLanding";
import { Link } from "react-router-dom";
import { projects } from "../content/projects";

export default function HomePage() {
  const featured = projects[0];
  return (
    <div>
      <HomeLanding />
      <div className="industrial-rail" style={{ marginTop: "3rem" }} />
      <section>
        <p className="mono-label">Featured bench project</p>
        <h2 style={{ marginTop: "0.35rem" }}>{featured?.title}</h2>
        <p className="lede">{featured?.tagline}</p>
        <Link className="btn btn-ghost" to={`/projects/${featured?.slug}`} style={{ marginTop: "1rem" }}>
          Open case study
        </Link>
      </section>
    </div>
  );
}
