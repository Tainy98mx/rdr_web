import { cn } from '@/lib/utils';

export function AuroraText({ className, children, ...props }) {
  return (
    <span className={cn('relative inline-block aurora-text transform-gpu', className)} {...props}>
      {children}
    </span>
  );
}
