/* ========================================================================= */
/* 1. IMPORTACIONES                                                          */
/* ========================================================================= */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

/* ========================================================================= */
/* 2. COMPONENTE PRINCIPAL (APP)                                             */
/* ========================================================================= */
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      {/* Navbar fija global */}
      <Navbar />

      {/* Contenido dinámico principal (Home) */}
      <main className="grow">
        <Home />
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  );
}

export default App;
