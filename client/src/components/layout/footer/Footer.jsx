/* ========================================================================= */
/* CONTENEDOR PRINCIPAL: FOOTER                                              */
/* ========================================================================= */
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';

export default function Footer() {
  return (
    <footer className="bg-black text-white/85 pt-20 pb-10 w-full border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Rejilla de 4 columnas modulares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
          <FooterNewsletter />
        </div>

        {/* Línea final de Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/40">
          <p>
            © {new Date().getFullYear()} Iglesia Rey de Reyes para las Naciones. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-all">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-all">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
