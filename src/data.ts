import type { Project, Skill } from './types';

export const frontendSkills: Skill[] = [
  { name: 'React', level: 'expert', category: 'frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { name: 'Next.js', level: 'advanced', category: 'frontend' },
  { name: 'Redux / Zustand', level: 'advanced', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
  { name: 'Vite', level: 'advanced', category: 'frontend' },
];

export const backendSkills: Skill[] = [
  { name: 'Node.js', level: 'advanced', category: 'backend' },
  { name: 'Express', level: 'advanced', category: 'backend' },
  { name: 'NestJS', level: 'intermediate', category: 'backend' },
  { name: 'REST / GraphQL', level: 'advanced', category: 'backend' },
  { name: 'Auth (JWT/OAuth)', level: 'advanced', category: 'backend' },
];

export const toolingSkills: Skill[] = [
  { name: 'Git & GitHub', level: 'advanced', category: 'tooling' },
  { name: 'CI/CD', level: 'intermediate', category: 'devops' },
  { name: 'Docker', level: 'intermediate', category: 'devops' },
  { name: 'Databases (Postgres, MongoDB)', level: 'intermediate', category: 'database' },
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    description: 'Trang portfolio hiện đại với React + Vite, responsive, tối ưu SEO.',
    techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
    repoUrl: 'https://github.com/yourusername/portfolio',
    demoUrl: 'https://your-portfolio.vercel.app',
  },
  {
    id: 'task-api',
    name: 'Task API',
    description: 'API quản lý công việc với Node.js/Express, JWT auth, CRUD đầy đủ.',
    techStack: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    repoUrl: 'https://github.com/yourusername/task-api',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce UI',
    description: 'Giao diện cửa hàng, giỏ hàng, thanh toán giả lập, tối ưu hiệu năng.',
    techStack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    repoUrl: 'https://github.com/yourusername/ecommerce-ui',
  },
];






