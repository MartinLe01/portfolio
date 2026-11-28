import type { ComponentPropsWithoutRef } from 'react';
import { type buttonVariation, variationStyles } from '../types';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant: buttonVariation;
  children: React.ReactNode;
};

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`${variationStyles[variant]} inline-flex`}>
      {children}
    </button>
  );
}
