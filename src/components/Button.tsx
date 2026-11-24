import type { ComponentPropsWithoutRef } from 'react';

type buttonVariation = 'primary' | 'secondary' | 'ghost';

const variationStyles: Record<buttonVariation, string> = {
  primary:
    'bg-blueberry text-cream border-3 border-ink shadow-neo-sm transition ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
  secondary:
    'bg-cream text-ink border-3 border-ink shadow-neo-sm transition ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
  ghost:
    'bg-cream-tinted border-3 border-cream-tinted transition ease-in-out hover:border-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-ink hover:shadow-neo-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
};

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant: buttonVariation;
  children: React.ReactNode;
};

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${variationStyles[variant]} px-6 py-3 text-base inline-flex`}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant: buttonVariation;
  children: React.ReactNode;
};

export function ButtonLink({ children, variant, ...rest }: ButtonLinkProps) {
  return (
    <a
      {...rest}
      className={`${variationStyles[variant]} px-6 py-3 text-base inline-flex`}
    >
      {children}
    </a>
  );
}
