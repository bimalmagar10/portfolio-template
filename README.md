# Portfolio & Blog Template

A modern, responsive portfolio and blog template built with Next.js, featuring dark/light theme support and MDX blog posts.

## 🚀 Quick Start

1. **Install dependencies:**

```bash
npm install
```

2. **Add your profile image:**

   - Place your avatar image as `public/profile.jpg`

3. **Add blog posts:**

   - Create markdown files in the `posts/` folder
   - Each post should have frontmatter with `title`, `date`, and optional `tags`

4. **Start development server:**

```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** to view your portfolio

## 📝 Adding Blog Posts

Create markdown files in the `/posts` directory with frontmatter:

```markdown
---
title: "My First Blog Post"
date: "2024-01-15"
tags: ["nextjs", "react"]
excerpt: "Brief description of your post"
---

# Your Blog Content

Write your blog content here using **Markdown** syntax.
```

### Frontmatter Fields:

- `title` (required) - The post title
- `date` (required) - Publication date in YYYY-MM-DD format
- `tags` (optional) - Array of tags
- `excerpt` (optional) - Short description

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

## 📄 License

This project is will be open source soon.
