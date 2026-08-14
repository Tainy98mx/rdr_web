/* ========================================================================= */
/* COLUMNA 3: DATOS DE CONTACTO                                              */
/* ========================================================================= */
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/footerData';

export default function FooterContact() {
  return (
    <div className="lg:col-span-3 space-y-4 text-left">
      <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Contáctanos</h4>
      <ul className="space-y-3.5 text-sm font-semibold">
        <li className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#1B428F] shrink-0 mt-0.5" />
          <span className="text-white/60 font-medium">{contactInfo.address}</span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#1B428F] shrink-0" />
          <span className="text-white/60 font-medium">{contactInfo.phone}</span>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#1B428F] shrink-0" />
          <span className="text-white/60 font-medium">{contactInfo.email}</span>
        </li>
      </ul>
    </div>
  );
}
