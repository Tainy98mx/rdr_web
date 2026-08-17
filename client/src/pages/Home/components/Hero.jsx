import { ChevronsRight } from 'lucide-react';
import heroVideo from '@/assets/rdr_video.mp4';
import { Button } from '@/components/ui/button';
import { AuroraText } from '@/components/ui/AuroraText';

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh pt-28 pb-16 flex items-center justify-center bg-[#070D18] overflow-hidden font-sans transform-gpu">
      {/* Video de Fondo optimizado con capa de contraste */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none transform-gpu">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center transform-gpu scale-105"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        />

        {/* Degradado para máxima legibilidad */}
        <div className="absolute inset-0 bg-linear-to-b from-[#070D18]/85 via-[#070D18]/65 to-[#070D18]/95" />
      </div>

      {/* Contenido Principal */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10 text-center flex flex-col items-center">
        {/* Título en 4 líneas independientes en móvil y desktop con efecto Aurora */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] drop-shadow-xl animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
          <span className="block">Una comunidad unida</span>
          <span className="block pb-1">
            <AuroraText>por la fe,</AuroraText>
          </span>
          <span className="block">movida por un</span>
          <span className="block pb-1">
            <AuroraText>propósito.</AuroraText>
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-slate-200/90 max-w-2xl font-normal sm:font-medium leading-relaxed drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 ease-out fill-mode-backwards">
          Descubre un espacio para crecer espiritualmente, conectar en familia y transformar vidas a
          través del amor de Dios.
        </p>

        {/* Botones de Acción */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 ease-out fill-mode-backwards">
          {/* Botón Principal */}
          <Button
            asChild
            className="w-full sm:w-60 h-12 text-sm sm:text-base font-extrabold rounded-xl bg-white text-[#1B428F] hover:bg-[#1B428F] hover:text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 group border-0"
          >
            <a
              href="#visitanos"
              className="flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Planear tu visita</span>
              <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Botón Secundario */}
          <Button
            asChild
            variant="ghost"
            className="w-full sm:w-60 h-12 text-sm sm:text-base font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/50 hover:scale-[1.02] active:scale-95 transition-all duration-200"
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
