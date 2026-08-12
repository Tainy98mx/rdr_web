/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { Compass, Users, MessageSquare, Heart, ArrowRight } from 'lucide-react';

export default function PasosSiguientes() {
  /* ======================================================================= */
  /* 2. CONFIGURACIÓN DE PASOS / TARJETAS                                    */
  /* ======================================================================= */
  const pasos = [
    {
      titulo: 'Soy Nuevo',
      descripcion: '¿Primera vez aquí? Permítenos guiarte. Queremos que te sientas como en casa desde el primer minuto.',
      icono: Compass,
      enlace: '#visitanos',
      numero: '01'
    },
    {
      titulo: 'Grupos de Conexión',
      descripcion: 'Haz amigos, comparte testimonios y profundiza en tu fe compartiendo en los hogares en grupos pequeños.',
      icono: Users,
      enlace: '#crecimiento',
      numero: '02'
    },
    {
      titulo: 'Petición de Oración',
      descripcion: '¿Necesitas apoyo espiritual? Envíanos tu petición y nuestro equipo estará intercediendo por ti.',
      icono: MessageSquare,
      enlace: '#crecimiento',
      numero: '03'
    },
    {
      titulo: 'Sé un Servidor',
      descripcion: 'Haz parte activa del cambio. Pon tus talentos y pasión al servicio de Dios y del prójimo.',
      icono: Heart,
      enlace: '#comunidad',
      numero: '04'
    }
  ];

  return (
    /* ===================================================================== */
    /* 3. ESTRUCTURA PRINCIPAL DE LA SECCIÓN (Esquema Tricolor)              */
    /* ===================================================================== */
    <section className="py-32 bg-white w-full border-b border-black/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Encabezado asimétrico limpio y asombroso */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl text-left">
            <p className="text-xs font-bold text-[#1B428F] uppercase tracking-widest mb-3">
              — Sé parte activa
            </p>
            <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tighter leading-[0.98]">
              Tus siguientes pasos <br />
              comienzan hoy.
            </h2>
          </div>
          
          <p className="text-black/60 font-semibold text-base sm:text-lg max-w-sm text-left leading-relaxed">
            No fuimos creados para caminar solos. Encuentra la forma idónea de conectarte hoy mismo con nuestra familia RDR.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 4. REJILLA DE TARJETAS MINIMALISTAS CON ESQUEMA TRICOLOR              */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pasos.map((paso, index) => {
            const Icon = paso.icono;
            return (
              <a 
                key={index}
                href={paso.enlace}
                className="group flex flex-col justify-between p-8 sm:p-10 bg-white rounded-[2.5rem] border border-black/10 shadow-sm hover:border-[#1B428F]/40 hover:shadow-2xl hover:shadow-[#1B428F]/5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Indicador de número en la esquina (moderno) */}
                <span className="absolute top-8 right-10 text-xs font-black text-black/10 group-hover:text-[#1B428F]/30 transition-colors">
                  {paso.numero}
                </span>

                <div className="space-y-8">
                  {/* Icono minimalista */}
                  <div className="w-12 h-12 bg-black/5 text-black group-hover:bg-[#1B428F] group-hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Textos alineados a la izquierda */}
                  <div className="space-y-3 text-left">
                    <h3 className="text-xl font-extrabold text-black group-hover:text-[#1B428F] transition-colors">
                      {paso.titulo}
                    </h3>
                    <p className="text-sm text-black/50 font-semibold leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>

                {/* Llamado a la acción minimalista */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-black mt-10 pt-4 border-t border-black/5 group-hover:text-[#1B428F] group-hover:gap-2.5 transition-all">
                  <span>Conectar ahora</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
