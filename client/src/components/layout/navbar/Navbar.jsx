/* ========================================================================= */
/* CONTENEDOR PRINCIPAL: NAVBAR                                              */
/* ========================================================================= */
import { useState, useEffect } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import logoCorona from '@/assets/rdr_logo_corona.svg';
import logoTexto from '@/assets/rdr_logo_texto.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  /* Control de visibilidad de barra al hacer scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight - 80;

      if (currentScrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  /* Control de GPU del video y bloqueo de scroll */
  useEffect(() => {
    const videoElement = document.querySelector('video');

    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
      if (videoElement) {
        videoElement.pause();
        videoElement.style.display = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      if (videoElement) {
        videoElement.style.display = 'block';
        videoElement.play().catch(() => {});
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (videoElement) {
        videoElement.style.display = 'block';
      }
    };
  }, [isSheetOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-500 transform-gpu flex items-center ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'h-18 shadow-lg' : 'h-20 shadow-none'}`}
    >
      {/* CAPA DE FONDO CON TRANSICIÓN SUTIL DE OPACIDAD */}
      <div
        className={`absolute inset-0 bg-linear-to-r from-[#1B428F] via-[#153574] to-[#0D1F42] transition-opacity duration-700 ease-in-out -z-10 pointer-events-none ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Animación global de latido */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.10); }
          28% { transform: scale(1); }
          42% { transform: scale(1.10); }
          70% { transform: scale(1); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.8s infinite ease-in-out;
        }
      `}</style>

      <div className="w-full px-6 sm:px-12 flex items-center justify-between">
        {/* Logos principales */}
        <a
          href="#"
          className="flex items-center gap-3 py-1 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logoCorona}
            alt="Corona RDR"
            className={`w-auto object-contain brightness-0 invert transition-all duration-300 ${
              isScrolled ? 'h-9 sm:h-12' : 'h-11 sm:h-13'
            }`}
          />
          <img
            src={logoTexto}
            alt="Rey de Reyes para las Naciones"
            className={`w-auto object-contain brightness-0 invert transition-all duration-300 ${
              isScrolled ? 'h-7 sm:h-9' : 'h-8 sm:h-10'
            }`}
          />
        </a>

        {/* Módulos hijos */}
        <NavDesktop />
        <NavMobile isOpen={isSheetOpen} onOpenChange={setIsSheetOpen} />
      </div>
    </header>
  );
}
