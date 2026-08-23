export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Render centered and full-width instead of floated in the side column. */
  wide?: boolean;
};

export type ProjectSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  images?: ProjectImage[];
  bullets?: string[];
};

export type ProjectStatus = "finished" | "wip";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  tagline: string;
  role: string;
  stack: string[];
  coverImage: string;
  sections: ProjectSection[];
  gallery: string[];
  videoUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "piano-led-visualizer",
    title: "Piano Audio-Reactive LED Visualization",
    status: "finished",
    tagline:
      "An LED strip that reacts in real time to my piano, where pitch sets the color and velocity sets the brightness.",
    role: "ECE 1100 Discovery Project",
    stack: [
      "Python",
      "Raspberry Pi 5",
      "WS2812B (180 px)",
      "pi5neo over SPI",
      "mido / python-rtmidi",
      "NumPy",
      "gpiozero",
      "Threading",
      "GPIO",
      "Linux",
      "Soldering",
    ],
    coverImage: "/images/piano/piano-demo.jpg",
    repoUrl: "https://github.com/ktran15/LED-MIDI-Visualization-Display",
    demoUrl: "https://youtu.be/B_Xjkx9cfeY",
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
          "The Bluetooth path never worked. I wrote a diagnostic script that dumped every advertising BLE device with its name, signal strength, and service UUIDs, purely to confirm whether the piano was showing up at all. It was not, at least not in a form my scanner could pair with. Roland builds its Bluetooth MIDI around its own app and the BLE MIDI stacks on iOS, Android, and Windows, and getting a Pi to speak it would have meant buying a third-party adapter for a project that already had a working wired path. I switched to USB MIDI through mido and python-rtmidi. That is the better engineering answer either way: the piano and the Pi sit in the same piece of furniture, a cable between them costs nothing, and it takes pairing, radio interference, and battery state out of a system that has to come up unattended every time it is powered on.",
          "The first real milestone was when the terminal started printing live pitch and velocity as I played. That was the moment the project stopped feeling like an idea and started feeling like something I could actually finish.",
          "Getting light out of the Pi was the second rewrite. Almost every WS2812B guide for the Raspberry Pi uses rpi_ws281x, which generates the strip's timing by driving the PWM, PCM, and DMA peripherals directly. The Pi 5 moved GPIO behind the RP1 I/O controller, so that library does not work on it at all. I spent a long time chasing wiring and power before I accepted the library itself was the problem. The fix was pi5neo, which encodes the WS2812B waveform as an SPI bit stream clocked out of MOSI at 800 kHz. That led straight into the next wall: spidev caps a single transfer at 4096 bytes by default, and 180 pixels at 24 bytes each need 4320. The write just fails silently and the strip does nothing. Raising the buffer to 32768 bytes, and adding it to the boot command line so it survives a reboot, is what finally lit the strip.",
          "On the hardware side, 180 WS2812B pixels at 144 LEDs per meter comes to about 1.25 m, which spans all 88 keys. No single segment I had was long enough, so I cut two and soldered them end to end. The join has to respect data direction, since WS2812B passes data down the strip one way only and the second segment's input must meet the first segment's output or it never lights. Power comes from a dedicated 5 V 20 A supply rather than the Pi's 5 V rail. A single pixel draws roughly 60 mA with all three channels at full, so 180 of them have a theoretical ceiling near 10.8 A, which is far past anything the Pi can source. Browning out the board that is generating your data signal is a bad failure mode. The Pi and the LED supply share a ground so the data line has a common reference.",
          "With the hardware working, the rest was mapping and tuning. MIDI pitches 21 to 108 map linearly onto LED indices, clamped a few pixels in from each end. Pitch maps to color by interpolating red, green, and blue independently across seven anchor points, which gives red in the bass, through orange and yellow and green in the middle, into blue and violet at the top. Velocity maps to a brightness multiplier that tops out at 180 of a possible 255, because full brightness at arm's length is unpleasant to look at and washes out the color separation between neighboring notes. A single lit pixel reads as a hard dot and looks nothing like sound, so each note spreads across seven LEDs with a steep falloff from the center. Gentler curves looked better on one note but smeared chords into an unreadable blob.",
          "Releasing a key does not blank the LED. It starts a fade that steps down to black in eight increments, and the length of that fade comes from both velocity and the sustain pedal: about 0.1 to 0.25 seconds with the pedal up, and 0.5 to 1.1 seconds with it down. This is the detail that makes the display feel attached to the instrument instead of merely triggered by it. Pedaled passages leave color hanging in the air after my hands have moved on, and staccato playing snaps off clean.",
          "The change that made it feel finished was the render loop. In the first working version, every MIDI handler and every fade thread called the strip update directly. Holding a chord under the pedal meant a dozen threads fighting over the SPI bus, which showed up as visible flicker and input lag that got worse the more notes were sounding. I separated state from output: all note and fade logic now writes only into a shared frame buffer, and one dedicated thread walks that buffer and performs a single SPI transfer at roughly 30 fps. SPI traffic is constant no matter how many notes are held, and the flicker is gone. I fixed a related stutter the same way, by registering a cancellation event for each fade so that replaying a note kills the old fade instead of letting it keep writing dimmer values over the new one.",
          "The last piece was making it usable without a computer. The unit runs headless, so I added a momentary button on GPIO 17 that counts presses inside a six-second window and launches the matching theme as a subprocess, terminating whatever was already running. Debouncing through gpiozero was necessary before any of that worked, since early versions counted one press as three or four. There are four themes now, each a different pitch-to-color mapping built for a specific piece: a full rainbow by default, navy to teal for Birds of a Feather, a single deep purple for Mia and Sebastian's Theme, and a red and gold split at middle C for Le Festin, so the left and right hands read as separate voices.",
        ],
        images: [
          {
            src: "/images/piano/piano-overview.png",
            alt: "Raspberry Pi and keyboard on a desk in front of a monitor showing the code and live MIDI output",
            caption: "The bench where most of this got debugged.",
          },
          {
            src: "/images/piano/piano-console-notes.png",
            alt: "Terminal output showing live MIDI Note On messages with pitch and velocity values",
            caption: "Live MIDI note and velocity output in the terminal.",
          },
          {
            src: "/images/piano/piano-pi-leds.png",
            alt: "Raspberry Pi wired to a WS2812B LED strip with power and data lines on a wooden desk",
            caption: "The Pi, LED strip, and power supply wired up.",
          },
          {
            src: "/images/piano/piano-code.png",
            alt: "Close-up of the control script in VS Code",
            caption: "The control script in VS Code.",
          },
        ],
      },
      {
        id: "outcome",
        heading: "The Outcome",
        paragraphs: [
          "It is finished and it works. The strip sits behind the keys and lights up as I play, colored by pitch and brightened by how hard I hit the key, with the decay following the sustain pedal. The whole thing runs headless: power on the Pi and it starts listening, and the button on the front cycles themes without a keyboard, a screen, or a network connection.",
          "Two rewrites account for most of the work that got it here, and neither was in the original plan. The MIDI transport moved from Bluetooth to wired USB, and the LED driver moved from the standard rpi_ws281x approach to driving the strip over SPI, because the Pi 5 changed how GPIO works. Everything after that was tuned by eye: the diffusion falloff, the brightness ceiling, the fade lengths, and each theme's palette were all set by playing something, watching the strip, and adjusting.",
          "There are things I would still fix. There is no level shifter on the data line, so the Pi's 3.3 V signal is technically below what the LEDs expect. It runs reliably at this strip length, but it is out of specification and a proper buffer chip is the right answer before extending the run. Each theme is also a near-copy of the full render loop, and the correct structure is one engine with a swappable palette. That duplication is the first thing I would refactor.",
        ],
        images: [
          {
            src: "/images/piano/piano-demo.jpg",
            alt: "LED strip behind the piano keys glowing magenta and green while being played in a dark room",
            caption: "The finished display, running while I play.",
            wide: true,
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
          "Real-time event handling in Python, parsing note_on, note_off, and sustain pedal control_change messages off a live MIDI stream.",
          "Signal mapping with piecewise-linear interpolation: pitch to LED position, pitch to RGB across seven anchor points, and velocity to brightness.",
          "Driving WS2812B addressable LEDs from a Raspberry Pi 5 over SPI, after finding that the standard PWM and DMA libraries do not work behind the Pi 5's RP1 I/O controller.",
          "Debugging at the driver and kernel-parameter level, including the spidev transfer buffer ceiling that silently blocked every strip update.",
          "Thread synchronization and cancellation: moving from direct writes to a shared frame buffer with a single render thread, and killing stale fades with cancellation events.",
          "Double buffering and fixed-rate rendering to keep bus traffic constant and eliminate flicker under load.",
          "Power electronics basics: current budgeting at roughly 60 mA per pixel, selecting a dedicated 5 V 20 A supply, and sharing a ground between the Pi and the LED rail.",
          "Logic level reasoning, including why 3.3 V data into a 5 V strip is out of specification and what a 74AHCT125 buffer would fix.",
          "Soldering two LED segments end to end while respecting the strip's one-way data direction.",
          "Hardware debouncing with gpiozero and headless embedded deployment, including running a launcher at boot so the unit comes up on power alone.",
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
