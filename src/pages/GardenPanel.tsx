export default function GardenPanel() {
  return (
    <section>
      <h2>Community garden</h2>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <div className="polaroid tilt-slight" style={{ maxWidth: "240px" }}>
          <img
            src="/images/visual-garden.svg"
            alt="Garden placeholder"
            style={{ width: "100%", display: "block" }}
          />
          <p className="polaroid-caption">Hendersonville, TN</p>
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <p>
            I was part of my city of <strong>Hendersonville's</strong>{" "}
            <strong>first community garden</strong>. It taught me
            patience: soil, seasons, and showing up for neighbors even
            when the weather disagrees.
          </p>
          <p>
            Drop in your own garden photos when ready — this spot holds
            the story until then.
          </p>
        </div>
      </div>
    </section>
  );
}
