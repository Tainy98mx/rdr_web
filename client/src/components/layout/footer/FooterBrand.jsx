/* ========================================================================= */
/* COLUMNA 1: IDENTIDAD INSTITUCIONAL Y REDES SOCIALES                       */
/* ========================================================================= */
import { footerSocialLinks } from '@/data/footerData';
import logoCorona from '@/assets/rdr_logo_corona.svg';
import logoTexto from '@/assets/rdr_logo_texto.svg';

export default function FooterBrand() {
  return (
    <div className="lg:col-span-4 space-y-6 text-left">
      <a
        href="#"
        className="flex items-center gap-3 transition-transform duration-300 hover:scale-103"
      >
        <img src={logoCorona} alt="Corona RDR" className="h-10 w-auto brightness-0 invert" />
        <img src={logoTexto} alt="Rey de Reyes" className="h-7 w-auto brightness-0 invert" />
      </a>
      <p className="text-sm font-medium leading-relaxed text-white/60">
        Somos una iglesia cristiana comprometida con llevar el amor, la esperanza y el mensaje
        transformador de Jesús a cada rincón del mundo. Ven a formar parte de nuestra familia.
      </p>
      <div className="flex items-center gap-4">
        {footerSocialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B428F] hover:text-white transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
