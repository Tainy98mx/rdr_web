import { useState, useEffect, useRef } from 'react';
import MenuDesk from './MenuDesk';
import MenuMobile from './MenuMobile';
import logoCorona from '@/assets/rdr_logo_corona.svg';
import logoTexto from '@/assets/rdr_logo_texto.svg';

export default function Header() {
  const [scrollState, setScrollState] = useState({
    isScrolledHero: false,
    isPassedHero: false,
  });
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  const heroTransitionPointRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isHomePage =
    !currentHash || currentHash === '#' || currentHash === '#donar' || currentHash === '#hero';

  useEffect(() => {
    const updateHeroTransitionPoint = () => {
      const windowHeight = window.innerHeight || 800;
      const HEADER_HEIGHT = 75;
      heroTransitionPointRef.current = Math.max(100, windowHeight - HEADER_HEIGHT * 1.5);
    };

    updateHeroTransitionPoint();
    window.addEventListener('resize', updateHeroTransitionPoint, { passive: true });

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY);
          const newIsScrolledHero = currentScrollY > 10;
          const newIsPassedHero = currentScrollY >= heroTransitionPointRef.current;

          setScrollState((prev) => {
            if (
              prev.isScrolledHero !== newIsScrolledHero ||
              prev.isPassedHero !== newIsPassedHero
            ) {
              return {
                isScrolledHero: newIsScrolledHero,
                isPassedHero: newIsPassedHero,
              };
            }
            return prev;
          });

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', updateHeroTransitionPoint);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const videoElement = document.querySelector('video');

    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
      if (videoElement) videoElement.pause();
    } else {
      document.body.style.overflow = 'unset';
      if (videoElement) videoElement.play().catch(() => {});
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSheetOpen]);

  const showGlass = isHomePage && scrollState.isScrolledHero && !scrollState.isPassedHero;
  const showSolid = !isHomePage || scrollState.isPassedHero;
  const isCompact = !isHomePage || scrollState.isPassedHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ease-out transform-gpu ${
        isCompact ? 'h-16 sm:h-17 lg:h-18' : 'h-18 sm:h-19 lg:h-20'
      }`}
    >
      {/* Animación global única para el botón de donar */}
      <style>{`
        @keyframes rdrHeartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.15); }
          28% { transform: scale(1); }
          42% { transform: scale(1.15); }
          70% { transform: scale(1); }
        }
        .animate-rdr-heartbeat {
          animation: rdrHeartbeat 1.8s infinite ease-in-out;
        }
      `}</style>

      {/* Capa 1: Menos transparente en móvil (bg-black/75) y translúcido en desktop */}
      <div
        className={`absolute inset-0 bg-black/75 xl:bg-black/25 xl:backdrop-blur-md transition-opacity duration-300 ease-out -z-10 pointer-events-none ${
          showGlass ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Capa 2: Azul Noche Sólido Institucional */}
      <div
        className={`absolute inset-0 bg-[#0B1528]/95 border-b border-blue-500/15 shadow-md transition-opacity duration-300 ease-out -z-10 pointer-events-none ${
          showSolid ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Contenedor principal */}
      <div className="h-full w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3 lg:gap-8">
        {/* Logos institucionales */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 shrink-0 transition-transform duration-200 hover:scale-102"
        >
          <img
            src={logoCorona}
            alt="Corona RDR"
            className={`w-auto object-contain brightness-0 invert shrink-0 transition-all duration-300 ease-out transform-gpu ${
              isCompact ? 'h-6 sm:h-7.5 lg:h-9' : 'h-7 sm:h-8.5 lg:h-10'
            }`}
          />
          <img
            src={logoTexto}
            alt="Rey de Reyes para las Naciones"
            className={`w-auto object-contain brightness-0 invert shrink-0 transition-all duration-300 ease-out transform-gpu ${
              isCompact ? 'h-5.5 sm:h-6 lg:h-7' : 'h-6.5 sm:h-7 lg:h-8'
            }`}
          />
        </a>

        {/* Módulos de Navegación */}
        <MenuDesk currentHash={currentHash} />
        <MenuMobile
          isOpen={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          isScrolled={isCompact}
          currentHash={currentHash}
          logoCorona={logoCorona}
          logoTexto={logoTexto}
        />
      </div>
    </header>
  );
}
