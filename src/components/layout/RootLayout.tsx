import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { RouteTheme } from "./RouteTheme";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function RootLayout() {
  return (
    <>
      <RouteTheme />
      <div className="shell">
        <SiteNav />
        <motion.main
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
        <SiteFooter />
      </div>
    </>
  );
}
