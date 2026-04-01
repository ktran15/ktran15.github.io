import { NavLink, useLocation } from "react-router-dom";
import { site } from "../../content/site";

const links: { to: string; label: string; match?: (p: string) => boolean }[] = [
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
    <nav className="site-nav" aria-label="Primary">
      <NavLink className="name-link" to="/" end>
        {site.name}
      </NavLink>
      <ul className="nav-list">
        {links.map(({ to, label, match }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={!match}
              className={({ isActive }) => {
                const on = match ? match(location.pathname) : isActive;
                return on ? "active" : undefined;
              }}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
