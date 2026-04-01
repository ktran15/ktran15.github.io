import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const photos = [
  { src: "/images/scrapbook/DSCF2097.jpg", caption: "Venice, Grand Canal" },
  { src: "/images/scrapbook/DSCF2972.jpg", caption: "Riomaggiore, Cinque Terre" },
  { src: "/images/scrapbook/DSCF3583.jpg", caption: "Florence, Duomo" },
  { src: "/images/scrapbook/DSCF3580.jpg", caption: "Giotto's Campanile" },
  { src: "/images/scrapbook/DSCF3475.jpg", caption: "Pisa" },
  { src: "/images/scrapbook/DSCF4915.jpg", caption: "Pantheon" },
  { src: "/images/scrapbook/DSCF2548.jpg", caption: "Sirmione Castle" },
  { src: "/images/scrapbook/DSCF3317.jpg", caption: "Cinque Terre hillside" },
  { src: "/images/scrapbook/DSCF6879.jpg", caption: "Verona" },
  { src: "/images/scrapbook/DSCF2136.jpg", caption: "Venice at night" },
  { src: "/images/scrapbook/DSCF1929.jpg", caption: "Double decker bus" },
  { src: "/images/scrapbook/DSCF2031.jpg", caption: "Flower shop" },
  { src: "/images/scrapbook/DSCF3172.jpg", caption: "St. Peter's dome" },
  { src: "/images/scrapbook/DSCF3193.jpg", caption: "St. Peter's Basilica" },
  { src: "/images/scrapbook/DSCF3281.jpg", caption: "Vatican dome" },
  { src: "/images/scrapbook/DSCF4892.jpg", caption: "Altare della Patria" },
  { src: "/images/scrapbook/DSCF3029.jpg", caption: "Rome street" },
  { src: "/images/scrapbook/DSCF2238.jpg", caption: "Train station" },
  { src: "/images/scrapbook/DSCF2168.jpg", caption: "Verona P.N." },
  { src: "/images/scrapbook/DSCF2164.jpg", caption: "Departures" },
  { src: "/images/scrapbook/DSCF5266.jpg", caption: "Atlanta skyline" },
  { src: "/images/scrapbook/DSCF5285.jpg", caption: "Georgia Tech" },
  { src: "/images/scrapbook/DSCF5950.jpg", caption: "Sea dragon" },
  { src: "/images/scrapbook/DSCF5956.jpg", caption: "Penguin" },
  { src: "/images/scrapbook/DSCF6151.jpg", caption: "Shark" },
  { src: "/images/scrapbook/DSCF5944.jpg", caption: "Beluga" },
  { src: "/images/scrapbook/DSCF5385.jpg", caption: "Blue Ridge" },
  { src: "/images/scrapbook/DSCF6818.jpg", caption: "Mountain vista" },
  { src: "/images/scrapbook/DSCF6487.jpg", caption: "Appalachian ridge" },
  { src: "/images/scrapbook/DSCF6785.jpg", caption: "On the trail" },
  { src: "/images/scrapbook/DSCF7232.jpg", caption: "Sunset at sea" },
  { src: "/images/scrapbook/DSCF7055.jpg", caption: "Beach day" },
  { src: "/images/scrapbook/DSCF7054.jpg", caption: "Panama City" },
  { src: "/images/scrapbook/DSCF7169.jpg", caption: "Golden hour" },
  { src: "/images/scrapbook/DSCF7049.jpg", caption: "Lunch on the shore" },
  { src: "/images/scrapbook/DSCF6358.jpg", caption: "Baking night" },
];

const tilts = ["tilt-left", "tilt-right", ""];

export default function ScrapbookPanel() {
  const wrap = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!opened || reduced || !left.current || !right.current) return;
    const ctx = gsap.context(() => {
      gsap.to(left.current, { xPercent: -100, duration: 0.85, ease: "power2.inOut" });
      gsap.to(right.current, { xPercent: 100, duration: 0.85, ease: "power2.inOut" });
    }, wrap);
    return () => ctx.revert();
  }, [opened, reduced]);

  const reset = () => {
    if (left.current && right.current) {
      gsap.set([left.current, right.current], { xPercent: 0 });
    }
    setOpened(false);
  };

  return (
    <section>
      <h2>Photography</h2>
      <p>
        Some of my favorite shots from travels through Italy, hikes in the
        Blue Ridge, and life around Atlanta.
      </p>

      <div
        ref={wrap}
        style={{
          position: "relative",
          marginTop: "1.5rem",
          overflow: "hidden",
          minHeight: "340px",
          background: "#fff",
          boxShadow: "0 2px 16px rgba(42,37,34,0.08)",
          borderRadius: "4px",
        }}
      >
        {/* Inside spread — photo grid */}
        <div
          style={{
            padding: "1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`polaroid ${tilts[i % tilts.length]}`}
              style={{ maxWidth: "260px" }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                style={{ width: "100%", display: "block" }}
              />
              <p className="polaroid-caption">{photo.caption}</p>
            </div>
          ))}
        </div>

        {/* Left cover */}
        <div
          ref={left}
          className="book-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
          }}
        >
          {!opened && (
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink-light)" }}>
              Scrapbook
            </span>
          )}
        </div>

        {/* Right cover */}
        <div
          ref={right}
          className="book-cover book-cover-right"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
          }}
        >
          {!opened && (
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink-light)" }}>
              Photos
            </span>
          )}
        </div>

        {/* Open button overlay */}
        {!opened && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              zIndex: 4,
            }}
          >
            <button type="button" className="btn btn-fill" onClick={() => setOpened(true)}>
              Open scrapbook
            </button>
          </div>
        )}
      </div>

      {opened && (
        <button
          type="button"
          className="btn"
          style={{ marginTop: "1rem" }}
          onClick={reset}
        >
          Close
        </button>
      )}
    </section>
  );
}
