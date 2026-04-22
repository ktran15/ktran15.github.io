export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  images?: ProjectImage[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  stack: string[];
  coverImage: string;
  sections: ProjectSection[];
  gallery: string[];
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "piano-led-visualizer",
    title: "Piano Audio-Reactive LED Visualization",
    tagline:
      "A strip of LEDs that reacts in real time to my piano, where pitch drives color and velocity drives brightness.",
    role: "ECE 1100 Discovery Project",
    stack: [
      "Python",
      "Raspberry Pi 4",
      "WS2812B (ws281x)",
      "mido (MIDI)",
      "NumPy",
      "Adafruit NeoPixel",
      "Linux",
      "GPIO",
      "Soldering",
    ],
    coverImage: "/images/piano/piano-setup-desk.png",
    sections: [
      {
        id: "problem",
        heading: "The Problem",
        paragraphs: [
          "I have always found reactive light displays mesmerizing, especially the kind that respond to sound, film, or music. After seeing a more ambitious water and light installation online, I started wondering what a more personal version could look like, something tied to the instrument I actually play. That became the seed of this project: a strip of LEDs that reacts in real time to my piano, where every key maps to its own pixel, pitch drives color, and velocity drives brightness. Soft passages dim, fortissimo chords saturate the strip, and each performance gains an extra layer of dynamics the audience can see, not just hear.",
          "Framing it that way turned a vague idea into a real engineering problem. I needed a reliable way to pull note data off the piano in real time, translate it into color and brightness with low enough latency to feel musical, and drive enough LEDs to span the full length of the keyboard without fighting power, timing, or flicker.",
        ],
        images: [
          {
            src: "/images/piano/piano-setup-desk.png",
            alt: "Roland FP-10 piano next to a Raspberry Pi wired up on a wooden desk",
            caption: "The instrument I wanted to visualize, next to the Pi that would drive it.",
          },
        ],
      },
      {
        id: "process",
        heading: "The Process",
        paragraphs: [
          "My first step was research and planning. I sketched the full signal path from instrument to LED and figured out where the hard parts would live. My Roland FP-10 supports Bluetooth MIDI, so I originally planned to capture the signal wirelessly, decode it into note and velocity data, and push colors out to the strip. I mapped out voltage levels, current budgets, and part compatibility, then ordered components from Amazon and picked up a Raspberry Pi 4 from the Micro Center near me.",
          "Bluetooth MIDI on Linux turned out to be more fragile than the tutorials suggested. After too many pairing issues and dropped connections, I pivoted to a wired USB link using the mido library in Python. That gave me clean, consistent note events and let me focus on the rest of the pipeline. I flashed Raspberry Pi OS, set up the environment, and wrote the control script. mido listens for note_on, note_off, and control_change messages, a small mapping function translates MIDI pitch into an LED index and a color, and numpy.interp scales velocity from the MIDI range (0 to 127) into LED brightness (0 to 255). A dedicated thread handles the sustain pedal so notes fade out gracefully when a key lifts instead of cutting off hard.",
          "The first real milestone came when the terminal started printing live pitch and velocity as I played. That was the moment the project stopped feeling like a thought experiment and started feeling like something I could actually finish.",
          "From there, most of the road blocks have lived on the hardware side. The strip is a pair of WS2812B (ws281x) segments I am soldering end to end so the lit portion matches the length of the keyboard. Because the strip pulls far more current than the Pi can safely supply, I added an AC to DC power brick with a dedicated 5V rail, tied the grounds together, and run the data line off a GPIO pin through the Adafruit NeoPixel library. Wiring has been the messiest part of the build so far, and getting every segment to boot cleanly without voltage sag has been a steady exercise in patience.",
        ],
        images: [
          {
            src: "/images/piano/piano-console-notes.png",
            alt: "Terminal output showing live MIDI Note On messages with pitch and velocity values",
            caption: "First successful run: live MIDI note and velocity data streaming from the piano.",
          },
          {
            src: "/images/piano/piano-code.png",
            alt: "Close-up of the Main.py control script in VS Code, showing the MIDI event loop",
            caption: "The control script in VS Code, handling note_on, note_off, and control_change events.",
          },
          {
            src: "/images/piano/piano-dev-setup.png",
            alt: "Monitor showing the Main.py file open in Geany next to a terminal installing Python packages on the Raspberry Pi",
            caption: "Raspberry Pi OS with the project environment set up and mido talking to the piano.",
          },
        ],
      },
      {
        id: "outcome",
        heading: "The Outcome (WIP)",
        paragraphs: [
          "The software side is effectively finished. The control script connects to the piano, parses MIDI in real time, converts pitch and velocity into color and brightness, and stages each update against the LED buffer. The one function still waiting on final hardware integration is the LED write path itself, which needs the fully soldered strip and a stable power rail to be validated under real load.",
          "Honestly, I bit off more than I could reasonably finish in a single semester, but the project is very much alive. The plan is to finish the soldering, clean up the wiring into something worth photographing, and run a proper end to end demo with a recorded performance. Longer term, I want to build a small enclosure for the Pi and power rail, add a chord-aware color mode, and experiment with a pedal-driven shimmer effect on sustained notes.",
        ],
        images: [
          {
            src: "/images/piano/piano-pi-leds.png",
            alt: "Raspberry Pi 4 wired to a WS2812B LED strip with power and data lines taped to the desk",
            caption: "The current hardware state: Pi, addressable strip, and external 5V supply sharing a ground.",
          },
        ],
      },
      {
        id: "ece-skills",
        heading: "ECE Skills Gained",
        paragraphs: [
          "This project forced me to stitch together software, firmware-adjacent scripting, and real hardware into one working system. The list below captures what I actually practiced along the way, not just what I read about.",
        ],
        bullets: [
          "Real-time event handling in Python using the mido library for note_on, note_off, and control_change MIDI messages.",
          "Numerical mapping of pitch to color and velocity to brightness with numpy.interp to get smooth, continuous response.",
          "Hardware interfacing with WS2812B (ws281x) addressable LEDs through the Adafruit NeoPixel library.",
          "Raspberry Pi OS on a Pi 4, including flashing, USB device management, and building a reproducible Python environment.",
          "Power electronics basics: current budgeting, AC to DC supply selection, and shared ground practice between the Pi and the LED rail.",
          "Soldering, wiring, and full-system integration between a consumer instrument, a single-board computer, and LED hardware.",
          "Engineering trade-off analysis, most visibly the pivot from Bluetooth MIDI to a wired USB connection for reliability.",
        ],
      },
    ],
    gallery: [
      "/images/piano/piano-overview.png",
      "/images/piano/piano-setup-desk.png",
      "/images/piano/piano-dev-setup.png",
      "/images/piano/piano-console-notes.png",
      "/images/piano/piano-code.png",
      "/images/piano/piano-pi-leds.png",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
