/* ========================================================================= */
/* PÁGINA: NOSOTROS / QUIÉNES SOMOS                                         */
/* ========================================================================= */
import {
  BookOpen,
  Cross,
  Droplets,
  Flame,
  Globe,
  ShieldCheck,
  Award,
  CheckCircle2,
  ChevronRight,
  UserCheck,
  Send,
  Zap,
  Sparkles,
  Calendar,
  Users,
  MapPin,
  Target,
} from 'lucide-react';
import logoCorona from '@/assets/rdr_logo_corona.svg';
import logoTexto from '@/assets/rdr_logo_texto.svg';
import nosotrosImg from '@/assets/nosotros.jpg';

export default function Nosotros() {
  const historiaHitos = [
    {
      year: 'Marzo 2001',
      title: 'El Primer Inicio: Célula Bíblica',
      desc: 'Esta congregación se inicia en marzo del 2001 como una Célula de Estudios Bíblicos en la sala de una casa con tan solo 5 personas en la Colonia Jardines de Santa Clara, Ecatepec, Estado de México.',
      highlight: '5 personas iniciales',
    },
    {
      year: '25 Febrero 2001',
      title: 'Nacimiento de la Congregación',
      desc: 'Rey de Reyes nace formalmente como congregación en un salón de fiestas allá en la misma colonia recibiendo a 38 personas. Para el 16 de diciembre de ese año, con 75 personas, partimos a un salón rentado.',
      highlight: '38 a 75 congregantes',
    },
    {
      year: '18 Diciembre 2004',
      title: 'Primer Salón a Tiempo Completo',
      desc: 'Rey de Reyes renta su primer salón a tiempo completo en la Colonia La Florida en Ecatepec atendiendo a 180 personas.',
      highlight: '180 congregantes',
    },
    {
      year: '6 Junio 2010',
      title: 'Congregación Hija Bondojito',
      desc: 'Nace como congregación hija REY DE REYES BONDOJITO en la Ciudad de México, extendiendo el Reino de Dios a la capital.',
      highlight: 'Expansión a CDMX',
    },
    {
      year: '4 Septiembre 2011',
      title: 'Sede Propia Melchor Múzquiz',
      desc: 'Partimos a nuestro propio salón en la Colonia Melchor Múzquiz, Ecatepec, a donde actualmente nos encontramos atendiendo semanalmente a más de 1,000 personas cada semana.',
      highlight: '+1,000 personas semanales',
    },
  ];

  const creencías = [
    {
      num: '01',
      title: 'Creemos en la Biblia y en un solo Dios',
      ref: '2 Timoteo 3:16',
      desc: 'Creemos en la Biblia y en un solo Dios que se ha revelado al mundo como Padre en la Creación, como Hijo en la Redención y como Espíritu Santo en la Regeneración. Ellos tres son uno.',
      icon: BookOpen,
    },
    {
      num: '02',
      title: 'La Salvación por Jesucristo',
      ref: 'Efesios 2:5; Hechos 2:38-42',
      desc: 'Creemos en la salvación del alma solo a través del Sacrificio que Cristo Jesús hizo en la Cruz por nuestros pecados.',
      icon: Cross,
    },
    {
      num: '03',
      title: 'El Bautismo en Agua',
      ref: 'Romanos 6:4; Hechos 2:38; 8:16',
      desc: 'Creemos en el Bautismo en Agua en el Nombre de Jesús como mandamiento del Señor.',
      icon: Droplets,
    },
    {
      num: '04',
      title: 'El Bautismo del Espíritu Santo',
      ref: 'Hechos 1:8; Hechos 2:4',
      desc: 'Creemos en el Bautismo del Espíritu Santo que llena con poder y dones a los creyentes.',
      icon: Flame,
    },
    {
      num: '05',
      title: 'Segunda Venida y Vida Eterna',
      ref: 'Daniel 12:1-2; 1 Tesalonicenses 4:13-17',
      desc: 'Creemos en la Segunda venida de Cristo, la Resurrección de los muertos y la Vida eterna.',
      icon: Globe,
    },
    {
      num: '06',
      title: 'Santificación Progresiva',
      ref: 'Hebreos 12:14; Romanos 6:19-22',
      desc: 'Creemos en la santificación progresiva del alma y del cuerpo como fruto del Espíritu.',
      icon: ShieldCheck,
    },
    {
      num: '07',
      title: 'Poder Sanador y Liberación',
      ref: 'Marcos 1:32-34; Juan 14:12; Mateo 12:28',
      desc: 'Creemos en la imposición de manos y el poder sanador y liberador del Reino de Dios.',
      icon: Zap,
    },
    {
      num: '08',
      title: 'Los Cinco Ministerios',
      ref: 'Efesios 4:11-12; Efesios 2:20; Juan 3:3',
      desc: 'Creemos en los Cinco ministerios (Apóstoles, Profetas, Evangelistas, Pastores y Maestros) y el Reino de Dios.',
      icon: Award,
    },
    {
      num: '09',
      title: 'El Arrebatamiento y el Reino Milenial',
      ref: '1 Tes. 4:17; Mateo 24:30; Apocalipsis 20:11-15',
      desc: 'Creemos que el Señor Jesús vendrá por su Iglesia arrebatando a los santos. Y tras 7 años, regresará físicamente con poder y gloria para reinar en el Reino Milenial y cielos nuevos.',
      icon: Sparkles,
    },
  ];

  const pasosGADE = [
    {
      letter: 'G',
      title: 'Ganar',
      desc: 'Evangelizar a las almas compartiendo el amor y la verdad del evangelio de Jesucristo.',
      icon: UserCheck,
    },
    {
      letter: 'A',
      title: 'Afirmar',
      desc: 'Consolidar a cada nuevo creyente en la fe, la doctrina bíblica y la comunión de la iglesia.',
      icon: ShieldCheck,
    },
    {
      letter: 'D',
      title: 'Discipular',
      desc: 'Formar el carácter de Cristo en la vida del creyente a través de la enseñanza profunda.',
      icon: BookOpen,
    },
    {
      letter: 'E',
      title: 'Enviar',
      desc: 'Formar y enviar líderes para cumplir la gran comisión e impactar las naciones.',
      icon: Send,
    },
  ];

  const datosEstadisticos = [
    { number: '2001', label: 'Año de Fundación', icon: Calendar },
    { number: '+1,000', label: 'Congregantes Semanales', icon: Users },
    { number: '2 Sedes', label: 'Ecatepec & Bondojito CDMX', icon: MapPin },
    { number: 'Proceso GADE', label: 'Estrategia Ministerial', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      {/* 1. HERO BANNER PRINCIPAL (Con nosotros.jpg limpia y Logo centrado verticalmente) */}
      <section className="relative min-h-[85vh] bg-linear-to-b from-[#0D1F42]/90 via-[#153574]/85 to-[#0D1F42]/95 text-white flex flex-col justify-center items-center px-4 sm:px-8 py-20 overflow-hidden">
        {/* Imagen de fondo local nosotros.jpg limpia sin efectos raros */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <img
            src={nosotrosImg}
            alt="Iglesia Rey de Reyes"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center my-auto">
          {/* Logo apilado: Corona arriba y Texto abajo centrado a la corona */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <img
              src={logoCorona}
              alt="Corona Rey de Reyes"
              className="h-16 sm:h-20 lg:h-24 w-auto brightness-0 invert"
            />
            <img
              src={logoTexto}
              alt="Rey de Reyes para las Naciones"
              className="h-7 sm:h-9 lg:h-10 w-auto brightness-0 invert"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-none">
            Quiénes Somos
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl text-blue-100 font-medium leading-relaxed mb-12">
            Una congregación dedicada a evangelizar, hacer discípulos y extender el Reino de Dios en México y las naciones con amor, fe y demostración de poder.
          </p>

          {/* Tarjetas de Datos Estadísticos (Relleno Formal de Elementos) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {datosEstadisticos.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center"
                >
                  <StatIcon className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-200">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. NUESTRA HISTORIA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F42] tracking-tight">
            Nuestra Historia
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto mt-3 text-base sm:text-lg">
            De una célula en la sala de una casa con 5 personas a un ministerio que atiende semanalmente a más de 1,000 almas.
          </p>
        </div>

        {/* Línea de tiempo vertical limpia */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto mb-16">
          {historiaHitos.map((hito, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start gap-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1B428F] text-white flex items-center justify-center font-black text-sm">
                {idx + 1}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1B428F]">
                    {hito.year}
                  </span>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
                    {hito.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F42] mb-2">{hito.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  {hito.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque Pastoral & Cobertura Espiritual */}
        <div className="bg-linear-to-r from-[#1B428F] via-[#153574] to-[#0D1F42] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">
              Pastor Marco Antonio Sánchez & Elizabeth Losada
            </h3>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-medium mb-8">
              El Pastor Marco Antonio Sánchez está bajo la paternidad y autoridad espiritual del Pastor Francis Frangipane (www.frangipane.org) y está asociado a Advancing Church Ministries Association (ACMA, por sus siglas en inglés) con sede en Cedar Rapids, Iowa. Estados Unidos. El Pastor está casado con Elizabeth Losada y del fruto de su amor han nacido tres hijos: Jeremy, Caleb y Kaitlin.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold text-blue-100">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Cobertura Pastor Francis Frangipane
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Asociados a ACMA (Cedar Rapids, Iowa, EE.UU.)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUESTRA DECLARACIÓN DE FE */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F42] tracking-tight">
              Nuestra Declaración de Fe
            </h2>
            <p className="text-gray-600 font-medium max-w-2xl mx-auto mt-3 text-base sm:text-lg">
              Los 9 pilares doctrinales en los que cimentamos nuestra fe y ministerio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creencías.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#1B428F]/40">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#1B428F]/10 text-[#1B428F] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#0D1F42] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-medium leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#1B428F]">
                    <span>Cita Bíblica:</span>
                    <span className="bg-blue-100 px-2.5 py-1 rounded-md text-[#1B428F]">
                      {item.ref}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LA MISIÓN Y LA VISIÓN */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloque Misión */}
          <div className="bg-linear-to-br from-[#1B428F] to-[#153574] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">La Misión de “Rey de Reyes”</h3>
              <blockquote className="text-lg sm:text-xl font-extrabold leading-relaxed text-white mb-6 italic bg-white/10 p-5 rounded-2xl border-l-4 border-yellow-400">
                “Nuestra misión es EVANGELIZAR Y HACER DISCÍPULOS de Jesucristo a todas las Naciones”
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs font-bold text-blue-200">
              <span>Fundamento Bíblico</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white font-extrabold">
                Mateo 28:19-20
              </span>
            </div>
          </div>

          {/* Bloque Visión */}
          <div className="bg-linear-to-br from-[#0D1F42] to-[#153574] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">La Visión de “Rey de Reyes”</h3>
              <blockquote className="text-lg sm:text-xl font-extrabold leading-relaxed text-white mb-6 italic bg-white/10 p-5 rounded-2xl border-l-4 border-blue-400">
                "Nuestra Visión es llegar a ser como Cristo Jesús, en carácter y en demostración de Poder."
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs font-bold text-blue-200">
              <span>Fundamento Bíblico</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white font-extrabold">
                Mateo 11:29; Juan 14:12
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EL PROCESO GADE */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F42] tracking-tight">
              El Proceso GADE en “Rey de Reyes”
            </h2>
            <p className="text-gray-600 font-medium max-w-2xl mx-auto mt-3 text-base sm:text-lg">
              La estrategia que Dios le ha dado a la Iglesia para cumplir Su Visión en la tierra determinado por 4 pasos:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasosGADE.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-3xl p-6 border border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Letra Insignia GADE */}
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1B428F] to-[#0D1F42] text-white flex items-center justify-center font-black text-2xl mb-6 shadow-md">
                      {step.letter}
                    </div>

                    <h3 className="text-xl font-black text-[#0D1F42] mb-3 flex items-center gap-2">
                      <span>{step.title}</span>
                      <ChevronRight className="w-5 h-5 text-[#1B428F]" />
                    </h3>

                    <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#1B428F]">
                    <span>Paso {idx + 1} de 4</span>
                    <StepIcon className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
