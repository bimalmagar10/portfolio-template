---
title: "Getting Started with This Portfolio Template"
date: "2025-06-30"
tags: ["tutorial", "nextjs", "portfolio"]
excerpt: "Learn how to set up and customize this modern portfolio and blog template built with Next.js."
---

# Getting Started

Welcome to your new portfolio and blog template! This guide will help you get up and running quickly.

## What's Included

This template comes with everything you need to create a professional portfolio and blog:

- **Modern Design** - Clean, responsive layout that works on all devices
- **Dark/Light Theme** - Automatic theme switching with user preference
- **Blog System** - Full-featured blog with search and tagging
- **Performance Optimized** - Fast loading with Next.js optimizations

## Quick Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Create Your Posts Directory**

   ```bash
   mkdir posts
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Customize Your Content**
   - Update `components/profile.tsx` with your information
   - Replace `public/profile.jpg` with your photo
   - Start writing blog posts in the `posts/` folder

## Writing Your First Post

Create a new `.md` file in the `posts/` directory with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
tags: ["tag1", "tag2"]
excerpt: "A brief description of your post"
---

# Your Content Here

Write your blog post content using Markdown syntax!
```

## Next Steps

- Customize the color scheme in `app/globals.css`
- Add your social media links in `components/social-section.tsx`
- Deploy to Vercel for free hosting

Happy blogging! 🚀
