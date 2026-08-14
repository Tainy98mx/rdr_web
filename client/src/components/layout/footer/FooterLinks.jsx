/* ========================================================================= */
/* COLUMNA 2: ENLACES RÁPIDOS DE NAVEGACIÓN                                  */
/* ========================================================================= */
import { Heart } from 'lucide-react';
import { quickLinks } from '@/data/footerData';

export default function FooterLinks() {
  return (
    <div className="lg:col-span-2 space-y-4 text-left">
      <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
        Enlaces rápidos
      </h4>
      <ul className="space-y-2 text-sm font-semibold">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-white hover:underline transition-all">
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#donar"
            className="hover:text-white hover:underline transition-all flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-[#1B428F] text-[#1B428F]" /> Donar
          </a>
        </li>
      </ul>
    </div>
  );
}
