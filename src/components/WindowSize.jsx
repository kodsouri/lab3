import { useState, useEffect } from 'react';

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    // On ajoute l'écouteur
    window.addEventListener('resize', handleResize);

    // NETTOYAGE (Cleanup) : On retire l'écouteur quand le composant disparaît
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // [] signifie : s'exécute uniquement au montage

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h2>Exercice 1.2 : Window Size</h2>
      <p>Largeur de la fenêtre : <strong>{width}px</strong></p>
    </div>
  );
}

export default WindowSize;