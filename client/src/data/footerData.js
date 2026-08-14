/* ========================================================================= */
/* DATOS ESTÁTICOS DEL FOOTER                                                */
/* ========================================================================= */
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export const footerSocialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
];

export const quickLinks = [
  { label: 'Nosotros', href: '#' },
  { label: 'Visítanos', href: '#' },
  { label: 'Crecimiento', href: '#' },
  { label: 'Comunidad RDR', href: '#' },
  { label: 'Eventos', href: '#' },
];

export const contactInfo = {
  address: 'Av. Principal #123, Central, Ciudad',
  phone: '+1 (234) 567-890',
  email: 'contacto@iglesiardr.org',
};
