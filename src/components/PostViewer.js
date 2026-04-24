import { useState, useEffect } from 'react';

function PostViewer() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // On utilise une fonction asynchrone pour fetcher les données [cite: 118]
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // [] assure que le fetch ne s'exécute qu'une fois [cite: 116, 117]

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div style={{ border: '1px solid #555', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Exercice 1.3 : Data Fetching</h2>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default PostViewer;