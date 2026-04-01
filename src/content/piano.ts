export type PianoPiece = { id: string; title: string; embedUrl?: string; note?: string };

/** Add YouTube/Vimeo embed URLs when ready. */
export const pianoPieces: PianoPiece[] = [
  { id: "p1", title: "Piece 1 â€” add your performance", note: "Paste a YouTube embed URL into embedUrl in src/content/piano.ts." },
  { id: "p2", title: "Piece 2 â€” add your performance", note: "Optional: one embed per card." },
];
