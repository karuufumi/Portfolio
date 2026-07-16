# Content editing guide

Keep content in the matching module so pages and cards update automatically.

- `projects.ts`: add a project object; it automatically appears in the project list and gets a detail page.
- `../content/blog/*.md`: add one Markdown file per post. Its frontmatter supplies the title, description, `pubDate`, tags, and optional `draft: true`. Posts are automatically ordered newest first; `BLOG_PAGE_SIZE` in `../lib/blog.ts` controls pagination.
- `credentials.ts`: add certificates or awards and set `proofHref` when a verification link is available.
- `profile.ts`: keep contact information and social URLs in one place.

After editing, run `npm run build` to verify the generated pages.
