import { useState, useEffect } from 'react';

function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Met à jour le titre de l'onglet du navigateur
    document.title = `Count: ${count}`;
  }, [count]); // Dépendance sur 'count' [cite: 61, 67]

  return (
    <div style={{ border: '1px solid #555', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Exercice 1.1 : Document Title</h2>
      <p>Valeur actuelle : {count}</p>
      <button onClick={() => setCount(count + 1)}>Augmenter</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Réinitialiser</button>
    </div>
  );
}

export default TitleCounter;