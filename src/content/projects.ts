export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  stack: string[];
  coverImage: string;
  body: string;
  gallery: string[];
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "piano-led-visualizer",
    title: "Piano Audio-Reactive LED Visualization",
    tagline: "Turning every note into a real-time light show driven by microcontroller signal processing.",
    role: "Discovery Project",
    stack: [
      "Embedded C",
      "Microcontrollers",
      "Signal Processing",
      "Analog Circuits",
      "FFT",
      "PWM",
      "SPI",
      "MIDI",
      "LED Matrix",
    ],
    coverImage: "/images/visual-project-a.svg",
    gallery: ["/images/visual-project-a.svg"],
    body: `The idea behind this project is deceptively simple: play a note on the piano and watch a strip of LEDs respond in real time, painting color across a room in sync with every chord, run, and rest. What makes the project genuinely interesting is the engineering hiding behind that experience. Bridging the gap between an acoustic instrument and a programmable light display demands careful thinking about analog signal capture, digital signal processing on a resource-constrained microcontroller, and precise timing so the visuals never feel late.

Audio capture is the first challenge. The system supports two input paths. A small electret microphone paired with a pre-amplifier circuit picks up the acoustic output of the piano, while an optional MIDI breakout board can tap the digital note data directly from instruments that support it. The microphone path is the more demanding one: the raw analog signal needs conditioning through a bandpass filter to reject noise outside the musical range, followed by analog-to-digital conversion at a sample rate high enough to resolve individual notes across the keyboard. Designing and tuning that analog front-end taught me more about op-amp biasing, decoupling, and ground routing than any textbook exercise.

Once the signal is digitized, the microcontroller performs real-time frequency analysis. A lightweight FFT running on the MCU decomposes each audio frame into frequency bins, letting the firmware identify which notes are currently active and how loud they are. Mapping those bins to LED colors is where the creative decisions live: lower notes might glow warm amber while upper-register trills flash cool blue, and the brightness tracks the volume envelope so soft passages dim and fortissimo chords saturate the strip. Keeping this pipeline within the MCU's cycle budget is a constant exercise in profiling and trade-offs — choosing a smaller FFT window for lower latency versus a larger one for better frequency resolution, and deciding where fixed-point arithmetic can replace floating-point without visible artifacts.

Driving the LED hardware introduces its own constraints. The system uses addressable RGB LEDs controlled over a single-wire protocol that demands precise sub-microsecond timing. The firmware generates the data stream using a combination of hardware timers and DMA transfers so the CPU stays free to continue processing the next audio frame. For larger installations with LED matrices instead of strips, an SPI-based driver handles the higher data throughput. Power management matters too: a full strip at maximum brightness can draw several amps, so the board includes current-sense feedback and a soft brightness cap to protect the supply.

From an ECE perspective, this project ties together skills I have been developing across my coursework: analog-to-digital conversion, discrete-time signal processing, embedded firmware with hard real-time deadlines, communication protocols like SPI and single-wire interfaces, and PWM-based power control. It also forced me to practice system-level thinking — a beautiful FFT result is useless if the LED update latency makes the lights feel sluggish, and a fast LED driver is pointless if the audio front-end clips on loud passages.

Next steps include adding a small OLED display for live spectrum visualization, implementing beat detection so the lights can pulse with rhythmic patterns, and packaging the hardware into a clean enclosure that sits on top of an upright piano. I also want to document the build with detailed schematics, annotated firmware, and a short demo video so other students can adapt the design for their own instruments or performances.`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
