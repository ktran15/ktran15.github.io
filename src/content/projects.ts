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
    slug: "mixed-signal-instrument",
    title: "Mixed-signal lab instrument",
    tagline: "A bench tool that turns messy analog signals into trustworthy measurements.",
    role: "Firmware, analog front-end bring-up, UI",
    stack: ["C", "STM32", "SPI", "Python"],
    coverImage: "/images/visual-project-a.svg",
    gallery: ["/images/visual-project-a.svg", "/images/visual-project-b.svg"],
    body: `This project started where most interesting hardware projects do: with a question that sounded simple and a prototype that refused to cooperate. I wanted a small instrument that could sample an analog waveform with enough fidelity to debug real circuits in my lab courses, while still feeling approachable on a laptop screen. The goal was not a commercial product; it was a disciplined exercise in constraints, noise, and the boring details that separate a demo from a dependable tool.

The first iterations taught me how quickly analog front-ends punish optimism. Ground references, reference voltages, and clock edges all had opinions. I spent time with the oscilloscope probing points I had drawn confidently in a schematic, then rewired with more humility. I learned to treat every long trace as an antenna and every connector as a question mark. Documenting those failures became part of the project: short lab notes with photos, capture settings, and what changed between revisions.

On the embedded side, I focused on deterministic sampling and predictable timing. I wrote interrupt-driven acquisition paths, validated them against a known function generator, and built a small calibration routine so the digital readings tracked reality across temperature drift. Where I could, I automated checks: a Python script that sweeps inputs and compares expected versus measured curves, exporting CSVs I could drop into a report.

The UI layer was intentionally minimal: readable scales, a stable frame rate, and clear labeling so someone other than me could use the tool during a study session without a tutorial. I prioritized keyboard-friendly controls and high-contrast modes for late-night bench work.

Results: a repeatable measurement pipeline I trust for coursework and personal projects, and a portfolio story I can defend in interviews. The instrument is not perfect, but it is honest about its limits, and I can point to specific design decisions that trade accuracy for speed, cost, or complexity. Next steps I want to explore include better isolation on the front-end, richer triggering options, and a structured data export path for longer captures.`,
  },
  {
    slug: "connected-embedded-gateway",
    title: "Connected embedded gateway",
    tagline: "Bridging UART sensors to a web dashboard without sacrificing debuggability.",
    role: "System design, protocol design, React UI",
    stack: ["Embedded C", "WebSockets", "React", "TypeScript"],
    coverImage: "/images/visual-project-b.svg",
    gallery: ["/images/visual-project-b.svg", "/images/visual-project-a.svg"],
    body: `Some projects are defined by a single flashy demo. This one was defined by the quiet work of making many small pieces agree on the truth. I set out to connect a handful of UART-based sensors to a browser dashboard so I could monitor a system remotely during long-running tests. The catch: I still wanted the embedded side to remain easy to debug with a serial terminal when the network misbehaved.

I began by defining a compact framing format for sensor packets: fixed headers, checksums, and explicit length fields so partial reads could not silently corrupt state. On the microcontroller, I implemented a small state machine for parsing, with defensive resets when the line noise won. I logged anomalies to a circular buffer I could dump later, because the most valuable bugs only appear after hours of uptime.

The bridge layer translated UART frames into WebSocket messages for the browser. I chose WebSockets for low latency and simple back-pressure handling during bursts. On the web client, I built a React dashboard with a focus on readability: sparklines for trends, tables for exact values, and a dedicated panel for connection health. I avoided clever CSS; I wanted the interface to feel like a trustworthy instrument panel.

Along the way, I rehearsed the story I would tell a teammate or interviewer: what broke, what I measured, and what I changed. I practiced explaining trade-offs in plain language, not jargon. The outcome is a system I can extend with additional sensors, and a narrative that highlights how I think about reliability, observability, and user-centered engineeringâ€”even when the user is me.

If I continue this project, I will add authenticated sessions, structured historical storage, and automated regression tests that replay captured UART traces to prevent regressions.`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

