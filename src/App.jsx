import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import UserStatus from './components/UserStatus';

// Composants internes pour tester sans erreurs d'import
const Home = () => <h2>🏠 Page d'Accueil</h2>;
const About = () => <h2>ℹ️ À Propos</h2>;
const Dashboard = () => <h2>📊 Dashboard (Privé)</h2>;

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div style={{ 
        backgroundColor: theme === 'light' ? 'white' : '#222', 
        color: theme === 'light' ? 'black' : 'white',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <Link to="/">Accueil</Link> | 
          <Link to="/about">À Propos</Link> | 
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <ThemeToggle />
        <UserStatus />
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;