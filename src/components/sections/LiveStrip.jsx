/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { useState, useEffect } from 'react';
import { Radio, ArrowRight, Clock } from 'lucide-react';

export default function LiveStrip() {
  const [isLive, setIsLive] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  /* ======================================================================= */
  /* 2. LÓGICA DE SIMULACIÓN EN VIVO & CUENTA REGRESIVA                     */
  /* ======================================================================= */
  useEffect(() => {
    const checkLiveStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 es Domingo
      const hours = now.getHours();
      
      if (day === 0 && hours >= 10 && hours < 13) {
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    };

    const updateCountdown = () => {
      const now = new Date();
      const nextSunday = new Date();
      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
      nextSunday.setHours(10, 0, 0, 0);

      if (now.getDay() === 0 && now.getHours() >= 10) {
        nextSunday.setDate(nextSunday.getDate() + 7);
      }

      const diff = nextSunday - now;
      
      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ dias, horas, minutos, segundos });
    };

    checkLiveStatus();
    updateCountdown();

    const interval = setInterval(() => {
      checkLiveStatus();
      updateCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    /* ===================================================================== */
    /* 3. ESTRUCTURA VISUAL (Color Sólido Azul RDR #1B428F)                  */
    /* ===================================================================== */
    <div className="w-full bg-[#1B428F] text-white py-4 px-6 md:px-12 flex items-center justify-between overflow-hidden relative z-20">
      
      {/* Overlay sutil de opacidad blanca */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* LADO IZQUIERDO: ESTADO / CONTADOR */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          {isLive ? (
            /* ESTADO EN VIVO ACTIVO */
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">
                <Radio className="w-3.5 h-3.5" /> En Vivo
              </span>
              <p className="text-sm font-extrabold tracking-wide">
                ¡Estamos transmitiendo ahora! Acompáñanos en la Reunión Dominical.
              </p>
            </div>
          ) : (
            /* CUENTA REGRESIVA PARA EL PRÓXIMO SERVICIO */
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-1 bg-black/20 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-3.5 h-3.5" /> Próxima Reunión
              </span>
              
              {/* Temporizador */}
              <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-extrabold tracking-wide">
                <span>{String(timeLeft.dias).padStart(2, '0')}d</span> :
                <span>{String(timeLeft.horas).padStart(2, '0')}h</span> :
                <span>{String(timeLeft.minutos).padStart(2, '0')}m</span> :
                <span className="text-white/80">{String(timeLeft.segundos).padStart(2, '0')}s</span>
              </div>
              
              <p className="text-xs sm:text-sm font-medium text-white/90">
                Domingo 10:00 AM (Presencial & Online)
              </p>
            </div>
          )}
        </div>

        {/* LADO DERECHO: LLAMADO A LA ACCIÓN (Esquema tricolor) */}
        <div className="w-full sm:w-auto">
          <a
            href={isLive ? "#escucharnos" : "#visitanos"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1B428F] hover:bg-black hover:text-white font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-black/10 group"
          >
            <span>{isLive ? "Ver Transmisión" : "Planear mi visita"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </div>
  );
}
