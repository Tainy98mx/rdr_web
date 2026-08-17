import { Heart } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { menuStructure, getSlug, getActiveCategory } from '@/data/navData';

export default function MenuDesk({ currentHash }) {
  const activeCategory = getActiveCategory(currentHash);
  const currentCleanHash = (currentHash || '').replace('#', '');

  return (
    <div className="hidden xl:flex items-center gap-3 shrink-0">
      <NavigationMenu className="shrink-0">
        <NavigationMenuList className="gap-1">
          {menuStructure.map((menu, index) => {
            const parentSlug = getSlug(menu.title);
            const isActiveParent = menu.title === activeCategory;

            return (
              <NavigationMenuItem key={index} className="relative shrink-0">
                {/* Botón con animación de barra expandiéndose desde el centro */}
                <NavigationMenuTrigger
                  onClick={() => {
                    window.location.hash = `#${parentSlug}`;
                  }}
                  className={`text-white group/trigger relative px-4 py-2 text-base whitespace-nowrap transition-colors duration-150 cursor-pointer rounded-xl hover:bg-white/10 data-[state=open]:bg-white/10 
                  after:content-[''] after:absolute after:bottom-0.5 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-white after:rounded-full after:origin-center after:transition-transform after:duration-200 after:ease-out
                  ${
                    isActiveParent
                      ? 'after:scale-x-100'
                      : 'after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100'
                  }`}
                >
                  {/* Reserva de ancho para evitar que el texto salte al cambiar a bold */}
                  <span className="inline-grid [grid-template-areas:'stack'] items-center justify-center">
                    <span className="[grid-area:stack] invisible font-bold pointer-events-none select-none">
                      {menu.title}
                    </span>
                    <span
                      className={`[grid-area:stack] transition-all duration-150 ${
                        isActiveParent
                          ? 'font-bold'
                          : 'font-medium group-hover/trigger:font-bold group-data-[state=open]/trigger:font-bold'
                      }`}
                    >
                      {menu.title}
                    </span>
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-transparent! p-0! border-0! shadow-none!">
                  {/* Flyout con texto normal por defecto y bold solo al seleccionar/hover */}
                  <ul className="grid w-60 gap-1 p-2 bg-white rounded-lg shadow-2xl border border-slate-200/80 text-slate-800">
                    {menu.subitems.map((subitem, subIndex) => {
                      const subSlug = getSlug(subitem);
                      const isSubActive = currentCleanHash === subSlug;

                      return (
                        <li key={subIndex}>
                          <NavigationMenuLink asChild>
                            <a
                              href={`#${subSlug}`}
                              className={`block select-none rounded-md p-2.5 text-[13.5px] leading-none no-underline outline-none transition-all duration-150 ${
                                isSubActive
                                  ? 'bg-[#1B428F]/18 text-[#122c60] font-bold'
                                  : 'text-slate-700 font-normal hover:bg-[#1B428F]/18 hover:text-[#122c60] hover:font-bold focus:bg-[#1B428F]/18 focus:text-[#122c60]'
                              }`}
                            >
                              {subitem}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botón Donar con escala suave al pasar el cursor */}
      <Button
        asChild
        className="bg-white text-[#1B428F] font-bold h-9 px-4 text-sm rounded-xl shadow-md hover:bg-slate-100 hover:scale-103 active:scale-95 transition-all duration-300 group border border-transparent shrink-0 transform-gpu"
      >
        <a href="#donar" className="flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 fill-[#1B428F] text-[#1B428F] animate-rdr-heartbeat transform-gpu will-change-transform shrink-0" />
          <span>Donar</span>
        </a>
      </Button>
    </div>
  );
}
