export type Post = { slug: string; title: string; date: string; dek: string; body: string };

export const posts: Post[] = [];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
