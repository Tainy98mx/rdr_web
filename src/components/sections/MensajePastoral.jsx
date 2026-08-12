/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { Quote, ArrowRight } from 'lucide-react';

export default function MensajePastoral() {
  return (
    /* ===================================================================== */
    /* 2. CONTENEDOR PRINCIPAL - DISEÑO TRICOLOR EXCLUSIVO                  */
    /* ===================================================================== */
    <section className="py-32 bg-white relative overflow-hidden w-full font-sans border-b border-black/10">
      
      {/* Elemento de fondo sutil (Opacidad de Azul) */}
      <div className="absolute top-[10%] left-[-5%] w-[35rem] h-[35rem] bg-[#1B428F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* ===================================================================== */}
          {/* 3. COLUMNA IZQUIERDA: CONTENEDOR EDITORIAL CON MARCO (5 Columnas)      */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-black/10 group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800" 
                alt="Pastores RDR" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>

            {/* Cita decorativa flotante */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-black text-white flex items-center justify-center shadow-2xl border-4 border-white">
              <Quote className="w-8 h-8 rotate-180 text-[#1B428F]" />
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 4. COLUMNA DERECHA: TEXTO EN GRAN ESCALA TIPOGRÁFICA (7 Columnas)     */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10 text-left">
            
            <div className="space-y-6">
              {/* Badge discreto */}
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#1B428F] rounded-full" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-black/50">Nuestra Filosofía</span>
              </div>

              {/* Título gigante y asimétrico (Gradiente permitido entre colores autorizados) */}
              <h2 className="text-4xl sm:text-6xl font-black text-black leading-[0.98] tracking-tighter">
                Construyendo <br />
                una iglesia <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#1B428F]">
                  que ama y sirve
                </span>.
              </h2>
            </div>

            {/* Texto de lectura fluida en 2 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black/60 font-semibold text-sm sm:text-base leading-relaxed">
              <p>
                RDR no es un edificio, es un movimiento de fe y amor práctico. Existimos para dar a conocer la palabra, cobijar a las familias de la comunidad y proveer herramientas que ayuden a cada persona a descubrir el propósito que Dios le ha trazado.
              </p>
              <p>
                Caminamos juntos en comunidad, fomentando relaciones honestas y un servicio activo que inspire cambios reales en la sociedad. No importa en qué punto de tu camino te encuentres, en esta familia siempre serás bienvenido.
              </p>
            </div>

            {/* Firma y Cierre con un toque de autor */}
            <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-xl font-black text-black tracking-tight">Ps. Daniel & Ana Gómez</h4>
                <p className="text-xs text-black/40 font-extrabold uppercase tracking-widest mt-1">Pastores Fundadores / RDR</p>
              </div>

              <a
                href="#nosotros"
                className="w-full sm:w-auto bg-white hover:bg-black hover:text-white border border-black/10 text-black font-extrabold px-6 py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest group shadow-sm"
              >
                <span>Nuestra Historia</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
