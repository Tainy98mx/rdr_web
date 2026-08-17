/* ========================================================================= */
/* 1. IMPORTACIONES                                                          */
/* ========================================================================= */
import { useState, useEffect } from 'react';
import Navbar from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Maintenance from './pages/Maintenance';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determinar la vista a renderizar según el hash
  const isHomeOrAnchor = !currentHash || currentHash === '#' || currentHash === '#donar' || currentHash === '#hero';
  const isNosotrosPage = currentHash === '#nosotros' || currentHash === '#quienes-somos';

  // Formatear el título legible a partir del hash (ej. #sedes-y-horarios -> "Sedes y Horarios")
  const formatTitleFromHash = (hash) => {
    if (!hash) return 'Esta Sección';
    const raw = hash.replace('#', '').replace(/-/g, ' ');
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      {/* Navbar fija global */}
      <Navbar />

      {/* Contenido dinámico principal */}
      <main className="grow">
        {isHomeOrAnchor ? (
          <Home />
        ) : isNosotrosPage ? (
          <Nosotros />
        ) : (
          <Maintenance pageTitle={formatTitleFromHash(currentHash)} />
        )}
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  );
}

export default App;
