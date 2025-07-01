"use client";

import Link from "next/link";

const links = [
  {
    href: "https://www.linkedin.com/in/bimal-thapa-magar-6582b0256/",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/bimalmagar10/bimalmagar10",
    label: "GitHub",
  },
  {
    href: "mailto:bimalmagar873@gmail.com",
    label: "Email",
  },
  {
    href: "https://www.facebook.com/Bimalmagar770077/",
    label: "Facebook",
  },
];

const SocialSection = () => {
  return (
    <section>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="text-muted-foreground underline hover:text-blue-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
