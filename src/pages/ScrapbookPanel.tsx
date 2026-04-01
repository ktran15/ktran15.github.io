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
  { src: "/images/scrapbook/DSCF2246.jpg", caption: "Scaliger Castle" },
  { src: "/images/scrapbook/DSCF3711.jpg", caption: "David, Florence" },
  { src: "/images/scrapbook/DSCF4626.jpg", caption: "Colosseum" },
  { src: "/images/scrapbook/DSCF6879.jpg", caption: "Verona" },
  { src: "/images/scrapbook/DSCF2136.jpg", caption: "Venice at night" },
  { src: "/images/scrapbook/DSCF1929.jpg", caption: "Double decker bus" },
  { src: "/images/scrapbook/DSCF2031.jpg", caption: "Flower shop" },
  { src: "/images/scrapbook/DSCF2986.jpg", caption: "Good boy" },
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

const PER_PAGE = 8;
const totalPages = Math.ceil(photos.length / PER_PAGE);
const tilts = ["tilt-left", "tilt-right", ""];

export default function ScrapbookPanel() {
  const wrap = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [page, setPage] = useState(0);
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
    setPage(0);
  };

  const pagePhotos = photos.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 300px" }}>
          <h2>Photography</h2>
          <p>
            Some of my favorite shots from travels through Italy, hikes in the
            Blue Ridge, and life around Atlanta.
          </p>
        </div>
        <img
          src="/images/camera-keith.jpg"
          alt="Keith with camera"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "3px solid var(--gold, #B3A369)",
            flexShrink: 0,
          }}
        />
      </div>

      <div
        ref={wrap}
        style={{
          position: "relative",
          marginTop: "1.5rem",
          overflow: "hidden",
          minHeight: "440px",
          background: "linear-gradient(135deg, #faf6f0 0%, #f3ece2 100%)",
          boxShadow: "4px 4px 20px rgba(42,37,34,0.15), -1px 0 6px rgba(42,37,34,0.06)",
          borderRadius: "6px",
          border: "1px solid rgba(42,37,34,0.1)",
        }}
      >
        {/* Book spine accent */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "18px",
            background: "linear-gradient(90deg, rgba(42,37,34,0.08), transparent)",
            zIndex: 1,
            borderRadius: "6px 0 0 6px",
          }}
        />

        {/* Page content */}
        <div style={{ padding: "2rem 2rem 1.5rem 2.5rem", position: "relative", zIndex: 1 }}>
          {opened && (
            <>
              {/* Page header */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.25rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px dashed var(--ink-faint, #ccc)",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "var(--ink-light)",
                }}>
                  Page {page + 1} of {totalPages}
                </span>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  color: "var(--ink-faint, #aaa)",
                }}>
                  Keith's Scrapbook
                </span>
              </div>

              {/* Photo grid for this page */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {pagePhotos.map((photo, i) => (
                  <div
                    key={photo.src}
                    className={`polaroid ${tilts[i % tilts.length]}`}
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

              {/* Page navigation */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1.5rem",
                paddingTop: "0.75rem",
                borderTop: "1px dashed var(--ink-faint, #ccc)",
              }}>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  style={{ opacity: page === 0 ? 0.4 : 1 }}
                >
                  &larr; Prev
                </button>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--ink-light)",
                  minWidth: "80px",
                  textAlign: "center",
                }}>
                  {page + 1} / {totalPages}
                </span>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  style={{ opacity: page === totalPages - 1 ? 0.4 : 1 }}
                >
                  Next &rarr;
                </button>
              </div>
            </>
          )}
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
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "1.5rem",
          }}
        >
          {!opened && (
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.6rem",
              fontStyle: "italic",
              color: "var(--ink-light)",
              textAlign: "right",
            }}>
              My<br />Scrapbook
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
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "1.5rem",
          }}
        >
          {!opened && (
            <div style={{ textAlign: "left" }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "var(--ink-light)",
                display: "block",
                marginBottom: "0.25rem",
              }}>
                {photos.length} photos
              </span>
              <span style={{
                fontSize: "0.85rem",
                color: "var(--ink-faint, #aaa)",
              }}>
                Italy &middot; Atlanta &middot; Mountains &middot; Coast
              </span>
            </div>
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
              zIndex: 6,
            }}
          >
            <button
              type="button"
              className="btn btn-fill"
              style={{ fontSize: "1.05rem", padding: "0.7rem 1.6rem" }}
              onClick={() => setOpened(true)}
            >
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
          Close scrapbook
        </button>
      )}
    </section>
  );
}
