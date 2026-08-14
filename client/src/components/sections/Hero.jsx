/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    /* ===================================================================== */
    /* 2. CONTENEDOR PRINCIPAL PANTALLA COMPLETA                             */
    /* ===================================================================== */
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 overflow-hidden font-sans">
      {/* =================================================================== */}
      {/* 2.1 IMAGEN DE FONDO (PRUEBA SIN VIDEO) Y FILTRO ATMOSFÉRICO         */}
      {/* =================================================================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1920&auto=format&fit=crop"
          alt="Fondo Iglesia Rey de Reyes"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Degradado profesional para máximo contraste */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      </div>

      {/* Estilos inyectados para animación de degradado fluido */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% auto;
          animation: gradientMove 5s linear infinite;
        }
      `}</style>

      {/* ===================================================================== */}
      {/* 3. CONTENIDO PRINCIPAL CON ENTRADA ESCALONADA (CSS PURO)             */}
      {/* ===================================================================== */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center flex flex-col items-center">
        {/* Título Principal Monumental */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.08] drop-shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          Una comunidad unida <br />
          <span className="inline-block pb-2 px-1 text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-cyan-300 to-sky-400 animate-gradient-move">
            por la fe,
          </span>{' '}
          <br />
          movida por un <br />
          <span className="inline-block pb-2 px-1 text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 animate-gradient-move">
            propósito.
          </span>
        </h1>

        {/* Subtítulo Inspirador */}
        <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed drop-shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out fill-mode-backwards">
          Descubre un espacio para crecer espiritualmente, conectar en familia y transformar vidas a
          través del amor de Dios.
        </p>

        {/* ===================================================================== */}
        {/* 3.1 BOTONES DE ACCIÓN EQUILIBRADOS                                   */}
        {/* ===================================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 ease-out fill-mode-backwards">
          {/* Botón Principal */}
          <Button
            variant="default"
            className="w-full sm:w-64 h-13 text-base font-bold rounded-xl bg-white text-[#1B428F] hover:bg-[#1B428F] hover:text-white shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 active:scale-95 group"
            asChild
          >
            <a
              href="#visitanos"
              className="flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Planear tu visita</span>
              <ChevronsRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Botón Secundario */}
          <Button
            variant="glass"
            className="w-full sm:w-64 h-13 text-base font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 backdrop-blur-md hover:scale-[1.03] transition-all duration-300 active:scale-95"
            asChild
          >
            <a href="#eventos" className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span>Eventos y anuncios</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
