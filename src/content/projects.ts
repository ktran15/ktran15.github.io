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
      "An LED strip that reacts in real time to my piano, where pitch sets the color and velocity sets the brightness.",
    role: "ECE 1100 Discovery Project",
    stack: [
      "Python",
      "Raspberry Pi 5",
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
          "I have always thought reactive light displays were cool, especially ones that respond to sound, TV, or music. I had seen someone online do something similar with a more complicated water and light setup, and that gave me the idea to build a smaller version tied to my piano. The goal is a strip of LEDs that reacts to my playing in real time. Each key maps to its own LED, pitch sets the color, and velocity sets the brightness. Hit a key harder and the LED gets brighter. Hit a different note and the color changes. The point is to add another layer of dynamics to playing piano.",
          "To actually build that, I needed a way to pull note data off the piano in real time, turn that data into color and brightness fast enough to feel live, and drive enough LEDs to cover the length of the keyboard.",
        ],
        images: [
          {
            src: "/images/piano/piano-setup-desk.png",
            alt: "Roland FP-10 piano next to a Raspberry Pi wired up on a wooden desk",
            caption: "The piano and the Raspberry Pi on my desk.",
          },
        ],
      },
      {
        id: "process",
        heading: "The Process",
        paragraphs: [
          "I started with research and planning. I sketched the path from piano to LED and figured out where the hard parts would be. My Roland FP-10 supports Bluetooth MIDI, so my first plan was to capture the signal wirelessly on a Raspberry Pi, decode it into note and velocity data, and push colors out to the LED strip. I picked up a Raspberry Pi 5 from the Micro Center near me and ordered the rest of the parts from Amazon.",
          "Bluetooth MIDI on Linux turned out to be more fragile than the tutorials suggested. After a lot of pairing and dropout issues, I switched to a wired USB connection using the mido library in Python. That gave me clean, consistent note events. I flashed Raspberry Pi OS, set up the environment, and wrote the control script. mido listens for note_on, note_off, and control_change messages, a small mapping function turns MIDI pitch into an LED index and a color, and numpy.interp scales velocity from 0 to 127 into LED brightness from 0 to 255. A separate thread handles the sustain pedal so notes fade out when a key lifts instead of cutting off hard.",
          "The first real milestone was when the terminal started printing live pitch and velocity as I played. That was the moment the project stopped feeling like an idea and started feeling like something I could actually finish.",
          "After that, most of the work has been on the hardware side. The LED strip is two WS2812B (ws281x) segments that I am soldering end to end so the lit length matches the keyboard. The strip pulls more current than the Pi can safely supply, so I added an AC to DC 5V power brick and tied its ground to the Pi's ground. Wiring the Pi, power brick, and strip together cleanly has been the messiest part of the build so far.",
        ],
        images: [
          {
            src: "/images/piano/piano-console-notes.png",
            alt: "Terminal output showing live MIDI Note On messages with pitch and velocity values",
            caption: "Live MIDI note and velocity output in the terminal.",
          },
          {
            src: "/images/piano/piano-code.png",
            alt: "Close-up of the Main.py control script in VS Code",
            caption: "The control script in VS Code.",
          },
        ],
      },
      {
        id: "outcome",
        heading: "The Outcome (WIP)",
        paragraphs: [
          "The software side is basically done. The control script connects to the piano, parses MIDI in real time, and converts pitch and velocity into color and brightness. The LED write path is the part still blocking a full demo.",
          "Right now I am working on two things. First, adding a logic level shifter so the Pi's 3.3V GPIO data signal gets bumped up to the 5V the LEDs expect. Second, soldering the two LED segments together so the strip covers the full length of the piano. I have not been able to turn on an LED yet. It is still a work in progress, and those are the challenges I am actively trying to get past.",
        ],
        images: [
          {
            src: "/images/piano/piano-pi-leds.png",
            alt: "Raspberry Pi wired to a WS2812B LED strip with power and data lines on a wooden desk",
            caption: "The Pi, LED strip, and power brick wired up.",
          },
        ],
      },
      {
        id: "ece-skills",
        heading: "ECE Skills Gained",
        paragraphs: [
          "This project forced me to stitch together software, hardware interfacing, and basic power work into one system. The list below is what I actually practiced along the way.",
        ],
        bullets: [
          "Real-time event handling in Python using the mido library for note_on, note_off, and control_change MIDI messages.",
          "Mapping pitch to color and velocity to brightness with numpy.interp for smooth response.",
          "Interfacing a Raspberry Pi with WS2812B (ws281x) addressable LEDs through the Adafruit NeoPixel library.",
          "Raspberry Pi OS on a Pi 5, including flashing, USB device management, and setting up a Python environment.",
          "Power electronics basics: current budgeting, AC to DC supply selection, and shared grounds between the Pi and the LED rail.",
          "Logic level shifting from 3.3V GPIO to 5V LED data, and the reasoning for why it is needed.",
          "Soldering, wiring, and integrating a consumer instrument, a single-board computer, and LED hardware into one working setup.",
          "Engineering trade-off analysis, most visibly the pivot from Bluetooth MIDI to wired USB for reliability.",
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
