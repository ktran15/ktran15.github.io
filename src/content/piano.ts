export type PianoPiece = {
  id: string;
  title: string;
  note?: string;
  /** youtube-nocookie embed URL. The site CSP only allows that host. */
  embedUrl?: string;
};

export const pianoPieces: PianoPiece[] = [
  {
    id: "led-midi-visualizer",
    title: "LED MIDI Visualizer",
    note: "The piano and the LED strip I built for it, running together. Pitch picks the color, and how hard I hit the key sets how bright it gets.",
    embedUrl: "https://www.youtube-nocookie.com/embed/B_Xjkx9cfeY",
  },
];
