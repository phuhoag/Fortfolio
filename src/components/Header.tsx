import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const sections = [
  { id: 'about', label: 'Giới thiệu' },
  { id: 'skills-frontend', label: 'Frontend' },
  { id: 'skills-backend', label: 'Backend' },
  { id: 'skills-tooling', label: 'Tooling' },
  { id: 'projects', label: 'Dự án' },
  { id: 'contact', label: 'Liên hệ' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#about">My Portfolio</a>
        <nav className="nav">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link">{s.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}


