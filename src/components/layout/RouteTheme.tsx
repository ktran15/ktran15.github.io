import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeMap: [RegExp, string][] = [
  [/^\/$/, "home"],
  [/^\/about/, "about"],
  [/^\/projects\/[^/]+/, "project-detail"],
  [/^\/projects\/?$/, "projects"],
  [/^\/play/, "play"],
  [/^\/writing\/[^/]+/, "writing-post"],
  [/^\/writing\/?$/, "writing"],
  [/^\/contact/, "contact"],
  [/^\/resume/, "resume"],
];

function matchRoute(path: string): string {
  for (const [re, key] of routeMap) {
    if (re.test(path)) return key;
  }
  return "home";
}

export function RouteTheme() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.setAttribute("data-route", matchRoute(pathname));
  }, [pathname]);
  return null;
}
