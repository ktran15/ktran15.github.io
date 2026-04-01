import { site } from "../../content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>
        {site.tagline} Â· Built with intention â€” swap in your email and links in{" "}
        <code>src/content/site.ts</code>
      </span>
    </footer>
  );
}
