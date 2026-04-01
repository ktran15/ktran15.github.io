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
        <div className="polaroid tilt-slight" style={{ maxWidth: "320px" }}>
          <img
            src="/images/garden-photo.jpg"
            alt="Brooklyn Community Garden"
            width={320}
            height={240}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", display: "block" }}
          />
          <p className="polaroid-caption">Brooklyn Community Garden</p>
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <p>
            I was part of my city's{" "}
            <strong>first community garden</strong>. It taught me
            patience: soil, seasons, and showing up for neighbors even
            when the weather disagrees.
          </p>
          <p>
            There's something grounding about working with your hands in the
            dirt after a week of staring at code and circuits. The garden
            reminded me that good things take time, consistent effort, and a
            willingness to learn from what doesn't grow.
          </p>
        </div>
      </div>
    </section>
  );
}
