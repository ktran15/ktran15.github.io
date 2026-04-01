export type Post = { slug: string; title: string; date: string; dek: string; body: string };

export const posts: Post[] = [
  {
    slug: "leading-with-clarity",
    title: "Leading with clarity when the spec is fuzzy",
    date: "2026-02-12",
    dek: "What I reach for when a team needs direction but the requirements are still moving.",
    body: `Most of my favorite engineering moments happen when the problem is real but the path is not obvious. In student teams and club projects, I have seen groups stall not because people lack skill, but because nobody has named the decision that unlocks the next week of work.

When the spec is fuzzy, I try to do three things. First, I write a one-page problem statement in plain language: who the work is for, what success looks like, and what is explicitly out of scope. Second, I propose a default architecture or interfaceâ€”even if it is wrongâ€”so the group has something concrete to critique. Third, I schedule a short review with a clear agenda: we are not brainstorming forever; we are choosing among options with trade-offs spelled out.

This approach is not glamorous. It will not win an award for animation. But it respects everyone time and it creates momentum. I am still learning when to push for a decision versus when to listen longer, especially across cultural and communication styles. The goal is not to be the loudest voice in the room; it is to leave the room with a shared picture of the next step.

I want to keep practicing technical leadership that is humble and specific: documenting assumptions, making risks visible, and celebrating the boring milestones like passing tests and clean handoffs.`,
  },
  {
    slug: "bench-notes",
    title: "Bench notes beat perfect slides",
    date: "2026-01-05",
    dek: "Why I photograph setups, save waveforms, and write the messy version first.",
    body: `I used to believe a project was not real until it had a polished write-up. That belief slowed me down. Now I treat bench notes as part of the deliverable from day one: a dated log of what I tried, what I measured, and what surprised me.

Photographs matter. A single photo of a breadboard routing issue can save an hour of confusion a week later. Saved oscilloscope captures matter even more when they are labeled with probe points and settings. I am building a habit of attaching context to artifacts so future-meâ€”or a teammateâ€”does not have to guess.

When it is time to present, those notes become the spine of a story. I can choose what to emphasize without inventing memory. For a portfolio, the same rule applies: recruiters and mentors can tell when a case study is grounded in real iteration.

This post is a reminder to myself: keep the messy version, then edit with care. The polish should be truthful, not theatrical.`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
