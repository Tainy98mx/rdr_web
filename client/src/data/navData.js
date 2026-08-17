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

/* Helper para convertir texto a slug URL limpio (ej. "Comunidad RDR" -> "comunidad-rdr") */
export function getSlug(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/* Helper para obtener la categoría padre activa según el hash actual */
export function getActiveCategory(currentHash) {
  if (!currentHash || currentHash === '#' || currentHash === '#donar' || currentHash === '#hero') {
    return null;
  }
  const cleanHash = currentHash.replace('#', '');

  for (const menu of menuStructure) {
    const parentSlug = getSlug(menu.title);
    if (cleanHash === parentSlug) return menu.title;

    for (const subitem of menu.subitems) {
      const subSlug = getSlug(subitem);
      if (cleanHash === subSlug) return menu.title;
    }
  }

  return null;
}
