/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { Mail, Phone, MapPin, Heart, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logoCorona from '../../assets/logo_corona.svg';
import logoTexto from '../../assets/logo_texto.svg';

export default function Footer() {
  return (
    /* ===================================================================== */
    /* 2. CONTENEDOR PRINCIPAL - DISEÑO TRICOLOR COMPLETO                    */
    /* ===================================================================== */
    <footer className="bg-black text-white/85 pt-20 pb-10 w-full border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Rejilla principal asimétrica: 4 columnas con anchos diferenciados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* ===================================================================== */}
          {/* 3. COLUMNA 1: MARCA Y DESCRIPCIÓN (4 Columnas)                         */}
          {/* ===================================================================== */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <a href="#" className="flex items-center gap-3 transition-transform duration-300 hover:scale-103">
              <img src={logoCorona} alt="Corona RDR" className="h-10 w-auto brightness-0 invert" />
              <img src={logoTexto} alt="Rey de Reyes" className="h-7 w-auto brightness-0 invert" />
            </a>
            <p className="text-sm font-medium leading-relaxed text-white/60">
              Somos una iglesia cristiana comprometida con llevar el amor, la esperanza y el mensaje transformador de Jesús a cada rincón del mundo. Ven a formar parte de nuestra familia.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B428F] hover:text-white transition-all">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B428F] hover:text-white transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B428F] hover:text-white transition-all">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 4. COLUMNA 2: ENLACES RÁPIDOS (2 Columnas)                           */}
          {/* ===================================================================== */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li><a href="#" className="hover:text-white hover:underline transition-all">Nosotros</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Visítanos</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Crecimiento</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Comunidad RDR</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Eventos</a></li>
              <li><a href="#donar" className="hover:text-white hover:underline transition-all flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 fill-[#1B428F] text-[#1B428F]" /> Donar</a></li>
            </ul>
          </div>

          {/* ===================================================================== */}
          {/* 5. COLUMNA 3: CONTACTO E INFORMACIÓN (3 Columnas)                    */}
          {/* ===================================================================== */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Contáctanos
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1B428F] shrink-0 mt-0.5" />
                <span className="text-white/60 font-medium">Av. Principal #123, Central, Ciudad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1B428F] shrink-0" />
                <span className="text-white/60 font-medium">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1B428F] shrink-0" />
                <span className="text-white/60 font-medium">contacto@iglesiardr.org</span>
              </li>
            </ul>
          </div>

          {/* ===================================================================== */}
          {/* 6. COLUMNA 4: BOLETÍN INFORMATIVO (3 Columnas)                       */}
          {/* ===================================================================== */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Suscríbete
            </h4>
            <p className="text-xs sm:text-sm font-medium text-white/60 leading-relaxed">
              Recibe resúmenes de sermones, eventos e historias inspiradoras directamente en tu correo electrónico.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
              <input 
                type="email" 
                placeholder="Tu correo" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:border-[#1B428F] text-white font-medium"
              />
              <button 
                type="submit" 
                className="p-2.5 rounded-xl bg-[#1B428F] hover:bg-white hover:text-black transition-all flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 7. LÍNEA FINAL DE COPYRIGHT Y CRÉDITOS                                */}
        {/* ===================================================================== */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/40">
          <p>© {new Date().getFullYear()} Iglesia Rey de Reyes para las Naciones. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-all">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-all">Términos de Servicio</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
