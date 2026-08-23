const gardenPhotos = [
  {
    src: "/images/garden/garden-beds.jpg",
    alt: "Rows of raised metal garden beds full of squash, tomatoes, okra, and sunflowers under a blue sky",
    caption: "The beds in full summer",
    tilt: "tilt-left",
  },
  {
    src: "/images/garden/garden-harvest.jpg",
    alt: "Crates of squash, peppers, beets, and tomatoes on a market table next to garden brochures and a sign-up sheet",
    caption: "Harvest, ready for the stand",
    tilt: "tilt-right",
  },
];

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
            src="/images/garden/garden-sign.jpg"
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
          <p>
            Most of the work is unglamorous. Planting, moving mulch, reinforcing
            the embankment, weeding, and harvesting. The best part is what comes
            after: hauling everything to the stand, and eating lunch at a long
            table with the people who grew it.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {gardenPhotos.map((photo) => (
          <div
            key={photo.src}
            className={`polaroid ${photo.tilt}`}
            style={{ flex: "0 1 320px" }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", display: "block" }}
            />
            <p className="polaroid-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
