import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="btn theme-fab"
      onClick={toggleTheme}
      aria-label="Đổi giao diện"
      title={theme === 'dark' ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}









