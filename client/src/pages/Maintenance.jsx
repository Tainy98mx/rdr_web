/* ========================================================================= */
/* PÁGINA DE EN MANTENIMIENTO (PLACEHOLDER INSTITUCIONAL)                    */
/* ========================================================================= */
import { ArrowLeft, Wrench, Sparkles, Heart } from 'lucide-react';
import logoCorona from '@/assets/rdr_logo_corona.svg';
import logoTexto from '@/assets/rdr_logo_texto.svg';

export default function Maintenance({ pageTitle = 'Esta Sección' }) {
  const handleGoHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0D1F42] via-[#153574] to-[#1B428F] text-white flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Tarjeta principal de Mantenimiento */}
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl text-center flex flex-col items-center relative z-10 animate-in fade-in-0 zoom-in-95 duration-300">
        
        {/* Logos institucionales */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={logoCorona} alt="Corona RDR" className="h-12 w-auto brightness-0 invert" />
          <img src={logoTexto} alt="Rey de Reyes" className="h-9 w-auto brightness-0 invert" />
        </div>

        {/* Icono animado */}
        <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mb-6 shadow-inner relative">
          <Wrench className="w-10 h-10 text-white animate-bounce" />
          <Sparkles className="w-5 h-5 text-yellow-300 absolute -top-2 -right-2 animate-pulse" />
        </div>

        {/* Títulos y mensaje */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-blue-200 mb-4 inline-block">
          Sección en Desarrollo
        </span>

        <h1 className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-tight">
          ¡Ups! Lo Sentimos
        </h1>

        <p className="text-base sm:text-lg text-blue-100/90 mb-8 leading-relaxed font-medium">
          La sección <strong className="text-white font-extrabold underline decoration-blue-400 underline-offset-4">{pageTitle}</strong> se encuentra actualmente en mantenimiento. Por favor vuelve en otra ocasión para descubrir todo el contenido que tenemos preparado para ti.
        </p>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-8">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto bg-white text-[#1B428F] font-extrabold px-6 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </button>

          <a
            href="#donar"
            onClick={handleGoHome}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold px-6 py-3.5 rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2 text-base"
          >
            <Heart className="w-5 h-5 text-red-400 fill-red-400" />
            <span>Realizar Donación</span>
          </a>
        </div>

        {/* Acceso Rápido a Secciones Principales */}
        <div className="w-full pt-6 border-t border-white/15 flex flex-col items-center gap-2.5">
          <span className="text-xs font-black uppercase tracking-widest text-blue-200">
            Saltar Rápidamente a Otra Sección
          </span>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {['Nosotros', 'Visítanos', 'Crecimiento', 'Comunidad RDR', 'Eventos'].map((title, idx) => {
              const slug = title.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              return (
                <a
                  key={idx}
                  href={`#${slug}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/25 active:bg-white/40 border border-white/20 text-white transition-all hover:scale-105 active:scale-95"
                >
                  {title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
