import { useState } from 'react';
import { Menu, Heart, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { menuStructure, socialLinks, getSlug, getActiveCategory } from '@/data/navData';

export default function MenuMobile({
  isOpen,
  onOpenChange,
  isScrolled,
  currentHash,
  logoCorona,
  logoTexto,
}) {
  const activeCategory = getActiveCategory(currentHash);
  const currentCleanHash = (currentHash || '').replace('#', '');

  const activeCategoryIndex = menuStructure.findIndex((m) => m.title === activeCategory);
  const defaultAccordionValue =
    activeCategoryIndex !== -1 ? `item-${activeCategoryIndex}` : undefined;

  const [openAccordion, setOpenAccordion] = useState(defaultAccordionValue);

  return (
    <div className="xl:hidden flex items-center gap-2.5">
      {/* Botón Donar Móvil con altura más discreta */}
      <Button
        asChild
        className={`bg-white text-[#1B428F] hover:bg-slate-100 font-bold rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all transform-gpu will-change-transform border-none! shadow-none! ring-0! outline-none! p-0 shrink-0 ${
          isScrolled ? 'h-8 px-2.5 text-xs' : 'h-8.5 px-3 text-xs'
        }`}
      >
        <a href="#donar" className="flex items-center justify-center">
          <Heart
            className={`fill-[#1B428F] text-[#1B428F] animate-rdr-heartbeat transform-gpu will-change-transform shrink-0 ${
              isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'
            }`}
          />
          <span>Donar</span>
        </a>
      </Button>

      {/* Cajón lateral Sheet */}
      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          if (open) {
            setOpenAccordion(defaultAccordionValue);
          }
          onOpenChange(open);
        }}
      >
        {/* Botón Hamburguesa */}
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menú"
            className={`rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 flex items-center justify-center text-white active:scale-95 transition-all duration-150 shadow-sm cursor-pointer shrink-0 transform-gpu will-change-transform ${
              isScrolled ? 'w-9 h-9' : 'w-10 h-10'
            }`}
          >
            <Menu className={isScrolled ? 'w-5 h-5' : 'w-6 h-6'} />
          </button>
        </SheetTrigger>

        {/* Panel lateral: Fondo azul sólido institucional */}
        <SheetContent
          side="right"
          className="w-full sm:max-w-sm bg-[#0B1528]! text-white border-0! shadow-2xl! ring-0! outline-none! p-6 flex flex-col h-full overflow-hidden [&>button]:hidden transform-gpu will-change-transform"
        >
          <SheetTitle className="sr-only">Menú</SheetTitle>

          {/* Encabezado: Logos y botón X con alineación vertical exacta */}
          <div className="shrink-0 border-b border-white/10 pb-3 mb-2 flex items-center justify-between gap-3 h-12">
            <a
              href="#"
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-2 h-9 active:scale-95 transition-transform duration-150 transform-gpu"
              aria-label="Ir al inicio"
            >
              <img
                src={logoCorona}
                alt="Corona RDR"
                className="h-8.5 sm:h-9.5 w-auto object-contain brightness-0 invert shrink-0 block"
                loading="eager"
              />
              <img
                src={logoTexto}
                alt="Rey de Reyes"
                className="h-6.5 sm:h-7.5 w-auto object-contain brightness-0 invert shrink-0 block"
                loading="eager"
              />
            </a>

            <SheetClose asChild>
              <button
                aria-label="Cerrar menú"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 flex items-center justify-center text-white active:scale-95 transition-all duration-150 shadow-sm cursor-pointer shrink-0 transform-gpu will-change-transform"
              >
                <X className="w-5 h-5 block" />
              </button>
            </SheetClose>
          </div>

          {/* Navegación por Acordeón */}
          <div
            className="flex-1 overflow-y-auto min-h-0 pt-1 pb-2 no-scrollbar pr-1"
            style={{ WebkitOverflowScrolling: 'touch', contain: 'content' }}
          >
            <h3 className="text-left text-xs font-bold text-blue-300/80 uppercase tracking-widest pt-1 pb-2">
              Navegación
            </h3>

            <Accordion
              type="single"
              collapsible
              value={openAccordion}
              onValueChange={setOpenAccordion}
              className="w-full"
            >
              {menuStructure.map((menu, index) => {
                const itemKey = `item-${index}`;
                const isActiveParent = menu.title === activeCategory;

                return (
                  <AccordionItem
                    key={index}
                    value={itemKey}
                    className="border-b border-white/10 last:border-b-0 py-2.5"
                  >
                    <AccordionTrigger
                      className={`relative overflow-hidden text-base hover:no-underline py-2.5! px-3.5 rounded-xl transition-all duration-150 ${
                        isActiveParent
                          ? "text-white font-extrabold bg-white/8 border border-white/10 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#1B428F] before:rounded-l-xl shadow-xs"
                          : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent font-semibold'
                      }`}
                    >
                      {menu.title}
                    </AccordionTrigger>

                    <AccordionContent className="pl-3 pb-1 pt-2.5 flex flex-col gap-0.5">
                      {menu.subitems.map((subitem, subIndex) => {
                        const subSlug = getSlug(subitem);
                        const isSubActive = currentCleanHash === subSlug;

                        return (
                          <a
                            key={subIndex}
                            href={`#${subSlug}`}
                            onClick={() => onOpenChange(false)}
                            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm no-underline transition-colors duration-150 ${
                              isSubActive
                                ? 'text-white font-extrabold'
                                : 'text-slate-400 hover:text-white hover:bg-white/5 font-medium'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 shrink-0 ${
                                isSubActive ? 'bg-[#1B428F]' : 'bg-slate-500'
                              }`}
                            />
                            <span>{subitem}</span>
                          </a>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Pie de acciones móvil */}
          <div className="shrink-0 pt-3.5 border-t border-white/10 mt-2 space-y-3.5">
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
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#1B428F] hover:text-white active:scale-95 flex items-center justify-center text-white border border-white/15 transition-all duration-150 shrink-0 transform-gpu will-change-transform"
                  >
                    <Icon className="text-xl shrink-0" />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2.5 w-full">
              <a
                href="https://wa.me/521234567890"
                target="_blank"
                rel="noreferrer"
                aria-label="Contacto por WhatsApp"
                className="flex-1 bg-[#25D366] text-white font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 hover:bg-[#20bd5a] transition-all duration-150 transform-gpu will-change-transform"
              >
                <FaWhatsapp className="w-5 h-5 text-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#donar"
                onClick={() => onOpenChange(false)}
                className="flex-1 bg-white text-[#1B428F] font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 hover:bg-slate-100 transition-all duration-150 border-0! transform-gpu will-change-transform"
              >
                <Heart className="w-5 h-5 fill-[#1B428F] text-[#1B428F] animate-rdr-heartbeat transform-gpu will-change-transform shrink-0" />
                <span>Donar</span>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
