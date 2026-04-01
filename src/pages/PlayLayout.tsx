import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { to: "/play/scrapbook", label: "Scrapbook" },
  { to: "/play/piano", label: "Piano" },
  { to: "/play/garden", label: "Garden" },
  { to: "/play/baking", label: "Baking" },
];

export default function PlayLayout() {
  return (
    <div>
      <h1>Play</h1>
      <p className="lead">
        Photos, piano, the Hendersonville community garden, and
        recipes I bake or keep on repeat.
      </p>
      <nav className="play-tabs" aria-label="Play sections">
        {tabs.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
