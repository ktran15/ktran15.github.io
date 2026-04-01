import HomeLanding from "../components/home/HomeLanding";
import { Link } from "react-router-dom";
import { projects } from "../content/projects";

export default function HomePage() {
  const featured = projects[0];
  return (
    <div>
      <HomeLanding />

      <hr className="wavy-rule" />

      <section>
        <p className="section-label">Featured project</p>
        <h2 style={{ marginTop: "0.25rem" }}>{featured?.title}</h2>
        <p>{featured?.tagline}</p>
        <Link className="btn" to={`/projects/${featured?.slug}`}>
          Read the case study
        </Link>
      </section>
    </div>
  );
}
