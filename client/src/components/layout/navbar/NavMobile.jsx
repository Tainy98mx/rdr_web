/* ========================================================================= */
/* MENÚ DE NAVEGACIÓN MÓVIL (DEGRADADO COMPLETO + MÁXIMA FLUIDEZ)            */
/* ========================================================================= */
import { Menu, Heart, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { menuStructure, socialLinks } from '@/data/navData';
import logoCorona from '@/assets/rdr_logo_corona.svg';
import logoTexto from '@/assets/rdr_logo_texto.svg';

export default function NavMobile({ isOpen, onOpenChange }) {
  return (
    <div className="lg:hidden flex items-center gap-3">
      {/* Botón Donar Móvil en la barra superior */}
      <Button
        asChild
        size="sm"
        className="bg-white text-[#1B428F] hover:bg-gray-100 font-bold px-3.5 py-1.5 h-8 rounded-xl text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <a href="#donar">
          <Heart className="w-3 h-3 fill-[#1B428F] text-[#1B428F]" />
          <span>Donar</span>
        </a>
      </Button>

      {/* Cajón desplegable Sheet */}
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menú"
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full sm:max-w-sm bg-linear-to-b from-[#1B428F] via-[#153574] to-[#0D1F42] text-white border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto [&>button]:hidden transform-gpu duration-200"
        >
          <SheetTitle className="sr-only">Menú</SheetTitle>

          <div>
            {/* Encabezado: Logos + Botón X */}
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

              <SheetClose asChild>
                <button
                  aria-label="Cerrar menú"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-transform active:scale-95 shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </SheetClose>
            </div>

            {/* Título de Navegación */}
            <h3 className="text-center text-lg sm:text-xl font-black text-white uppercase tracking-wider py-2">
              Menú de Navegación
            </h3>

            {/* Acordeón de Secciones */}
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
                        onClick={() => onOpenChange(false)}
                        className="block rounded-xl px-3.5 py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-white hover:text-[#1B428F] active:bg-white active:text-[#1B428F]"
                      >
                        {subitem}
                      </a>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Pie del menú móvil */}
          <div className="pt-6 border-t border-white/15 mt-6 space-y-5">
            {/* Redes Sociales */}
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
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#1B428F] flex items-center justify-center text-white text-lg transition-colors border border-white/15"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            {/* Botón Donar Móvil */}
            <a
              href="#donar"
              onClick={() => onOpenChange(false)}
              className="w-full bg-white text-[#1B428F] font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-base shadow-md transition-transform active:scale-95 hover:bg-gray-100"
            >
              <Heart className="w-5 h-5 fill-[#1B428F] text-[#1B428F]" />
              <span>Realizar una Donación</span>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
