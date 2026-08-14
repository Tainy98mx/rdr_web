/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { ChevronsRight } from 'lucide-react';
import heroVideo from '@/assets/rdr_video.mp4';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    /* ===================================================================== */
    /* 2. CONTENEDOR PRINCIPAL PANTALLA COMPLETA                             */
    /* ===================================================================== */
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 overflow-hidden font-sans transform-gpu">
      {/* =================================================================== */}
      {/* 2.1 VIDEO DE FONDO OPTIMIZADO Y CAPA DE CONTRASTE                   */}
      {/* =================================================================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center transform-gpu"
        />

        {/* Degradado para garantizar legibilidad */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      </div>

      {/* ===================================================================== */}
      {/* 3. CONTENIDO PRINCIPAL (OPTIMIZADO PARA GPU)                         */}
      {/* ===================================================================== */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center flex flex-col items-center">
        {/* Título Principal con Degradado Estático Limpio */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.08] drop-shadow-xl animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
          Una comunidad unida <br />
          <span className="inline-block pb-2 px-1 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-sky-400">
            por la fe,
          </span>{' '}
          <br />
          movida por un <br />
          <span className="inline-block pb-2 px-1 text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500">
            propósito.
          </span>
        </h1>

        {/* Subtítulo Inspirador */}
        <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 ease-out fill-mode-backwards">
          Descubre un espacio para crecer espiritualmente, conectar en familia y transformar vidas a
          través del amor de Dios.
        </p>

        {/* ===================================================================== */}
        {/* 3.1 BOTONES DE ACCIÓN FLUIDOS                                        */}
        {/* ===================================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 ease-out fill-mode-backwards">
          {/* Botón Principal */}
          <Button
            variant="default"
            className="w-full sm:w-64 h-13 text-base font-bold rounded-xl bg-white text-[#1B428F] hover:bg-[#1B428F] hover:text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-200 active:scale-95 group"
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

          {/* Botón Secundario (Sin backdrop-blur para evitar sobrecarga en móvil) */}
          <Button
            variant="ghost"
            className="w-full sm:w-64 h-13 text-base font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 hover:scale-[1.02] transition-transform duration-200 active:scale-95"
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
