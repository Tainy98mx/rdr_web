/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

/* ========================================================================= */
/* VARIANTES ESTILIZADAS Y LIGERAS (ESTÁNDAR RDR)                            */
/* ========================================================================= */
const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl text-sm font-semibold transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_.material-symbols-outlined]:text-xl [&_.material-symbols-outlined]:shrink-0',
  {
    variants: {
      variant: {
        /* Primario Oficial RDR (Azul) */
        default: 'bg-[#1B428F] text-white shadow-sm hover:bg-[#1B428F]/90 active:scale-[0.98]',

        /* Destacado Píldora (Donar / Botón Blanco) */
        pill: 'bg-white text-[#1B428F] rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg active:scale-[0.98]',

        /* Secundario Glassmorphism (Para Hero sobre video) */
        glass:
          'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-sm active:scale-[0.98]',

        /* Secundario Estándar Shadcn */
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]',

        /* Borde Limpio (Outline) */
        outline:
          'border border-[#1B428F]/30 text-[#1B428F] bg-transparent hover:bg-[#1B428F] hover:text-white',

        /* Sutil Transparente (Ghost) */
        ghost: 'hover:bg-white/10 active:bg-white/20 text-current',

        /* Destructive / Peligro */
        destructive: 'bg-red-600 text-white shadow-sm hover:bg-red-700 active:scale-[0.98]',

        /* Enlace simple */
        link: 'text-[#1B428F] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 px-2.5 text-xs rounded-lg',
        sm: 'h-8 px-3 text-xs rounded-lg',
        lg: 'h-12 px-6 text-sm rounded-xl' /* Tamaño ideal para Hero */,
        icon: 'size-10 rounded-lg p-0',
        'icon-xs': 'size-6 rounded-md p-0',
        'icon-sm': 'size-7 rounded-md p-0',
        'icon-lg': 'size-11 rounded-xl p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant = 'default', size = 'default', asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
