# Content editing guide

Keep content in the matching module so pages and cards update automatically.

- `projects.ts`: add a project object; it automatically appears in the project list and gets a detail page.
- `blog.ts`: add a note at the top of `notes` (newest first). Each note includes its card metadata and complete article sections. `BLOG_PAGE_SIZE` controls pagination.
- `credentials.ts`: add certificates or awards and set `proofHref` when a verification link is available.
- `profile.ts`: keep contact information and social URLs in one place.

After editing, run `npm run build` to verify the generated pages.
