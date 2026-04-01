import { NavLink, useLocation } from "react-router-dom";
import { site } from "../../content/site";

const links: { to: string; label: string; match?: (path: string) => boolean }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects", match: (p) => p.startsWith("/projects") },
  { to: "/play/scrapbook", label: "Play", match: (p) => p.startsWith("/play") },
  { to: "/writing", label: "Writing", match: (p) => p.startsWith("/writing") },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const location = useLocation();
  return (
    <header className="nav-header">
      <NavLink className="wordmark" to="/" end>
        {site.name}
      </NavLink>
      <nav className="nav-links" aria-label="Primary">
        {links.map(({ to, label, match }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => {
              const m = match?.(location.pathname);
              const on = m !== undefined ? m : isActive;
              return on ? "active" : undefined;
            }}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
