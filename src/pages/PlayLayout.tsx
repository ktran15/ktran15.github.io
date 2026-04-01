import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { to: "/play/scrapbook", label: "Scrapbook" },
  { to: "/play/piano", label: "Keys" },
  { to: "/play/garden", label: "Plot" },
  { to: "/play/baking", label: "Oven" },
];

export default function PlayLayout() {
  return (
    <div>
      <p className="mono-label">Play</p>
      <h1 style={{ marginTop: "0.35rem" }}>Soft hobbies, loud joy.</h1>
      <p className="lede">Photos, piano, the Hendersonville community garden, and recipes I bake or keep on repeat.</p>
      <nav className="play-tabs" aria-label="Play sections">
        {tabs.map(({ to, label }) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : undefined)}>
            {label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
