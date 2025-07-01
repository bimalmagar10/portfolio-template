---
title: "Customizing Your Portfolio Design"
date: "2025-06-30"
tags: ["customization", "design", "css", "tailwind"]
excerpt: "Learn how to customize colors, fonts, and layout to make this template uniquely yours."
---

# Customizing Your Portfolio

One of the best features of this template is how easy it is to customize. Here's how to make it truly yours.

## Changing Colors

### Theme Colors

The main colors are defined in `app/globals.css` using CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more colors */
}
```

### Dark Mode Colors

Dark mode variants are defined in the `[data-theme="dark"]` selector:

```css
[data-theme="dark"] {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode colors */
}
```

## Typography

### Fonts

The template uses the Geist font family, but you can change it in `app/layout.tsx`:

```tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
```

### Text Styles

Customize typography in your Tailwind config or global CSS:

```css
.prose h1 {
  @apply text-4xl font-bold text-foreground;
}
```

## Layout Customization

### Header

Modify `components/app-header.tsx` to change:

- Your name and title
- Profile image
- Latest blog post display

### Profile Section

Update `components/profile.tsx` with:

- Your bio and description
- Professional background
- Current focus areas

### Social Links

Add your social media in `components/social-section.tsx`:

```tsx
const socials = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: Github },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  // Add more...
];
```

## Advanced Customization

### Custom Components

Create new components in the `components/` directory and import them into your pages or blog posts.

### Styling System

This template uses:

- **Tailwind CSS** for utility-first styling
- **CSS Custom Properties** for theming
- **Shadcn/ui** components for consistency

### Blog Post Styling

Customize how blog posts look by modifying `components/mdx-components.tsx`:

```tsx
h1: ({ children }) => (
  <h1 className="your-custom-classes">
    {children}
  </h1>
),
```

## Pro Tips

1. **Use the Tailwind Config** - Extend colors and spacing in `tailwind.config.ts`
2. **Test Both Themes** - Always check dark and light mode
3. **Mobile First** - Use responsive classes (`sm:`, `md:`, `lg:`)
4. **Performance** - Optimize images with Next.js Image component

Start with small changes and gradually make bigger customizations as you get more comfortable with the codebase!
