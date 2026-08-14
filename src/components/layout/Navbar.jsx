/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { useState, useEffect } from 'react';
import { Menu, Heart, X } from 'lucide-react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTiktok, FaSoundcloud } from 'react-icons/fa';
import logoCorona from '../../assets/rdr_logo_corona.svg';
import logoTexto from '../../assets/rdr_logo_texto.svg';

/* Componentes de Shadcn UI */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';

export default function Navbar() {
  /* ======================================================================= */
  /* 2. ESTADOS Y LÓGICA DE SCROLL (DIRECCIÓN Y ALTURA)                       */
  /* ======================================================================= */
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight - 80;

      /* Cambia fondo a azul solo al salir del Hero */
      if (currentScrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      /* Oculta al bajar y muestra al subir */
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  /* ======================================================================= */
  /* 3. ESTRUCTURA DEL MENÚ DE NAVEGACIÓN                                   */
  /* ======================================================================= */
  const menuStructure = [
    {
      title: 'Nosotros',
      subitems: ['Quiénes Somos'],
    },
    {
      title: 'Visítanos',
      subitems: [
        'Sedes y Horarios',
        'Escríbenos',
        'Teléfonos',
        'Dónde Escucharnos',
        'Redes Sociales',
      ],
    },
    {
      title: 'Crecimiento',
      subitems: ['Conoce a Dios', 'Retiro Espiritual', 'Discipulado', 'Recursos Espirituales'],
    },
    {
      title: 'Comunidad RDR',
      subitems: ['Sé un Servidor', 'Formularios', 'Escuela de Música', 'Escuela de Padres e Hijos'],
    },
    {
      title: 'Eventos',
      subitems: ['Al Día', 'Invasión del Amor', 'Próximos Eventos'],
    },
  ];

  /* Redes sociales para el pie del menú móvil */
  const socialLinks = [
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
    { icon: FaSoundcloud, href: 'https://soundcloud.com', label: 'SoundCloud' },
  ];

  return (
    /* ===================================================================== */
    /* 4. CONTENEDOR PRINCIPAL (HEADER)                                      */
    /* ===================================================================== */
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#1B428F] shadow-md h-18 flex items-center'
          : 'bg-transparent h-20 flex items-center'
      }`}
    >
      <div className="w-full px-6 sm:px-12 flex items-center justify-between">
        {/* ===================================================================== */}
        {/* 4.1 LOGO OFICIAL                                                      */}
        {/* ===================================================================== */}
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

        {/* ===================================================================== */}
        {/* 4.2 NAVEGACIÓN ESCRITORIO (DESKTOP)                                   */}
        {/* ===================================================================== */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {menuStructure.map((menu, index) => (
                <NavigationMenuItem key={index} className="relative">
                  <NavigationMenuTrigger className="text-white hover:text-white focus:text-white data-[state=open]:text-white bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 after:transition-transform after:duration-300 origin-left">
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-60 gap-1 p-2 bg-white rounded-xl shadow-xl">
                      {menu.subitems.map((subitem, subIndex) => (
                        <li key={subIndex}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none rounded-lg p-2.5 text-sm font-bold leading-none text-[#1B428F] no-underline outline-none transition-colors hover:bg-[#1B428F] hover:text-white focus:bg-[#1B428F] focus:text-white"
                            >
                              {subitem}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Animación de latido sutil en CSS */}
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

          {/* ===================================================================== */}
          {/* BOTÓN DONAR ESCRITORIO (ALINEADO A LA ALTURA h-9 DE LOS MENÚS)        */}
          {/* ===================================================================== */}
          <Button
            asChild
            className="bg-white text-[#1B428F] font-bold h-9 px-4 text-sm rounded-xl shadow-md hover:bg-white hover:text-[#1B428F] hover:shadow-lg hover:scale-[1.03] transition-all duration-300 active:scale-95 group border border-transparent"
          >
            <a href="#donar" className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-[#1B428F] text-[#1B428F] animate-heartbeat" />
              <span>Donar</span>
            </a>
          </Button>
        </div>

        {/* ===================================================================== */}
        {/* 4.3 CONTROLES MÓVILES Y COMPONENTE SHEET (SHADCN UI)                   */}
        {/* ===================================================================== */}
        <div className="lg:hidden flex items-center gap-3">
          {/* BOTÓN DONAR MÓVIL */}
          <Button
            asChild
            size="sm"
            className="bg-white text-[#1B428F] hover:bg-gray-100 font-bold px-3.5 py-1.5 h-8 rounded-xl text-xs flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <a href="#donar">
              <Heart className="w-3 h-3 fill-[#1B428F] text-[#1B428F]" />
              <span>Donar</span>
            </a>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menú"
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            {/* PANEL MÓVIL CON DEGRADADO AZUL PROFUNDO */}
            <SheetContent
              side="right"
              className="w-full sm:max-w-sm bg-linear-to-b from-[#1B428F] via-[#153574] to-[#0D1F42] text-white border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto [&>button]:hidden"
            >
              <SheetTitle className="sr-only">Menú</SheetTitle>

              <div>
                {/* ENCABEZADO: LOGOS CENTRADOS VERTICALMENTE CON EL BOTÓN 'X' */}
                <div className="border-b border-white/15 pb-4 mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={logoCorona}
                      alt="Corona RDR"
                      className="h-10 sm:h-11 w-auto object-contain brightness-0 invert"
                    />
                    <img
                      src={logoTexto}
                      alt="Rey de Reyes"
                      className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
                    />
                  </div>

                  {/* BOTÓN DE CIERRE EN RECUADRO REDONDEADO */}
                  <SheetClose asChild>
                    <button
                      aria-label="Cerrar menú"
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-200 active:scale-95 shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </SheetClose>
                </div>

                {/* ACORDEÓN MÓVIL (EXACTAMENTE TU ESTRUCTURA ORIGINAL) */}
                <Accordion type="single" collapsible className="w-full">
                  {menuStructure.map((menu, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-white/10"
                    >
                      <AccordionTrigger className="text-base font-bold text-white hover:no-underline py-3.5">
                        {menu.title}
                      </AccordionTrigger>
                      <AccordionContent className="pl-1 pb-3 pt-1 flex flex-col gap-1.5">
                        {menu.subitems.map((subitem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            onClick={() => setIsSheetOpen(false)}
                            className="block rounded-xl px-3.5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#1B428F] active:bg-white active:text-[#1B428F]"
                          >
                            {subitem}
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* PIE DEL MENÚ: REDES ARRIBA Y BOTÓN ABAJO */}
              <div className="pt-6 border-t border-white/15 mt-6 space-y-5">
                {/* REDES SOCIALES MÁS GRANDES */}
                <div className="flex items-center justify-center gap-3.5">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#1B428F] flex items-center justify-center text-white text-lg transition-all duration-300 active:scale-90 border border-white/15"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>

                {/* BOTÓN DONAR MÓVIL CON LATIDO */}
                <a
                  href="#donar"
                  onClick={() => setIsSheetOpen(false)}
                  className="w-full bg-white text-[#1B428F] font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-base shadow-lg transition-all active:scale-95 hover:bg-gray-100"
                >
                  <Heart className="w-5 h-5 fill-[#1B428F] text-[#1B428F] animate-heartbeat" />
                  <span>Realizar una Donación</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
