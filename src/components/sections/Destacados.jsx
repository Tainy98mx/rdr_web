/* ========================================================================= */
/* 1. IMPORTACIONES Y DEPENDENCIAS                                           */
/* ========================================================================= */
import { useState } from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Destacados() {
  const [activeTab, setActiveTab] = useState('todas');

  /* ======================================================================= */
  /* 2. BASE DE DATOS LOCAL DE SEDES Y ACTIVIDADES                          */
  /* ======================================================================= */
  const sedes = [
    {
      id: 1,
      nombre: 'Sede Principal Central',
      categoria: 'central',
      ubicacion: 'Av. Principal #123, Central',
      horario: 'Domingos 10:00 AM & 12:00 PM',
      imagen: 'https://images.unsplash.com/photo-1548625361-185e8a5b2875?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      nombre: 'Sede Norte',
      categoria: 'regionales',
      ubicacion: 'Calle Norte #45, Zona Norte',
      horario: 'Domingos 10:00 AM',
      imagen: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      nombre: 'Reunión de Jóvenes',
      categoria: 'ministerios',
      ubicacion: 'Auditorio Central RDR',
      horario: 'Sábados 5:00 PM',
      imagen: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      nombre: 'Escuela de Padres',
      categoria: 'ministerios',
      ubicacion: 'Salón de Capacitación',
      horario: 'Miércoles 7:00 PM',
      imagen: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const filteredSedes = activeTab === 'todas' 
    ? sedes 
    : sedes.filter(s => s.categoria === activeTab);

  return (
    /* ===================================================================== */
    /* 3. ESTRUCTURA PRINCIPAL DE LA SECCIÓN (Esquema Tricolor)              */
    /* ===================================================================== */
    <section className="py-32 bg-white w-full border-b border-black/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Encabezado asimétrico y alineación limpia */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <p className="text-xs font-bold text-[#1B428F] uppercase tracking-widest mb-3">
              — Dónde Encontrarnos
            </p>
            <h2 className="text-4xl sm:text-5.5xl font-black text-black tracking-tighter leading-tight">
              Sedes y Actividades
            </h2>
          </div>

          {/* Filtros por pestaña de cápsula minimalista (Vanguardia Tricolor) */}
          <div className="flex flex-wrap gap-1.5 bg-black/5 border border-black/10 p-1.5 rounded-2xl self-start lg:self-auto shadow-sm">
            {[
              { id: 'todas', label: 'Ver Todas' },
              { id: 'central', label: 'Central' },
              { id: 'regionales', label: 'Sedes' },
              { id: 'ministerios', label: 'Reuniones' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-md'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 4. REJILLA DE TARJETAS DE IMPACTO VISUAL COMPLETO                     */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredSedes.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-black/5 flex flex-col justify-end"
            >
              {/* Imagen de Fondo a Pantalla Completa */}
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Degradado superpuesto negro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 z-10" />

              {/* Contenedor de Información Flotante */}
              <div className="p-8 relative z-20 space-y-4 text-left">
                
                {/* Info Básica */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight">
                    {item.nombre}
                  </h3>
                  
                  {/* Detalles en blanco/gris translúcido */}
                  <div className="space-y-1.5 text-xs font-semibold text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#1B428F] shrink-0" />
                      <span>{item.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1B428F] shrink-0" />
                      <span>{item.horario}</span>
                    </div>
                  </div>
                </div>

                {/* Enlace de Acción flotante */}
                <a 
                  href="#visitanos" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-white/85 transition-colors pt-4 border-t border-white/10 w-full"
                >
                  <span>Cómo llegar</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}