/* ========================================================================= */
/* MENÚ DE NAVEGACIÓN ESCRITORIO (DESKTOP)                                   */
/* ========================================================================= */
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
import { menuStructure } from '@/data/navData';

export default function NavDesktop() {
  return (
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

      {/* Botón Donar Escritorio */}
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
  );
}
