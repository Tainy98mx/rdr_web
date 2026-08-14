/* ========================================================================= */
/* CONTENEDOR PRINCIPAL: NAVBAR (OPTIMIZADO PARA MÓVIL Y GPU)                */
/* ========================================================================= */
import { useState, useEffect, useRef } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import logoCorona from '@/assets/rdr_logo_corona.svg';
import logoTexto from '@/assets/rdr_logo_texto.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  /* Control de visibilidad con requestAnimationFrame (cero lag al hacer scroll) */
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const heroHeight = window.innerHeight - 80;

          setIsScrolled(currentScrollY > heroHeight);

          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Control de video y bloqueo de scroll al abrir menú */
  useEffect(() => {
    const videoElement = document.querySelector('video');

    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
      if (videoElement) {
        videoElement.pause();
      }
    } else {
      document.body.style.overflow = 'unset';
      if (videoElement) {
        videoElement.play().catch(() => {});
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSheetOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-transform duration-300 transform-gpu flex items-center ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'h-18 shadow-md' : 'h-20'}`}
    >
      {/* Capa de fondo con degradado y transición sutil */}
      <div
        className={`absolute inset-0 bg-linear-to-r from-[#1B428F] via-[#153574] to-[#0D1F42] transition-opacity duration-500 ease-out -z-10 pointer-events-none ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="w-full px-6 sm:px-12 flex items-center justify-between">
        {/* Logos principales */}
        <a
          href="#"
          className="flex items-center gap-3 py-1 transition-transform duration-200 hover:scale-102"
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
