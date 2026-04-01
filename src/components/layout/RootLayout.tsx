import { Outlet } from "react-router-dom";
import { RouteTheme } from "./RouteTheme";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function RootLayout() {
  return (
    <div className="site-shell">
      <RouteTheme />
      <SiteNav />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
