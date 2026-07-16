import { getCollection, type CollectionEntry } from 'astro:content';

export const BLOG_PAGE_SIZE = 5;

export type BlogPost = CollectionEntry<'blog'>;

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return posts.sort((first, second) => second.data.pubDate.getTime() - first.data.pubDate.getTime());
}

export function getPostSlug(post: BlogPost) {
  return post.id.replace(/\.md$/, '');
}

export function formatPostDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
    .format(date)
    .toUpperCase();
}
