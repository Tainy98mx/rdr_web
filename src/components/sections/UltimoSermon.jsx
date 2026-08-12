/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { Play, Headphones, BookOpen, Calendar, User, Tv } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

export default function UltimoSermon() {
  return (
    /* ===================================================================== */
    /* 2. CONTENEDOR EN MODO OSCURO INMERSIVO (Negro Puro)                    */
    /* ===================================================================== */
    <section className="py-32 bg-black text-white overflow-hidden w-full font-sans border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Encabezado asimétrico */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="text-left">
            <p className="text-xs font-bold text-[#1B428F] uppercase tracking-widest mb-3">
              — Centro de Medios
            </p>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-[0.98]">
              Últimas prédicas <br />
              & enseñanzas.
            </h2>
          </div>
          <p className="text-white/60 font-semibold text-base sm:text-lg max-w-sm text-left leading-relaxed">
            Accede de forma directa a nuestras predicaciones. Lleva la palabra contigo a donde vayas a través de audio y video.
          </p>
        </div>

        {/* Estructura dividida de 12 columnas: 7 reproductor, 5 notas del mensaje */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ===================================================================== */}
          {/* 3. COLUMNA REPRODUCTOR MULTIMEDIA (7 Columnas)                        */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative group w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-black border border-white/10">
              
              {/* Imagen de Fondo */}
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&q=80&w=1200" 
                alt="Predicación Dominical" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-103 transition-transform duration-700"
              />

              {/* Degradado superpuesto oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Botón de reproducción premium flotante */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-24 h-24 bg-white text-black hover:bg-[#1B428F] hover:text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-115 group/btn"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </a>
              </div>

              {/* Barra de progreso decorativa & Info overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20 text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md">
                  <Tv className="w-3.5 h-3.5 text-white" />
                  <span>Serie: Caminando en Fe</span>
                </div>
                <h3 className="text-xl sm:text-3.5xl font-black text-white leading-tight tracking-tight">
                  "El Poder de la Perseverancia"
                </h3>
                
                {/* Adorno de reproductor de música/streaming (Tricolor) */}
                <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#1B428F]" />
                </div>
              </div>

            </div>
          </div>

          {/* ===================================================================== */}
          {/* 4. COLUMNA NOTAS DEL MENSAJE (5 Columnas)                              */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 text-left">
            
            {/* Detalles del sermón */}
            <div className="space-y-6">
              
              {/* Badges de metadatos */}
              <div className="flex flex-wrap gap-3 text-[10px] font-extrabold uppercase tracking-widest text-white/50">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                  <User className="w-3.5 h-3.5 text-[#1B428F]" />
                  <span>Ps. Daniel Gómez</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-[#1B428F]" />
                  <span>Domingo Anterior</span>
                </span>
              </div>

              <div className="space-y-4">
                {/* Referencia Bíblica */}
                <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <BookOpen className="w-5 h-5 text-[#1B428F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-white/55 uppercase tracking-wider">Pasaje de Estudio</h4>
                    <p className="text-base font-extrabold text-white mt-0.5">
                      Filipenses 4:13 & Josué 1:9
                    </p>
                  </div>
                </div>

                {/* Ideas de Predicación */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4 backdrop-blur-xs">
                  <h4 className="text-[10px] font-extrabold text-white/70 uppercase tracking-wider">Puntos de Enseñanza</h4>
                  <ul className="text-sm text-white/70 font-semibold space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#1B428F] mt-1.5 shrink-0" />
                      <span>Cómo enfrentar los momentos de incertidumbre con firmeza espiritual.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#1B428F] mt-1.5 shrink-0" />
                      <span>El poder de la constancia y la intercesión comunitaria.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#1B428F] mt-1.5 shrink-0" />
                      <span>Descubrir la paz que sobrepasa todo entendimiento en la oración.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Acciones de escucha (Tricolor estricto: Eliminado Rojo/Verde) */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#1B428F] hover:bg-white hover:text-black text-white font-extrabold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest shadow-lg shadow-black/20"
              >
                <FaYoutube className="w-4 h-4 text-white" />
                <span>Ver en YouTube</span>
              </a>

              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-black hover:text-white text-black border border-white/10 font-extrabold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest"
              >
                <Headphones className="w-4 h-4 text-[#1B428F]" />
                <span>Escuchar Podcast</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
