/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import logoCorona from '../../assets/logo_corona.svg';
import logoTexto from '../../assets/logo_texto.svg';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

export default function Navbar() {
  /* ======================================================================= */
  /* 2. ESTADOS Y LÓGICA DE SCROLL (DETECCIÓN DE ALTURA COMPLETA)            */
  /* ======================================================================= */
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /* Activa el fondo azul solo al superar la altura de la pantalla menos el alto de la barra */
      const heroHeight = window.innerHeight - 80;
      if (window.scrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    /* ===================================================================== */
    /* 4. CONTENEDOR PRINCIPAL (HEADER)                                      */
    /* ===================================================================== */
    <header
      className={`fixed top-0 left-0 right-0 z-900 text-white transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1B428F] shadow-md h-72px flex items-center'
          : 'bg-transparent h-20 flex items-center'
      }`}
    >
      <div className="w-full px-6 sm:px-12 flex items-center justify-between">
        {/* ===================================================================== */}
        {/* 4.1 LOGO OFICIAL (ESCALA DINÁMICA SEGÚN EL SCROLL)                   */}
        {/* ===================================================================== */}
        <a
          href="#"
          className="flex items-center gap-3 py-1 transition-transform duration-300 hover:scale-105"
        >
          {/* Corona */}
          <img
            src={logoCorona}
            alt="Corona RDR"
            className={`w-auto object-contain brightness-0 invert transition-all duration-300 ${
              isScrolled ? 'h-9 sm:h-12' : 'h-11 sm:h-13'
            }`}
          />

          {/* Texto de la marca */}
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
                  <NavigationMenuTrigger
                    className={`text-white hover:text-white bg-transparent relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-2px after:bg-white after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 after:transition-transform after:duration-300 origin-left ${
                      isScrolled
                        ? 'hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent'
                        : 'hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10'
                    }`}
                  >
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

          {/* ===================================================================== */}
          {/* 4.3 BOTÓN DESTACADO (DONAR)                                           */}
          {/* ===================================================================== */}
          <a
            href="#donar"
            className="bg-white text-[#1B428F] hover:bg-gray-100 font-bold px-5 py-2 rounded-full shadow-sm text-sm tracking-wide transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Heart className="w-4 h-4 fill-[#1B428F]" />
            <span>Donar</span>
          </a>
        </div>

        {/* ===================================================================== */}
        {/* 4.4 BOTÓN Y CONTROLES PARA DISPOSITIVOS MÓVILES                        */}
        {/* ===================================================================== */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="#donar"
            className="bg-white text-[#1B428F] font-bold px-3 py-1.5 rounded-full text-xs flex items-center gap-1"
          >
            <span>Donar</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. MENÚ DESPLEGABLE MÓVIL                                                 */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1B428F] shadow-xl border-t border-white/10 px-6 py-5 max-h-[80vh] overflow-y-auto">
          {menuStructure.map((menu, index) => (
            <div key={index} className="py-3 border-b border-white/10">
              <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                {menu.title}
              </p>
              <div className="pl-3 space-y-2">
                {menu.subitems.map((subitem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block text-sm font-bold text-white hover:underline"
                  >
                    {subitem}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
