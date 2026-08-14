/* ========================================================================= */
/* COLUMNA 4: FORMULARIO DE BOLETÍN INFORMATIVO                              */
/* ========================================================================= */
import { Send } from 'lucide-react';

export default function FooterNewsletter() {
  return (
    <div className="lg:col-span-3 space-y-4 text-left">
      <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Suscríbete</h4>
      <p className="text-xs sm:text-sm font-medium text-white/60 leading-relaxed">
        Recibe resúmenes de sermones, eventos e historias inspiradoras directamente en tu correo
        electrónico.
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
        <input
          type="email"
          placeholder="Tu correo"
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:border-[#1B428F] text-white font-medium"
        />
        <button
          type="submit"
          aria-label="Enviar suscripción"
          className="p-2.5 rounded-xl bg-[#1B428F] hover:bg-white hover:text-black transition-all flex items-center justify-center shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
