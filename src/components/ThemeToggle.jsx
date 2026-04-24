import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <button onClick={toggleTheme}>
        Passer en mode {theme === 'light' ? 'Sombre' : 'Clair'}
      </button>
    </div>
  );
}

export default ThemeToggle;