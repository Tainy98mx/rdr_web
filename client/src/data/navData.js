/* ========================================================================= */
/* DATOS ESTÁTICOS: ESTRUCTURA DE NAVEGACIÓN Y REDES SOCIALES                */
/* ========================================================================= */
import { FaYoutube, FaFacebookF, FaInstagram, FaTiktok, FaSoundcloud } from 'react-icons/fa';

export const menuStructure = [
  {
    title: 'Nosotros',
    subitems: ['Quiénes Somos'],
  },
  {
    title: 'Visítanos',
    subitems: [
      'Sedes y Horarios',
      'Escríbenos',
      'Teléfonos',
      'Dónde Escucharnos',
      'Redes Sociales',
    ],
  },
  {
    title: 'Crecimiento',
    subitems: ['Conoce a Dios', 'Retiro Espiritual', 'Discipulado', 'Recursos Espirituales'],
  },
  {
    title: 'Comunidad RDR',
    subitems: ['Sé un Servidor', 'Formularios', 'Escuela de Música', 'Escuela de Padres e Hijos'],
  },
  {
    title: 'Eventos',
    subitems: ['Al Día', 'Invasión del Amor', 'Próximos Eventos'],
  },
];

export const socialLinks = [
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: FaSoundcloud, href: 'https://soundcloud.com', label: 'SoundCloud' },
];
