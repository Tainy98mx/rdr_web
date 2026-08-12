/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../../assets/video.mp4';

export default function Hero() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* Animación de entrada tras 0.8s */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  /* Configuración del bucle continuo de video (50s a 70s) */
  const startTime = 50;
  const endTime = 70;

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= endTime) {
      videoRef.current.currentTime = startTime;
    }
  };

  return (
    /* ===================================================================== */
    /* 2. CONTENEDOR PRINCIPAL PANTALLA COMPLETA                             */
    /* ===================================================================== */
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 overflow-hidden font-sans">
      
      {/* =================================================================== */}
      {/* 2.1 VIDEO DE FONDO Y FILTRO ATMOSFÉRICO                             */}
      {/* =================================================================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Degradado profesional para máximo contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
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
      {/* 3. CONTENIDO PRINCIPAL CON ENTRADA ESCALONADA                         */}
      {/* ===================================================================== */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center flex flex-col items-center">
        
        {/* Título Principal Monumental con Degradado Animado */}
        <h1 
          className={`text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.08] drop-shadow-xl transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Una comunidad unida <br />
          <span className="inline-block pb-2 px-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-300 to-sky-400 animate-gradient-move">
            por la fe,
          </span> <br />
          movida por un mismo<br />
          <span className="inline-block pb-2 px-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 animate-gradient-move">
            propósito.
          </span>
        </h1>

        {/* Subtítulo Inspirador */}
        <p 
          className={`mt-6 text-base sm:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed drop-shadow-sm transition-all duration-1000 delay-200 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Descubre un espacio para crecer espiritualmente, conectar en familia y transformar vidas a través del amor de Dios.
        </p>

        {/* ===================================================================== */}
        {/* 3.1 BOTONES DE ACCIÓN SIMÉTRICOS                                      */}
        {/* ===================================================================== */}
        <div 
          className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto max-w-lg transition-all duration-1000 delay-400 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Botón Principal: Blanco -> Azul oficial RDR en Hover */}
          <a
            href="#visitanos"
            className="w-full sm:w-60 bg-white text-[#1B428F] hover:bg-[#1B428F] hover:text-white font-extrabold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-xl hover:shadow-[#1B428F]/50 hover:scale-105 active:scale-95 group"
          >
            <span>Planear tu Visita</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Botón Secundario: Glassmorphism con Borde Sólido Limpio */}
          <a
            href="#eventos"
            className="w-full sm:w-60 bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/50 font-extrabold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center text-xs uppercase tracking-widest backdrop-blur-md shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Eventos y Anuncios</span>
          </a>
        </div>

      </div>
    </section>
  );
}