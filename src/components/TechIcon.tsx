type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
  title?: string;
};

// Map common tech names/aliases to Devicon slugs
const techToSlug: Record<string, string> = {
  react: 'react',
  'react.js': 'react',
  'reactjs': 'react',
  typescript: 'typescript',
  javascript: 'javascript',
  next: 'nextjs',
  'next.js': 'nextjs',
  redux: 'redux',
  zustand: 'zustand', // not in devicon, will fallback
  tailwind: 'tailwindcss',
  'tailwind css': 'tailwindcss',
  vite: 'vite',
  node: 'nodejs',
  'node.js': 'nodejs',
  express: 'express',
  nest: 'nestjs',
  'nestjs': 'nestjs',
  graphql: 'graphql',
  jwt: 'jwt', // not in devicon, fallback
  oauth: 'oauth', // fallback
  git: 'git',
  github: 'github',
  docker: 'docker',
  postgres: 'postgresql',
  postgresql: 'postgresql',
  mongodb: 'mongodb',
  mysql: 'mysql',
};

const knownOrder = [
  'react','typescript','javascript','next','redux','zustand','tailwind css','tailwind','vite','node','express','nestjs','nest','graphql','jwt','oauth','git','github','docker','postgresql','postgres','mongodb','mysql'
];

function resolveSlugFromName(name: string): string | null {
  const lower = name.toLowerCase();
  for (const key of knownOrder) {
    if (lower.includes(key)) {
      const slug = techToSlug[key];
      return slug ?? null;
    }
  }
  return techToSlug[lower] ?? null;
}

function iconUrlForSlug(slug: string): string {
  // Devicon provides many, some like express are monochrome; still acceptable
  const deviconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
  // We will optimistically use original; if it 404s the browser shows broken image; to avoid that, we rely on onError to swap
  return deviconUrl;
}

export default function TechIcon({ name, size = 18, className, title }: TechIconProps) {
  const slug = resolveSlugFromName(name);
  if (!slug) {
    return (
      <span className={`tech-icon-fallback ${className ?? ''}`} style={{ width: size, height: size }} aria-hidden title={title ?? name}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  const src = iconUrlForSlug(slug) || undefined;
  return (
    <img
      className={`tech-icon ${className ?? ''}`}
      src={src}
      alt={name}
      title={title ?? name}
      width={size}
      height={size}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.onerror = null;
        target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-plain.svg`;
      }}
    />
  );
}









