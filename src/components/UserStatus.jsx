import { useAuth } from '../contexts/AuthContext';

function UserStatus() {
  const { user, login, logout } = useAuth();

  if (user) {
    return (
      <div style={{ padding: '10px', border: '1px solid green' }}>
        <p>Bienvenue, <strong>{user.name}</strong> !</p>
        <button onClick={logout}>Se déconnecter</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '10px', border: '1px solid red' }}>
      <p>Vous n'êtes pas connecté.</p>
      <button onClick={() => login({ name: 'Kods' })}>Se connecter</button>
    </div>
  );
}

export default UserStatus;