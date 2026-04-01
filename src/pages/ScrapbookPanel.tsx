import { useState, useRef } from "react";

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
  const [opened, setOpened] = useState(false);
  const [coverFlipped, setCoverFlipped] = useState(false);
  const [page, setPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleOpen = () => {
    if (coverFlipped) return;
    setCoverFlipped(true);
    timerRef.current = setTimeout(() => setOpened(true), 950);
  };

  const handleClose = () => {
    setOpened(false);
    setPage(0);
    setTimeout(() => setCoverFlipped(false), 50);
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
          loading="lazy"
          decoding="async"
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

      <style>{`
        .book-container {
          perspective: 1400px;
          width: min(620px, 92vw);
          height: min(440px, 70vw);
          cursor: pointer;
          position: relative;
          margin: 1.5rem auto 0;
        }
        .book-base {
          position: absolute; inset: 0;
          border-radius: 8px 18px 18px 8px;
          background: #7B3F1E;
          border: 4px solid #1a1a1a;
          box-shadow: 8px 8px 0 #1a1a1a;
        }
        .pages-stack {
          position: absolute;
          top: 6px; left: 12px; right: -2px; bottom: 6px;
          border-radius: 4px 14px 14px 4px;
          background: repeating-linear-gradient(to bottom, #fdefc3 0px, #fdefc3 18px, #f5e0a0 18px, #f5e0a0 19px);
          border: 3px solid #1a1a1a;
        }
        .book-front {
          position: absolute; inset: 0;
          border-radius: 8px 18px 18px 8px;
          background: #A0522D;
          border: 4px solid #1a1a1a;
          transform-origin: left center;
          transform-style: preserve-3d;
          transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          backface-visibility: hidden;
        }
        .book-front.flipped { transform: rotateY(-165deg); }
        .book-front::before {
          content: ''; position: absolute; inset: 8px;
          border-radius: 4px 14px 14px 4px;
          border: 2px solid rgba(0,0,0,0.18);
        }
        .book-spine {
          position: absolute;
          top: 4px; bottom: 4px; left: -14px; width: 20px;
          background: #7B3F1E;
          border-radius: 4px 0 0 4px;
          border: 4px solid #1a1a1a;
          border-right: none;
        }
        .book-strap {
          position: absolute;
          top: 50%; right: -8px; transform: translateY(-50%);
          width: 70px; height: 10px;
          background: var(--rust, #b85c38);
          border: 3px solid #1a1a1a;
          border-radius: 3px;
          transition: opacity 0.4s;
        }
        .book-front.flipped ~ .book-strap { opacity: 0; }
        .scratch {
          position: absolute;
          background: rgba(0,0,0,0.12);
          border-radius: 2px;
          pointer-events: none;
        }
        .sticker {
          position: absolute;
          filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.3));
          pointer-events: none;
        }
        .cover-title {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          pointer-events: none;
        }
        .cover-title h3 {
          font-family: var(--font-display, 'Playfair Display', serif);
          font-size: 1.8rem;
          color: var(--gold, #B3A369);
          text-shadow: 2px 2px 0 rgba(0,0,0,0.4);
          line-height: 1.1;
          margin: 0;
        }
        .cover-title p {
          font-family: var(--font-body, 'Source Sans 3', sans-serif);
          font-size: 0.7rem; font-weight: 600;
          color: rgba(255,255,255,0.6);
          margin-top: 6px; letter-spacing: 1px;
        }
        .washi {
          position: absolute; pointer-events: none;
          border: 1px solid rgba(0,0,0,0.08);
        }
        .open-hint {
          text-align: center; margin-top: 12px;
          font-family: var(--font-display, serif);
          font-style: italic;
          font-size: 0.9rem; color: var(--ink-light, #888);
          letter-spacing: 1px;
          animation: hintBounce 1.4s infinite;
        }
        @keyframes hintBounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes scFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>

      {!opened && (
        <>
          <div className="book-container" onClick={handleOpen} title="Click to open">
            <div className="book-base" />
            <div className="pages-stack" />
            <div className="book-spine" />
            <div className={`book-front${coverFlipped ? " flipped" : ""}`}>
              <div className="scratch" style={{ width: 60, height: 3, top: 30, left: 40, transform: "rotate(-8deg)" }} />
              <div className="scratch" style={{ width: 35, height: 2, top: 38, left: 48, transform: "rotate(3deg)" }} />
              <div className="scratch" style={{ width: 80, height: 2, bottom: 45, right: 30, transform: "rotate(4deg)" }} />
              <div className="sticker" style={{ top: 16, right: 24, transform: "rotate(12deg)", fontSize: "1.8rem" }}>🗺️</div>
              <div className="sticker" style={{ bottom: 22, left: 20, transform: "rotate(-14deg)", fontSize: "2rem" }}>✈️</div>
              <div className="sticker" style={{ bottom: 30, right: 28, transform: "rotate(8deg)", fontSize: "1.4rem" }}>📷</div>
              <div className="washi" style={{ top: 0, left: 40, width: 80, height: 16, background: "rgba(179,163,105,0.4)", transform: "rotate(-3deg)" }} />
              <div className="washi" style={{ bottom: 0, right: 50, width: 60, height: 16, background: "rgba(184,92,56,0.35)", transform: "rotate(4deg)" }} />
              <div className="cover-title">
                <h3>MY<br />SCRAP<br />BOOK</h3>
                <p>KEITH TRAN</p>
              </div>
            </div>
            <div className="book-strap" />
          </div>
          {!coverFlipped && <div className="open-hint">click to open</div>}
        </>
      )}

      {opened && (
        <div
          style={{
            position: "relative",
            marginTop: "1.5rem",
            overflow: "hidden",
            minHeight: "440px",
            background: "linear-gradient(135deg, #faf6f0 0%, #f3ece2 100%)",
            boxShadow: "4px 4px 20px rgba(42,37,34,0.15), -1px 0 6px rgba(42,37,34,0.06)",
            borderRadius: "6px",
            border: "1px solid rgba(42,37,34,0.1)",
            animation: "scFadeIn 0.5s ease",
          }}
        >
          {/* Book spine accent */}
          <div
            style={{
              position: "absolute",
              left: 0, top: 0, bottom: 0, width: "18px",
              background: "linear-gradient(90deg, rgba(42,37,34,0.08), transparent)",
              zIndex: 1,
              borderRadius: "6px 0 0 6px",
            }}
          />

          <div style={{ padding: "2rem 2rem 1.5rem 2.5rem", position: "relative", zIndex: 1 }}>
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
                    decoding="async"
                    style={{ width: "100%", display: "block" }}
                  />
                  <p className="polaroid-caption">{photo.caption}</p>
                </div>
              ))}
            </div>

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
          </div>
        </div>
      )}

      {opened && (
        <button
          type="button"
          className="btn"
          style={{ marginTop: "1rem" }}
          onClick={handleClose}
        >
          Close scrapbook
        </button>
      )}
    </section>
  );
}
