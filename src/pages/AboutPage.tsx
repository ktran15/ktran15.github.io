import { useState } from "react";
import { mosaicTiles } from "../content/mosaic";
import { careerGoals } from "../content/site";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [open, setOpen] = useState<string | null>(null);
  const tile = open ? mosaicTiles.find((t) => t.id === open) : null;

  return (
    <div>
      <p className="mono-label">About</p>
      <h1 style={{ marginTop: "0.35rem" }}>A mosaic, not a single story.</h1>
      <p className="lede">
        I am a Computer Engineering student at Georgia Tech. The tiles below are fragments of how I grew up and what I reach for when I build teams and systems.
      </p>
      <img src="/images/visual-mosaic.svg" alt="" width={400} height={250} style={{ marginTop: "1.5rem", borderRadius: "var(--radius)", maxWidth: "100%", height: "auto" }} />

      <div className="grid-2" style={{ marginTop: "2rem" }}>
        {mosaicTiles.map((t) => (
          <motion.button
            type="button"
            key={t.id}
            className="card"
            onClick={() => setOpen(t.id)}
            whileHover={{ y: -3 }}
            style={{ cursor: "pointer", textAlign: "left", width: "100%", font: "inherit", color: "inherit" }}
          >
            <p className="mono-label" style={{ margin: "0 0 0.35rem" }}>
              {t.title}
            </p>
            <p style={{ margin: 0 }}>{t.micro}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {tile && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mosaic-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
              zIndex: 100,
              display: "grid",
              placeItems: "center",
              padding: "1rem",
            }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="card"
              style={{ maxWidth: "560px", width: "100%", maxHeight: "80vh", overflow: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="mosaic-title" style={{ marginTop: 0 }}>
                {tile.title}
              </h2>
              <p>{tile.body}</p>
              <button type="button" className="btn btn-ghost" style={{ marginTop: "1rem" }} onClick={() => setOpen(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section style={{ marginTop: "3rem" }}>
        <h2>Career goals</h2>
        <p>{careerGoals.longTerm}</p>
        <h3>Steps I am taking</h3>
        <ul>
          {careerGoals.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Strengths and growth edges</h2>
        <p>
          <strong>Strengths:</strong> I stay calm when hardware misbehaves; I write things down; I ask clarifying questions before optimizing the wrong variable.
        </p>
        <p>
          <strong>Growth:</strong> I am still learning when to stop perfecting a prototype and when to ship. I am practicing estimation, delegation, and giving feedback that is kind and specific.
        </p>
      </section>
    </div>
  );
}
