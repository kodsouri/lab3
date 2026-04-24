import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // Si l'utilisateur n'est pas connecté, on le redirige vers l'accueil
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Sinon, on affiche la page demandée
  return children;
};

export default ProtectedRoute;